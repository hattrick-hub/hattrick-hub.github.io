---
layout: default
title: Hattrick Hub
description: "Estrategias, herramientas y guías para dominar Hattrick. Mejora tu equipo con análisis tácticos, noticias y recursos especializados."
hero_image: /assets/img/hero-home.webp
hero_alt: "Banner de Hattrick Hub con ilustración de estrategia futbolística"
hide_news_bar: true
---

{% capture hero_buttons %}
<a href="{{ '/herramientas/' | relative_url }}" class="button is-primary">
  {% include icon.html name="tools" %}
  Explorar herramientas
</a>
<a href="{{ '/blog/' | relative_url }}" class="button is-secondary">
  {% include icon.html name="blog" %}
  Leer el blog
</a>
{% endcapture %}

{% include hero.html
  image=page.hero_image
  alt=page.hero_alt
  title=page.title
  subtitle=page.description
  aria_label=page.title
  buttons=hero_buttons
%}

<section class="section" aria-labelledby="features-heading">
  <div class="container text-center">
    <div class="content">
      <h2 id="features-heading">Todo lo que necesitas para dominar Hattrick, en un solo lugar</h2>
      <p>
        Deja de perder partidos por falta de información. Aquí encontrás guías probadas, herramientas de análisis y noticias que te mantienen un paso adelante de la competencia.
      </p>
    </div>
  </div>

  <ul class="feature-grid" aria-label="Características principales de Hattrick Hub">
    <li>
      <article class="feature-card">
        <div class="feature-icon">
          {% include icon.html name="guide" size="medium" %}
        </div>
        <h3 class="feature-title">
          <a href="{{ '/manual/' | relative_url }}">Guías detalladas</a>
        </h3>
        <p class="feature-text">Estrategias paso a paso que puedes aplicar desde hoy. De principiante a avanzado, sin dar rodeos.</p>
        <a href="{{ '/manual/' | relative_url }}" class="feature-link">
          Ver manual
        </a>
      </article>
    </li>
    <li>
      <article class="feature-card">
        <div class="feature-icon">
          {% include icon.html name="news" size="medium" %}
        </div>
        <h3 class="feature-title">
          <a href="{{ '/noticias/' | relative_url }}">Noticias que importan</a>
        </h3>
        <p class="feature-text">Actualizaciones del juego, cambios de mecánicas y eventos. Enterate antes que el resto y adaptá tu estrategia a tiempo.</p>
        <a href="{{ '/noticias/' | relative_url }}" class="feature-link">
          Ver noticias
        </a>
      </article>
    </li>
    <li>
      <article class="feature-card">
        <div class="feature-icon">
          {% include icon.html name="blog" size="medium" %}
        </div>
        <h3 class="feature-title">
          <a href="{{ '/blog/' | relative_url }}">Análisis tácticos</a>
        </h3>
        <p class="feature-text">Juveniles, entrenamiento, formaciones y economía. Artículos con datos reales, no opiniones al aire.</p>
        <a href="{{ '/blog/' | relative_url }}" class="feature-link">
          Ver blog
        </a>
      </article>
    </li>
    <li>
      <article class="feature-card">
        <div class="feature-icon">
          {% include icon.html name="tools" size="medium" %}
        </div>
        <h3 class="feature-title">
          <a href="{{ '/herramientas/' | relative_url }}">Herramientas útiles</a>
        </h3>
        <p class="feature-text">Calculadoras, trackers y recursos externos curados. Lo que te ahorra horas de trabajo manual.</p>
        <a href="{{ '/herramientas/' | relative_url }}" class="feature-link">
          Ver herramientas
        </a>
      </article>
    </li>
    <li>
      <article class="feature-card">
        <div class="feature-icon">
          {% include icon.html name="abbr" size="medium" %}
        </div>
        <h3 class="feature-title">
          <a href="{{ '/abreviaturas/' | relative_url }}">Glosario de términos</a>
        </h3>
        <p class="feature-text">PIC, espíritu, entrenamiento escalonado... si no sabés qué significa, lo tenés explicado en cristiano.</p>
        <a href="{{ '/abreviaturas/' | relative_url }}" class="feature-link">
          Ver abreviaturas
        </a>
      </article>
    </li>
  </ul>
</section>
