// Constantes configurables
const CONFIG = {
  BACK_TO_TOP_THRESHOLD: 300,
};

// Utilidad para debounce
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
    // Deshabilitar animación si el usuario prefiere motion reducida
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Comprobar visibilidad para pausar
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
      newsContainer.style.animation = "none"; // Deshabilitar animación
    }
  }

  // Enlace activo del menú
  document.querySelectorAll(".hub-sidebar a.active").forEach((link) => {
    link.setAttribute("aria-current", "page");
  });

  // Menú hamburguesa
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".hub-sidebar");
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("show");
      const isExpanded = sidebar.classList.contains("show");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // Lazy loading de imágenes
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (!img.src) {
            img.src = img.dataset.src || img.getAttribute("src");
          }
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
              console.warn(`Error cargando imagen: ${img.src}`);
              img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="#e2e8f0"/></svg>';
              img.alt = "Sin imagen";
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