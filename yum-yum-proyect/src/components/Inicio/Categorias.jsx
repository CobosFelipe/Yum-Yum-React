import { Link } from "react-router-dom";
import anillos from "../../assets/categorias/Anillos.jpg";
import collares from "../../assets/categorias/Collares.jpg";
import aretes from "../../assets/categorias/Aretes.jpg";
import amigurumis from "../../assets/categorias/Amigurumi.jpg";

const Categorias = () => {
  return (
    <>
      <div className="container m-auto my-2 text-center">
        <h2 className="font-bold text-2xl">Categorias</h2>
      </div>
      <div className="container flex justify-center flex-wrap my-3 bg-white m-auto border-2 border-indigo-600 gap-5 p-3 rounded">
        <Link
          to="/Productos/Anillos"
          className="flex flex-col justify-center items-center w-1/5 border-2 border-indigo-300 rounded hover:scale-105 duration-700 ease-in-out cursor-pointer"
        >
          <img src={anillos} alt="imagen de anillos de sapitos" />
          <p className="text-black capitalize font-semibold">Anillos</p>
        </Link>
        <Link
          to="/Productos/Collares"
          className="flex flex-col justify-center items-center w-1/5 border-2 border-indigo-300 rounded hover:scale-105 duration-700 ease-in-out cursor-pointer"
        >
          <img src={collares} alt="imagen de collar de cereza" />
          <p className="text-black capitalize font-semibold">Collares</p>
        </Link>
        <Link
          to="/Productos/Aretes"
          className="flex flex-col justify-center items-center w-1/5 border-2 border-indigo-300 rounded hover:scale-105 duration-700 ease-in-out cursor-pointer"
        >
          <img src={aretes} alt="imagen de arretes de hamsters" />
          <p className="text-black capitalize font-semibold">Aretes</p>
        </Link>
        <Link
          to="/Productos/Amigurumis"
          className="flex flex-col justify-center items-center w-1/5 border-2 border-indigo-300 rounded hover:scale-105 duration-700 ease-in-out cursor-pointer"
        >
          <img src={amigurumis} alt="imagen de un tejido de Spiderman" />
          <p className="text-black capitalize font-semibold">Amigurumis</p>
        </Link>
      </div>
    </>
  );
};

export default Categorias;
