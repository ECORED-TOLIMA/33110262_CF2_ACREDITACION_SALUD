<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Proceso de autoevaluación

    p.mb-4 El proceso de autoevaluación constituye una práctica sistemática mediante la cual las instituciones prestadoras de servicios de salud analizan su desempeño frente a los estándares de acreditación, con el propósito de identificar fortalezas, reconocer oportunidades de mejora y promover el mejoramiento continuo de la calidad. Este ejercicio permite valorar de manera objetiva el grado de cumplimiento de los criterios establecidos y generar información útil para la toma de decisiones.
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La #[b autoevaluación] se desarrolla mediante la aplicación de metodologías, herramientas y criterios técnicos que facilitan la recolección, el análisis y la interpretación de información relacionada con los procesos institucionales. Para ello, se consideran tanto datos cualitativos como cuantitativos, los cuales permiten comprender el desempeño de la organización desde diferentes perspectivas y fundamentar la evaluación en evidencias verificables.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Etapas generales del proceso de autoevaluación
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='En la figura 1 se presentan las etapas generales del proceso de autoevaluación, desde la planificación hasta la formulación de acciones de mejoramiento.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img2_1.svg', alt='En la figura 1 se presentan las etapas generales del proceso de autoevaluación, desde la planificación hasta la formulación de acciones de mejoramiento.')
    
    p.mb-4 Además de preparar a la institución para los procesos de evaluación externa, la autoevaluación fortalece la cultura organizacional al promover la participación del talento humano, el análisis crítico de los resultados y la implementación de acciones orientadas al mejoramiento continuo. De esta manera, se convierte en un mecanismo que favorece el fortalecimiento de la calidad, la seguridad del paciente y la prestación de servicios de salud centrados en las necesidades de las personas.
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img3.svg', alt='')
          .col-lg-10
            .p-4.p-lg-2.bg1
              p.mb-0 Comprender el proceso de autoevaluación implica conocer sus fundamentos, las metodologías empleadas para su desarrollo, las herramientas utilizadas, la forma de recolectar e interpretar la información y los factores que contribuyen a realizar una evaluación objetiva y efectiva.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Concepto e importancia

    p.mb-4 La autoevaluación es un proceso sistemático, participativo y continuo mediante el cual una institución prestadora de servicios de salud analiza su desempeño frente a los estándares de acreditación, con el propósito de determinar el grado de cumplimiento de los criterios establecidos e identificar oportunidades de mejora. Este proceso se fundamenta en la recopilación y el análisis de evidencias objetivas que permiten valorar el funcionamiento de los procesos institucionales y orientar la toma de decisiones.
    .bg3.mb-4
      .row.justify-content-center
        .col-lg-5
          img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen ilustrativa')
        .col-lg-7.p-4
          .row
            .col-lg-auto.mb-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='Imagen ilustrativa')
            .col-lg-12
              p.mb-0 La autoevaluación constituye uno de los pilares del Sistema Único de Acreditación en Salud (SUA), ya que permite a las instituciones conocer su situación actual antes de una evaluación externa y fortalecer una cultura organizacional orientada al mejoramiento continuo. Asimismo, favorece la identificación de fortalezas, la detección de brechas y la implementación de acciones encaminadas a optimizar la calidad de la atención y la seguridad del paciente.
    p.mb-4 Su importancia radica en que promueve una evaluación objetiva del desempeño institucional, facilitando la planificación de acciones de mejora sustentadas en información confiable y verificable. Además, fortalece el compromiso del talento humano con la calidad, fomenta la participación de las diferentes áreas de la organización y contribuye al cumplimiento de los estándares establecidos para la acreditación en salud.
    p.mb-4 Entre los principales beneficios de la autoevaluación se destacan:
    .BG01.px-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img6.png", alt="alt").img400.m-auto
        .col-lg-8
          SlyderF.custom.mb-5.p-4(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg7.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema1/img7.svg", alt="alt").img100.m-auto
              p.text-center.mb-5 Fortalecer la toma de decisiones basada en evidencias.
            .tarjeta.bg7.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema1/img8.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Identificar fortalezas y oportunidades de mejora.
            .tarjeta.bg7.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema1/img9.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Valorar el cumplimiento de los estándares de acreditación.
            .tarjeta.bg7.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Promover la participación del talento humano.
            .tarjeta.bg7.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Impulsar el mejoramiento continuo de los procesos institucionales.
            .tarjeta.bg7.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt").img100.m-auto
              p.text-center.mb-0 Favorecer la preparación para la evaluación externa.
            
    p.mb-0 La autoevaluación constituye, por tanto, un mecanismo que permite a las instituciones conocer su nivel de desempeño, orientar la formulación de planes de mejoramiento y fortalecer la calidad de los servicios de salud en beneficio de las personas usuarias.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Metodologías y abordaje

    p.mb-4 La autoevaluación en acreditación en salud se desarrolla mediante metodologías que orientan la planificación, ejecución y análisis del proceso de evaluación institucional. Estas metodologías proporcionan una estructura organizada para valorar el cumplimiento de los estándares de acreditación, facilitando la identificación de fortalezas, oportunidades de mejora y acciones orientadas al fortalecimiento de la calidad en la prestación de los servicios de salud.
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/tema1/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El abordaje metodológico se fundamenta en un análisis integral de la institución, considerando los procesos estratégicos, misionales y de apoyo, así como la información obtenida a partir de documentos, registros, indicadores y demás evidencias que permitan valorar objetivamente el desempeño institucional. Este enfoque favorece una comprensión amplia de la organización y facilita la toma de decisiones sustentadas en información confiable.
    
    p Durante el proceso de autoevaluación es importante aplicar una metodología que garantice la participación de las diferentes áreas de la institución y el uso de criterios homogéneos para la valoración de los estándares. Esto permite obtener resultados consistentes, comparables y útiles para la formulación de acciones de mejoramiento.
    p.mb-4 De manera general, una metodología de autoevaluación comprende las siguientes etapas:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Etapas generales de una metodología de autoevaluación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Etapa
                  th
                    | Descripción
              tbody
                tr
                  td
                    | Planificación
                  td
                    | Definir el alcance, los responsables, el cronograma y los recursos necesarios para desarrollar la autoevaluación.
                tr
                  td
                    | Recolección de información
                  td
                    | Obtener evidencias mediante documentos, registros, indicadores, observación y otras fuentes de información.
                tr
                  td
                    | Análisis de la información
                  td
                    | Comparar las evidencias con los estándares de acreditación para determinar el nivel de cumplimiento.
                tr
                  td
                    | Valoración de resultados
                  td
                    | Interpretar los resultados obtenidos e identificar fortalezas y oportunidades de mejora.
                tr
                  td
                    | Formulación de acciones
                  td
                    | Definir acciones orientadas al mejoramiento continuo con base en los resultados de la autoevaluación.
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img14.svg', alt='')
          .col-lg-10
            .p-4.p-lg-2.bg1
              p.mb-0 La aplicación de una metodología estructurada fortalece la objetividad del proceso de autoevaluación, facilita la organización de la información y contribuye a que las decisiones institucionales se fundamenten en evidencias verificables y en el análisis de los resultados obtenidos.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Herramientas para la autoevaluación

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg0
        img(src='@/assets/curso/temas/tema1/img15.svg', alt='')
      .col-lg-8
        p Las herramientas para la autoevaluación son los instrumentos que permiten recopilar, organizar, analizar y documentar la información necesaria para valorar el cumplimiento de los estándares de acreditación. Su utilización facilita el desarrollo de un proceso estructurado, objetivo y basado en evidencias, contribuyendo a que los resultados obtenidos reflejen de manera confiable el desempeño institucional.
        .cajon.color-secundario.p-3
          p.mb-0 Estas herramientas apoyan las diferentes etapas de la autoevaluación, desde la planificación hasta el análisis de los resultados, permitiendo identificar fortalezas, detectar oportunidades de mejora y orientar la formulación de acciones encaminadas al fortalecimiento de la calidad en la prestación de los servicios de salud.
    p La selección de las herramientas depende de las características de la institución, del alcance de la evaluación y de la información que se requiere analizar. No obstante, existen instrumentos ampliamente utilizados durante los procesos de autoevaluación.
    p.mb-4 Las herramientas más utilizadas en el proceso de autoevaluación son:
    .row.justify-content-center.align-items-center.mb-5.d-lg-none
      .col-lg-12
        .tarjeta--boton.bg5.p-4.mb-4
          .row.justify-content-center.mb-3
            .col
              figure
                img(src='@/assets/curso/temas/tema1/img16.png', alt='Texto que describa la imagen')
          h4.mb-3 Listas de verificación
          p.mb-0 Comprobar el cumplimiento de criterios y estándares de acreditación.
        .tarjeta--boton.bg5.p-4.mb-4
          .row.justify-content-center.mb-3
            .col
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen')
          h4.mb-3 Formatos de autoevaluación
          p.mb-0 Registrar de manera organizada la información obtenida durante la evaluación.
        .tarjeta--boton.bg5.p-4.mb-4
          .row.justify-content-center.mb-3
            .col
              figure
                img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')
          h4.mb-3 Indicadores de gestión
          p.mb-0 Medir el desempeño de los procesos mediante datos cuantitativos.
        .tarjeta--boton.bg5.p-4.mb-4
          .row.justify-content-center.mb-3
            .col
              figure
                img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')
          h4.mb-3 Matrices de análisis
          p.mb-0 Relacionar evidencias, hallazgos y oportunidades de mejora.
        .tarjeta--boton.bg5.p-4.mb-4
          .row.justify-content-center.mb-3
            .col
              figure
                img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen')
          h4.mb-3 Registros institucionales
          p.mb-0 Documentar actividades, resultados y evidencias del proceso de evaluación.
        .tarjeta--boton.bg5.p-4.mb-4
          .row.justify-content-center.mb-3
            .col
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')
          h4.mb-3 Entrevistas y observación directa
          p.mb-0 Obtener información cualitativa sobre el desarrollo de los procesos y la prestación de los servicios.
        

    .row.justify-content-center.d-none.d-lg-flex
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img16.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Listas de verificación
            p.mb-0 Comprobar el cumplimiento de criterios y estándares de acreditación.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img17.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Formatos de autoevaluación
            p.mb-0 Registrar de manera organizada la información obtenida durante la evaluación.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img18.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Indicadores de gestión
            p.mb-0 Medir el desempeño de los procesos mediante datos cuantitativos.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img19.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Matrices de análisis
            p.mb-0 Relacionar evidencias, hallazgos y oportunidades de mejora.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Registros institucionales
            p.mb-0 Documentar actividades, resultados y evidencias del proceso de evaluación.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Entrevistas y observación directa
            p.mb-0 Obtener información cualitativa sobre el desarrollo de los procesos y la prestación de los servicios.

    p.mb-0 La aplicación articulada de estas herramientas fortalece la confiabilidad de la información, facilita la interpretación de los resultados y proporciona evidencias que respaldan la toma de decisiones orientadas al mejoramiento continuo de la institución.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Recolección de datos cualitativos y cuantitativos
    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 La recolección de datos constituye una etapa fundamental del proceso de autoevaluación, ya que permite obtener información confiable para valorar el cumplimiento de los estándares de acreditación y respaldar la toma de decisiones. Este proceso consiste en identificar, recopilar y organizar la información proveniente de diferentes fuentes institucionales, garantizando que las evidencias sean suficientes, pertinentes y verificables.
        .cajon.color-primario.mb-4.p-3
          p.mb-0 Para desarrollar una autoevaluación objetiva, es necesario integrar datos cualitativos y cuantitativos, ya que ambos proporcionan información complementaria sobre el desempeño institucional. Mientras los datos cualitativos permiten comprender cómo se desarrollan los procesos y cuáles son las condiciones que influyen en ellos, los datos cuantitativos facilitan la medición de resultados mediante valores numéricos e indicadores.
        p.mb-0 La combinación de estos tipos de datos ofrece una visión integral de la organización, permitiendo analizar tanto las características de los procesos como los resultados alcanzados. De esta manera, es posible identificar fortalezas, reconocer oportunidades de mejora y sustentar las conclusiones de la autoevaluación con evidencias objetivas.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema1/img22.png', alt='')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Características de los datos cualitativos y cuantitativos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Tipo de dato
                  th
                    | Características
                  th
                    | Ejemplos
              tbody
                tr
                  td
                    | Cualitativos
                  td
                    | Describen características, procesos, percepciones y condiciones institucionales.
                  td
                    | Entrevistas, observaciones, revisión documental, actas, protocolos y procedimientos.
                tr
                  td
                    | Cuantitativos
                  td
                    | Expresan información mediante valores numéricos que permiten medir y comparar resultados.
                  td
                    | Indicadores, porcentajes, frecuencias, tiempos de atención y número de eventos reportados.
    p.mb-0 La adecuada recolección y organización de los datos fortalece la confiabilidad del proceso de autoevaluación y facilita el análisis e interpretación de la información, contribuyendo a formular acciones de mejoramiento sustentadas en evidencias verificables.

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Interpretación de resultados
    .bloque-texto-g.bloque-texto-g--inverso.bg2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/tema1/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interpretación de resultados corresponde a la etapa del proceso de autoevaluación en la que la información recopilada se analiza para determinar el nivel de cumplimiento de los estándares de acreditación y comprender el desempeño institucional. Este proceso permite transformar los datos obtenidos en información útil para la toma de decisiones y la formulación de acciones de mejoramiento.
    p.mb-4 La interpretación integra el análisis de los datos cualitativos y cuantitativos, estableciendo relaciones entre los resultados obtenidos, los procesos evaluados y las evidencias recopiladas. De esta manera, es posible identificar fortalezas, reconocer oportunidades de mejora y determinar aquellos aspectos que requieren intervención para fortalecer la calidad de los servicios de salud.
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-gg.bg6
          .bloque-texto-gg__texto.p-4
            p.mb-0 Para garantizar la objetividad de la interpretación, es necesario fundamentar las conclusiones en evidencias verificables, aplicar criterios de evaluación previamente establecidos y considerar el contexto en el que se desarrollan los procesos institucionales. Esto contribuye a emitir valoraciones coherentes y evita que las decisiones se basen únicamente en apreciaciones subjetivas.
          .bloque-texto-gg__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/tema1/img24.svg')})`}"
          )
    p.mb-4
      | La interpretación adecuada de los resultados constituye la base para la calificación del desempeño institucional y para la formulación de planes de mejoramiento orientados al fortalecimiento de la calidad, la seguridad del paciente y el cumplimiento de los estándares de acreditación.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Proceso de interpretación de resultados en la autoevaluación
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img25.svg', alt='En la figura 2 se presenta el proceso de interpretación de resultados durante la autoevaluación, desde la recolección de datos hasta la formulación de acciones de mejoramiento.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img25_1.svg', alt='En la figura 2 se presenta el proceso de interpretación de resultados durante la autoevaluación, desde la recolección de datos hasta la formulación de acciones de mejoramiento.')
    
    p.mb-0 La interpretación de resultados permite comprender el significado de la información obtenida durante la autoevaluación y orientar decisiones encaminadas al fortalecimiento de la gestión institucional y al mejoramiento continuo de la calidad en la prestación de los servicios de salud.

    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.6 Factores clave para una autoevaluación efectiva
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require_src('@/assets/curso/img26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una autoevaluación efectiva depende de la planificación, la participación y el compromiso de toda la institución. Para que este proceso produzca información confiable y útil para la toma de decisiones, es necesario aplicar criterios objetivos, utilizar evidencias verificables y promover una cultura organizacional orientada al mejoramiento continuo. Estos factores favorecen la obtención de resultados consistentes y fortalecen la calidad de los procesos institucionales.
    p.mb-4
      | Los principales factores que contribuyen al desarrollo de una autoevaluación efectiva son los siguientes:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.bg9.p-4
        .row.justify-content-center.w-100
          .col-7
            img(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop')
        h4.text-center.text-black Liderazgo institucional
        p.mb-5 La alta dirección orienta el proceso, promueve la participación del personal y facilita la disponibilidad de recursos para desarrollar la autoevaluación.
      .tarjeta.bg9.p-4
        .row.justify-content-center.w-100
          .col-7
            img(src='@/assets/curso/temas/tema1/img28.svg' alt='AvatarTop')
        h4.text-center.text-black Participación del talento humano
        p.mb-5 La colaboración de los diferentes equipos de trabajo permite obtener información desde distintas perspectivas y fortalece el compromiso con la calidad.
      .tarjeta.bg9.p-4
        .row.justify-content-center.w-100
          .col-7
            img(src='@/assets/curso/temas/tema1/img29.svg' alt='AvatarTop')
        h4.text-center.text-black Uso de evidencias objetivas
        p.mb-5 Las conclusiones deben fundamentarse en documentos, registros, indicadores y demás evidencias verificables que respalden la evaluación.
      .tarjeta.bg9.p-4
        .row.justify-content-center.w-100
          .col-7
            img(src='@/assets/curso/temas/tema1/img30.svg' alt='AvatarTop')
        h4.text-center.text-black Comunicación entre las áreas
        p.mb-5 El intercambio de información favorece la coordinación de actividades, la identificación de oportunidades de mejora y la construcción de soluciones conjuntas.
      .tarjeta.bg9.p-4
        .row.justify-content-center.w-100
          .col-7
            img(src='@/assets/curso/temas/tema1/img31.svg' alt='AvatarTop')
        h4.text-center.text-black Planificación del proceso
        p.mb-5 Definir responsables, cronogramas, metodologías y recursos facilita el desarrollo ordenado de la autoevaluación.
      .tarjeta.bg9.p-4
        .row.justify-content-center.w-100
          .col-7
            img(src='@/assets/curso/temas/tema1/img32.svg' alt='AvatarTop')
        h4.text-center.text-black Compromiso con el mejoramiento continuo
        p.mb-5 La institución utiliza los resultados de la autoevaluación para implementar acciones de mejora y fortalecer permanentemente la calidad de los servicios.
    p.mb-4
      | La integración de estos factores favorece el desarrollo de una autoevaluación objetiva, participativa y orientada al aprendizaje institucional. Asimismo, fortalece la capacidad de la organización para identificar oportunidades de mejora, optimizar sus procesos y avanzar hacia el cumplimiento de los estándares de acreditación en salud.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
