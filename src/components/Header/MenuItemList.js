import {Link} from "react-router-dom";


const MenuItemList = ()=>{
    /*const categorias = ["Inicio", "Gama Alta", "Gama Media", "Gama Baja"]
     const listado = categorias.map((item, index) =><Link to={`/${item}`} key={index} className="items">{item}</Link>); */ 
    return(
    <nav className="navContainer">
        {/* <ul>{listado}</ul> */}
        <ul>
        <Link to="/" className="items">Inicio</Link>
        <Link to="/category/alta" className="items">Gama Alta</Link>
        <Link to="/category/media" className="items">Gama Media</Link>
        <Link to="/category/baja" className="items">Gama Baja</Link> 
        </ul>
    </nav>
    );
}

export default MenuItemList;

    