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





/* -------------------------- Funciones de soporte -------------------------- */


// Seed de datos - Agregar documentos a una colección de Firestore de forma automatizada
