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
    aria_label="Página Principal de Hattrick Hub"
    buttons='
        <a href="/herramientas/" class="button is-primary" aria-label="Explorar herramientas de Hattrick Hub">
            <svg class="icon is-small" aria-hidden="true">
                <use xlink:href="#tools"></use>
            </svg> Explorar herramientas
        </a>
        <a href="/blog/" class="button is-secondary" aria-label="Leer el blog de Hattrick Hub">
            <svg class="icon is-small" aria-hidden="true">
                <use xlink:href="#blog"></use>
            </svg> Leer el blog
        </a>'
%}

<section class="section section-1" role="region" aria-label="Características de Hattrick Hub">
    <div class="container text-center">
        <div class="content">
            <h1>Todo lo que necesitas para dominar Hattrick</h1>
            <p>Hattrick Hub es el lugar ideal para jugadores de Hattrick que buscan mejorar su estrategia y experiencia de juego. Descubre:</p>
            <ul class="flex" role="list" aria-label="Características principales de Hattrick Hub">
                <li class="list-item-icon">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#guide"></use>
                    </svg>
                    <span><strong>Guías detalladas</strong>: Mejora tu juego con nuestro <a href="/manual">manual</a>.</span>
                </li>
                <li class="list-item-icon">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#news"></use>
                    </svg>
                    <span><strong>Noticias actualizadas</strong>: Mantente informado con nuestras <a href="/noticias" >noticias</a>.</span>
                </li>
                <li class="list-item-icon">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#blog"></use>
                    </svg>
                    <span><strong>Análisis tácticos</strong>: Aprende estrategias en nuestro <a href="/blog" >blog</a>.</span>
                </li>
                <li class="list-item-icon">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#tools"></use>
                    </svg>
                    <span><strong>Herramientas útiles</strong>: Optimiza tu equipo con nuestras <a href="/herramientas" >herramientas</a>.</span>
                </li>
                <li class="list-item-icon">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#abbr"></use>
                    </svg>
                    <span><strong>Glosario de términos</strong>: Entiende Hattrick con nuestras <a href="/abreviaturas" >abreviaturas</a>.</span>
                </li>
            </ul>
        </div>
    </div>
</section>