Lo primero que debemos hacer es crear la carpeta que contendra nuestro proyecto, para mi ejemplo jspm

Necesitamos nodejs intalada en nuestra maquina

si aun no se ha instalado globalmente procedemos a instalar jspm por medio de npm
  npm install jspm -g

ahora lo que haremos es instalar jspm en nuestro proyecto 
  npm install jspm --save-dev
recordemos:
  --save: lo que nos permite es guardar en nustro packages.json la dependencia de este paquete
  -dev: es alojaron con como una dependencia de desarrollo

ahora al igual que como haciamos con npm init ahora lo haremos asi
  jspm init

  lo que se va a iniciar es una configurcion similar a la del package.json vamos una a una de las preguntas que no hara

  1. "Package.json file does not exist, create it? [yes]" lo primero sera si queremos crear el package.json, por defecto ca en si, yo acostumbro a dejarlo, por que mas adelante en procesos de mas usando gulp y este lo manejo desde el package.json.

  2.  "Would you like jspm to prefix the jspm package.json properties under jspm? [yes]" aca nos pregunta si queremos crear la etiqueta jspm dentro del package.json para separa lo que usamos con jspm (duda!)

  3.  "Enter server baseURL (public folder path)" por defecto va en la carpeta del proyecto, es la ruta raiz de nuestro proyecto

  4.  "Enter jspm packages folder" por defecto va ./jspm_packages, esta sera la ruta de nuestros packetes gestionado por jspm

  5.  "Enter config file path" por fecto va en config.js, aca va toda la configuracion de rutas, transpiler, es6 -> es5, toda se hace sobre System.js

  6.  "Configuration file config.js doesn't exist, create it?" aca es simplmenete la posibilidad de personalizar nuestro config.js e incluirlo dentro de nuestro proyecto

  7.  "Enter client baseURL (public folder URL) [/]" es la ruta raiz para el cliente, podriamos dejar algo como /dist/

  8. "Do you wish to use a transpiler? " aca por defecto va babel, esto es para programar con es6 y dejarlo en es5 para los navegadores

  9.  "Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur?" por defecto viene babel, aca es escoger el transpiler, pero pues cuando empece no estaba typeScript, digamos que aca hay una variente, puesto que typescript no es que vaya a programar en es6, programaria en typescript, 

  y listo aca empieza a configurar todo los archivos necesarios, carpetas, etc.


Ahora vamos a crear nuestro index.html, que como veo las tendencias, va a terminar siendo el unico html ;), lo especial de este index van a ser estos tags
  <script src="jspm_packages/system.js"></script> <!-- este incluye a system.js es que nuestra base -->
  <script src="config.js"></script> <!-- nuestro archivo de configuración -->
  <script>
    System.import('lib/main.js'); // sobre este archivo vamos a iniciar toda nuestra app, desde aca hacemos los import
  </script>

y ya podemos trabajar en nuestroproyecto, pero de esta forma es recomendada para desarrollo, jspm tiene algo que son los bundle, los cuales ejecutamos desde la consola
  
  jspm bundle src/main.js dist/js/app.js

  consiste en dejar todo tu codigo en un solo archivo, hasta ahora sin minificar pero si haciendo los transpiler necesarios para que el cliente no sea el que los tenga que hacer, y adicionalmente

  jspm bundle-sfx src/main.js dist/js/app.js

  este es mas chevere, te unifica en un solo archivo tu codigo, con tus dependencias, junto con el config.js y el system.js