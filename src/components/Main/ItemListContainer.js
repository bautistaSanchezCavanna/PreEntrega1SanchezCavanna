import { useEffect, useState } from "react";
import Productos from "../../MockProductos/Productos";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
function ItemListContainer(){
    const [items, setItems] = useState([]);
    const {categoryName} = useParams();
    

    useEffect(()=>{
        const traerProductos =()=>{
            return new Promise((resolve, reject) => {
                const filtrarCategorias = Productos.filter((producto)=> producto.gama === categoryName)
                setTimeout(() => {
                    resolve(categoryName ? filtrarCategorias : Productos)
                }, 1500);
            });
        };
        traerProductos().then((resolve)=>{
            setItems(resolve);
        }).catch((error)=>{
            console.log(error);
        });
    },[categoryName])
    
    return(
        <div className="itemListContainer">
            <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer;