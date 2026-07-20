<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

const mensajeCorrecto =
  '¡Excelente trabajo! Se evidencia un adecuado dominio de los conceptos relacionados con la autoevaluación, la calificación y el plan de mejoramiento en los procesos de acreditación en salud.'
const mensajeIncorrecto =
  'Revise nuevamente el contenido del componente formativo.'

const crearPregunta = (id, texto, opciones, respuestaCorrecta) => ({
  id,
  texto,
  imagen: `@/assets/actividad/imagen${((id - 1) % 10) + 1}.png`,
  barajarRespuestas: true,
  opciones: opciones.map((opcion, indice) => ({
    id: String.fromCharCode(97 + indice),
    texto: opcion,
    esCorrecta: indice === respuestaCorrecta,
  })),
  mensaje_correcto: mensajeCorrecto,
  mensaje_incorrecto: mensajeIncorrecto,
})

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Autoevaluación, calificación y mejoramiento en acreditación en salud',
      titulo: 'Reto de la mejora continua',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los principales conceptos relacionados con el proceso de autoevaluación, la calificación y el plan de mejoramiento en acreditación en salud, favoreciendo la aplicación de estos conocimientos en el fortalecimiento de la calidad institucional.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        crearPregunta(
          1,
          '¿Cuál es el propósito principal de la autoevaluación en acreditación en salud?',
          [
            'Diseñar infraestructura hospitalaria.',
            'Identificar fortalezas y oportunidades de mejora para fortalecer la calidad institucional.',
            'Asignar recursos financieros.',
            'Contratar nuevo talento humano.',
          ],
          1,
        ),
        crearPregunta(
          2,
          '¿Cuál de los siguientes elementos hace parte de una metodología de autoevaluación?',
          [
            'Publicación de resultados en medios de comunicación.',
            'Elaboración de campañas publicitarias.',
            'Recolección y análisis de información.',
            'Diseño arquitectónico de la institución.',
          ],
          2,
        ),
        crearPregunta(
          3,
          '¿Qué función cumplen las herramientas de autoevaluación?',
          [
            'Reemplazar la evaluación externa.',
            'Elaborar presupuestos institucionales.',
            'Definir sanciones disciplinarias.',
            'Facilitar la recopilación, organización y análisis de la información.',
          ],
          3,
        ),
        crearPregunta(
          4,
          'Los datos cualitativos se caracterizan por:',
          [
            'Expresar únicamente valores numéricos.',
            'Medir indicadores financieros.',
            'Describir características, procesos o percepciones.',
            'Representar porcentajes exclusivamente.',
          ],
          2,
        ),
        crearPregunta(
          5,
          '¿Cuál es un ejemplo de dato cuantitativo?',
          [
            'Tiempo promedio de atención de pacientes.',
            'Opinión de un usuario.',
            'Observación de un procedimiento.',
            'Descripción de un proceso institucional.',
          ],
          0,
        ),
        crearPregunta(
          6,
          'La interpretación de resultados permite:',
          [
            'Diseñar nuevos edificios hospitalarios.',
            'Comprender el significado de los resultados obtenidos para apoyar la toma de decisiones.',
            'Elaborar contratos laborales.',
            'Modificar la legislación en salud.',
          ],
          1,
        ),
        crearPregunta(
          7,
          '¿Cuál de los siguientes factores favorece una autoevaluación efectiva?',
          [
            'Basar las decisiones únicamente en opiniones.',
            'Evitar la participación del talento humano.',
            'Utilizar evidencias objetivas y verificables.',
            'Eliminar los registros institucionales.',
          ],
          2,
        ),
        crearPregunta(
          8,
          'La calificación en los procesos de acreditación tiene como finalidad:',
          [
            'Determinar el nivel de cumplimiento de los estándares de acreditación.',
            'Contratar nuevo personal.',
            'Incrementar el presupuesto institucional.',
            'Elaborar reglamentos internos.',
          ],
          0,
        ),
        crearPregunta(
          9,
          'Los rangos de valoración permiten:',
          [
            'Clasificar el nivel de cumplimiento de los estándares.',
            'Elaborar historias clínicas.',
            'Diseñar programas académicos.',
            'Registrar incapacidades médicas.',
          ],
          0,
        ),
        crearPregunta(
          10,
          '¿Cuál medida de tendencia central corresponde al valor que más se repite?',
          ['Promedio.', 'Mediana.', 'Desviación estándar.', 'Moda.'],
          3,
        ),
        crearPregunta(
          11,
          'La mediana corresponde a:',
          [
            'La suma de todos los datos.',
            'El dato con mayor valor.',
            'El valor ubicado en la posición central de un conjunto de datos ordenados.',
            'El porcentaje más alto obtenido.',
          ],
          2,
        ),
        crearPregunta(
          12,
          'El promedio se obtiene mediante:',
          [
            'La multiplicación de todos los datos.',
            'La suma de las puntuaciones dividida entre el número de datos.',
            'La diferencia entre el mayor y el menor valor.',
            'El valor que aparece con menor frecuencia.',
          ],
          1,
        ),
        crearPregunta(
          13,
          'La interpretación de la calificación permite principalmente:',
          [
            'Determinar las causas de los resultados y orientar acciones de mejora.',
            'Elaborar informes financieros.',
            'Definir horarios laborales.',
            'Modificar la estructura organizacional.',
          ],
          0,
        ),
        crearPregunta(
          14,
          '¿Qué es un plan de mejoramiento?',
          [
            'Un cronograma de vacaciones del personal.',
            'Un reglamento disciplinario.',
            'Un informe estadístico anual.',
            'Un instrumento para organizar acciones dirigidas al fortalecimiento de la calidad institucional.',
          ],
          3,
        ),
        crearPregunta(
          15,
          '¿Cuál de los siguientes elementos hace parte del registro de un plan de mejoramiento?',
          [
            'Responsable de la acción.',
            'Número de habitaciones del hospital.',
            'Color institucional.',
            'Uniforme del personal.',
          ],
          0,
        ),
        crearPregunta(
          16,
          'Una acción de mejora debe formularse de manera:',
          [
            'Ambigua y general.',
            'Flexible y sin responsables.',
            'Clara, específica y orientada a una oportunidad de mejora.',
            'Basada únicamente en opiniones.',
          ],
          2,
        ),
        crearPregunta(
          17,
          'El seguimiento al plan de mejoramiento permite:',
          [
            'Verificar el cumplimiento y el avance de las acciones implementadas.',
            'Diseñar nuevos servicios médicos.',
            'Elaborar contratos de prestación de servicios.',
            'Definir tarifas hospitalarias.',
          ],
          0,
        ),
        crearPregunta(
          18,
          '¿Cuál es uno de los principales beneficios del seguimiento al plan de mejoramiento?',
          [
            'Reducir el número de usuarios atendidos.',
            'Identificar ajustes necesarios para fortalecer las acciones implementadas.',
            'Eliminar los indicadores institucionales.',
            'Reemplazar la autoevaluación.',
          ],
          1,
        ),
        crearPregunta(
          19,
          '¿Qué debe respaldar las conclusiones obtenidas durante la autoevaluación?',
          [
            'Opiniones personales.',
            'Suposiciones del equipo evaluador.',
            'Evidencias objetivas y verificables.',
            'Comentarios informales.',
          ],
          2,
        ),
        crearPregunta(
          20,
          '¿Cómo se relacionan la autoevaluación, la calificación y el plan de mejoramiento?',
          [
            'Son procesos independientes que no tienen relación entre sí.',
            'Solo se aplican durante la evaluación externa.',
            'Se utilizan únicamente para elaborar informes administrativos.',
            'Corresponden a etapas complementarias que fortalecen el mejoramiento continuo y la calidad institucional.',
          ],
          3,
        ),
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
