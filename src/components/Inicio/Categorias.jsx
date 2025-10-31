import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sliders from "./Slider";
import GradientText from "./GradientText/GradientText";
import { CategoriaSkeleton } from "../../utils/skeleton/Categoria.skeleton";
import UseCustomFetch from "../../hooks/CustomFetch";

const API = import.meta.env.VITE_API_LINK;

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getFetch } = UseCustomFetch();

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await getFetch(`${API}/category/get`);
        setCategorias(response.obj || []);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setCategorias([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, [getFetch]);

  // Generación de Array de Skeletons
  const SKELETON_COUNT = 5;
  const skeletonSlides = Array(SKELETON_COUNT)
    .fill(0)
    .map((_, index) => <CategoriaSkeleton key={`skeleton-${index}`} />);

  // Mapeo de la data (solo si no hay error y no está cargando)
  const slides = categorias.map((cat) => (
    <Link
      to={`/Productos/${cat.category_name}`}
      key={cat.category_name}
      className="flex flex-col justify-center items-center w-[180px] border-2 border-indigo-300 rounded hover:scale-105 duration-700 ease-in-out cursor-pointer"
    >
      <img src={cat.img} alt={`imagen de ${cat.category_name}`} />
      <p className="text-black capitalize font-semibold lg:text-1xl my-1">{cat.category_name}</p>
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
