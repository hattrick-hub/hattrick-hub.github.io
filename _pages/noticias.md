---
layout: default
title: Últimas Noticias de Hattrick
permalink: /noticias/
description: Mantente informado con las últimas noticias y actualizaciones de Hattrick.
hero_image: /assets/img/hero-noticias.webp
hero_alt: Banner de las Últimas Noticias de Hattrick
aria_label: Últimas Noticias de Hattrick
---

{% include hero.html image=page.hero_image alt=page.hero_alt aria_label=page.aria_label loading="lazy" %}

<section class="section section-1" role="region" aria-label="Lista de noticias de Hattrick">
    <div class="container">
        <h1 class="title is-2">Lista de Ultimas Noticias</h1>
        <div class="grid-base grid-fixed" role="grid">
            {% for noticia in site.noticias %}
            <article class="card-base{% if noticia.featured %} featured{% endif %}" role="gridcell"
                aria-labelledby="noticia-{{ noticia.title | slugify }}">
                <div class="card-image">
                    {% if noticia.hero_image %}
                    <img src="{{ noticia.hero_image | relative_url }}"
                        alt="{{ noticia.hero_alt | default: noticia.title | escape }}" class="card-post"
                        loading="lazy" width="600" height="400">
                    {% else %}
                    <img src="/assets/img/placeholder.webp" alt="Sin imagen" class="card-post" aria-hidden="true"
                        loading="lazy" width="600" height="400">
                    {% endif %}
                </div>
                <h3 class="title is-3" id="noticia-{{ noticia.title | slugify }}"><a
                        href="{{ noticia.url | relative_url }}">{{ noticia.title }}</a></h3>
                <div class="meta">
                    <span>Publicado: {{ noticia.date | date: "%d/%m/%Y" }}</span>
                    {% assign minutes = noticia.content | number_of_words | divided_by: 200 | plus: 1 %}
                    <span>Tiempo de lectura: {{ minutes }} minuto{% if minutes != 1 %}s{% endif %}</span>
                </div>
                <p>{{ noticia.excerpt | strip_html | truncatewords: 30 }}</p>
                {% if noticia.tags %}
                <div class="tags">
                    {% for tag in noticia.tags %}
                    <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
                {% endif %}
                <a href="{{ noticia.url | relative_url }}" class="button is-primary"
                    aria-label="Leer más sobre {{ noticia.title | escape }}">Leer más</a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>
