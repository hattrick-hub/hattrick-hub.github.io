// Constantes configurables
const CONFIG = {
  BACK_TO_TOP_THRESHOLD: 300,
  NEWS_SCROLL_SPEED: 1.5,
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
    // Optimizar scroll con debounce
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
    let scrollAmount = 0;
    let scrollSpeed = CONFIG.NEWS_SCROLL_SPEED;
    let isPaused = false;

    // Comprobar visibilidad para pausar la animación
    const observer = new IntersectionObserver(
      ([entry]) => {
        isPaused = !entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(newsContainer);

    const scrollNews = () => {
      if (!isPaused) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= newsContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        newsContainer.style.transform = `translateX(-${scrollAmount}px)`;
      }
      requestAnimationFrame(scrollNews);
    };

    scrollNews();

    newsContainer.addEventListener("mouseenter", () => {
      isPaused = true;
    });

    newsContainer.addEventListener("mouseleave", () => {
      isPaused = false;
    });
  }

  // Enlace activo del menú
  const currentPath = window.location.pathname.split("?")[0].replace(/\/$/, "");
  document.querySelectorAll(".hub-sidebar a").forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname
      .split("?")[0]
      .replace(/\/$/, "");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
