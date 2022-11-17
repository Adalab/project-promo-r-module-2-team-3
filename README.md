<img width="1200" alt="image" src="https://user-images.githubusercontent.com/111798280/202319369-7a4bd54c-4eb2-4701-8cec-0521d9121750.png">

# Módulo 2: Proyecto equipo JavaScript's Hunters

En este repositorio se presenta el proyecto de equipo *Awesome profile-cards* realizado por Bárbara García, Elena Clemente, Sara Meixoeiro y Ana Vellisco para el segundo módulo de programación con JavaScript del curso de desarrolladora front-end impartido por Adalab.

## Descripción

Este proyecto consiste en una aplicación web que nos permite crear una tarjeta de visita personalizada. Consta de dos páginas: una landing de bienvenida y una página con un formulario en el que podemos introducir nuestros datos profesionales y obtener una vista maquetada con esta información. La aplicación permite al usuario elegir:

1. El **estilo de la tarjeta**, eligiendo una paleta de colores entre tres propuestas.

1. Mediante la **introducción de información en un formulario**, permite que este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta de visita, que será la muestra del resultado final.

1. Permite que el usuario pueda **crear una web con su tarjeta y compartirla por Twitter**.

## Funcionamiento

<img width="1200" alt="image" src="https://user-images.githubusercontent.com/111798280/202320058-c412c2f1-50fa-404b-a5a5-962265de29e8.png">

- **Maquetación responsive de la aplicación web**: Esta se ha desarrollado según el enfoque mobile first, pensada para tres dimensiones (móvil, tablet y ordenador). Su contenido se adapta a las necesidades y dimensiones de cada formato. Para la maquetación se ha utilizado el lenguaje de marcado HTML y la hoja de estilos Sass.

- **Paletas de colores**: Es posible personalizar las tarjetas permitiendo al usuario elegir entre tres paletas con una gama de colores diversa.

- **Introducir datos en el formulario**: Para obtener su propia tarjeta personalizada, el usuario debe introducir los datos en los campos requeridos. La previsualización se modificará de manera automática con estos cambios, permitiendo al usuario ver al momento la vista previa de la tarjeta. 

- **Compartir nuestra tarjeta**: Una vez tengamos todos los datos introducidos podemos optar por crear la tarjeta. La información introducida por el usuario será enviada a una API que se encargará de devolvernos un enlace con una página web donde podemos visualizar nuestra tarjeta. Además podremos compartir nuestra tarjeta directamente en Twitter para que la vea todo el mundo.

- **Elementos colapsables**: Además, las opciones de diseño, formulario y comparte son elementos colapsables y se mostrarán y ocultarán solo cuando hagamos click en ellas, permitiendo solo mostrar una sección a la vez.

- **Información almacenada en el Local Storage**: Por último, toda la información introducida en el formulario se almacenará en el LocalStorage, de forma que al recargar la página siga disponible y podamos borrarla con un botón de reset.

## Si te gustaría instalarlo, sigue esta guía de inicio rápido 

Este proyecto se ha realizado utilizando una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, como es el **Adalab web starter kit**. Este Kit incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más. Para poder trabajar con él se debe tener previamente instalado Node JS. 

### Pasos a seguir cada vez que se quiere arrancar un proeycto desde cero: 

1. **Crea tu propio repositorio**.
1. Descarga el **Starter kit desde GitHub**.
1. **Copia todos los ficheros** en la carpeta raíz del repositorio.
1. **Abre una terminal e instala las dependencias** locales ejecutando en la terminal de comando: 

```npm install```

### Pasos para arrancar el proyecto:

Una vez hemos instalado las dependencias, **el proyecto debe arrancarse cada vez que nos pongamos a programar** ejecutando el siguiente comando:

```npm start```

Este comando: 

- **Abre una ventana de Chrome y muestra tu página web**.
- También **observa** todos los ficheros que hay dentro de la carpeta ```src/```, para mostrar los cambios cada vez que modifiques un fichero, **refrescando tu página en Chrome**. 
- También **procesa los ficheros** HTML, SASS/CSS y JS y los **genera y guarda en la carpeta** ```/public```. 

Después de ejecutar ```npm start``` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta ```src/``` y programar cómodamente. 
