// 1. importamos createContext para crear el contexto
import { createContext, useState } from "react";

// 2. creamos el contexto y lo exportamos
export const CartContext = createContext();

// 3. creamos una componente que va a ser el proveedor del contexto llamada CartProvider
const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ totalItems, setTotalItems ] = useState(0);

    const addProduct = (product, qty) => {
        setCart([{qty, ...product}, ...cart]);
    }

    const deleteCart = () => {
        setCart([]);
    }

    return (// 4. retornamos el componente ContextProvider con el contexto creado y el children
        <CartContext.Provider value={{ 
            cart,
            addProduct,
            deleteCart,
            totalItems,
            total
        }}>
            {children}
        </CartContext.Provider>
    )

};

export default CartProvider; // 5. exportamos el componente ContextProvider





