import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{
return(
    <div className="itemDetail">
        <img src={item.img} alt="" />
        <div className="detailInfo">
            <h2>{item.marca} - {item.modelo}</h2>
            <h3>${item.precio}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum exercitationem consectetur, necessitatibus delectus fugiat fugit atque ducimus numquam placeat, cupiditate consequuntur repudiandae dolorum nesciunt dicta aspernatur illum, nam laudantium accusantium!</p>
            <ItemCount inicio={0} stock={6}/>
        </div>
    </div>
    )
}

export default ItemDetail;