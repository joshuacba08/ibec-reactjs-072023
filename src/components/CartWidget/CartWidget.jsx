import { FaBeerMugEmpty } from "react-icons/fa6";

import './CartWidget.css';
const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaBeerMugEmpty size={30} />
            <div className="cart-widget__count">
                0
            </div>
        </div>
    )
}

export default CartWidget;