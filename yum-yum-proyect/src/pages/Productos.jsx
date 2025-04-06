import { useParams } from "react-router-dom";
import ProductCard from "../components/Productos/ProductCard";

const Productos = () => {
  const categorias = useParams();

  return (
    <>
      <div className="container m-auto my-2 text-center">
        <h2 className="font-bold text-2xl">{categorias.categoria}</h2>
      </div>

      <div className="container flex m-auto justify-center my-4 p-2 gap-4">
        <ProductCard name="Penes pequeños" price="$15.250" img="https://tumayorferretero.net/22457-large_default/producto-generico.jpg" />
        <ProductCard name="Aretes Blancos" price="$11.250" img="https://tumayorferretero.net/22457-large_default/producto-generico.jpg" />
      </div>
    </>
  );
};

export default Productos;
