---
layout: default
title: Herramientas de Hattrick
permalink: /herramientas/
description: Recursos y aplicaciones para optimizar tu experiencia en Hattrick.
hero_image: /assets/img/hero-herramientas.webp
hero_alt: Banner de herramientas para Hattrick
---

{% include hero.html 
    image=page.hero_image 
    alt=page.hero_alt 
    aria_label=page.title 
%}

<section class="section" aria-labelledby="tools-heading">
    <div class="container">
        <header class="card-header">
            <h1 class="title is-1" id="tools-heading">Herramientas de Hattrick</h1>
            <p class="subtitle">Recursos para mejorar tu experiencia en Hattrick.</p>
            <p>Total: {{ site.herramientas | size }} herramientas</p>
        </header>    
        
        <div class="grid-base grid-fixed" role="list" aria-label="Herramientas">
            {% assign herramientas_sorted = site.herramientas | sort: 'date' | reverse %}
            {% for tool in herramientas_sorted %}
            <article class="card-base{% if tool.featured %} featured{% endif %}" role="listitem"
                aria-labelledby="tool-{{ tool.title | slugify }}">
                
                {% include card-image.html item=tool %}
                
                <h2 class="title is-3" id="tool-{{ tool.title | slugify }}">
                    <a href="{{ tool.url | relative_url }}">{{ tool.title }}</a>
                </h2>
                
                <div class="meta">
                    <time datetime="{{ tool.date | date: '%Y-%m-%d' }}">
                        {{ tool.date | date: "%d/%m/%Y" }}
                    </time>
                    <span aria-hidden="true">·</span>
                    {% assign minutes = tool.content | number_of_words | divided_by: 200 | plus: 1 %}
                    <span>Tiempo de lectura: {{ minutes }} min</span>
                    {% if tool.rating %}
                    <span class="rating" aria-label="{{ tool.rating }} de 5 estrellas">
                        {% for i in (1..5) %}
                            {% if i <= tool.rating %}
                            <svg class="icon is-small" aria-hidden="true"><use href="#star"></use></svg>
                            {% else %}
                            <svg class="icon is-small empty" aria-hidden="true"><use href="#star"></use></svg>
                            {% endif %}
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
                
                <div class="buttons">
                    <a href="{{ tool.url | relative_url }}" class="button is-primary"
                        aria-label="Ver {{ tool.title | escape }}">
                        Ver Detalles
                    </a>
                    {% if tool.external_url %}
                    <a href="{{ tool.external_url }}" target="_blank" rel="noopener noreferrer"
                        class="button is-secondary"
                        aria-label="Abrir {{ tool.title | escape }} en nueva pestaña">
                        Visitar Sitio
                    </a>
                    {% endif %}
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>