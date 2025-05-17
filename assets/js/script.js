const CONFIG = {
  BACK_TO_TOP_THRESHOLD: 300,
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

document.addEventListener("DOMContentLoaded", () => {
  // Botón "Volver Arriba"
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const toggleBackToTop = debounce(() => {
      backToTop.classList.toggle(
        "show",
        window.scrollY > CONFIG.BACK_TO_TOP_THRESHOLD
      );
    }, 100);
    window.addEventListener("scroll", toggleBackToTop);
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Animación de la News Bar
  const newsContainer = document.querySelector(".news-container");
  if (newsContainer) {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          newsContainer.style.animationPlayState = entry.isIntersecting
            ? "running"
            : "paused";
        },
        { threshold: 0 }
      );
      observer.observe(newsContainer);
    } else {
      newsContainer.style.animation = "none";
    }
  }

  // Botón de pausa para News Bar
  const newsPause = document.querySelector(".news-pause");
  if (newsPause && newsContainer) {
    newsPause.addEventListener("click", () => {
      const newsBar = document.querySelector(".news-bar");
      newsBar.classList.toggle("paused");
      newsContainer.style.animationPlayState = newsBar.classList.contains(
        "paused"
      )
        ? "paused"
        : "running";
      newsPause.setAttribute(
        "aria-label",
        newsBar.classList.contains("paused")
          ? "Reanudar animación de noticias"
          : "Pausar animación de noticias"
      );
    });
  }

  // Enlace activo del menú
  document.querySelectorAll(".hub-sidebar a.active").forEach((link) => {
    link.setAttribute("aria-current", "page");
  });

  // Manejo de <details> para accesibilidad
  document.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector("summary");
    if (summary) {
      summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      details.addEventListener("toggle", () => {
        summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      });
    }
  });

  // Lazy loading de imágenes
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src || img.getAttribute("src");
          if (!src) {
            console.warn(`Imagen sin src o dataset.src:`, img);
            img.src = "{{ '/assets/images/placeholder.webp' | relative_url }}";
            img.alt = "Imagen no disponible";
            img.classList.add("image-placeholder", "loaded");
            img.removeAttribute("loading");
            observer.unobserve(img);
            return;
          }
          img.src = src;
          img.addEventListener(
            "load",
            () => {
              img.classList.add("loaded");
            },
            { once: true }
          );
          img.addEventListener(
            "error",
            () => {
              console.warn(`Error cargando imagen: ${img.src}`, img);
              img.src =
                "{{ '/assets/images/placeholder.webp' | relative_url }}";
              img.alt = "Imagen no disponible";
              img.classList.add("image-placeholder", "loaded");
              img.removeAttribute("loading");
            },
            { once: true }
          );
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: "100px" }
  );
  lazyImages.forEach((img) => observer.observe(img));

  // Imágenes dentro de <details>
  document.querySelectorAll("details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        const imagesInside = details.querySelectorAll('img[loading="lazy"]');
        imagesInside.forEach((img) => {
          if (!img.classList.contains("loaded")) {
            observer.observe(img);
          }
        });
      }
    });
  });
});
