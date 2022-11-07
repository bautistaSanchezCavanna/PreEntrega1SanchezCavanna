import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteAll, precioTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cartVacio">
        <h2>No hay ningún producto en el carrito..</h2>
        <button className="btnGoTo">
          <Link to="/" style={{ "text-decoration": "none", color: "white" }}>
            Ver catálogo
          </Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      {cart.map((prod) => {
        return (
          <CartDetail
            key={prod.id}
            id={prod.id}
            marca={prod.marca}
            modelo={prod.modelo}
            precio={prod.precio}
            cantidad={prod.cantidad}
            img={prod.img}
            subtotal={prod.precio * prod.cantidad}
          />
        );
      })}
      <div className="totalCart">
        <h2>Total: ${precioTotal()} </h2>
        <button onClick={deleteAll}>Borrar carrito</button>
        <Link to="/form" className="btnGoTo">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
