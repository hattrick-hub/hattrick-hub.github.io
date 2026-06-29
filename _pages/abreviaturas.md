---
layout: default
title: Abreviaturas de Hattrick
permalink: /abreviaturas/
description: Significado de abreviaturas y términos usados en Hattrick.
hero_image: /assets/img/hero-abreviaturas.webp
hero_alt: Lista de abreviaturas de Hattrick
---

{% include hero.html image=page.hero_image alt=page.hero_alt aria_label="Abreviaturas de Hattrick" %}

<section class="section" role="region" aria-label="Lista de Abreviaturas">
    <div class="container">
        {% for category in site.data.abreviaturas %}
        <h1 class="title is-1" id="{{ category.category | slugify }}">{{ category.category }}</h1>
        <div class="grid-base grid-fluid">
            {% for item in category.list %}
            <article class="card-base{% if item.featured %} featured{% endif %}" role="listitem"
                aria-labelledby="abbr-{{ item.name | slugify }}">
                <h3 class="title is-3" id="abbr-{{ item.name | slugify }}">{{ item.name | upcase }}</h3>
                <p>{{ item.description }}</p>
                <div class="tags">
                    {% for tag in item.tags %}
                    <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
                {% if item.notes %}
                <p class="notes" aria-label="Notas sobre {{ item.name | escape }}">{{ item.notes }}</p>
                {% endif %}
            </article>
            {% endfor %}
        </div>
        {% endfor %}
    </div>
</section>
