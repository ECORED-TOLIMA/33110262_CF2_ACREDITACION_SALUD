export default {
  global: {
    Name: 'Autoevaluación, calificación y mejoramiento en acreditación en salud.',
    Description:
      'Este componente desarrolla el proceso de autoevaluación en acreditación en salud, abordando metodologías, herramientas, análisis e interpretación de resultados, criterios de calificación y formulación de planes de mejoramiento. Asimismo, fortalece la comprensión de las acciones orientadas al mejoramiento continuo y al cumplimiento de los estándares de acreditación.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proceso de autoevaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Metodologías y abordaje',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas para la autoevaluación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Recolección de datos cualitativos y cuantitativos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Interpretación de resultados',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Factores clave para una autoevaluación efectiva',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calificación en los procesos de acreditación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y valoración',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Rangos y puntuaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Medidas de tendencia central',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Interpretación de la calificación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y ventajas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Registro y formato',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Formulación de acciones de mejora',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Seguimiento al plan de mejoramiento',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'actividad planificada para corregir o fortalecer un proceso institucional, con el fin de superar oportunidades de mejora identificadas durante la autoevaluación.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'proceso sistemático mediante el cual una institución analiza su desempeño frente a los estándares de acreditación para identificar fortalezas y oportunidades de mejora.',
    },
    {
      termino: 'Calificación',
      significado:
        'valoración del nivel de cumplimiento de los estándares de acreditación, realizada con base en el análisis de evidencias y criterios previamente establecidos.',
    },
    {
      termino: 'Dato cualitativo',
      significado:
        'información descriptiva que permite comprender características, percepciones o condiciones relacionadas con los procesos institucionales.',
    },
    {
      termino: 'Dato cuantitativo',
      significado:
        'información expresada mediante valores numéricos que facilita la medición, comparación y análisis del desempeño institucional.',
    },
    {
      termino: 'Evidencia',
      significado:
        'información verificable, como documentos, registros, indicadores u observaciones, utilizada para respaldar la evaluación de los estándares de acreditación.',
    },
    {
      termino: 'Indicador',
      significado:
        'medida utilizada para evaluar el desempeño de un proceso o el cumplimiento de un objetivo mediante información cuantificable.',
    },
    {
      termino: 'Mediana',
      significado:
        'medida de tendencia central que corresponde al valor ubicado en la posición central de un conjunto de datos ordenados.',
    },
    {
      termino: 'Moda',
      significado:
        'medida de tendencia central que identifica el valor que se presenta con mayor frecuencia dentro de un conjunto de datos.',
    },
    {
      termino: 'Plan de mejoramiento',
      significado:
        'instrumento de gestión que organiza las acciones orientadas a fortalecer los procesos institucionales y atender las oportunidades de mejora identificadas durante la autoevaluación.',
    },
    {
      termino: 'Promedio',
      significado:
        'medida de tendencia central que se obtiene al sumar un conjunto de valores y dividir el resultado entre el número total de datos.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'proceso de verificación del avance, cumplimiento y resultados de las acciones establecidas en el plan de mejoramiento.',
    },
    {
      termino: 'Sistema Único de Acreditación en Salud (SUA)',
      significado:
        'componente del Sistema Obligatorio de Garantía de la Calidad que promueve el mejoramiento continuo mediante la evaluación voluntaria del desempeño de las instituciones de salud.',
    },
    {
      termino: 'Tendencia central',
      significado:
        'conjunto de medidas estadísticas que permiten resumir un grupo de datos mediante un valor representativo, como el promedio, la mediana y la moda.',
    },
    {
      termino: 'Valoración',
      significado:
        'análisis realizado para determinar el nivel de cumplimiento de un estándar de acreditación a partir de la revisión de evidencias y criterios de evaluación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Deming, W. E. (1989). Calidad, productividad y competitividad: La salida de la crisis. Díaz de Santos.',
      link: '',
    },
    {
      referencia: 'ICONTEC. (s. f.). Acreditación en salud.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (s. f.). ICONTEC.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Manual de Acreditación en Salud Ambulatorio y Hospitalario de Colombia, versión 3.1.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Obligatorio de Garantía de la Calidad en Salud.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Sistema Único de Acreditación en Salud (SUA).',
      link: '',
    },
    {
      referencia:
        'Organismo Nacional de Acreditación de Colombia (ONAC). (s. f.). Organismo Nacional de Acreditación de Colombia.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (s. f.). Calidad de la atención de salud.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud (OPS). (s. f.). Calidad de los servicios de salud.',
      link: '',
    },
    {
      referencia:
        'Triola, M. F. (2018). Estadística (12.ª ed.). Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experta temática',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
