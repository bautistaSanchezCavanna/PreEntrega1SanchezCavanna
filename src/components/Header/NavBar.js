import CartWidget from "./CartWidget"
import Brand from "./Brand"
import MenuItemList from "./MenuItemList";
import {Link} from "react-router-dom";
function NavBar (){
    
return(
        <div className="headerContainer">
            <Link to="/"  className="icono" ><Brand /></Link>
            <MenuItemList />
            <Link to="/cart"  style={{"color":"black", "text-decoration":"none"}} ><CartWidget /></Link>      
       </div>
    );
}

export default NavBar;