---
layout: default
title: Manual de Hattrick
permalink: /manual/
description: Guías detalladas para dominar Hattrick.
hero_image: /assets/img/hero-manual.webp
hero_alt: Banner del Manual de Hattrick
---

{% include hero.html 
    image=page.hero_image 
    alt=page.hero_alt 
    aria_label=page.title 
%}

<section class="section" aria-labelledby="manual-heading">
    <div class="container">
        <header class="card-header">
            <h1 class="title is-1" id="manual-heading">Manual de Hattrick</h1>
        </header>        
        <div class="grid-base grid-fixed" role="list" aria-label="Guías del manual">
            {% assign manual_sorted = site.manual | sort: 'title' %}
            {% for manual in manual_sorted %}
            <article class="card-base{% if manual.featured %} featured{% endif %}" role="listitem"
                aria-labelledby="manual-{{ manual.title | slugify }}">
                
                {% include card-image.html item=manual %}
                
                <h2 class="title is-3" id="manual-{{ manual.title | slugify }}">
                    <a href="{{ manual.url | relative_url }}">{{ manual.title }}</a>
                </h2>
                
                {% if manual.difficulty %}
                <span class="difficulty {{ manual.difficulty | downcase }}">
                    {{ manual.difficulty }}
                </span>
                {% endif %}
                
                <div class="meta">
                    <time datetime="{{ manual.date | date: '%Y-%m-%d' }}">
                        {{ manual.date | date: "%d/%m/%Y" }}
                    </time>
                    <span aria-hidden="true">·</span>
                    {% assign minutes = manual.content | number_of_words | divided_by: 200 | plus: 1 %}
                    <span>Tiempo de lectura: {{ minutes }} min</span>
                </div>
                
                <p>{{ manual.excerpt | strip_html | truncatewords: 25 }}</p>
                
                {% if manual.tags %}
                <div class="tags">
                    {% for tag in manual.tags %}
                    <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
                {% endif %}
                
                <a href="{{ manual.url | relative_url }}" class="button is-primary"
                    aria-label="Leer {{ manual.title | escape }}">
                    Leer más
                </a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>