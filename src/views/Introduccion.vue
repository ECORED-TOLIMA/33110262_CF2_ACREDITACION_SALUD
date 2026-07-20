<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 La acreditación en salud promueve una cultura de mejoramiento continuo, en la cual las instituciones evalúan de manera sistemática su desempeño para fortalecer la calidad de los servicios que ofrecen. En este contexto, la autoevaluación constituye una herramienta fundamental para identificar fortalezas, reconocer oportunidades de mejora y orientar la toma de decisiones sustentadas en evidencias.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.cols-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='')
      .col-lg-8
        p.mb-4 Este proceso integra metodologías, herramientas y técnicas para la recolección, el análisis y la interpretación de información cualitativa y cuantitativa, permitiendo valorar el grado de cumplimiento de los estándares de acreditación. La información obtenida facilita la comprensión del desempeño institucional y proporciona los elementos necesarios para emitir calificaciones objetivas y fundamentadas.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La calificación de los resultados constituye una etapa esencial dentro del proceso de autoevaluación, ya que permite valorar el nivel de cumplimiento alcanzado mediante criterios previamente establecidos. Para ello, se emplean herramientas de análisis e interpretación, así como medidas de tendencia central que contribuyen a comprender el comportamiento de los datos y respaldan la toma de decisiones.
    p A partir de los resultados obtenidos, se formula el plan de mejoramiento, en el cual se establecen acciones orientadas a fortalecer los procesos institucionales, corregir las brechas identificadas y realizar el seguimiento a las actividades implementadas. De esta manera, la autoevaluación, la calificación y el mejoramiento continuo se articulan como elementos fundamentales para consolidar una gestión de calidad y avanzar hacia el cumplimiento de los estándares de acreditación en salud.
    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-12
        figure
          .video
            iframe(width="1331" height="749" src="https://www.youtube.com/embed/5vpF0RvH5gY" title="Self-assessment, Qualification, and Improvement in Health Accreditation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
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
