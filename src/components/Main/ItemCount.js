import { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount =(props)=>{
    const cantidadElegida = props.funcion;
    const stock = props.stock;
    const inicial = props.inicio;
    const frase = props.frase
    const [num, setNum] = useState(inicial);
    
    const add =()=>{
        cantidadElegida(num);
    }
    
    return(
        <div className="counterContainer">
        <div className="counterInfo">
        <button className="btnCounter" disabled={num === stock} onClick = {()=>{setNum(num + 1)}}>+</button>
        <h3>{num}</h3>
        <button className="btnCounter" disabled={num === inicial} onClick={()=>{setNum(num - 1)}}>-</button>
        </div> 
        <button onClick={add} className="btnAgregar">{frase}</button>
        </div>
       
    )
}
export default ItemCount;