// Vamos a crear un componente inteligente que se encargue de traer los datos de la API y de renderizar el componente ItemList.
import Item from "../Item/Item";
import { arrayProducts } from "../../assets/data/products";

import './ItemContainer.css';
import { useEffect, useState } from "react";

function ItemContainer() {

    const [ products, setProducts ] = useState([]);

    
    useEffect(()=>{
        /* Bloque de código que quiero que se ejecute a penas se monte el componente */        
        setProducts(arrayProducts); // cuando se monte el componente, setProducts va a recibir el array de productos.
    
    }, []) // Este array se conoce como array de dependencias, y si está vacío el useEffect se ejecuta una sola vez, cuando se monta el componente.
  
    return (<div>

        { products.length > 0 && <Item product={products[0]} /> }
        



    </div>);
}

export default ItemContainer;
