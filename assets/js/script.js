// Debounce utility
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

document.addEventListener("DOMContentLoaded", () => {
  // Remove no-js class
  document.documentElement.classList.remove("no-js");

  // Back to Top Button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const handleScroll = debounce(() => {
      backToTop.classList.toggle("show", window.scrollY > 300);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Navbar Menu Toggle
  const burger = document.querySelector(".navbar-burger");
  const menu = document.querySelector("#navbarMenu");
  if (burger && menu) {
    burger.setAttribute("aria-controls", "navbarMenu");
    burger.addEventListener("click", () => {
      const isActive = menu.classList.toggle("is-active");
      burger.classList.toggle("is-active", isActive);
      burger.setAttribute("aria-expanded", isActive);
      menu.setAttribute("tabindex", isActive ? "0" : "-1");
      if (isActive) menu.querySelector(".navbar-item").focus();
      else burger.focus();
    });
    document.querySelectorAll(".navbar-item").forEach((item) => {
      item.addEventListener("click", () => {
        menu.classList.remove("is-active");
        burger.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
        menu.setAttribute("tabindex", "-1");
        burger.focus();
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-active")) {
        menu.classList.remove("is-active");
        burger.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
        menu.setAttribute("tabindex", "-1");
        burger.focus();
      }
    });
  }

  // Lazy Images
  if ("IntersectionObserver" in window) {
    const placeholderImageSrc =
      window.HattrickHub?.placeholderImage || "/assets/img/placeholder.webp";
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.closest("summary")) return;

            const srcToLoad = img.dataset.src || img.getAttribute("src");
            if (!srcToLoad) {
              img.src = placeholderImageSrc;
              img.alt =
                img.alt ||
                `Imagen de ${
                  img.dataset.context ||
                  document.querySelector("h1")?.textContent ||
                  "contenido"
                } no disponible`;
              img.classList.add("image-fallback", "loaded");
            } else {
              img.src = srcToLoad;
              img.addEventListener("load", () => img.classList.add("loaded"), {
                once: true,
              });
              img.addEventListener(
                "error",
                () => {
                  console.warn(`Error loading image: ${srcToLoad}`);
                  img.src = placeholderImageSrc;
                  img.alt =
                    img.alt ||
                    `Imagen de ${
                      img.dataset.context || "contenido"
                    } no disponible`;
                  img.classList.add("image-fallback", "loaded");
                  img.dispatchEvent(
                    new CustomEvent("imageError", {
                      detail: { src: srcToLoad },
                    })
                  );
                },
                { once: true }
              );
            }
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    document
      .querySelectorAll('img[loading="lazy"]:not(.loaded):not(summary img)')
      .forEach((img) => {
        imageObserver.observe(img);
      });
  } else {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.src =
        img.dataset.src ||
        img.getAttribute("src") ||
        window.HattrickHub?.placeholderImage ||
        "/assets/img/placeholder.webp";
      img.classList.add("loaded");
    });
  }

  // Carousel
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const carouselInner = carousel.querySelector(".carousel-inner");
  const prevBtn = carousel.querySelector(".carousel-control.prev");
  const nextBtn = carousel.querySelector(".carousel-control.next");
  const pauseBtn = carousel.querySelector(".carousel-pause");
  const indicators = carousel.querySelectorAll(".indicator");
  const items = carouselInner.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  const totalItems = items.length;
  let interval;
  let isPaused = false;

  function getVisibleSlides() {
    return window.innerWidth >= 992 ? 2 : 1;
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

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    if (totalItems > getVisibleSlides() && !isPaused) {
      interval = setInterval(nextSlide, 5000);
    }
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  if (totalItems > 1) {
    prevBtn.addEventListener("click", () => {
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    });

    nextBtn.addEventListener("click", () => {
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    });

    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        if (isPaused) {
          startAutoPlay();
          pauseBtn.querySelector("use").setAttribute("xlink:href", "#pause");
          pauseBtn.setAttribute("aria-label", "Pausar el carrusel");
          pauseBtn.querySelector(".visually-hidden").textContent = "Pausar";
          isPaused = false;
        } else {
          stopAutoPlay();
          pauseBtn.querySelector("use").setAttribute("xlink:href", "#play");
          pauseBtn.setAttribute("aria-label", "Reanudar el carrusel");
          pauseBtn.querySelector(".visually-hidden").textContent = "Reanudar";
          isPaused = true;
        }
      });
    }

    indicators.forEach((indicator, i) => {
      indicator.addEventListener("click", () => {
        stopAutoPlay();
        showSlide(i);
        startAutoPlay();
      });
    });

    // Touch events
    let startX;
    let isDragging = false;

    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopAutoPlay();
    });

    carousel.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        isDragging = false;
      }
    });

    carousel.addEventListener("touchend", () => {
      isDragging = false;
      startAutoPlay();
    });

    // Keyboard navigation
    carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
      } else if (e.key === "ArrowRight") {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
      }
    });

    // Pause on focus
    carousel.addEventListener("focusin", stopAutoPlay);
    carousel.addEventListener("focusout", startAutoPlay);

    // Debounced resize
    const handleResize = debounce(() => showSlide(currentIndex), 100);
    window.addEventListener("resize", handleResize);

    startAutoPlay();
  }

  // Inicializar
  showSlide(0);
});