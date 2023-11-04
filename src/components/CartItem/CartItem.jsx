import { MdDelete } from "react-icons/md";
import "./CartItem.css";

const CartItem = ({ prod, deleteProductById }) => {
  return (
    <div>
      <span>
        {prod.name} {prod.qty}
      </span>

        <button onClick={()=>{ deleteProductById(prod.id) }} >
            <MdDelete color="white" size={20} />
        </button>
    </div>
  );
};

export default CartItem;
