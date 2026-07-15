<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4
      | El componente formativo aborda el proceso de autoevaluación en acreditación en salud, destacando su importancia como herramienta para valorar el cumplimiento de los estándares de calidad mediante la aplicación de metodologías, herramientas y técnicas para la recolección, análisis e interpretación de información cualitativa y cuantitativa. Asimismo, desarrolla los fundamentos de la calificación de los resultados, incluyendo los criterios de valoración, los rangos, las puntuaciones y las medidas de tendencia central como apoyo para la toma de decisiones. Finalmente, presenta el plan de mejoramiento como un instrumento de gestión orientado a la formulación, registro, implementación y seguimiento de acciones que contribuyen al fortalecimiento de la calidad institucional y al mejoramiento continuo de los servicios de salud.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis del componente formativo sobre autoevaluación, calificación y mejoramiento en acreditación en salud.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
