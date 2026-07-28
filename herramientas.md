---
layout: default
title: Herramientas de Hattrick
description: Recursos y aplicaciones para optimizar tu experiencia en Hattrick.
hero_image: /assets/img/hero-herramientas.webp
hero_alt: Banner de herramientas para Hattrick
permalink: /herramientas/
image: /assets/img/hero-herramientas.webp
---

{% include hero.html
  image=page.hero_image
  alt=page.hero_alt
  aria_label=page.title
%}

<section class="section" aria-labelledby="tools-heading">
  <div class="container">
    <header class="card-header">
      <h2 class="title is-2" id="tools-heading">Directorio de herramientas</h2>
      <p class="subtitle">Recursos para mejorar tu experiencia en Hattrick.</p>
      <p>Total: {{ site.herramientas | size }} herramientas</p>
    </header>

    <ul class="grid-base grid-fixed" aria-label="Herramientas disponibles">
      {% assign herramientas_sorted = site.herramientas | sort: 'date' | reverse %}
      {% for tool in herramientas_sorted %}
        <li>
          <article class="card-base{% if tool.featured %} featured{% endif %}"
            aria-labelledby="tool-{{ tool.title | slugify }}">
            {% include card-image.html item=tool %}

            <h3 class="title is-3" id="tool-{{ tool.title | slugify }}">
              <a href="{{ tool.url | relative_url }}">{{ tool.title | escape }}</a>
            </h3>
            {% include post-meta.html post=tool show_rating=true %}

            <p>{{ tool.excerpt | strip_html | truncatewords: 30 }}</p>

            {% include post-tags.html tags=tool.tags %}

            <div class="buttons">
              {% include post-cta.html post=tool %}

              {% if tool.external_url %}
                <a href="{{ tool.external_url }}" target="_blank" rel="noopener noreferrer" class="button is-secondary"
                  aria-label="Visitar {{ tool.title | strip_html | escape }} (abre en una pestaña nueva)">
                  {% include icon.html name="external" %}
                  <span>Visitar Sitio</span>
                </a>
              {% endif %}
            </div>
          </article>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>
