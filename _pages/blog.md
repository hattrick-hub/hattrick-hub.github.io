---
layout: default
title: Blog de Hattrick
permalink: /blog/
description: Artículos, análisis y estrategias para mejorar tu experiencia en Hattrick.
hero_image: /assets/img/hero-blog.webp
hero_alt: Banner del Blog de Hattrick
---

{% include hero.html 
    image=page.hero_image 
    alt=page.hero_alt 
    aria_label=page.title 
%}

<section class="section" aria-labelledby="blog-heading">
    <div class="container">
        <header class="card-header">
            <h1 class="title is-1" id="blog-heading">Blog de Hattrick</h1>
        </header>    
        <div class="grid-base grid-fixed" role="list" aria-label="Artículos del blog">
            {% assign posts_sorted = site.blog | sort: 'date' | reverse %}
            {% for post in posts_sorted %}
            <article class="card-base{% if post.featured %} featured{% endif %}" role="listitem"
                aria-labelledby="post-{{ post.title | slugify }}">

                {% include card-image.html item=post %}

                <h2 class="title is-3" id="post-{{ post.title | slugify }}">
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </h2>

                <div class="meta">
                    <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                        {{ post.date | date: "%d/%m/%Y" }}
                    </time>
                    <span aria-hidden="true">·</span>
                    {% assign minutes = post.content | number_of_words | divided_by: 200 | plus: 1 %}
                    <span>Tiempo de lectura: {{ minutes }} min</span>
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
                    aria-label="Leer {{ post.title | escape }}">
                    Leer más
                </a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>