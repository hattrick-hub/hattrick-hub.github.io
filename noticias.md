---
layout: default
title: Últimas Noticias de Hattrick
description: Mantente informado con las últimas noticias y actualizaciones de Hattrick.
hero_image: /assets/img/hero-noticias.webp
hero_alt: Banner de las Últimas Noticias de Hattrick
permalink: /noticias/
image: /assets/img/hero-noticias.webp
---

{% include hero.html
  image=page.hero_image
  alt=page.hero_alt
  title=page.title
  subtitle=page.description
  aria_label=page.title
%}

<section class="section" aria-labelledby="news-heading">
  <div class="container">
    <header class="card-header">
      <h2 class="title is-2" id="news-heading">Novedades recientes</h2>
    </header>

    <ul class="grid-base grid-fixed" aria-label="Noticias">
      {% assign noticias_sorted = site.noticias | sort: 'date' | reverse %}
      {% for noticia in noticias_sorted %}
        <li>
          <article class="card-base{% if noticia.featured %} featured{% endif %}"
            aria-labelledby="noticia-{{ noticia.title | slugify }}">
            {% include card-image.html item=noticia %}

            <h3 class="title is-3" id="noticia-{{ noticia.title | slugify }}">
              <a href="{{ noticia.url | relative_url }}">{{ noticia.title | escape }}</a>
            </h3>

            {% include post-meta.html post=noticia %}

            <p>{{ noticia.excerpt | strip_html | truncatewords: 30 }}</p>

            {% include post-tags.html tags=noticia.tags %}

            {% include post-cta.html post=noticia %}
          </article>
        </li>
      {% endfor %}
    </ul>

  {% include load-more.html items_per_load=8 %}

  </div>
</section>
