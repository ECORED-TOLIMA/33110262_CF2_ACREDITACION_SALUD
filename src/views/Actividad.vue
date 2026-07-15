<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.cols-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/intro/img1.svg', alt='')
      .col-lg-8
        p La acreditación en salud constituye un proceso orientado al fortalecimiento de la calidad y el mejoramiento continuo en las instituciones prestadoras de servicios de salud. Su implementación se fundamenta en un marco normativo que establece principios, lineamientos y estándares para promover una atención segura, efectiva, oportuna y centrada en las personas.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 En Colombia, este proceso se articula con el Subsistema Nacional de Calidad (SNC), el Sistema Obligatorio de Garantía de la Calidad (SOGC) y el Sistema Único de Acreditación en Salud (SUA), los cuales establecen las bases para la evaluación, el seguimiento y el mejoramiento de la calidad en los servicios de salud. La comprensión de estos sistemas permite reconocer su estructura, alcance y contribución al fortalecimiento del desempeño institucional.
    p En este componente se abordarán los fundamentos normativos y estructurales de la acreditación en salud, incluyendo la normatividad aplicable, la articulación entre los sistemas de calidad, los estándares de acreditación, así como los procesos, procedimientos, herramientas y entes acreditadores que orientan su implementación en el contexto del sector salud.
    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-12
        figure
          .video
            iframe(width="1331" height="749" src="https://www.youtube.com/embed/AryEigIN0MI" title="Regulatory and Structural Fundamentals of Healthcare Accreditation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
