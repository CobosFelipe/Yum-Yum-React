import { Link } from "react-router-dom";
import Sliders from "./Slider";
import GradientText from "../GradientText/GradientText";

// Imagenes de las Categorias
import anillos from "../../assets/categorias/Anillos.jpg";
import collares from "../../assets/categorias/Collares.jpg";
import aretes from "../../assets/categorias/Aretes.jpg";
import amigurumis from "../../assets/categorias/Amigurumi.jpg";

const categorias = [
  { nombre: "Anillos", img: anillos },
  { nombre: "Collares", img: collares },
  { nombre: "Aretes", img: aretes },
  { nombre: "Amigurumis", img: amigurumis },
];

const Categorias = () => {
  const slides = categorias.map((cat) => (
    <Link
      to={`/Productos/${cat.nombre}`}
      className="flex flex-col justify-center items-center w-[180px] border-2 border-indigo-300 rounded hover:scale-105 duration-700 ease-in-out cursor-pointer"
    >
      <img src={cat.img} alt={`imagen de ${cat.nombre}`} />
      <p className="text-black capitalize font-semibold lg:text-1xl my-1">{cat.nombre}</p>
    </Link>
  ));

  return (
    <div className="container m-auto my-3 text-center">
      <GradientText animationSpeed={3} showBorder={false} className="custom-class text-4xl">
        Categorias
      </GradientText>
      <div className="my-5">
        <Sliders className="mt-2" items={slides} />
      </div>
    </div>
  );
};

export default Categorias;
