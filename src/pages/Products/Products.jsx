import './Products.css';
import { useParams } from 'react-router-dom';
import ItemContainer from '../../components/ItemContainer/ItemContainer';

const Products = () => {

  // vamos a obtener el parámetro de la URL
  const { category } = useParams(); // category es el nombre que le dimos en el Route de App.jsx

  return (
    <main className='main'>
        <h2>{ category ? `Products / ${category}` : 'All Products'}</h2>
        <ItemContainer category={category} />
    </main>
  )
}

export default Products