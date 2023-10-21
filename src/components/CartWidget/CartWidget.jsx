import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaBeerMugEmpty } from "react-icons/fa6";

import './CartWidget.css';
const CartWidget = () => {

    const { totalItems} = useContext(CartContext);

    return (
        <div className="cart-widget">
            <FaBeerMugEmpty size={30} />
            <div className="cart-widget__count">
               { totalItems }
            </div>
        </div>
    )
}

export default CartWidget;