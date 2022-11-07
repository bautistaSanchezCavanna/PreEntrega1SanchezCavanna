import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function CartWidget() {
  const { unidadesTotal } = useContext(CartContext);
  return (
    <div className="cartWidget">
      <FontAwesomeIcon icon={faCartShopping} /> <span>{unidadesTotal()}</span>
    </div>
  );
}

export default CartWidget;
