import { useParams } from "react-router-dom";
import ProductCard from "../components/Productos/ProductCard";
import GradientText from "../components/GradientText/GradientText";

//Importación provicional de un Json para pruebas
import productos from "../json/productos.json";

const Productos = () => {
  const categorias = useParams();

  //Hacer un fetch a un servicio backend que listen los productos en formato Json

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="container m-auto my-2 text-center">
        <GradientText animationSpeed={3} showBorder={false} className="custom-class text-4xl">
          {categorias.categoria}
        </GradientText>
      </div>

      <div className="container flex m-auto justify-center my-4 p-2 gap-4 flex-wrap">
        {productos.map((pro, index) => (
          <ProductCard key={index} item={pro} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
