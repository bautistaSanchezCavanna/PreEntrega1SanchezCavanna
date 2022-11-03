import { useEffect, useState } from "react";
import Productos from "../../MockProductos/Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const detalleProducto = () => {
      return new Promise((res, rej) => {
        const detalle = Productos.find(
          (producto) => producto.id === Number(id)
        );
        setTimeout(() => {
          res(detalle);
        }, 1200);
      });
    };
    detalleProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => console.log(error))
      .finally(()=>setLoading(false));

      return()=>setLoading(true);
  }, [id]);

if(loading){
    return <h2 className="loading">Cargando...</h2>
}

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
