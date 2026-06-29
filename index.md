---
layout: default
title: Hattrick Hub
permalink: /
description: "Tu centro de recursos para Hattrick: guías, herramientas, noticias y más."
hero_image: /assets/img/hero-home.webp
hero_alt: "Banner de la página principal de Hattrick Hub"
hide_news_bar: true
---

{% include hero.html image=page.hero_image alt=page.hero_alt aria_label="Página Principal de Hattrick Hub" buttons='
<a href="/herramientas/" class="button is-primary" aria-label="Explorar herramientas de Hattrick Hub">
    <svg class="icon is-small" aria-hidden="true">
        <use href="#tools"></use>
    </svg>
    Explorar herramientas
</a>
<a href="/blog/" class="button is-secondary" aria-label="Leer el blog de Hattrick Hub">
    <svg class="icon is-small" aria-hidden="true">
        <use href="#blog"></use>
    </svg>
    Leer el blog </a>' %}

<section class="section" aria-label="Características de Hattrick Hub">
    <div class="container text-center">
        <div class="content">
            <h1>Todo lo que necesitas para dominar Hattrick</h1>
            <p>
                Hattrick Hub es el lugar ideal para jugadores de Hattrick que buscan mejorar su estrategia y experiencia
                de juego. Descubre:
            </p>
        </div>
    </div>

    <!-- GRID DE TARJETAS CLICKABLES -->
    <div class="feature-grid" role="list" aria-label="Características principales de Hattrick Hub">
        <a href="/manual/" class="feature-card" role="listitem">
            <div class="feature-icon">
                <svg class="icon is-medium" aria-hidden="true">
                    <use href="#guide"></use>
                </svg>
            </div>
            <h3 class="feature-title">Guías detalladas</h3>
            <p class="feature-text">Mejora tu juego con nuestro manual completo de estrategias y tácticas.</p>
            <span class="feature-link">Ver manual →</span>
        </a>

        <a href="/noticias/" class="feature-card" role="listitem">
            <div class="feature-icon">
                <svg class="icon is-medium" aria-hidden="true">
                    <use href="#news"></use>
                </svg>
            </div>
            <h3 class="feature-title">Noticias actualizadas</h3>
            <p class="feature-text">Mantente informado con nuestras noticias sobre el mundo de Hattrick.</p>
            <span class="feature-link">Ver noticias →</span>
        </a>

        <a href="/blog/" class="feature-card" role="listitem">
            <div class="feature-icon">
                <svg class="icon is-medium" aria-hidden="true">
                    <use href="#blog"></use>
                </svg>
            </div>
            <h3 class="feature-title">Análisis tácticos</h3>
            <p class="feature-text">Aprende estrategias avanzadas en nuestro blog de análisis.</p>
            <span class="feature-link">Ver blog →</span>
        </a>

        <a href="/herramientas/" class="feature-card" role="listitem">
            <div class="feature-icon">
                <svg class="icon is-medium" aria-hidden="true">
                    <use href="#tools"></use>
                </svg>
            </div>
            <h3 class="feature-title">Herramientas útiles</h3>
            <p class="feature-text">Optimiza tu equipo con nuestras herramientas especializadas.</p>
            <span class="feature-link">Ver herramientas →</span>
        </a>

        <a href="/abreviaturas/" class="feature-card" role="listitem">
            <div class="feature-icon">
                <svg class="icon is-medium" aria-hidden="true">
                    <use href="#abbr"></use>
                </svg>
            </div>
            <h3 class="feature-title">Glosario de términos</h3>
            <p class="feature-text">Entiende Hattrick con nuestras abreviaturas y definiciones.</p>
            <span class="feature-link">Ver abreviaturas →</span>
        </a>
    </div>
</section>
