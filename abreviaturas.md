---
layout: default
title: Abreviaturas de Hattrick
description: Significado de abreviaturas y términos usados en Hattrick.
hero_image: /assets/img/hero-abreviaturas.webp
hero_alt: Lista de abreviaturas de Hattrick
permalink: /abreviaturas/
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

    {% for category in site.data.abreviaturas %}
      <div class="category-section">
        <h3 class="title is-3 category-title" id="{{ category.category | slugify }}">
          <span>Categoría:</span> {{ category.category | escape }}
        </h3>

        <ul class="grid-base grid-fluid" aria-label="{{ category.category | strip_html | escape }}">
          {% for item in category.list %}
            <li>
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
</section>
