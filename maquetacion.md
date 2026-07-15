# Guía de maquetación parametrizada

Esta guía documenta el proceso para maquetar un recurso educativo a partir de los documentos fuente ubicados en `fuentes/`.

La guía no depende de un número de componente fijo. Debe funcionar para `CF01`, `CF02`, `CF03` o cualquier componente futuro, siempre que conserve la estructura base del formato institucional.

## 1. Identificar los documentos fuente

Dentro de `fuentes/` se deben ubicar, como mínimo:

```txt
CF_XX_*.docx
Actividad_didactica_CFXX.docx
```

Donde `XX` corresponde al número del componente formativo.

Reglas:

- Usar el documento `.docx` principal asociado al componente. Puede empezar por `CF_`, incluir `CFXX` o usar otra convención institucional equivalente.
- Usar el documento de actividad cuyo nombre empiece por `Actividad_didactica_`.
- Si el nombre cambia ligeramente, priorizar el contenido y no un nombre rígido.
- Ignorar archivos auxiliares que no correspondan al componente, por ejemplo pruebas o borradores.

## 2. Extraer la información general del componente

En la tabla inicial del documento principal se toman estos campos:

| Campo del Word                    | Archivo destino        | Propiedad destino      |
| --------------------------------- | ---------------------- | ---------------------- |
| `NOMBRE DEL COMPONENTE FORMATIVO` | `src/config/titulo.js` | exportación principal  |
| `NOMBRE DEL COMPONENTE FORMATIVO` | `src/config/global.js` | `global.Name`          |
| `BREVE DESCRIPCION`               | `src/config/global.js` | `global.Description`   |

Formato esperado:

```js
// src/config/titulo.js
module.exports = 'Nombre del componente formativo'
```

```js
// src/config/global.js
global: {
  Name: 'Nombre del componente formativo',
  Description: 'Breve descripción del recurso',
}
```

## 3. Revisar la guía de diseño `.xd`

Antes de maquetar la introducción o cualquier tema, revisar si en `fuentes/` existe un archivo de diseño `.xd` asociado al componente.

La guía `.xd` se usa como referencia para interpretar la intención visual del contenido:

- distribución de bloques;
- uso de imágenes;
- presencia de tablas, tarjetas, listados, destacados u otros recursos;
- jerarquía visual entre títulos, textos y apoyos gráficos;
- paleta cromática y estilo general del componente.

Reglas de uso:

- El documento Word sigue siendo la fuente oficial del contenido textual.
- El archivo `.xd` orienta la forma de presentar ese contenido en la maquetación.
- Si el `.xd` contiene textos de apoyo, placeholders o fragmentos que no coinciden con el Word, prevalece el Word.
- Antes de pasar contenido a una vista `.vue`, se debe revisar cómo fue resuelto visualmente ese bloque en el `.xd`.

### Organización de imágenes por tema

Las imágenes exportadas desde el `.xd` deben organizarse dentro de:

```txt
src/assets/curso/temas/
```

Usar una carpeta por cada sección o tema del componente, por ejemplo:

```txt
src/assets/curso/temas/intro/
src/assets/curso/temas/tema1/
src/assets/curso/temas/tema2/
```

Reglas:

- Guardar en cada carpeta únicamente los recursos correspondientes a esa sección.
- Nombrar las imágenes de forma secuencial y consistente, por ejemplo `img1.png`, `img2.svg`, etc.
- Elegir el formato según la naturaleza del recurso:
  - `.svg` para vectores, íconos, diagramas simples e ilustraciones escalables.
  - `.png` para fotografías, composiciones rasterizadas o imágenes con efectos que no convenga reconstruir como vector.
- Antes de maquetar una sección, verificar qué recursos visuales del `.xd` deben exportarse y en qué formato.

## 4. Construir el menú principal

Ubicar la sección equivalente a la tabla de contenidos. Según el documento puede aparecer como:

```txt
TABLA DE CONTENIDOS
A. TABLA DE CONTENIDOS
```

La entrada `Introducción` no se replica en los temas, porque ya existe como ruta independiente.

Reglas:

- Cada tema principal se convierte en `tema1`, `tema2`, `tema3`, etc.
- Cada subtema conserva su numeración original en `numero`.
- El texto visible se copia en `titulo`, sin alterar su sentido.
- Cada subtema usa un `hash` con el patrón `t_numero_subnumero`, por ejemplo `t_4_3`.
- Si se agregan temas nuevos, también deben existir su ruta y su vista correspondiente.

Ejemplo:

```js
{
  nombreRuta: 'tema1',
  numero: '1',
  titulo: 'Título del tema principal',
  desarrolloContenidos: true,
  subMenu: [
    {
      numero: '1.1',
      titulo: 'Título del subtema',
      hash: 't_1_1',
    },
  ],
}
```

## 5. Sincronizar rutas y vistas

Revisar `src/router/index.js`.

Cada tema presente en `menuPrincipal.menu` debe tener:

- `path`
- `name`
- `component`

Ejemplo:

```js
{
  path: 'tema4',
  name: 'tema4',
  component: () =>
    import(/* webpackChunkName: "tema4" */ '../views/Tema4.vue'),
}
```

Si el tema no existe todavía:

- Crear `src/views/Tema#.vue`.
- Tomar como base una vista existente.
- Ajustar el número visible y el nombre del componente.

## 6. Limpiar el submenú institucional

En `src/config/global.js`, retirar de `menuPrincipal.subMenu` la entrada visible:

