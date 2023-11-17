# Firebase

## Introducción

Firebase es una plataforma de Google que nos permite crear aplicaciones web y móviles de forma rápida y sencilla. Nos ofrece una serie de herramientas que nos permiten crear aplicaciones de forma sencilla y sin tener que preocuparnos de la infraestructura.

Para esta cursada veremos uno de sus módulos, **Firesotre**, que nos permite crear bases de datos en tiempo real.

## Requisitos

- Tener una cuenta de Google
- Tener instalado [Node.js](https://nodejs.org/es/)
- Tener instalado [Git](https://git-scm.com/downloads)
- Tener instalado [Visual Studio Code](https://code.visualstudio.com/download)

## Crear un proyecto en Firebase

Vamos a registrarnos en [Firebase](https://firebase.google.com/) con nuestra cuenta de Google y vamos a hacer click en el botón **Ir a la consola**.

![1699658347959](image/firebase/1699658347959.png)

- Haremos clic en crear un proyecto
- Le pondremos un nombre
  ![1699658408642](image/firebase/1699658408642.png)
- Aceptaremos los términos y condiciones
- Desactivaremos la opción de Google Analytics
  ![1699658620220](image/firebase/1699658620220.png)
- Haremos clic en crear proyecto
  ![1699658663061](image/firebase/1699658663061.png)
  ![1699658679154](image/firebase/1699658679154.png)

Por último, veremos la pantalla de inicio de nuestro proyecto.
![1699658793810](image/firebase/1699658793810.png)

## Agregar una aplicación web a nuestro proyecto

Vamos a hacer clic en el botón **Agregar aplicación** y luego en **Agregar aplicación web**.

- Le pondremos un nombre a nuestra aplicación
- Desactivaremos la opción de Firebase Hosting

![1699658957723](image/firebase/1699658957723.png)

Por último, haremos clic en **Registrar aplicación** y veremos la pantalla de configuración de nuestra aplicación.

<br>

## Instalar Firebase en nuestro proyecto (React JS)

Vamos a abrir una terminal en la carpeta de nuestro proyecto y vamos a ejecutar el siguiente comando:

```bash
npm install firebase
```

## Configurar Firebase en nuestro proyecto (React JS)

Vamos a copiar el código que nos brinda Firebase y lo vamos a pegar en un archivo que crearemos llamado `firebase.config.js` dentro de una carpeta llamada `config` dentro de la carpeta `src`.

```javascript
// importo la libreria firebase
import { initializeApp } from "firebase/app";
// importo la libreria firestore
import { getFirestore } from 'firebase/firestore/lite';

// declaro la configuracion de firebase en un objeto
const firebaseConfig = {
  apiKey: "AIzaSyDjPb1h9Giz5ECJ8uRqLZs3G3jl5p3e0DY",
  authDomain: "kong-beer.firebaseapp.com",
  projectId: "kong-beer",
  storageBucket: "kong-beer.appspot.com",
  messagingSenderId: "685782753883",
  appId: "1:685782753883:web:8922d55a102939179d157e"
};

// inicializo firebase con la configuracion
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // inicializo firestore

export default db; // exporto firestore
```

## Crear una colección en Firestore

Vamos a hacer clic en **Ir a la consola** y luego en **Firestore Database**.

![1699659771125](image/firebase/1699659771125.png)

Lo que vamos a ver es la pantalla de configuración de nuestra base de datos.

![1699659802945](image/firebase/1699659802945.png)

Haremos clic en crear una base de datos y luego en **Empezar en modo de prueba**.

![1699660064519](image/firebase/1699660064519.png)

![1699660268364](image/firebase/1699660268364.png)


A continuación, vamos a crear una colección llamada `products` 

![1699660513234](image/firebase/1699660513234.png)

![1699660589328](image/firebase/1699660589328.png)

Luego daremos clic a ID automático y luego en **Agregar campo**.

Lo que veremos al crear la colección es lo siguiente:
![1699660997657](image/firebase/1699660997657.png)


## Reglas de uso de Firestore (Version prueba)

En nuestro vamos a cambiar solamente la fecha expiración de la regla de uso de Firestore para evitar que se nos venza la versión de prueba.

![1699661172787](image/firebase/1699661172787.png)

Haremos clic en publicar y luego en confirmar.


## CRUD en Firestore

Un CRUD es un acrónimo de las palabras en inglés Create, Read, Update y Delete, que traducidas al español significan Crear, Leer, Actualizar y Borrar respectivamente. Es un concepto básico en el desarrollo de aplicaciones, ya que son las cuatro operaciones básicas que se pueden realizar en cualquier sistema de gestión de bases de datos.

También se les conoce como ABM (Alta, Baja y Modificación).

Vamos a crear nuestro sistema de CRUD en Firestore usando una serie de métodos que nos brinda Firebase a los cuales le añadiremos la lógica necesaria para que funcionen correctamente.


Vamos a crear un archivo llamado `firesotre.js` dentro de una carpeta llamada `utils` dentro de la carpeta `src`.

```javascript
//Crear nuestras funciones para interactuar con Firestore

import db from '../config/firebase.config'; // importo la configuracion de firestore

```

### Crear un documento en Firestore

Llego la hora de crear un documento en nuestra colección `products` de Firestore.

```javascript

```