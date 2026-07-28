// Debounce utility
const debounce = (func, wait) => {
  let timeout;
  const debounced = (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
  debounced.cancel = () => clearTimeout(timeout);
  return debounced;
};

document.addEventListener("DOMContentLoaded", () => {
  // Activar animaciones SOLO si JS carga correctamente
  document.documentElement.classList.add("js-animations");
  document.documentElement.classList.remove("no-js");

  // =========================================================
  // TABLE WRAPPER (overflow: hidden + border-radius en Safari)
  // =========================================================
  document.querySelectorAll(".content table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-wrapper")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "table-wrapper";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // =========================================================
  // ANIMACIONES DE SCROLL (IntersectionObserver)
  // =========================================================
  const animatedElements = document.querySelectorAll(".feature-card, .animate-on-scroll");

  if (animatedElements.length > 0 && "IntersectionObserver" in window) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            animationObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );
    animatedElements.forEach((el) => animationObserver.observe(el));
  } else {
    animatedElements.forEach((el) => el.classList.add("is-visible"));
  }

  // =========================================================
  // Back to Top Button
  // =========================================================
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.hidden = false;
    const handleScroll = debounce(() => {
      backToTop.classList.toggle("show", window.scrollY > 300);
    }, 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // =========================================================
  // Navbar Menu Toggle
  // =========================================================
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector("#navbarMenu");
  if (burger && menu) {
    burger.setAttribute("aria-controls", "navbarMenu");

    const isMobile = () => window.innerWidth < 768;

    const updateInert = () => {
      if (isMobile()) {
        menu.classList.contains("is-active")
          ? menu.removeAttribute("inert")
          : menu.setAttribute("inert", "");
      } else {
        menu.removeAttribute("inert");
      }
    };

    const closeMenu = (focusTarget = burger) => {
      menu.classList.remove("is-active");
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
      updateInert();
      if (focusTarget) focusTarget.focus();
    };

    const openMenu = () => {
      menu.classList.add("is-active");
      burger.classList.add("is-active");
      burger.setAttribute("aria-expanded", "true");
      updateInert();
      menu.querySelector(".navbar-item")?.focus();
    };

    // Estado inicial
    updateInert();

    burger.addEventListener("click", () => {
      menu.classList.contains("is-active") ? closeMenu() : openMenu();
    });

    document.querySelectorAll(".navbar-item").forEach((item) => {
      item.addEventListener("click", () => {
        closeMenu();
        const mainHeading = document.querySelector("#main-content h1");
        if (mainHeading) {
          mainHeading.setAttribute("tabindex", "-1");
          mainHeading.focus({ preventScroll: true });
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-active")) {
        closeMenu();
      }
    });

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    desktopQuery.addEventListener("change", (e) => {
      if (e.matches && menu.classList.contains("is-active")) {
        closeMenu(null);
      }
      updateInert();
    });

    const handleMenuScroll = debounce(() => {
      if (menu.classList.contains("is-active") && isMobile()) {
        closeMenu(null);
      }
    }, 50);
    window.addEventListener("scroll", handleMenuScroll, { passive: true });
  }

  // =========================================================
  // Carousel
  // =========================================================
  const carousel = document.querySelector(".carousel");

  if (carousel) {
    const carouselInner = carousel.querySelector(".carousel-inner");
    const prevBtn = carousel.querySelector(".carousel-control.prev");
    const nextBtn = carousel.querySelector(".carousel-control.next");
    const pauseBtn = carousel.querySelector(".carousel-pause");
    const indicators = carousel.querySelectorAll(".indicator");
    const items = carouselInner?.querySelectorAll(".carousel-item");

    if (carouselInner && items && items.length > 0) {
      const hasNavigation = items.length > 1 && prevBtn && nextBtn;

      let currentIndex = 0;
      const totalItems = items.length;
      let interval;
      let isPaused = false;

      // ⚠️ AJUSTA ESTO si tu CSS no soporta 2 slides visibles
      function getVisibleSlides() {
        return window.innerWidth >= 992 ? 2 : 1;
      }

      function updateSlidesVisibility() {
        const visible = getVisibleSlides();
        items.forEach((item, i) => {
          const isVisible = i >= currentIndex && i < currentIndex + visible;
          if (isVisible) {
            item.removeAttribute("aria-hidden");
            item.removeAttribute("inert");
            item.removeAttribute("tabindex");
          } else {
            item.setAttribute("aria-hidden", "true");
            item.setAttribute("inert", "");      // Bloquea foco y lectura
            item.setAttribute("tabindex", "-1"); // Fallback para navegadores sin inert
          }
        });
      }

      function announceSlide() {
        const visibleSlides = getVisibleSlides();
        const maxIndex = Math.max(0, totalItems - visibleSlides);
        let liveRegion = carousel.querySelector('.carousel-live-region');
        if (!liveRegion) {
          liveRegion = document.createElement('div');
          liveRegion.className = 'carousel-live-region visually-hidden';
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('aria-atomic', 'true');
          carousel.appendChild(liveRegion);
        }
        liveRegion.textContent = `Mostrando diapositiva ${currentIndex + 1} de ${maxIndex + 1}`;
      }

      function showSlide(index) {
        const visibleSlides = getVisibleSlides();
        const maxIndex = Math.max(0, totalItems - visibleSlides);

        if (index > maxIndex) {
          currentIndex = 0;
        } else if (index < 0) {
          currentIndex = maxIndex;
        } else {
          currentIndex = index;
        }

        const offset = -(currentIndex * (100 / visibleSlides));
        carouselInner.style.transform = `translateX(${offset}%)`;
        updateIndicators();
        updateSlidesVisibility();
        announceSlide();
      }

      function updateIndicators() {
        const visibleSlides = getVisibleSlides();
        const maxIndex = Math.max(0, totalItems - visibleSlides);
        indicators.forEach((indicator, i) => {
          const isActive = i === Math.min(currentIndex, maxIndex);
          indicator.classList.toggle("active", isActive);
          indicator.setAttribute("aria-current", isActive ? "true" : "false");
        });
      }

      function nextSlide() { showSlide(currentIndex + 1); }
      function prevSlide() { showSlide(currentIndex - 1); }

      function startAutoPlay() {
        if (totalItems > getVisibleSlides() && !isPaused && hasNavigation) {
          interval = setInterval(nextSlide, 5000);
        }
      }
      function stopAutoPlay() { clearInterval(interval); }

      if (hasNavigation) {
        prevBtn.addEventListener("click", () => {
          stopAutoPlay(); prevSlide(); startAutoPlay();
        });
        nextBtn.addEventListener("click", () => {
          stopAutoPlay(); nextSlide(); startAutoPlay();
        });

        if (pauseBtn) {
          pauseBtn.setAttribute("aria-pressed", "false");
          pauseBtn.addEventListener("click", () => {
            const useEl = pauseBtn.querySelector("use");
            const vh = pauseBtn.querySelector(".visually-hidden");
            if (isPaused) {
              startAutoPlay();
              useEl?.setAttribute("href", "#pause");
              pauseBtn.setAttribute("aria-label", "Pausar el carrusel");
              pauseBtn.setAttribute("aria-pressed", "false");
              if (vh) vh.textContent = "Pausar";
              isPaused = false;
            } else {
              stopAutoPlay();
              useEl?.setAttribute("href", "#play");
              pauseBtn.setAttribute("aria-label", "Reanudar el carrusel");
              pauseBtn.setAttribute("aria-pressed", "true");
              if (vh) vh.textContent = "Reanudar";
              isPaused = true;
            }
          });
        }

        indicators.forEach((indicator, i) => {
          indicator.addEventListener("click", () => {
            stopAutoPlay();
            showSlide(i);
            startAutoPlay();
            items[i]?.focus(); // Mueve foco al slide seleccionado
          });
        });

        // Touch mejorado: distingue horizontal vs vertical
        let startX, startY, isDragging = false;
        carousel.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          isDragging = true;
          stopAutoPlay();
        }, { passive: true });

        carousel.addEventListener("touchmove", (e) => {
          if (!isDragging) return;
          const x = e.touches[0].clientX;
          const y = e.touches[0].clientY;
          const diffX = startX - x;
          const diffY = startY - y;

          // Solo actuar si el swipe es más horizontal que vertical
          if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            diffX > 0 ? nextSlide() : prevSlide();
            isDragging = false;
          }
        }, { passive: true });

        carousel.addEventListener("touchend", () => {
          isDragging = false;
          startAutoPlay();
        });

        // Keyboard
        carousel.addEventListener("keydown", (e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            stopAutoPlay(); prevSlide(); startAutoPlay();
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            stopAutoPlay(); nextSlide(); startAutoPlay();
          }
        });

        carousel.addEventListener("focusin", stopAutoPlay);
        carousel.addEventListener("focusout", startAutoPlay);

        // Page Visibility
        document.addEventListener("visibilitychange", () => {
          document.hidden ? stopAutoPlay() : startAutoPlay();
        });

        const handleResize = debounce(() => showSlide(currentIndex), 100);
        window.addEventListener("resize", handleResize);

        startAutoPlay();
      }

      showSlide(0);
    }
  }
  // =========================================================
  // Fallback de imágenes en cards
  // =========================================================
  document.querySelectorAll(".card-image-wrapper img").forEach((img) => {
    const activatePlaceholder = () => {
      img.hidden = true;
      const wrapper = img.closest(".card-image-wrapper, .hero");
      const placeholder = wrapper?.querySelector(".img-placeholder");
      if (placeholder) {
        placeholder.hidden = false;
      }
    };

    // Si el navegador ya intentó cargarla y falló antes de que el JS corriera
    if (img.complete && img.naturalWidth === 0) {
      activatePlaceholder();
    } else {
      img.addEventListener("error", activatePlaceholder);
    }
  });
});
