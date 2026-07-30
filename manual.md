---
layout: default
title: Manual de Hattrick
description: Guías detalladas para dominar Hattrick.
hero_image: /assets/img/hero-manual.webp
hero_alt: Banner del Manual de Hattrick
permalink: /manual/
image: /assets/img/hero-manual.webp
---

{% include hero.html
  image=page.hero_image
  alt=page.hero_alt
  title=page.title
  subtitle=page.description
  aria_label=page.title
%}

<section class="section" aria-labelledby="manual-heading">
  <div class="container">
    <header class="card-header">
      <h2 class="title is-2" id="manual-heading">Guías disponibles</h2>
    </header>

    <ul class="grid-base grid-fixed" aria-label="Guías del manual">
      {% assign manual_sorted = site.manual | sort: 'title' %}
      {% for manual in manual_sorted %}
        <li>
          <article class="card-base{% if manual.featured %} featured{% endif %}"
            aria-labelledby="manual-{{ manual.title | slugify }}">
            {% include card-image.html item=manual %}

            <h3 class="title is-3" id="manual-{{ manual.title | slugify }}">
              <a href="{{ manual.url | relative_url }}">{{ manual.title | escape }}</a>
            </h3>

            {% if manual.difficulty %}
            <span class="difficulty {{ manual.difficulty | downcase }}"
              aria-label="Dificultad: {{ manual.difficulty | escape }}">
              {{ manual.difficulty | escape }}
            </span>
            {% endif %}

            {% include post-meta.html post=manual %}

            <p>{{ manual.excerpt | strip_html | truncatewords: 25 }}</p>

            {% include post-tags.html tags=manual.tags %}

            {% include post-cta.html post=manual %}
          </article>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
