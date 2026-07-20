<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Calificación en los procesos de acreditación

    p.mb-4
      | La calificación en los procesos de acreditación corresponde a la etapa en la que se valoran los resultados obtenidos durante la autoevaluación, con el propósito de determinar el nivel de cumplimiento de los estándares establecidos. Este proceso permite transformar la información analizada en una valoración objetiva que refleja el desempeño institucional y orienta la toma de decisiones para el mejoramiento continuo.
    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La calificación se fundamenta en el análisis de evidencias verificables y en la aplicación de criterios previamente definidos, garantizando que los resultados sean consistentes, comparables y acordes con la realidad de la institución. Para ello, se consideran tanto los aspectos cualitativos como los cuantitativos identificados durante la autoevaluación, permitiendo obtener una visión integral del cumplimiento de los estándares de acreditación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Proceso general de calificación en la acreditación
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img2.svg', alt='En la figura 3 se presenta el proceso general de calificación en la acreditación en salud, desde la valoración de las evidencias obtenidas en la autoevaluación hasta la formulación del plan de mejoramiento.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img2_1.svg', alt='En la figura 3 se presenta el proceso general de calificación en la acreditación en salud, desde la valoración de las evidencias obtenidas en la autoevaluación hasta la formulación del plan de mejoramiento.')

    p.mb-4 Además de determinar el nivel de desempeño alcanzado, la calificación facilita la identificación de fortalezas, oportunidades de mejora y prioridades de intervención. Los resultados obtenidos constituyen un insumo fundamental para la formulación del plan de mejoramiento, ya que permiten establecer acciones orientadas a fortalecer la calidad de los procesos y la seguridad en la prestación de los servicios de salud.
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img3.svg', alt='')
          .col-lg-10
            .bg1.p-4.p-lg-2
              p.mb-0 Comprender el proceso de calificación implica conocer los criterios de valoración, los rangos y puntuaciones utilizados para evaluar el cumplimiento de los estándares, así como las medidas de tendencia central y la interpretación de los resultados.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Concepto y valoración
    p.mb-4 La calificación es el proceso mediante el cual se asigna una valoración al nivel de cumplimiento de los estándares de acreditación, a partir del análisis de las evidencias obtenidas durante la autoevaluación. Su propósito es determinar, de manera objetiva y sistemática, el desempeño de la institución frente a los criterios establecidos, facilitando la identificación de fortalezas y oportunidades de mejora.
    .row.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema2/img4.png', alt='')
      .col-lg-7
        .cajon.color-primario.p-3.mb-4
          p.mb-0 La valoración se realiza considerando la información recopilada mediante documentos, registros, indicadores, observaciones y demás evidencias verificables. Estos elementos permiten emitir juicios fundamentados sobre el grado de cumplimiento de cada estándar, garantizando que los resultados reflejen la realidad de los procesos institucionales y no apreciaciones subjetivas.
        p.mb-0 Durante este proceso, es fundamental aplicar criterios homogéneos que permitan evaluar de manera consistente todos los estándares. Esto favorece la objetividad de la calificación, facilita la comparación de resultados entre diferentes áreas o procesos y fortalece la confiabilidad de la información utilizada para la toma de decisiones.
    p.mb-4 La valoración obtenida no representa un fin en sí misma, sino un insumo para orientar la formulación de acciones de mejoramiento, priorizar intervenciones y fortalecer la gestión de la calidad. De esta manera, la calificación contribuye a consolidar una cultura institucional enfocada en el aprendizaje, la mejora continua y el cumplimiento de los estándares de acreditación en salud.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Elementos considerados en la valoración de los estándares
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Elemento
                  th
                    | Finalidad
              tbody
                tr
                  td
                    | Evidencias verificables
                  td
                    | Sustentar objetivamente la valoración del cumplimiento de los estándares.
                tr
                  td
                    | Criterios de evaluación
                  td
                    | Orientar la aplicación uniforme de la calificación.
                tr
                  td
                    | Información cualitativa y cuantitativa
                  td
                    | Proporcionar una visión integral del desempeño institucional.
                tr
                  td
                    | Análisis de resultados
                  td
                    | Identificar fortalezas, oportunidades de mejora y aspectos prioritarios de intervención.
    p.mb-0 La aplicación de estos elementos favorece una valoración objetiva, consistente y orientada al mejoramiento continuo, proporcionando información confiable para las siguientes etapas del proceso de acreditación.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Rangos y puntuaciones

    p.mb-4 Los rangos y puntuaciones constituyen criterios utilizados para expresar el nivel de cumplimiento alcanzado durante la evaluación de los estándares de acreditación. Su finalidad es proporcionar una valoración objetiva y uniforme que facilite el análisis del desempeño institucional, la comparación de resultados y la identificación de oportunidades de mejora.
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema2/img5.png', alt='')
      .col-lg-8
        .cajon.color-secundario.p-lg-3.p-4.mb-4
          p.mb-0 La asignación de una puntuación se realiza con base en las evidencias recopiladas durante la autoevaluación y en los criterios establecidos para cada estándar. De esta manera, la calificación refleja el grado de cumplimiento observado y permite determinar si los procesos institucionales responden adecuadamente a los requisitos definidos dentro del Sistema Único de Acreditación en Salud (SUA).
        p.mb-4 Los rangos facilitan la interpretación de las puntuaciones obtenidas, ya que agrupan los resultados según niveles de desempeño previamente establecidos. Esta clasificación permite reconocer aquellas áreas que presentan un alto nivel de cumplimiento, así como aquellas que requieren fortalecer sus procesos mediante acciones de mejoramiento. En consecuencia, los rangos no deben interpretarse únicamente como una calificación numérica, sino como una herramienta para orientar la gestión institucional y priorizar las decisiones relacionadas con la calidad.
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img6.svg', alt='')
          .col-lg-10
            p.mb-0 Es importante señalar que las escalas de calificación pueden variar de acuerdo con la metodología de evaluación adoptada por la institución o con los lineamientos establecidos para el proceso de acreditación. Sin embargo, todas buscan garantizar que la valoración se realice de manera objetiva, transparente y sustentada en evidencias verificables.
    p.mb-4 A continuación, se presenta un ejemplo de clasificación de los resultados obtenidos durante una autoevaluación:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Ejemplo de rangos de valoración en un proceso de autoevaluación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Rango de cumplimiento
                  th
                    | Interpretación
              tbody
                tr
                  td
                    | Alto
                  td
                    | El estándar se cumple de manera consistente y evidencia buenas prácticas institucionales.
                tr
                  td
                    | Medio
                  td
                    | El estándar presenta un cumplimiento parcial y requiere fortalecer algunos aspectos para alcanzar un mejor desempeño.
                tr
                  td
                    | Bajo
                  td
                    | El estándar presenta debilidades importantes y demanda acciones de mejoramiento prioritarias.
    p.mb-4
      | La utilización de rangos facilita la comunicación de los resultados y permite que los equipos de trabajo comprendan con mayor claridad el nivel de desempeño alcanzado. Asimismo, favorece la priorización de las acciones de mejora y el seguimiento a los avances obtenidos durante los procesos de autoevaluación.
    p.mb-4
      | En algunos procesos de evaluación, además de los rangos, se emplean puntuaciones numéricas para representar el grado de cumplimiento de los estándares. Estas puntuaciones permiten realizar análisis comparativos, consolidar resultados institucionales y aplicar herramientas estadísticas que facilitan la interpretación de la información.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Ejemplo de puntuaciones aplicadas a la evaluación de estándares
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Puntuación
                  th
                    | Nivel de cumplimiento
                  th
                    | Descripción
              tbody
                tr
                  td
                    | 5
                  td
                    | Muy alto
                  td
                    | El estándar se cumple plenamente y evidencia prácticas consolidadas.
                tr
                  td
                    | 4
                  td
                    | Alto
                  td
                    | El estándar presenta un alto nivel de cumplimiento con oportunidades menores de mejora.
                tr
                  td
                    | 3
                  td
                    | Medio
                  td
                    | El estándar cumple parcialmente y requiere fortalecer algunos procesos.
                tr
                  td
                    | 2
                  td
                    | Bajo
                  td
                    | El cumplimiento es limitado y demanda acciones de mejora importantes.
                tr
                  td
                    | 1
                  td
                    | Muy bajo
                  td
                    | El estándar presenta incumplimientos significativos y requiere intervención prioritaria.
    p.mb-0 Es importante recordar que la escala presentada corresponde únicamente a un ejemplo. En la práctica, las instituciones deben aplicar la metodología y los criterios de valoración definidos para el proceso de acreditación correspondiente.
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Medidas de tendencia central

    p.mb-4 Las medidas de tendencia central son herramientas estadísticas que permiten resumir un conjunto de datos mediante un valor representativo. En los procesos de autoevaluación, estas medidas facilitan el análisis de las puntuaciones obtenidas durante la evaluación de los estándares de acreditación, proporcionando una visión general del desempeño institucional y apoyando la interpretación objetiva de los resultados.
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema2/img7.svg', alt='')
          .col-lg-10
            .cajon.color-primario.p-4.p-lg-2
              p.mb-0 Las medidas de tendencia central más utilizadas son el #[b promedio], la #[b mediana] y la #[b moda]. Cada una ofrece una perspectiva diferente del comportamiento de los datos y contribuye a identificar tendencias que orientan la toma de decisiones y la formulación de acciones de mejoramiento.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Ejemplo de puntuaciones obtenidas en una autoevaluación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Estándar evaluado
                  th
                    | Puntuación
              tbody
                tr
                  td
                    | Atención centrada en el usuario
                  td
                    | 5
                tr
                  td
                    | Seguridad del paciente
                  td
                    | 4
                tr
                  td
                    | Gestión clínica
                  td
                    | 4
                tr
                  td
                    | Talento humano
                  td
                    | 3
                tr
                  td
                    | Direccionamiento
                  td
                    | 4
    p.mb-4 Las medidas de tendencia central permiten resumir y analizar el comportamiento de las puntuaciones obtenidas durante la autoevaluación. Sus principales características se presentan en la siguiente tabla:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Características de las medidas de tendencia central
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Medida
                  th
                    | Concepto
                  th
                    | Aplicación en la autoevaluación
              tbody
                tr
                  td
                    | Promedio
                  td
                    | Resultado obtenido al sumar todas las puntuaciones y dividirlas entre el número de datos.
                  td
                    | Permite conocer el desempeño general de la institución frente a los estándares evaluados.
                tr
                  td
                    | Moda
                  td
                    | Valor que se repite con mayor frecuencia.
                  td
                    | Permite identificar la puntuación predominante en la evaluación.
                tr
                  td
                    | Mediana
                  td
                    | Valor que ocupa la posición central cuando las puntuaciones se ordenan de menor a mayor.
                  td
                    | Facilita identificar el comportamiento central de los resultados, reduciendo el efecto de valores extremos.
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.bg3.p-3
          .row.justify-content-center.align-items-center
            .col-lg-9
              ul.lista-ul
                li
                  p.mb-0 En el ejemplo anterior:
                li
                  ul.lista-ul
                    li
                      i.lista-ul__vineta
                      p.mb-0 Promedio: (5 + 4 + 4 + 3 + 4) ÷ 5 = 4.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Moda: 4, por ser la puntuación que más se repite.
                    li
                      i.lista-ul__vineta
                      p.mb-0 Mediana: 4, al corresponder al valor central de la serie ordenada (3, 4, 4, 4, 5).
            .col-lg-3
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='')
    p.mb-0 La aplicación de estas medidas facilita el análisis de los resultados de la autoevaluación, permite reconocer tendencias en el desempeño institucional y aporta información objetiva para la interpretación de la calificación y la formulación de acciones de mejoramiento.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Interpretación de la calificación
    
    p.mb-4 La interpretación de la calificación consiste en analizar el significado de los resultados obtenidos durante la evaluación de los estándares de acreditación, con el propósito de comprender el nivel de desempeño institucional y orientar la toma de decisiones para el mejoramiento continuo. Esta etapa permite transformar las puntuaciones y valoraciones en información útil para identificar fortalezas, reconocer oportunidades de mejora y establecer prioridades de intervención.
    .BG022.px-5.mb-4
      .row.justify-content-center.p-4
        .col-lg-4.col-8.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/tema2/img9.png', alt='')
        .col-lg-8
          .row.mb-3
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='')
            .col-lg-10     
              p.mb-0 La interpretación no se limita a revisar las calificaciones obtenidas, sino que implica analizar las causas que influyen en los resultados, contrastar la información con las evidencias recopiladas y valorar el contexto en el que se desarrollan los procesos institucionales. De esta manera, es posible comprender las razones por las cuales determinados estándares presentan un alto nivel de cumplimiento o requieren fortalecer sus acciones de mejora.
          p.mb-0 Para realizar una interpretación objetiva, es necesario considerar los resultados obtenidos mediante los diferentes instrumentos de evaluación, los indicadores institucionales, las observaciones registradas durante la autoevaluación y la información cualitativa y cuantitativa recopilada. El análisis conjunto de estos elementos permite emitir conclusiones fundamentadas y evitar interpretaciones basadas únicamente en percepciones o apreciaciones individuales.
    .row.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
        p.mb-3 La interpretación de la calificación también facilita la comparación entre diferentes procesos, áreas o periodos de evaluación, permitiendo identificar tendencias, verificar el impacto de las acciones implementadas y realizar seguimiento al avance institucional frente a los estándares de acreditación. Este análisis constituye un insumo esencial para la formulación de estrategias de fortalecimiento y para la consolidación de una cultura organizacional orientada al aprendizaje y al mejoramiento continuo.
        .p-3.cajon.color-secundario  
          p.mb-0 Durante esta etapa es importante que las conclusiones obtenidas se fundamenten en criterios claros y en evidencias verificables, de manera que las decisiones institucionales respondan a las necesidades reales identificadas durante la autoevaluación. Asimismo, la participación de los diferentes equipos de trabajo favorece una comprensión integral de los resultados y facilita la construcción de acciones de mejora concertadas.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema2/img11.png', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Aspectos para la interpretación de la calificación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-b.color-acento-contenido
            table
              thead
                tr
                  th
                    | Aspecto
                  th
                    | Finalidad
              tbody
                tr
                  td
                    | Análisis de resultados
                  td
                    | Identificar el nivel de cumplimiento de los estándares evaluados.
                tr
                  td
                    | Revisión de evidencias
                  td
                    | Verificar que las valoraciones estén sustentadas en información objetiva y verificable.
                tr
                  td
                    | Identificación de fortalezas
                  td
                    | Reconocer las prácticas institucionales que contribuyen al logro de los estándares.
                tr
                  td
                    | Identificación de oportunidades de mejora
                  td
                    | Determinar los aspectos que requieren acciones correctivas o de fortalecimiento.
                tr
                  td
                    | Priorización de acciones
                  td
                    | Establecer el orden de intervención según el impacto y la necesidad institucional.
                tr
                  td
                    | Toma de decisiones
                  td
                    | Definir estrategias orientadas al mejoramiento continuo y al fortalecimiento de la calidad.
    p.mb-4 La interpretación de la calificación adquiere mayor significado cuando los resultados obtenidos se analizan en el contexto de los procesos institucionales. El siguiente ejemplo explica cómo una institución puede utilizar la información derivada de la autoevaluación para orientar sus acciones de mejoramiento.
    
    .bloque-texto-gg.cajon.bg3.p-2.p-sm-2
      .bloque-texto-gg__texto
        p.ms-4.mt-lg-0.mt-5 #[b Ejemplo de interpretación de una calificación]
        p.ms-4.mb-2 Durante la autoevaluación de una institución prestadora de servicios de salud se obtuvo una #[b calificación media] en el estándar relacionado con la seguridad del paciente. El análisis de las evidencias permitió identificar que la institución contaba con protocolos documentados para la identificación de riesgos; sin embargo, su aplicación no era uniforme en todos los servicios y existían diferencias en el registro de los eventos relacionados con la atención.
        p.ms-4.mb-0 A partir de esta interpretación, la institución concluyó que era necesario fortalecer la capacitación del talento humano, estandarizar la aplicación de los protocolos e implementar mecanismos de seguimiento para verificar su cumplimiento. Estas acciones fueron incorporadas posteriormente al plan de mejoramiento institucional.
      .bloque-texto-gg__img
        img(src="@/assets/curso/temas/tema2/img12.svg" alt="")
    .bg6.p-4.mb-4
      p.mb-0 Este ejemplo evidencia que la interpretación de la calificación no consiste únicamente en conocer una puntuación, sino en analizar las causas de los resultados obtenidos para establecer acciones que contribuyan al fortalecimiento de la calidad y al mejoramiento continuo.
    p.mb-0 La interpretación adecuada de la calificación constituye el punto de partida para la formulación del plan de mejoramiento, ya que permite transformar los resultados de la autoevaluación en acciones concretas orientadas al fortalecimiento de los procesos institucionales y al cumplimiento de los estándares de acreditación.

</template>

<script>
export default {
  name: 'Tema2',
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