```js
{
  nombreRuta: 'complementario',
  icono: 'far fa-folder-open',
  titulo: 'Material complementario',
}
```

La ruta puede permanecer en el router si el proyecto la conserva.

## 7. Configurar glosario y referencias

### Glosario

Ubicar la sección equivalente a:

```txt
GLOSARIO
F. GLOSARIO
```

Cada fila de la tabla `TÉRMINO / SIGNIFICADO` se transforma en:

```js
{
  termino: 'Término',
  significado: 'Definición',
}
```

Reglas:

- Mantener el orden del documento.
- Retirar dos puntos finales del término si los trae.
- Reemplazar cualquier ejemplo genérico de plantilla.

### Referencias bibliográficas

Ubicar la sección equivalente a:

```txt
REFERENCIAS BIBLIOGRÁFICAS
G. REFERENCIAS BIBLIOGRÁFICAS
```

Cada referencia se transforma en:

```js
{
  referencia: 'Referencia bibliográfica',
  link: '',
}
```

Reglas:

- Mantener el orden del Word.
- Si existe enlace explícito, asignarlo en `link`.
- Si no existe, dejar `link: ''`.

## 8. Crear títulos y anclajes en las vistas de tema

Por cada subtema del menú, crear su anclaje en `src/views/Tema#.vue`.

Formato:

```pug
Separador
#t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
  h2 1.1 Título del subtema
```

Reglas:

- El `h1` de cada vista debe coincidir con el título del tema principal.
- El `hash` del menú se vuelve el `id` del bloque Pug.
- Antes de cada título de segundo nivel se agrega `Separador`.
- Los anclajes se ubican dentro del contenedor principal del tema.

## 9. Configurar introducción y síntesis

### Introducción

Ubicar la sección equivalente a:

```txt
INTRODUCCIÓN
B. INTRODUCCIÓN
```

Pasar los párrafos narrativos a `src/views/Introduccion.vue`.

### Síntesis

Ubicar la sección equivalente a:

```txt
SÍNTESIS
D. SÍNTESIS
```

Pasar los párrafos narrativos a `src/views/Sintesis.vue`.

Reglas comunes:

- Cada párrafo narrativo del Word se convierte en una etiqueta `p`.
- No incluir rótulos de diagramas, textos duplicados ni fragmentos pertenecientes a imágenes.
- Conservar la estructura visual existente de la plantilla.

### Texto alternativo de la síntesis

Si el Word contiene comentarios con el prefijo:

```txt
Texto alternativo:
```

usar el comentario correspondiente a la síntesis para completar el atributo `alt` de:

```pug
img(src="@/assets/curso/sintesis.svg", alt="")
```

## 10. Configurar la actividad didáctica

Desde `Actividad_didactica_CFXX.docx` o su variante institucional equivalente, completar `src/views/Actividad.vue`.

Campos generales:

| Campo del Word             | Destino                                          |
| -------------------------- | ------------------------------------------------ |
| `Objetivo de la actividad` | `introduccion`, precedido por `<b>Objetivo:</b>` |
| Mensaje de aprobación      | `mensaje_final_aprobado`                         |
| Mensaje de no aprobación   | `mensaje_final_reprobado`                        |

Reglas por pregunta:

- Cada bloque `Pregunta N` se convierte en un objeto.
- La opción marcada con `X` queda con `esCorrecta: true`.
- Las demás opciones quedan con `esCorrecta: false`.
- Mantener `barajarRespuestas: true`.
- Validar que cada pregunta tenga exactamente una respuesta correcta.

Reglas de imágenes:

- Las imágenes se toman desde `src/assets/actividad/`.
- Identificar cuántas imágenes `imagen#.png` existen realmente en el proyecto.
- Asignarlas en secuencia y reiniciar el ciclo al llegar al final.
- Ejemplo: si existen `imagen1.png` a `imagen4.png`, la pregunta 5 vuelve a usar `imagen1.png`.

## 11. Validación final

Antes de cerrar la maquetación:

- Verificar que `titulo.js`, `global.js`, router, vistas y actividad correspondan al mismo componente.
- Confirmar que el número de temas del menú coincida con las rutas y archivos `Tema#.vue`.
- Confirmar que todos los `hash` del menú existan como anclajes en las vistas.
- Confirmar que glosario, referencias, introducción, síntesis y actividad ya no conserven textos genéricos.
- Ejecutar el formateador del proyecto si los archivos modificados lo requieren.

## Registro de aplicación por componente

Esta sección se actualiza cada vez que la guía se aplique a un proyecto concreto.

Formato sugerido:

```txt
Componente aplicado: CFXX
Documento principal usado: fuentes/CF_XX_*.docx
Documento de actividad usado: fuentes/Actividad_didactica_CFXX.docx
Diseño usado: fuentes/CFX.xd
Estado: en progreso / en progreso / completado
Observaciones: ...
```

## Aplicación actual

```txt
Componente aplicado: CF02
Documento principal usado: fuentes/CF02_33110262_DI.docx
Documento de actividad usado: fuentes/Actividad_didactica_CF02.docx
Diseño usado: fuentes/CF2.xd
Estado: pendiente
Observaciones: el proyecto todavía conserva valores base en titulo.js, global.js, menú, glosario y referencias. Antes de iniciar la maquetación se debe extraer el contenido de los documentos fuente de CF02 y revisar el diseño CF2.xd.
```
