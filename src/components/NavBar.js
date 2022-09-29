import CartWidget from "./CartWidget"

const arrayCategorias = ["Inicio", "Gama Alta", "Gama Media", "Gama Baja"]
const listado = arrayCategorias.map(item =>
    <a href="" className="items">{item}</a>
    ); 
function NavBar (){
    
return(
        <div className="headerContainer">
            <icon className="icono"><span style={{"color":"red"}}>Brrrum</span> Motorsport</icon>
            <nav className="navContainer">
                <ul>{listado}</ul>
            </nav>
            <CartWidget />      
       </div>
    );
}

export default NavBar;