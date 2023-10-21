// 1. importamos createContext para crear el contexto
import { createContext, useState, useEffect } from "react";

// 2. creamos el contexto y lo exportamos
export const CartContext = createContext();

// 3. creamos una componente que va a ser el proveedor del contexto llamada CartProvider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const calculateTotalItems = () => {

    if(cart.length === 0){ // si el carrito esta vacio, seteamos el total de items en 0 y el precio total en 0
      setTotalItems(0);
      setTotal(0);
      return;
    }

    const totalItems = cart.reduce( (acc, value)=> acc + value.qty , 0 );

    // TODO: calcular el precio total del carrito
    setTotalItems(totalItems);

  };

  const addProduct = (product, qty) => {
    // 1. creamos la funcion que va a modificar el estado cart del contexto

    // 2. verificar si el producto ya existe en el carrito
    if (cart.some((prod) => prod.id === product.id)) {
      // 3. si existe, actualizamos la cantidad
      const newCart = cart.map((prod) => {
        // 3.1 recorremos el carrito
        if (prod.id === product.id) {
          // 3.2 si el producto existe, actualizamos la cantidad
          return {
            ...prod, // 3.3 copiamos las propiedades del producto
            qty: prod.qty + qty, // 3.4 actualizamos la cantidad
          };
        }
        return prod; // 3.5 si no es el producto que estamos buscando, lo devolvemos sin modificar
      });

      setCart(newCart); // 3.6 actualizamos el estado del carrito con el nuevo carrito que tiene la cantidad actualizada
    } else {
      // 4. si no existe, lo agregamos al carrito
      setCart([{ qty, ...product }, ...cart]);
    }
  };

  const deleteCart = () => {
    setCart([]);
  };

  useEffect(() => {
    calculateTotalItems();
  }, [cart]);

  return (
    // 4. retornamos el componente ContextProvider con el contexto creado y el children
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        deleteCart,
        totalItems,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; // 5. exportamos el componente ContextProvider
