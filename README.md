# Proyecto CheCoffee

Estimados desarrolladores,

La empresa de cafés "CheCoffee" requiere de su experiencia para reparar y optimizar su aplicación web. Esta herramienta es esencial para gestionar la autenticación de usuarios y la realización de órdenes de café, pero actualmente presenta problemas que afectan su funcionamiento y la satisfacción de los clientes.

Se les ha proporcionado un template de GitHub que contiene las bases del proyecto tanto en el backend como en el frontend. Deberán crear su propio repositorio a partir de este template. Su tarea es analizar el código existente, identificar y solucionar los problemas, y aplicar mejoras en ambas partes del proyecto.

## Requisito Previo: Instalar la Extensión "Better Comments" en Visual Studio Code

Durante el desarrollo, encontrarán comentarios en el código que especifican las actividades que deben realizar. Para facilitar la identificación y lectura de estos comentarios, es necesario que instalen la extensión "Better Comments" en Visual Studio Code.

### Pasos para instalar la extensión:

1. Abrir Visual Studio Code.
2. Ir a la pestaña de extensiones:
   - Hagan clic en el ícono de extensiones en la barra lateral izquierda, o presionen `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (macOS).
3. Buscar la extensión "Better Comments":
   - Escriban "Better Comments" en la barra de búsqueda.
4. Instalar la extensión:
   - Seleccionen la extensión desarrollada por Aaron Bond y hagan clic en "Install".
5. Reiniciar Visual Studio Code si es necesario.

Esta extensión les permitirá visualizar los comentarios con distintos colores y formatos, facilitando la comprensión de las tareas que deben realizar.

## Instrucciones para Inicializar los Proyectos

Antes de comenzar con las reparaciones y mejoras, sigan estos pasos para inicializar los proyectos y familiarizarse con el entorno de trabajo.

**Nota Importante:** No se utiliza ningún tipo de persistencia de datos ni variables de entorno, por lo que no es necesario configurar bases de datos ni archivos adicionales. Pero se tendrá el cuenta para la nota final si se implementa y se documenta correctamente. Se admitirá cualquier tipo de base de datos, pero tanto relaciones como no relaciones, pero en caso de no estar documentado, no se tendrá en cuenta y de no funcionar, se restará puntos.

### Crear el Repositorio a partir del Template

1. Acceder al template en GitHub:
   - Se les proporcionará un enlace al template del proyecto.
2. Crear un nuevo repositorio a partir del template:
   - Hagan clic en el botón "Use this template" en la página del repositorio.
   - Asignen un nombre a su nuevo repositorio `nombre_apellido` (minusculas y guión bajo) y seleccionen su cuenta personal o de organización.
3. Clonar su repositorio localmente:

```bash
git clone [enlace_de_su_repositorio]
```

4. Ingresar al directorio del proyecto:

```bash
cd nombre_del_proyecto
```

### Inicialización del Backend (Carpeta server)

1. Navegar a la carpeta del backend:

```bash
cd server
```

2. Instalar las dependencias necesarias:

```bash
npm install
```

3. Iniciar el servidor:

```bash
npm run dev
```

El servidor debería estar corriendo en el puerto 4321 y listo para recibir solicitudes.

### Inicialización del Frontend (Carpeta client)

1. Abrir una nueva terminal y navegar a la carpeta del frontend:

```bash
cd client
```

2. Instalar las dependencias necesarias:

```bash
npm install
```

3. Iniciar el servidor:

```bash
npm run dev
```

La aplicación debería abrirse automáticamente en su navegador en el puerto 8080.

## Acciones a Realizar

En el código proporcionado, encontrarán comentarios que detallan las actividades específicas que deben realizar. Estos comentarios están resaltados gracias a la extensión "Better Comments" que instalaron previamente.

### Backend

- **Reparar problemas de autenticación:**
  - Identificar y corregir los errores que impiden a los usuarios crear una nueva sesión correctamente.
  - Asegurar que el servidor maneje las solicitudes de inicio de sesión de manera adecuada.
- **Implementar validaciones de datos:**
  - Añadir validaciones necesarias en las solicitudes relacionadas con las órdenes de café.
  - Asegurar que el servidor maneje entradas inválidas de manera adecuada.
- **Manejo de errores:**
  - Implementar un manejo adecuado de errores y excepciones.
  - Proveer respuestas claras y significativas en caso de errores en las solicitudes.

## Entrega del Proyecto

La fecha límite para entregar el repositorio con las reparaciones y mejoras realizadas es el 27 de septiembre a las 17:00 horas. Asegúrense de que su repositorio esté actualizado y accesible para su revisión.

### Pasos para la entrega:

1. Subir los cambios a su repositorio de GitHub:

```bash
git add .
git commit -m "Descripción de los cambios realizados"
git push
```

2. Verificar que el repositorio sea accesible y que todos los archivos necesarios estén incluidos.
3. Enviar un correo electrónico con el enlace a su repositorio y cualquier información adicional que consideren relevante.

## Criterios de Evaluación

Su trabajo será evaluado en base a los siguientes criterios:

- **Funcionalidad:**
  - Correcta implementación de las funcionalidades requeridas en cada parte del proyecto.
  - Las acciones realizadas solucionan los problemas existentes y mejoran la experiencia de usuario.
- **Calidad del Código:**
  - El código es limpio, legible y sigue las mejores prácticas de desarrollo.
  - Se utilizan comentarios cuando es necesario y se mantienen estándares de nomenclatura consistentes y en `inglés`.
- **Uso de Git:**
  - El historial de commits refleja un desarrollo progresivo y organizado.
  - Los mensajes de commit son claros y descriptivos.
- **Puntualidad:**
  - El proyecto se entrega antes de la fecha y hora establecidas.
  - Entregar antes de la fecha límite no otorgará puntos adicionales, por lo que se recomienda enfocarse en la calidad del trabajo antes que en la rapidez.
- **Documentación:**
  - Se incluye un archivo README que explique las mejoras realizadas y cómo probarlas.

## Aclaraciones Finales

- **Colaboración:**
  - Este es un proyecto individual, por lo que se espera que cada participante realice su propio trabajo.
  - No se permite la colaboración con otros participantes ni con personas ajenas al proyecto.
  - No se permite el uso de soluciones ia pero si se permite el uso de librerías de terceros.
- **README's**
  - Dentro de la carpeta `server` y `client` encontrarán un archivo `README.md` donde se estarán detallando las acciones a realizar en cada uno de los proyectos. Con la finalidad de que el profesor pueda evaluar de manera más rápida y eficiente. Se recomienda marcar con una `X` dentro de los corchetes las tareas realizadas.

Estamos seguros de que su experiencia y habilidades serán de gran valor para mejorar la aplicación de "CheCoffee". Su contribución no solo solucionará los problemas actuales, sino que también ayudará a brindar una mejor experiencia a nuestros clientes.

Agradecemos de antemano su dedicación y profesionalismo en este proyecto.

Atentamente,

Departamento de Desarrollo de CheCoffee
