import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../Services/firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const collectionProd = collection(dataBase, "productos");
    const documento = doc(collectionProd, id);

    getDoc(documento)
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));

    return () => setLoading(true);
  }, [id]);

  if (loading) {
    return <h2 className="loading">Cargando...</h2>;
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
