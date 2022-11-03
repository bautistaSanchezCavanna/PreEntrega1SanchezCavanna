import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CartDetail =(prod)=>{
    const {deleteItem} = useContext(CartContext);

return (<div className="cartDetail">
          <img src={prod.img} alt="" />
          <div className="cartDetailInfo">
           <div className="cartInfoA">
            <h2>
              {prod.marca} 
            </h2>
            <h3>Modelo: {prod.modelo}</h3>
            <h3>Precio: $ {prod.precio}</h3>
            </div>
            <div className="cartInfoB">
              <h3>Cantidad seleccionada: {prod.cantidad}</h3>
            </div>
          </div>
          <h3>Subtotal: ${prod.precio * prod.cantidad}</h3>
          <div className="btnDeleteItem">
          <FontAwesomeIcon icon={faTrash} style={{"font-size":"35px", "color":"rgb(208, 13, 13)"}} onClick={() => deleteItem(prod.id)}/>
          </div>
        </div>)
}

export default CartDetail;