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
//Crear nuestras funciones para interactuar con Firestore
import db from "../config/firebase.config"; // importo la configuracion de firestore

import { collection, addDoc } from "firebase/firestore/lite"; // importo las funciones que voy a utilizar de firestore

// CREATE - Agregar un documento
//Esta función recibe el objeto que quiero agregar como nuevo documento de mi colección y como segundo parámetro el nombre de mi colección a la que agregaré el nuevo documento.

export const createItem = async (obj, nameCollection) => {
  try {
    const colRef = collection(db, nameCollection); // creo una referencia a la coleccion
    const data = await addDoc(colRef, obj); // agrego el nuevo documento a la coleccion
    return data.id; // retorno el id del documento creado
  } catch (error) {
    console.error(error);
  }
};

```

### Sembrar datos en Firestore

Muchas veces necesitamos tener datos de prueba en nuestra base de datos para poder probar nuestro sistema. Para esto vamos a crear una funcion llamada `seedData`.

```javascript
/* -------------------------- Funciones de soporte -------------------------- */


// Seed de datos - Agregar documentos a una colección de Firestore de forma automatizada

export const seedData = async(arrayItems, nameCollection) => {
    try {
        arrayItems.forEach( async (item) => { // recorro el array de objetos y por cada uno de ellos ejecuto la funcion createItem
            await createItem(item, nameCollection) // ejecuto la funcion createItem con el objeto y el nombre de la coleccion
        });
    } catch (error) {
        console.error(error);
    }
}
```

En el archivo `main.js` vamos a importar la configuración de Firestore:

```javascript
import db from './config/firebase.config.js'
```

y vamos a implementar el siguiente script en la parte final del archivo firebase.config.js:

```javascript
// importo la libreria firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { seedData } from "../utils/firestore"; // importo la funcion seedData que me permite agregar datos a la base de datos de firestore de forma automatizada
import { arrayProducts } from "../assets/data/products"; // importo el array de objetos que quiero agregar a la base de datos de firestore

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
const db = getFirestore(app);

export default db;


// correr este bloque solo cuando quiera agregar datos a la base de datos de firestore de forma automatizada
const force = false;
if(force){
  
  setTimeout(()=>{
    seedData(arrayProducts, "products"); // ejecuto la funcion seedData con el array de objetos y el nombre de la coleccion
  }, 4000)

}
```

* **Nota:** El script anterior lo vamos a ejecutar una sola vez para agregar los datos de prueba a nuestra base de datos de Firestore.
* **setTimeout:** Es una función que nos permite ejecutar una función después de un tiempo determinado. En este caso, vamos a ejecutar la función `seedData` después de 4 segundos.
* **force:** Es una variable que nos permite ejecutar el script de forma manual. Cuando la variable `force` sea `true` se ejecutará el script y cuando sea `false` no se ejecutará.
* **arrayProducts:** Es un array de objetos que contiene los datos de prueba que vamos a agregar a nuestra base de datos de Firestore.
* **products:** Es el nombre de la colección a la que vamos a agregar los datos de prueba.
* **seedData:** Es una función que nos permite agregar datos a nuestra base de datos de Firestore de forma automatizada.
* **createItem:** Es una función que nos permite agregar un documento a nuestra base de datos de Firestore.


### Leer documentos en Firestore

Para leer documentos de nuestra base de datos de Firestore vamos a crear una función llamada `getItem`.

```javascript
//Crear nuestras funciones para interactuar con Firestore
import db from "../config/firebase.config"; // importo la configuracion de firestore

import { collection, addDoc, getDocs, query } from "firebase/firestore/lite"; // importo las funciones que voy a utilizar de firestore

// CREATE - Agregar un documento
//Esta función recibe el objeto que quiero agregar como nuevo documento de mi colección y como segundo parámetro el nombre de mi colección a la que agregaré el nuevo documento.

export const createItem = async (obj, nameCollection) => {
  try {
    const colRef = collection(db, nameCollection); // creo una referencia a la coleccion
    const data = await addDoc(colRef, obj); // agrego el nuevo documento a la coleccion
    return data.id; // retorno el id del documento creado
  } catch (error) {
    console.error(error);
  }
};

// READ - Obtener todos los documentos de una colección
//Esta función recibe por parámetro el nombre de la colección que quiero traer desde firestore y devuelve un array con mis productos incluyendo el id de cada documento.

export const getItems = async (nameCollection) => {
  try {
    const colRef = collection(db, nameCollection); // creo una referencia a la coleccion;
    const data = await getDocs(query(colRef)); // obtengo todos los documentos de la coleccion
    return getArrayFromCollection(data); // retorno los documentos de la coleccion en un array con la propiedad id
  } catch (error) {
    console.error(error);
  }
};

/* -------------------------- Funciones de soporte -------------------------- */

//Contrucción de array de los items que obtengo a través de firebase y agregarles la propiedad id
const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => { // recorro los documentos de la coleccion y por cada uno de ellos retorno un objeto con la propiedad id
    return { ...doc.data(), id: doc.id }; // retorno un objeto con la propiedad id mas el resto de las propiedades del documento
  });
};

// Seed de datos - Agregar documentos a una colección de Firestore de forma automatizada

export const seedData = async (arrayItems, nameCollection) => {
  console.log("Inicializando seed de datos...");
  try {
    arrayItems.forEach(async (item) => {
      // recorro el array de objetos y por cada uno de ellos ejecuto la funcion createItem
      console.log("Agregando item");
      console.table(item);
      await createItem(item, nameCollection); // ejecuto la funcion createItem con el objeto y el nombre de la coleccion
    });
  } catch (error) {
    console.error(error);
  }
};
```

La estructura que viene de Firestore es compleja y muy anidada lo que es un problema si simplemente queremos manejar un array de productos. Para ello implementamos una función llamada `getArrayFromCollection` que nos permite obtener un array de objetos con la propiedad `id` de cada documento.

