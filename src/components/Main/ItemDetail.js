import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const [unidades, setUnidades] = useState(0);
  const { addToCart } = useContext(CartContext);

  const cantidadElegida = (cantidad) => {
    setUnidades(cantidad);
    addToCart(item, cantidad);
  };

  return (
    <div className="itemDetail">
      <img src={item.img} alt="" />
      <div className="detailInfo">
        <h2>
          {item.marca} - {item.modelo}
        </h2>
        <h3>${item.precio}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          exercitationem consectetur, necessitatibus delectus fugiat fugit atque
          ducimus numquam placeat, cupiditate consequuntur repudiandae dolorum
          nesciunt dicta aspernatur illum, niam laudantium accusantium!
        </p>
        {unidades === 0 ? (
          <ItemCount
            frase="Agregar al carrito"
            funcion={cantidadElegida}
            inicio={0}
            stock={item.stock}
          />
        ) : (
          <button className="btnGoTo">
            <Link
              to="/cart"
              style={{ "text-decoration": "none", color: "white" }}
            >
              Ir al carrito
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
