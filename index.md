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
    {% assign menu_ordenado = site.data.menu | sort: "order" %}
    {% for item in menu_ordenado %}
      {% if item.visible and item.url != "/" %}
      <article class="card">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description | escape }}</p>
        <a href="{{ item.url | relative_url }}" class="btn btn-primary" aria-label="Explorar {{ item.name | escape }}" title="{{ item.description | escape }}">Explorar {{ item.name }}</a>
      </article>
      {% endif %}
    {% endfor %}
  </div>
</section>
