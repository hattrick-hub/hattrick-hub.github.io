---
layout: default
title: Abreviaturas de Hattrick
description: Significado de abreviaturas y términos usados en Hattrick.
hero_image: /assets/img/hero-abreviaturas.webp
hero_alt: Lista de abreviaturas de Hattrick
permalink: /abreviaturas/
image: /assets/img/hero-abreviaturas.webp
---

{% include hero.html
  image=page.hero_image
  alt=page.hero_alt
  title=page.title
  subtitle=page.description
  aria_label=page.title
%}

<div class="progress-bar" aria-hidden="true"></div>

<section class="section" aria-labelledby="abbr-heading">
  <div class="container">
    <header class="card-header">
      <h2 class="title is-2" id="abbr-heading">Glosario de términos</h2>
    </header>

    {% comment %} Buscador de abreviaturas {% endcomment %}
    <div class="search-bar" role="search" aria-label="Buscar abreviaturas">
      <label for="abbr-search" class="visually-hidden">Buscar abreviatura o término</label>
      <div class="search-input-wrapper">
        {% include icon.html name="search" %}
        <input type="search" id="abbr-search" class="search-input"
          placeholder="Buscar abreviatura o término..."
          autocomplete="off" aria-controls="abbr-results" />
        <button type="button" class="search-clear" aria-label="Limpiar búsqueda" hidden>
          {% include icon.html name="close" %}
        </button>
      </div>
      <p class="search-status" aria-live="polite" aria-atomic="true">
        <span class="search-count">{{ site.data.abreviaturas | size }} categorías</span>
      </p>
    </div>

    <div id="abbr-results">
      {% for category in site.data.abreviaturas %}
        <div class="category-section" data-category="{{ category.category | slugify }}">
          <h3 class="title is-3 category-title" id="{{ category.category | slugify }}">
            <span>Categoría:</span> {{ category.category | escape }}
          </h3>

          <ul class="grid-base grid-fluid" aria-label="{{ category.category | strip_html | escape }}">
            {% for item in category.list %}
              <li data-search-text="{{ item.name | escape }} {{ item.description | escape }} {% if item.tags %}{{ item.tags | join: ' ' | escape }}{% endif %}">
                <article class="card-base{% if item.featured %} featured{% endif %}"
                  aria-labelledby="abbr-{{ item.name | slugify }}">

                  <h4 class="title is-4" id="abbr-{{ item.name | slugify }}">
                    {{ item.name | strip_html | upcase | escape }}
                  </h4>

                  <p>{{ item.description | escape }}</p>

                  {% include post-tags.html tags=item.tags %}

                  {% if item.notes %}
                    <p class="notes">{{ item.notes | escape }}</p>
                  {% endif %}

                </article>
              </li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>

    <p class="no-results" hidden aria-live="assertive">
      No se encontraron abreviaturas para <strong class="search-term"></strong>.
    </p>
  </div>
</section>
