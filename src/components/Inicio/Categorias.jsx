import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sliders from "./Slider";
import GradientText from "../GradientText/GradientText";
import { CategoriaSkeleton } from "../../utils/skeleton/Categoria.skeleton";

const API = import.meta.env.VITE_API_LINK;

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(`${API}/category/get`);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const result = await response.json();

        // Si el código de la respuesta JSON no es 200, maneja el error
        if (result.code && result.code !== 200) {
          throw new Error(`Error de negocio: ${result.message}`);
        }

        setCategorias(result.obj || []);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setCategorias([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  // Generación de Array de Skeletons
  const SKELETON_COUNT = 5;
  const skeletonSlides = Array(SKELETON_COUNT)
    .fill(0)
    .map((_, index) => <CategoriaSkeleton key={`skeleton-${index}`} />);

  // Mapeo de la data (solo si no hay error y no está cargando)
  const slides = categorias.map((cat) => (
    <Link
      to={`/Productos/${cat.name}`}
      key={cat.name}
      className="flex flex-col justify-center items-center w-[180px] border-2 border-indigo-300 rounded hover:scale-105 duration-700 ease-in-out cursor-pointer"
    >
      <img src={cat.img} alt={`imagen de ${cat.name}`} />
      <p className="text-black capitalize font-semibold lg:text-1xl my-1">{cat.name}</p>
    </Link>
  ));

  // Renderizado condicional
  return (
    <div className="container m-auto my-3 text-center">
      <GradientText animationSpeed={3} showBorder={false} className="custom-class text-4xl">
        Categorias
      </GradientText>
      <div className="my-5">
        <Sliders className="mt-2" items={loading ? skeletonSlides : slides} />
      </div>
    </div>
  );
};

export default Categorias;
