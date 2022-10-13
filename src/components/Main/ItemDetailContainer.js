import { useEffect, useState } from "react";
import Productos from "../../MockProductos/Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({})
    const {id} = useParams();
    useEffect(()=>{
       const detalleProducto = ()=> {
        return new Promise((res, rej)=>{
            const detalle = Productos.find((producto)=> producto.id === Number(id))
            setTimeout(() => {
                setItem(detalle);
            }, 1500);
        })};
        detalleProducto().
        then((res)=>{
            console.log(res);
        })
    },[id])

return(
    <div>

        <ItemDetail item={item} /*  id={producto.id} gama={producto.gama} marca={producto.marca} modelo={producto.modelo} precio={producto.precio} img={producto.img} */ />

    </div>
    )
}

export default ItemDetailContainer;