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
    // Mostrar/ocultar botón al hacer scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    // Desplazamiento suave al hacer clic
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
      summary.setAttribute("aria-expanded", details.open);
      details.addEventListener("toggle", () => {
        summary.setAttribute("aria-expanded", details.open);
      });
    }
  });

  // IntersectionObserver para newsContainer y lazyImages
  const initIntersectionObservers = () => {
    // Animación de la News Bar
    const newsContainer = document.querySelector(".news-container");
    if (
      newsContainer &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          newsContainer.style.animationPlayState = entry.isIntersecting
            ? "running"
            : "paused";
        },
        { threshold: 0 }
      );
      observer.observe(newsContainer);
    } else if (newsContainer) {
      newsContainer.style.animation = "none";
    }

    // Lazy loading de imágenes
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src || img.getAttribute("src");
            if (!src) {
              console.warn(`Imagen sin src o dataset.src en ${img.outerHTML}`);
              img.src = window.HattrickHub.placeholderImage;
              img.alt = img.alt || "Imagen no disponible";
              img.classList.add("image-placeholder", "loaded");
              img.removeAttribute("loading");
              observer.unobserve(img);
              return;
            }
            img.src = src;
            img.addEventListener("load", () => img.classList.add("loaded"), {
              once: true,
            });
            img.addEventListener(
              "error",
              () => {
                console.warn(
                  `Error cargando imagen: ${src} en ${img.outerHTML}`
                );
                img.src = window.HattrickHub.placeholderImage;
                img.alt = img.alt || "Imagen no disponible";
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
    lazyImages.forEach((img) => imageObserver.observe(img));

    // Imágenes dentro de <details>
    document.querySelectorAll("details").forEach((details) => {
      details.addEventListener("toggle", () => {
        const images = details.querySelectorAll(
          'img[loading="lazy"]:not(.loaded)'
        );
        images.forEach((img) => {
          if (details.open) {
            imageObserver.observe(img);
          } else {
            imageObserver.unobserve(img);
          }
        });
      });
    });
  };

  // Cargar IntersectionObserver
  if ("IntersectionObserver" in window) {
    initIntersectionObservers();
  } else {
    const script = document.createElement("script");
    script.src =
      "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver";
    script.onload = initIntersectionObservers;
    document.head.appendChild(script);
  }
});
