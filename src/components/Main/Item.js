import { Link } from "react-router-dom";
const Item = (props)=>{    
    
    return(
        <div className="card">
            <div className="cardInfo">
                <h2>{props.marca}</h2>
                <h3>Modelo: {props.modelo}</h3>
                <h3>Precio: ${props.precio}</h3>
                <h4>Gama: {props.gama}</h4>
                <Link to={`/item/${props.id}`}><button className="btnDetalle">Ver detalle</button></Link>
            </div>
            <img className="cardImg" src={props.img} alt="" />
        </div>

    )
}

export default Item;