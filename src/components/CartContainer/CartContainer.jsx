
import CartItem from '../CartItem/CartItem'
import './CartContainer.css'
const CartContainer = ({ cart, deleteProductById }) => {
  return (
    <div>

        { cart.map( prod => <CartItem key={prod.id} prod={prod} deleteProductById={deleteProductById} /> ) }

    </div>
  )
}

export default CartContainer