import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item, cantidad) => {
    const productoElegido = { ...item, cantidad };
    if (isInCart(productoElegido.id)) {
      agregarCantidad(productoElegido);
    } else {
      setCart([...cart, productoElegido]);
    }
  };

  const isInCart = (id) => cart.some((prod) => prod.id === id);

  const agregarCantidad = (productoAgregado) => {
    const cartActualizado = cart.map((productoDelCart) => {
      if (productoDelCart.id === productoAgregado.id) {
        const productoActualizado = {
          ...productoDelCart,
          cantidad: productoDelCart.cantidad + productoAgregado.cantidad,
        };
        return productoActualizado;
      } else {
        return productoDelCart;
      }
    });
    setCart(cartActualizado);
  };

  const deleteItem = (id) => {
    const filtrado = cart.filter((prod) => prod.id !== id);
    setCart(filtrado);
  };

  const deleteAll = () => setCart([]);

  const unidadesTotal = () => {
    let unidades = 0;
    const cartCopiado = [...cart];
    cartCopiado.forEach((prod) => {
      unidades = unidades + prod.cantidad;
    });
    return unidades;
  };

  const precioTotal = () => {
    const copiaCart = [...cart];
    let total = 0;
    copiaCart.forEach((prod) => {
      total = total + prod.precio * prod.cantidad;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteAll,
        deleteItem,
        precioTotal,
        unidadesTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
