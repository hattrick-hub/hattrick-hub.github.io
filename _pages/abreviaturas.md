---
layout: default
title: Abreviaturas de Hattrick
permalink: /abreviaturas/
description: Significado de abreviaturas y términos usados en Hattrick.
hero_image: /assets/img/hero-abreviaturas.webp
hero_alt: Lista de abreviaturas de Hattrick
---

{% include hero.html 
    image=page.hero_image 
    alt=page.hero_alt 
    aria_label="Abreviaturas de Hattrick" 
%}

<section class="section" aria-labelledby="abbr-heading">
    <div class="container">
        <header class="card-header">
            <h1 class="title is-1" id="abbr-heading">Abreviaturas de Hattrick</h1>
        </header>    
        {% for category in site.data.abreviaturas %}
        <div class="category-section">
            <h2 class="title is-2 category-title" id="{{ category.category | slugify }}">
                <span>Categoría:</span> {{ category.category }}
            </h2>
            
            <div class="grid-base grid-fluid" role="list" aria-label="{{ category.category }}">
                {% for item in category.list %}
                <article class="card-base{% if item.featured %} featured{% endif %}" role="listitem"
                    aria-labelledby="abbr-{{ item.name | slugify }}">
                    <h3 class="title is-3" id="abbr-{{ item.name | slugify }}">
                        {{ item.name | upcase }}
                    </h3>
                    <p>{{ item.description }}</p>
                    
                    {% if item.tags %}
                    <div class="tags">
                        {% for tag in item.tags %}
                        <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}
                    
                    {% if item.notes %}
                    <p class="notes">{{ item.notes }}</p>
                    {% endif %}
                </article>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</section>