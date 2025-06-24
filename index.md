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
            <ul class="flex" style="gap: var(--gap-md)" role="list" aria-label="Características principales de Hattrick Hub">
                <li>
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#guide"></use>
                    </svg>
                    <strong>Guías detalladas</strong>: Mejora tu juego con nuestro <a href="/manual">manual</a>.
                </li>
                <li>
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#news"></use>
                    </svg>
                    <strong>Noticias actualizadas</strong>: Mantente informado con nuestras <a href="/noticias" >noticias</a>.
                </li>
                <li>
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#blog"></use>
                    </svg>
                    <strong>Análisis tácticos</strong>: Aprende estrategias en nuestro <a href="/blog" >blog</a>.
                </li>
                <li>
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#tools"></use>
                    </svg>
                    <strong>Herramientas útiles</strong>: Optimiza tu equipo con nuestras <a href="/herramientas" >herramientas</a>.
                </li>
                <li>
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#abbr"></use>
                    </svg>
                    <strong>Glosario de términos</strong>: Entiende Hattrick con nuestras <a href="/abreviaturas" >abreviaturas</a>.
                </li>
            </ul>
        </div>
    </div>
</section>
