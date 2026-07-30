---
layout: default
title: Blog de Hattrick
description: Artículos, análisis y estrategias para mejorar tu experiencia en Hattrick.
hero_image: /assets/img/hero-blog.webp
hero_alt: Banner del Blog de Hattrick
permalink: /blog/
image: /assets/img/hero-blog.webp
---

{% include hero.html
  image=page.hero_image
  alt=page.hero_alt
  title=page.title
  subtitle=page.description
  aria_label=page.title
%}

<section class="section" aria-labelledby="blog-heading">
  <div class="container">
    <header class="card-header">
      <h2 class="title is-2" id="blog-heading">Últimos artículos</h2>
    </header>

    <ul class="grid-base grid-fixed" aria-label="Todos los artículos">
      {% assign posts_sorted = site.blog | sort: 'date' | reverse %}
      {% for post in posts_sorted %}
        <li>
          <article class="card-base{% if post.featured %} featured{% endif %}"
            aria-labelledby="post-{{ post.title | slugify }}">

            {% include card-image.html item=post %}

            <h3 class="title is-3" id="post-{{ post.title | slugify }}">
              <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
            </h3>

            {% include post-meta.html post=post show_updated=false %}

            <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>

            {% include post-tags.html tags=post.tags %}
            {% include post-cta.html post=post %}

          </article>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
