---
layout: default
title: "Acerca de Hattrick Hub"
description: "Hattrick Hub es tu espacio para dominar Hattrick con guías, análisis y herramientas."
hero_image: /assets/img/hero-about.webp
hero_alt: "Imagen representativa de Hattrick Hub"
hide_news_bar: true
permalink: /acerca-de/
image: /assets/img/hero-about.webp
---

{% capture hero_buttons %}
<a href="{{ '/manual/' | relative_url }}" class="button is-primary">
  {% include icon.html name="guide" %}
  Explorar guías
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

<section class="section" aria-labelledby="mision-heading">
  <div class="container">
    <div class="content text-center">
      <h2 class="title is-2" id="mision-heading">Nuestra misión</h2>
      <p>
        Hattrick Hub nació con una idea clara: <strong>que ningún manager se sienta solo en el banquillo</strong>.
        Queremos ser el aliado que te ayude a tomar mejores decisiones tácticas,
        a sacar el máximo provecho a tus juveniles y a disfrutar cada temporada al máximo.
      </p>
    </div>

    <section class="content text-center u-mt-6" aria-labelledby="razones-heading">
      <h3 class="title is-3" id="razones-heading">¿Por qué existe Hattrick Hub?</h3>
      <ul class="flex" aria-label="Razones de existencia de Hattrick Hub">
        <li class="list-item-icon">
          {% include icon.html name="guide" %}
          <span>Ofrecer contenido claro y útil para managers de todos los niveles, desde novatos hasta veteranos.</span>
        </li>
        <li class="list-item-icon">
          {% include icon.html name="tools" %}
          <span>Desarrollar herramientas que ahorren tiempo y revelen insights que el juego no muestra a simple vista.</span>
        </li>
        <li class="list-item-icon">
          {% include icon.html name="news" %}
          <span>Mantenerte al día con análisis, noticias y cambios del ecosistema Hattrick.</span>
        </li>
      </ul>
    </section>

    <section class="content text-center u-mt-6" aria-labelledby="vision-heading">
      <h2 class="title is-2" id="vision-heading">Nuestra visión</h2>
      <p>
        Soñamos con ser la <strong>referencia principal</strong> para managers de habla hispana.
        Un lugar donde encontrar no solo información, sino una comunidad que comparte tu pasión
        por el fútbol virtual más adictivo de internet.
      </p>
    </section>

    <div class="box u-mt-6">
      <div class="content">
        <h2 class="title is-2">Sobre el autor</h2>
        <p>
          ¡Hola! Soy <strong>{{ site.author | default: "el equipo de Hattrick Hub" }}</strong>,
          apasionado por Hattrick desde hace años. He vivido de todo: promoción de juveniles,
          selecciones nacionales, tácticas imposibles y derrotas inesperadas en el minuto 90.
          Este sitio es mi forma de devolverle a la comunidad todo lo que he aprendido.
        </p>
        {% if site.author_team_url %}
        <div class="buttons">
          <a href="{{ site.author_team_url }}" target="_blank" rel="noopener noreferrer" class="button is-outlined">
            {% include icon.html name="hattrick" %}
            Mi equipo en Hattrick
          </a>
        </div>
        {% endif %}
      </div>
    </div>

    <div class="buttons text-center u-mt-6">
      <a href="{{ '/herramientas/' | relative_url }}" class="button is-primary">
        {% include icon.html name="tools" %}
        Explora nuestras herramientas
      </a>
      <a href="{{ '/noticias/' | relative_url }}" class="button is-secondary">
        {% include icon.html name="news" %}
        Lee las últimas noticias
      </a>
    </div>
  </div>
</section>
