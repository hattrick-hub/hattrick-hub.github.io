---
layout: default
title: Últimas Noticias de Hattrick
permalink: /noticias/
description: Mantente informado con las últimas noticias y actualizaciones de Hattrick.
hero_image: /assets/img/hero-noticias.webp
hero_alt: Banner de las Últimas Noticias de Hattrick
---

{% include hero.html 
    image=page.hero_image 
    alt=page.hero_alt 
    aria_label=page.title 
%}

<section class="section" aria-labelledby="news-heading">
    <div class="container">
        <header class="card-header">
            <h1 class="title is-1" id="news-heading">Últimas Noticias</h1>
        </header>
        <div class="grid-base grid-fixed" role="list" aria-label="Noticias">
            {% assign noticias_sorted = site.noticias | sort: 'date' | reverse %}
            {% for noticia in noticias_sorted %}
            <article class="card-base{% if noticia.featured %} featured{% endif %}" role="listitem"
                aria-labelledby="noticia-{{ noticia.title | slugify }}">
                
                {% include card-image.html item=noticia %}
                
                <h2 class="title is-3" id="noticia-{{ noticia.title | slugify }}">
                    <a href="{{ noticia.url | relative_url }}">{{ noticia.title }}</a>
                </h2>
                
                <div class="meta">
                    <time datetime="{{ noticia.date | date: '%Y-%m-%d' }}">
                        {{ noticia.date | date: "%d/%m/%Y" }}
                    </time>
                    <span aria-hidden="true">·</span>
                    {% assign minutes = noticia.content | number_of_words | divided_by: 200 | plus: 1 %}
                    <span>Tiempo de lectura: {{ minutes }} min</span>
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
                    aria-label="Leer {{ noticia.title | escape }}">
                    Leer más
                </a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>