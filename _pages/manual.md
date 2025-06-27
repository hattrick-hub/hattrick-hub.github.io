---
layout: default
title: Manual de Hattrick
permalink: /manual/
description: Guías detalladas para dominar Hattrick, desde fundamentos hasta estrategias avanzadas.
hero_image: /assets/img/hero-manual.webp
hero_alt: Banner del Manual de Hattrick
aria_label: Manual de Hattrick
---

{% include hero.html image=page.hero_image alt=page.hero_alt aria_label=page.aria_label loading="lazy" %}

<section class="section section-1" role="region" aria-label="Lista de guías del manual">
    <div class="container">
        <h1 class="title is-1">Lista de Manuales y Guías</h1>
        <div class="grid-base grid-fixed" role="grid">
            {% for manual in site.manual %}
            <article class="card-base{% if manual.featured %} featured{% endif %}" role="gridcell"
                aria-labelledby="manual-{{ manual.title | slugify }}">
                <div class="card-image">
                    {% if manual.hero_image %}
                    <img src="{{ manual.hero_image | relative_url }}"
                        alt="{{ manual.hero_alt | default: manual.title | escape }}" loading="lazy"
                        width="600" height="400">
                    {% else %}
                    <img src="/assets/img/placeholder.webp" alt="Sin imagen" aria-hidden="true"
                        loading="lazy" width="600" height="400">
                    {% endif %}
                </div>
                <h3 class="title is-3" id="manual-{{ manual.title | slugify }}"><a
                        href="{{ manual.url | relative_url }}">{{ manual.title }}</a></h3>
                {% if manual.difficulty %}
                <span class="difficulty {{ manual.difficulty | downcase }}"
                    aria-label="Dificultad: {{ manual.difficulty }}">{{ manual.difficulty }}</span>
                {% endif %}
                <details {% if forloop.first %}open{% endif %}>
                    <summary>Resumen</summary>
                    <p>{{ manual.excerpt | strip_html | truncatewords: 30 }}</p>
                    {% if manual.tags %}
                    <div class="tags">
                        {% for tag in manual.tags %}
                        <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}
                    <div class="meta">
                        <span>Publicado: {{ manual.date | date: "%d/%m/%Y" }}</span>
                        {% assign minutes = manual.content | number_of_words | divided_by: 200 | plus: 1 %}
                        <span>Tiempo de lectura: {{ minutes }} minuto{% if minutes != 1 %}s{% endif %}</span>
                    </div>
                </details>
                <a href="{{ manual.url | relative_url }}" class="button is-primary"
                    aria-label="Leer más sobre {{ manual.title | escape }}">Leer más</a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>
