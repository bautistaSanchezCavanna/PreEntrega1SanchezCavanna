import { useState } from "react";

const ItemCount =(props)=>{
    const stock = props.stock;
    const inicial = props.inicio;
    const [num, setNum] = useState(inicial);
    if(num>stock){
        alert("no hay mas");
    }else if(num<inicial){
        alert("cuak")
    }
    
    return(
       <div className="counterContainer">
        <button className="btnSumar" disabled={num === stock} onClick = {()=>{setNum(num + 1)}}>+</button>
        <h3>{num}</h3>
        <button className="btnRestar" disabled={num === inicial} onClick={()=>{setNum(num - 1)}}>-</button>
       </div> 
    )
}
export default ItemCount;