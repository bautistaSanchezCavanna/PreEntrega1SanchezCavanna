import { Link } from "react-router-dom";

const MenuItemList = ({ categories }) => {
  return (
    <nav className="navContainer">
      <ul>
        {categories.map((cat, index) => {
          return (
            <Link to={`/gama/${cat.path}`} key={index} className="items">
              {cat.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuItemList;
