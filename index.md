---
layout: default
title: Hattrick Hub
permalink: /
description: Bienvenido a Hattrick Hub, tu centro definitivo para herramientas, noticias, guías y comunidad de Hattrick.
---

<section class="hero-section" aria-label="Bienvenido a Hattrick Hub">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>{{ site.title }}</h1>
    <p>Tu destino para dominar Hattrick con herramientas, guías, noticias y una comunidad vibrante. ¡Explora ahora!</p>
  </div>
</section>

<section class="featured-content" aria-label="Contenido destacado">
  <h2>Descubre Hattrick Hub</h2>
  <div class="content-grid">
    {% if site.data.menu %}
      {% assign menu_ordenado = site.data.menu | sort: "order" %}
      {% for item in menu_ordenado limit: 6 %}
        {% if item.visible and item.url != "/" %}
          <article class="component-base card" id="{{ item.name | slugify }}">
            {% if item.image %}
              <img src="{{ item.image | relative_url }}" alt="{{ item.name | escape }}" class="card-image" loading="lazy" decoding="async" />
            {% else %}
              <div class="card-image" aria-hidden="true">Sin imagen</div>
            {% endif %}
            <h3>{{ item.name }}</h3>
            <p id="desc-{{ item.name | slugify }}">{{ item.description | escape }}</p>
            <a href="{{ item.url | relative_url }}" class="btn btn-primary" aria-label="Explorar {{ item.name | escape }}" aria-describedby="desc-{{ item.name | slugify }}" title="{{ item.description | escape }}">Explorar {{ item.name }}</a>
          </article>
        {% endif %}
      {% endfor %}
    {% else %}
      <p>No hay contenido disponible.</p>
    {% endif %}
  </div>
</section>