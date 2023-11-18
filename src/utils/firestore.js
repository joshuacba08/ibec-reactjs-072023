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
