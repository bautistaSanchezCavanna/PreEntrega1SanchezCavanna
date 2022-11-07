import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { dataBase } from "../../Services/firebaseConfig";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [idOrden, setIdOrden] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, precioTotal, deleteAll } = useContext(CartContext);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const orden = {
      comprador: { nombre, telefono, mail },
      items: { cart },
      total: precioTotal(),
      fecha: serverTimestamp(),
    };
    const collectionOrden = collection(dataBase, "ordenes");
    addDoc(collectionOrden, orden)
      .then((res) => {
        setIdOrden(res.id);
        deleteAll();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangetelefono = (e) => {
    setTelefono(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  if (idOrden) {
    return (
      <div className="formContainer">
        <h2>
          Gracias por tu compra! este es tu numero de seguimiento:{" "}
          <span style={{ "background-color": "white", padding: "4px" }}>
            {idOrden}
          </span>
        </h2>
        <Link to="/" className="btnGoTo">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} action="">
        <h2>Completa tus datos..</h2>
        <input
          type="text"
          name="nombreCompleto"
          placeholder="Nombre Completo.."
          onChange={handleChangeNombre}
          value={nombre}
        />
        <input
          type="text"
          name="telefono"
          placeholder="N° Telefóno.."
          onChange={handleChangetelefono}
          value={telefono}
        />
        <input
          type="text"
          name="mail"
          placeholder="@E-mail.."
          onChange={handleChangeMail}
          value={mail}
        />
        <button className="btnEnviar">
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default Form;
