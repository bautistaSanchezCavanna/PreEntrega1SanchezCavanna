import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../Services/firebaseConfig";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const collectionProd = collection(dataBase, "productos");
    const filtrado = categoryName
      ? query(collectionProd, where("gama", "==", categoryName))
      : collectionProd;

    getDocs(filtrado)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return { id: prod.id, ...prod.data() };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));

    return () => setLoading(true);
  }, [categoryName]);

  if (loading) {
    return <h2 className="loading">Cargando...</h2>;
  }

  return (
    <div className="itemListContainer">
      <ItemList items={items} />
    </div>
  );
}
export default ItemListContainer;
