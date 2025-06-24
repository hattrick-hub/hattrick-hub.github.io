---
layout: default
title: "Contacto"
permalink: /contacto/
description: "Contacta con Hattrick Hub o únete a nuestra comunidad en Telegram y por Correo."
hero_image: /assets/img/hero-contact.webp
hero_alt: "Imagen de contacto de Hattrick Hub"
hide_news_bar: true
---

{% include hero.html
   image=page.hero_image
   alt=page.hero_alt
   aria_label="Página de Contacto de Hattrick Hub"
   buttons='
       <a href="mailto:tutorhattrick@hotmail.com" class="button is-primary" aria-label="Enviar un correo a Hattrick Hub">
           <svg class="icon is-small" aria-hidden="true">
               <use xlink:href="#email"></use>
           </svg> Envíanos un correo
       </a>'
%}

<section class="section section-1" role="region" aria-label="Contacto y Preguntas Frecuentes">
    <div class="container content">
        <h1>Preguntas frecuentes</h1>
        <details class="box" id="faq-1" aria-describedby="faq-1-content">
            <summary class="title is-3">
                <svg class="icon is-small" aria-hidden="true">
                    <use xlink:href="#chevron-right"></use>
                </svg>
                ¿En cuánto tiempo responden?
            </summary>
            <p id="faq-1-content">Respondemos en menos de 24 horas. Revisa tu carpeta de spam si no ves nuestra respuesta.</p>
        </details>
        <details class="box" id="faq-2" aria-describedby="faq-2-content">
            <summary class="title is-3">
                <svg class="icon is-small" aria-hidden="true">
                    <use xlink:href="#chevron-right"></use>
                </svg>
                ¿Puedo pedir asesoramiento sobre Hattrick?
            </summary>
            <p id="faq-2-content">¡Sí! Ofrecemos ayuda con estrategias y tácticas. Escríbenos por correo o Telegram.</p>
        </details>

        <h2>Contáctanos</h2>
        <p>En Hattrick Hub, valoramos tus ideas y sugerencias. Conéctate con nosotros a través de:</p>
        <ul class="flex" style="gap: var(--gap-md)" role="list" aria-label="Opciones de contacto">
            <li>
                <a href="mailto:tutorhattrick@hotmail.com" aria-label="Enviar correo a Hattrick Hub" class="button is-outlined">
                    <svg class="icon is-medium" aria-hidden="true">
                        <use xlink:href="#email"></use>
                    </svg> Correo: tutorhattrick@hotmail.com
                </a>
            </li>
            <li>
                <a href="https://t.me/hattrickhub" target="_blank" rel="noopener noreferrer" aria-label="Unirse al grupo de Telegram de Hattrick Hub" class="button is-outlined">
                    <svg class="icon is-medium" aria-hidden="true">
                        <use xlink:href="#telegram"></use>
                    </svg> Telegram
                </a>
            </li>
            <li>
                <a href="{{ site.author_team_url }}" target="_blank" rel="noopener noreferrer" aria-label="Visitar el equipo del autor en Hattrick" class="button is-outlined">
                    <svg class="icon is-small" aria-hidden="true">
                        <use xlink:href="#hattrick"></use>
                    </svg> Mi equipo en Hattrick
                </a>
            </li>
        </ul>
    </div>

</section>
