// Vamos a crear un componente inteligente que se encargue de traer los datos de la API y de renderizar el componente ItemList.
import Item from "../Item/Item";
import RingLoader from "react-spinners/RingLoader";
// import PacmanLoader from "react-spinners/PacmanLoader";

import './ItemContainer.css';
import { useEffect, useState } from "react";

function ItemContainer() {

    // 1. Definir mi endpoint o url base para solicitar la lista productos
    const url = "https://run.mocky.io/v3/a5b866d9-cf81-4a7b-9449-bc9bd1feaf8f";

    // 2. Definir un estado para guardar los productos que me devuelve la API
    const [ products, setProducts ] = useState([]);

    // 3. Definir una función que se encargue de hacer el fetch a la API y guardar los productos en el estado
    const getProducts = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }catch(err){
            console.error(err);
        }
    }

    //4. defino un useEffect que se ejecute cuando se monte el componente y a su vez invoque a la función getProducts
    useEffect(()=>{
        /* Bloque de código que quiero que se ejecute a penas se monte el componente */        
        getProducts();

        // fetch(url)
        //     .then( (response)=> response.json() )
        //     .then( (data) => setProducts(data) )
        //     .catch( (err)=> console.error(err) )
    }, []) // Este array se conoce como array de dependencias, y si está vacío el useEffect se ejecuta una sola vez, cuando se monta el componente.
  
    return (<div className="products-container">

        { products.length > 0 
            ? products.map( (prod)=>{
                return <Item product={prod} key={prod.id} />
              })
            : <RingLoader color="#f7b035" /> 
    
        }


    </div>);
}

export default ItemContainer;
