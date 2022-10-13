import Item from "./Item";

const ItemList = ({items})=>{
    return(
        <div className="itemList">
            {
                items.map((producto)=>{
                    return <Item key={producto.id} id={producto.id} gama={producto.gama} marca={producto.marca} modelo={producto.modelo} precio={producto.precio} img={producto.img}/>
                })
            }
        </div>
        
    )
}

export default ItemList;