---
layout: default
title: Herramientas de Hattrick
permalink: /herramientas/
description: Recursos y aplicaciones para optimizar tu experiencia en Hattrick.
hero_image: /assets/img/hero-herramientas.webp
hero_alt: Banner de herramientas para Hattrick
aria_label: Herramientas de Hattrick
---

{% include hero.html image=page.hero_image alt=page.hero_alt aria_label=page.aria_label loading="lazy" %}

<section class="section section-1" role="region" aria-label="Lista de herramientas de Hattrick">
    <div class="container">
        <h2 class="title is-2">Lista de Herramientas</h2>
        <p class="subtitle">Recursos para mejorar tu experiencia en Hattrick.</p>
        <p>Total Herramientas destcadas: {{ site.herramientas | size }} encontradas</p>
        <div class="grid-base grid-fixed" role="grid">
            {% for tool in site.herramientas %}
            <article class="card-base{% if tool.featured %} featured{% endif %}" role="gridcell"
                aria-labelledby="tool-{{ tool.title | slugify }}">
                <div class="card-image">
                    {% if tool.hero_image %}
                    <img src="{{ tool.hero_image | relative_url }}"
                        alt="{{ tool.hero_alt | default: tool.title | escape }}" class="card-post" loading="lazy"
                        width="600" height="400">
                    {% else %}
                    <img src="/assets/img/placeholder.webp" alt="Sin imagen" class="card-post" aria-hidden="true"
                        loading="lazy" width="600" height="400">
                    {% endif %}
                </div>
                <h3 class="title is-3" id="tool-{{ tool.title | slugify }}"><a href="{{ tool.url | relative_url }}">{{
                        tool.title }}</a></h3>
                <div class="meta">
                    <span>Publicado: {{ tool.date | date: "%d/%m/%Y" }}</span>
                    {% assign minutes = tool.content | number_of_words | divided_by: 200 | plus: 1 %}
                    <span>Tiempo de lectura: {{ minutes }} minuto{% if minutes != 1 %}s{% endif %}</span>
                    {% if tool.rating %}
                    <span class="rating" aria-label="Calificación: {{ tool.rating }} de 5">
                        {% for i in (1..tool.rating) %}
                        <svg class="icon is-small" aria-hidden="true">
                            <use xlink:href="#star"></use>
                        </svg>
                        {% endfor %}
                        {% for i in (tool.rating..4) %}
                        <svg class="icon is-small empty" aria-hidden="true">
                            <use xlink:href="#star"></use>
                        </svg>
                        {% endfor %}
                    </span>
                    {% endif %}
                </div>
                <p>{{ tool.excerpt | strip_html | truncatewords: 30 }}</p>
                {% if tool.tags %}
                <div class="tags">
                    {% for tag in tool.tags %}
                    <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
                {% endif %}
                <a href="{{ tool.url | relative_url }}" class="button is-primary"
                    aria-label="Ver detalles de {{ tool.title | escape }}">Ver Detalles</a>
                {% if tool.external_url %}
                <a href="{{ tool.external_url }}" target="_blank" rel="noopener noreferrer" class="button is-secondary"
                    aria-label="Visitar {{ tool.title | escape }}">Visitar Sitio</a>
                {% endif %}
            </article>
            {% endfor %}
        </div>
    </div>
</section>
