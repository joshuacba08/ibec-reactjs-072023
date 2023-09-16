import PropTypes from 'prop-types';

import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

function Item({ product }) {

  return (
    <article className="product-card">
      <img className="product-card__image" src={product.image} alt="" />
    
        <h3 className="product-card__name">{product.name}</h3>
 

      <span className="product-card__name">${product.price}</span>

      <ItemCount stock={product.stock} initial={1} />
    </article>
  );
}

export default Item;


Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  })
}