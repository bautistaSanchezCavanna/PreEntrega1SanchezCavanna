import CartWidget from "./CartWidget";
import Brand from "./Brand";
import MenuItemList from "./MenuItemList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../Services/firebaseConfig";

function NavBar() {
  const [categoryItem, setCategoryItem] = useState([]);

  useEffect(() => {
    const navCollection = collection(dataBase, "categorias");

    getDocs(navCollection)
      .then((res) => {
        const categorias = res.docs.map((cat) => {
          return { id: cat.id, ...cat.data() };
        });
        setCategoryItem(categorias);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="headerContainer">
      <Link to="/" className="icono">
        <Brand />
      </Link>
      <MenuItemList categories={categoryItem} />
      <Link to="/cart" style={{ color: "black", "text-decoration": "none" }}>
        <CartWidget />
      </Link>
    </div>
  );
}

export default NavBar;
