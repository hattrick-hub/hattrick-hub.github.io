---
layout: default
title: "Acerca de Hattrick Hub"
permalink: /acerca-de/
description: "Hattrick Hub es tu espacio para dominar Hattrick con guías, análisis y herramientas."
hero_image: /assets/img/hero-about.webp
hero_alt: "Imagen representativa de Hattrick Hub"
hide_news_bar: true
---

{% include hero.html
    image=page.hero_image
    alt=page.hero_alt
    aria_label="Página Sobre Hattrick Hub"
    buttons='
        <a href="mailto:tutorhattrick@hotmail.com" class="button is-primary" aria-label="Enviar un correo a Hattrick Hub">
            <svg class="icon is-small" aria-hidden="true">
                <use xlink:href="#email"></use>
            </svg> Envíanos un correo
        </a>'
%}

<section class="section section-1" role="region" aria-label="Sobre Hattrick Hub">
    <div class="container">
        <div class="content">
            <h1>Nuestra misión</h1>
            <p>Hattrick Hub es el punto de encuentro para los jugadores de Hattrick. Nuestra misión es mejorar tu experiencia de juego con recursos de calidad, desde guías detalladas hasta herramientas avanzadas.</p>

            <h2>¿Por qué existimos?</h2>
            <p>Hattrick es un juego apasionante pero complejo. En Hattrick Hub, nos esforzamos por:</p>
            <ul class="flex">
                <li>Ofrecer contenido claro y útil para jugadores de todos los niveles.</li>
                <li>Fomentar una comunidad activa y colaborativa.</li>
                <li>Mantenerte al día con las últimas noticias del juego.</li>
            </ul>

            <h2>Nuestra visión</h2>
            <p>Queremos ser la referencia principal para los jugadores de Hattrick en todo el mundo, proporcionando un espacio donde encuentres todo lo necesario para llevar tu equipo al éxito.</p>

            <h2>Sobre el autor</h2>
            <p>¡Hola! Soy <strong>{{ site.author | default: "el equipo de Hattrick Hub" }}</strong>, apasionado por Hattrick y con experiencia en juveniles, tácticas y selecciones nacionales.
            {% if site.author_team_url %}
                <a href="{{ site.author_team_url }}" target="_blank" rel="noopener noreferrer" aria-label="Visitar el equipo del autor en Hattrick">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#hattrick"></use>
                    </svg> Mi equipo en Hattrick
                </a>
            {% endif %}
            </p>

            <div class="buttons text-center">
                <a href="/herramientas/" class="button is-outlined" aria-label="Explorar herramientas de Hattrick Hub">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#tools"></use>
                    </svg> Explora nuestras herramientas
                </a>
                <a href="/noticias/" class="button is-outlined" aria-label="Leer las últimas noticias de Hattrick Hub">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#book"></use>
                    </svg> Lee las últimas noticias
                </a>
            </div>
        </div>
    </div>
</section>