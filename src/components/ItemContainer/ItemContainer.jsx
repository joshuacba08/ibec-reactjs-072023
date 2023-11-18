// Vamos a crear un componente inteligente que se encargue de traer los datos de la API y de renderizar el componente ItemList.
import Item from "../Item/Item";
import RingLoader from "react-spinners/RingLoader";
import environments from "../../environments/environments";
// import PacmanLoader from "react-spinners/PacmanLoader";

import './ItemContainer.css';
import { useEffect, useState } from "react";
import { getItems } from "../../utils/firestore";

function ItemContainer({ category }) {

    // 1. Definir mi endpoint o url base para solicitar la lista productos
    // const url = "https://run.mocky.io/v3/1ca302e2-1551-499a-8cf3-9db2e1f2cf22";

    // 2. Definir un estado para guardar los productos que me devuelve la API
    const [ products, setProducts ] = useState([]);

    // 3. Definir una función que se encargue de hacer el fetch a la API y guardar los productos en el estado
    const getProducts = async () => {
        try{
            // const response = await fetch(environments.productsUrl);
            // const data = await response.json();
            const data = await getItems('products');
            setProducts(data);
        }catch(err){
            console.error(err);
        }
    }

    const getProductsByCategory = async () => {
        try{
            // const response = await fetch(environments.productsUrl);
            // const data = await response.json();
            const data = await getItems('products');
            const filteredProducts = data.filter( (prod)=> prod.type.toLowerCase() === category )
            setProducts(filteredProducts);
        }catch(err){
            console.error(err);
        }
    }

    //4. defino un useEffect que se ejecute cuando se monte el componente y a su vez invoque a la función getProducts
    useEffect(()=>{
        /* Bloque de código que quiero que se ejecute a penas se monte el componente */        
        if(category){
            getProductsByCategory();
        }else{
            getProducts();
        }

        // fetch(url)
        //     .then( (response)=> response.json() )
        //     .then( (data) => setProducts(data) )
        //     .catch( (err)=> console.error(err) )
    }, [category]) // Este array se conoce como array de dependencias, y si está vacío el useEffect se ejecuta una sola vez, cuando se monta el componente.
  
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
