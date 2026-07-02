# 🐉 Reescribe el final: Juego de Tronos

🇬🇧 Prefer English?  
👉 [README.md](./README.md)

## 🎯 Objetivo de la clase

Hoy vais a trabajar en un ejercicio de desarrollo web guiado: crear una experiencia visual y funcional inspirada en una referencia de Figma, utilizando una base de proyecto mínima que os obligará a construir gran parte del ejercicio desde cero.

La idea es que, a partir de una plantilla básica, construyáis una página que invite al usuario a responder unas preguntas y, según sus respuestas, muestre un final alternativo acompañado de una imagen o video visual predeterminado.

Este proyecto está pensado para aprender, practicar lo visto en clase y empezar a interiorizar buenas prácticas: dividir responsabilidades, escribir código claro, trabajar de forma incremental y documentar las decisiones que toméis.

## 🧩 Qué vais a hacer

En esta sesión vais a trabajar en tres bloques:
1. Diseñar y construir la interfaz con la referencia de Figma.
2. Preparar el flujo del cuestionario y del resultado.
3. Pensar cómo asociar respuestas con distintos finales y con una imagen o video que refuerce el resultado.

## 🖼️ Referencia visual

Usa esta referencia como guía principal del diseño:

[Ver referencia en Figma](https://www.figma.com/make/wnq2Z37KdEId5FV1TmwWt0/Cinematic-Landing-Page-Design?code-node-id=0-9&p=f&t=ITWh8GkU4nY3SnMB-0&fullscreen=1)

No hace falta copiarla exactamente. Lo importante es que toméis decisiones sobre:
- la atmósfera visual,
- la distribución de las secciones,
- los colores,
- la tipografía,
- los espacios,
- y la sensación general de la página.

## 🚀 Prompts de inicio

Antes de escribir código, responded a estas preguntas como equipo o individualmente:

1. ¿Qué secciones debe tener la página según la referencia?
2. ¿Qué elementos se repiten: botones, tarjetas, encabezados, texto introductorio?
3. ¿Qué tono visual transmite la imagen: épico, oscuro, premium, cinematográfico?
4. ¿Qué partes del diseño pueden construirse con HTML y CSS desde el principio?
5. ¿Qué zonas deberían quedar como placeholders para luego completar la lógica del cuestionario y del resultado?

## 📝 Cread vuestro propio registro de prompts

Durante el ejercicio, cread un archivo Markdown personal, por ejemplo llamado prompts.md o process-log.md, y usadlo para registrar:
- los prompts que probéis con IA,
- las decisiones que toméis,
- la estructura que decidáis construir,
- y los cambios que vayáis aplicando al código.

Esto os ayuda a evitar prompts vagos como: "haz una página de Juego de Tronos como esta foto". En su lugar, intentad prompts más concretos, que cada uno aborde un problema.

## 🧠 Prompt de IA para estructurar el proyecto

Podéis usar IA para ayudaros a organizar el trabajo, pero no para resolverlo todo por vosotros. Un prompt útil puede ser:

> Ayúdame a estructurar un proyecto web en HTML, CSS y JavaScript para una landing page de estilo cinematográfico. Quiero que el código se divida por responsabilidades: HTML para la estructura, CSS para los estilos, JS para la interactividad y un archivo de datos para los finales alternativos. Quiero una solución limpia, organizada y fácil de mantener.

Esta ayuda os puede servir para pensar en:
- cómo separar responsabilidades,
- cómo nombrar archivos y funciones,
- cómo mantener el código limpio,
- y cómo organizar la lógica del cuestionario y del resultado.

## 🧭 Cómo abordar el ejercicio

Para que el reto sea realmente formativo, es mejor trabajar en pequeños pasos:
- empezar por la estructura y el contenido visible,
- luego separar la lógica en funciones simples,
- mantener el código legible y con nombres claros,
- evitar meter todo en un único archivo,
- y registrar en vuestro archivo de prompts las decisiones importantes.

Cada pequeña mejora cuenta: el objetivo no es hacerlo perfecto desde el principio, sino ir construyendo una base cada vez más sólida.

## 🧱 Lo que ya tenéis preparado

El starter solo aporta una base muy mínima. No viene con la solución hecha ni con toda la estructura lista.

Eso significa que tendréis que construir el ejercicio siguiendo las instrucciones y los prompts: HTML, CSS, JavaScript y datos para los endings. La lógica completa del cuestionario y del generador no está resuelta todavía, así que esa parte formará parte del reto.

## 🛠️ Pasos de la clase

### 1. Preparar el entorno
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run start
   ```
3. Abre la vista previa en el navegador.

### 2. Diseñar la interfaz
- Organiza la página en secciones claras: hero, explicación, cuestionario, resultado y pie de página.
- Usa etiquetas semánticas como `header`, `main`, `section` y `footer`.
- Crea o completa el HTML y los estilos para que la interfaz tenga sentido por sí sola.
- Mantén espacios preparados para contenido futuro con comentarios en el código.

### 3. Definir el flujo del cuestionario
- Crea unas preguntas sencillas y claras.
- Cada respuesta debe poder representar una orientación del usuario: por ejemplo, A, B o C.
- Piensa en cómo acumular esas respuestas para decidir un final alternativo.
- Implementa la lógica en JavaScript para que el usuario pueda avanzar por el cuestionario y ver un resultado.
- No hace falta que todo sea perfecto: lo importante es que el flujo sea coherente.

### 4. Definir el resultado final
- Cuando el usuario responda, el programa puede elegir un final distinto según la combinación de respuestas.
- Puedes pensar en una lógica tipo:
  - si el usuario elige muchas respuestas del tipo A, muestra un final A,
  - si coincide más con B, muestra un final B,
  - si coincide más con C, muestra un final C,
  - y si hay mezcla, puedes usar una regla intermedia.
- Usa [src/data/endings.js](src/data/endings.js) como fuente de información para mostrar los finales alternativos.
- El resultado debe ser claro, visual y fácil de leer.

### 5. Añadir la imagen o video visual
- Para la parte visual, puedes usar una imagen o video predeterminado según el final elegido.
- Por ejemplo:
  - final A → imagen/video de poder y trono,
  - final B → imagen/video de misterio y guerra,
  - final C → imagen/video de esperanza y reencuentro.
- Lo importante es que el sistema pueda asociar un resultado con una referencia visual concreta.

### 6. Subir el trabajo a GitHub
- Crea un repositorio en GitHub.
- Conecta tu proyecto local al repositorio con estos pasos básicos:
  1. Inicializa Git en la carpeta del proyecto si aún no lo está: `git init`.
  2. Añade los archivos al seguimiento: `git add .`.
  3. Haz tu primer commit: `git commit -m "Initial commit"`.
  4. Crea un repositorio vacío en GitHub.
  5. Conecta el remoto con el comando que GitHub te ofrece, normalmente algo como: `git remote add origin https://github.com/tu-usuario/tu-repositorio.git`.
  6. Sube los cambios: `git push -u origin main`.
- Haz commits claros y frecuentes.
- Sube el proyecto y comparte el enlace cuando esté listo.

## 💡 Pistas de ayuda

Si os bloqueáis, probad estas ideas:
- Empezad por la estructura HTML antes de meter mucha lógica.
- Primero dejad la UI visible y clara.
- Después pensad cómo recoger las respuestas.
- Por último, decidid cómo mostrar el resultado y su imagen o video.

## 🌟 Extras opcionales

Si queréis ir un paso más allá:
- hacer deploy en Vercel:
  - crea una cuenta en Vercel,
  - importa el repositorio de GitHub,
  - elige el proyecto y pulsa Deploy,
  - Vercel generará una URL pública para ver la web en línea.
- probar una integración básica con IA para generar el final dentro del proyecto:
  - por ejemplo, podéis preparar un botón que envíe una pregunta o una combinación de respuestas a una API de IA,
  - recibir una respuesta generada y mostrarla como parte del resultado,
  - o simplemente usarla para crear variaciones de texto de los finales alternativos.
- mejorar el diseño con animaciones y microinteracciones:
  - transiciones al pasar el ratón por los botones,
  - animaciones al cambiar de sección,
  - o efectos más cinematográficos al mostrar el resultado.

Recordad que, aunque podáis pedir ayuda a la IA, el objetivo sigue siendo entender el proyecto, separar bien responsabilidades y escribir código limpio y comprensible.

## ✅ Criterios de entrega

Para dar por terminado el ejercicio, la página debe:
- sentirse inspirada en la referencia de Figma,
- tener una estructura limpia y clara,
- ser responsive,
- mostrar un flujo de preguntas y resultados coherente,
- y dejar preparada la lógica para asociar respuestas con un final alternativo y una imagen o video predeterminado.

## 🧠 Cierre de clase

El objetivo no es resolver todo de golpe, sino construir una base sólida, visualmente atractiva y lista para seguir desarrollando. Pensad como diseñadores, desarrolladores y creadores de experiencia.
