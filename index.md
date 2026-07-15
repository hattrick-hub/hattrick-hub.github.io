---
layout: default
title: Hattrick Hub
permalink: /
description: "Tu centro de recursos para Hattrick: guías, herramientas, noticias y más."
hero_image: /assets/img/hero-home.webp
hero_alt: "Banner de la página principal de Hattrick Hub"
hide_news_bar: true
---

{% include hero.html 
    image=page.hero_image 
    alt=page.hero_alt
    aria_label="Hattrick Hub"
    buttons='
    <a href="/herramientas/" class="button is-primary">
        <svg class="icon is-small" aria-hidden="true" width="16" height="16">
            <use href="#tools"></use>
        </svg>
        Explorar herramientas
    </a>
    <a href="/blog/" class="button is-secondary">
        <svg class="icon is-small" aria-hidden="true" width="16" height="16">
            <use href="#blog"></use>
        </svg>
        Leer el blog
    </a>
' %}

<section class="section" aria-labelledby="features-heading">
    
    <div class="container text-center">
        <div class="content">
            <h2 id="features-heading">Todo lo que necesitas para dominar Hattrick</h2>
            <p>
                Hattrick Hub es el lugar ideal para jugadores de Hattrick que buscan mejorar su estrategia y experiencia
                de juego. Descubre:
            </p>
        </div>
    </div>

    <ul class="feature-grid" aria-label="Características principales de Hattrick Hub">
        <li>
            <article class="feature-card">
                <div class="feature-icon">
                    <svg class="icon is-medium" aria-hidden="true" width="24" height="24">
                        <use href="#guide"></use>
                    </svg>
                </div>
                <h3 class="feature-title">
                    <a href="/manual/">Guías detalladas</a>
                </h3>
                <p class="feature-text">Mejora tu juego con nuestro manual completo de estrategias y tácticas.</p>
                <a href="/manual/" class="feature-link">
                    Ver manual
                    <svg class="icon is-small" aria-hidden="true" width="16" height="16">
                        <use href="#chevron-right"></use>
                    </svg>
                </a>
            </article>
        </li>

        <li>
            <article class="feature-card">
                <div class="feature-icon">
                    <svg class="icon is-medium" aria-hidden="true" width="24" height="24">
                        <use href="#news"></use>
                    </svg>
                </div>
                <h3 class="feature-title">
                    <a href="/noticias/">Noticias actualizadas</a>
                </h3>
                <p class="feature-text">Mantente informado con nuestras noticias sobre el mundo de Hattrick.</p>
                <a href="/noticias/" class="feature-link">
                    Ver noticias
                    <svg class="icon is-small" aria-hidden="true" width="16" height="16">
                        <use href="#chevron-right"></use>
                    </svg>
                </a>
            </article>
        </li>

        <li>
            <article class="feature-card">
                <div class="feature-icon">
                    <svg class="icon is-medium" aria-hidden="true" width="24" height="24">
                        <use href="#blog"></use>
                    </svg>
                </div>
                <h3 class="feature-title">
                    <a href="/blog/">Análisis tácticos</a>
                </h3>
                <p class="feature-text">Aprende estrategias avanzadas en nuestro blog de análisis.</p>
                <a href="/blog/" class="feature-link">
                    Ver blog
                    <svg class="icon is-small" aria-hidden="true" width="16" height="16">
                        <use href="#chevron-right"></use>
                    </svg>
                </a>
            </article>
        </li>

        <li>
            <article class="feature-card">
                <div class="feature-icon">
                    <svg class="icon is-medium" aria-hidden="true" width="24" height="24">
                        <use href="#tools"></use>
                    </svg>
                </div>
                <h3 class="feature-title">
                    <a href="/herramientas/">Herramientas útiles</a>
                </h3>
                <p class="feature-text">Optimiza tu equipo con nuestras herramientas especializadas.</p>
                <a href="/herramientas/" class="feature-link">
                    Ver herramientas
                    <svg class="icon is-small" aria-hidden="true" width="16" height="16">
                        <use href="#chevron-right"></use>
                    </svg>
                </a>
            </article>
        </li>

        <li>
            <article class="feature-card">
                <div class="feature-icon">
                    <svg class="icon is-medium" aria-hidden="true" width="24" height="24">
                        <use href="#abbr"></use>
                    </svg>
                </div>
                <h3 class="feature-title">
                    <a href="/abreviaturas/">Glosario de términos</a>
                </h3>
                <p class="feature-text">Entiende Hattrick con nuestras abreviaturas y definiciones.</p>
                <a href="/abreviaturas/" class="feature-link">
                    Ver abreviaturas
                    <svg class="icon is-small" aria-hidden="true" width="16" height="16">
                        <use href="#chevron-right"></use>
                    </svg>
                </a>
            </article>
        </li>
    </ul>
</section>