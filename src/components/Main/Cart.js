import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteAll } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cartVacio">
        <h2>No hay ningún producto en el carrito..</h2>
        <button className="btnGoToCart">
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
          />
        );
      })}
      <div className="totalCart">
        <h2>Total: $ </h2>
        <button onClick={deleteAll}>Borrar carrito</button>
      </div>
    </div>
  );
};

export default Cart;
