---
layout: default
title: "Contacto"
description: "Contacta con Hattrick Hub o únete a nuestra comunidad en Telegram y por correo."
hero_image: /assets/img/hero-contact.webp
hero_alt: "Imagen de contacto de Hattrick Hub"
hide_news_bar: true
permalink: /contacto/
image: /assets/img/hero-contact.webp
---

{% capture hero_buttons %}
<a href="#canales-contacto" class="button is-primary">
  {% include icon.html name="email" %}
  Escríbenos
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

<section id="canales-contacto" class="section" aria-labelledby="contacto-heading">
  <div class="container">
    <div class="content text-center">
      <h2 class="title is-2" id="contacto-heading">¿Necesitas hablar con el cuerpo técnico?</h2>
      <p>
        Estamos aquí para ayudarte. Ya sea que tengas una duda táctica,
        una sugerencia para el sitio o simplemente quieras charlar de Hattrick,
        <strong>tu mensaje es bienvenido</strong>.
      </p>
    </div>

    <ul class="feature-grid" aria-label="Canales de contacto">
      <li>
        <article class="feature-card">
          <div class="feature-icon">
            {% include icon.html name="email" size="medium" %}
          </div>
          <h3 class="feature-title">Correo electrónico</h3>
          <p class="feature-text">Respuesta en menos de 24 horas. Ideal para consultas detalladas y estrategias.</p>
          <a href="mailto:{{ site.contact_email }}" class="feature-link">
            Enviar email
            {% include icon.html name="chevron-right" %}
          </a>
        </article>
      </li>
      <li>
        <article class="feature-card">
          <div class="feature-icon">
            {% include icon.html name="telegram" size="medium" %}
          </div>
          <h3 class="feature-title">Telegram</h3>
          <p class="feature-text">Únete a la comunidad. Consejos, debates y ayuda en tiempo real de otros managers.</p>
          <a href="{{ site.telegram_group }}" target="_blank" rel="noopener noreferrer" class="feature-link">
            Unirme al grupo
            {% include icon.html name="external" %}
          </a>
        </article>
      </li>
      <li>
        <article class="feature-card">
          <div class="feature-icon">
            {% include icon.html name="hattrick" size="medium" %}
          </div>
          <h3 class="feature-title">Hattrick</h3>
          <p class="feature-text">Visita nuestro equipo en el juego. ¡Tal vez nos enfrentemos algún día!</p>
          <a href="{{ site.author_team_url }}" target="_blank" rel="noopener noreferrer" class="feature-link">
            Ver perfil
            {% include icon.html name="external" %}
          </a>
        </article>
      </li>
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="faq-heading">
  <div class="container content">
    <h2 class="title is-2" id="faq-heading">Preguntas frecuentes</h2>
    <p>Antes de escribir, quizás tu duda ya está resuelta aquí:</p>

    <details class="box">
      <summary>
        {% include icon.html name="chevron-right" %}
        ¿En cuánto tiempo responden?
      </summary>
      <p>Respondemos en menos de 24 horas. Revisa tu carpeta de spam si no ves nuestra respuesta.</p>
    </details>

    <details class="box">
      <summary>
        {% include icon.html name="chevron-right" %}
        ¿Puedo pedir asesoramiento sobre Hattrick?
      </summary>
      <p>¡Sí! Ofrecemos ayuda con estrategias, tácticas y juveniles. Escríbenos por correo o únete al grupo de Telegram.</p>
    </details>
  </div>
</section>
