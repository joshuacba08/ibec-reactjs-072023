import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailProducts.css'
import environments from '../../environments/environments';

const DetailProducts = () => {

    // 1. Obtener el parámetro id de la URL
    const { id } = useParams(); // id es el nombre del parámetro que definimos en App.jsx
    // 2. Obtener el producto de la API (En lugar de filtrar usaremos el metodo find)
    const [product, setProduct] = useState(null); // guardamos el producto en un estado

    const getProductById = async (id) => {
      try {
        const response = await fetch(environments.productsUrl);
        const data = await response.json(); // data es un array de productos
        const result = data.find( (prod)=> prod.id === Number(id) );
        setProduct(result);
      } catch (error) {
        console.error(error); 
      }
    }
    
    useEffect( ()=>{

      getProductById(id)

    }, [id])  

    return (
    <main>
        <h2>DetailProducts</h2>

        <section className=''>
          {
            product 
            ? <div className=''>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            : <p>Cargando...</p>
          }
        </section>
    </main>
  )
}

export default DetailProducts