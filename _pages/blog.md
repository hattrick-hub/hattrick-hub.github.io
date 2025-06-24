---
layout: default
title: Blog de Hattrick
permalink: /blog/
description: Artículos, análisis y estrategias para mejorar tu experiencia en Hattrick.
hero_image: /assets/img/hero-blog.webp
hero_alt: Banner del Blog de Hattrick
aria_label: Blog de Hattrick
---

{% include hero.html image=page.hero_image alt=page.hero_alt aria_label=page.aria_label loading="lazy" %}

<section class="section section-1" role="region" aria-label="Lista de artículos del blog">
    <div class="container">
        <h1 class="title is-2">Lista de Artículos del Blog</h1>
        <div class="grid-base grid-fixed" role="grid">
            {% for post in site.blog %}
            <article class="card-base{% if post.featured %} featured{% endif %}" role="gridcell"
                aria-labelledby="post-{{ post.title | slugify }}">
                <div class="card-image">
                    {% if post.hero_image %}
                    <img src="{{ post.hero_image | relative_url }}"
                        alt="{{ post.hero_alt | default: post.title | escape }}" class="card-post" loading="lazy"
                        width="600" height="400">
                    {% else %}
                    <img src="/assets/img/placeholder.webp" alt="Sin imagen" class="card-post" aria-hidden="true"
                        loading="lazy" width="600" height="400">
                    {% endif %}
                </div>
                <h3 class="title is-3" id="post-{{ post.title | slugify }}"><a href="{{ post.url | relative_url }}">{{
                        post.title }}</a></h3>
                <div class="meta">
                    <span>Publicado: {{ post.date | date: "%d/%m/%Y" }}</span>
                    {% assign minutes = post.content | number_of_words | divided_by: 200 | plus: 1 %}
                    <span>Tiempo de lectura: {{ minutes }} minuto{% if minutes != 1 %}s{% endif %}</span>
                </div>
                <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                {% if post.tags %}
                <div class="tags">
                    {% for tag in post.tags %}
                    <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
                {% endif %}
                <a href="{{ post.url | relative_url }}" class="button is-primary"
                    aria-label="Leer más sobre {{ post.title | escape }}">Leer más</a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>
