import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="card">
      <div className="cardInfo">
        <h2>{props.marca}</h2>
        <h3>Modelo: {props.modelo}</h3>
        <h3>Precio: ${props.precio}</h3>
        <h4>Gama: {props.gama}</h4>
        <button className="btnDetalle">
          <Link
            to={`/item/${props.id}`}
            style={{ "text-decoration": "none", color: "black" }}
          >
            Ver detalle
          </Link>
        </button>
      </div>
      <img className="cardImg" src={props.img} alt="" />
    </div>
  );
};

export default Item;
