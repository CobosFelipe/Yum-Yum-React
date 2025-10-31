import { useEffect, useState } from "react";
import Carrousel from "../components/Inicio/Carrousel";
import Categorias from "../components/Inicio/Categorias";
import { CarrouselSkeleton } from "../utils/skeleton/Carrousel.skeleton";
import UseCustomFetch from "../hooks/CustomFetch";

const API = import.meta.env.VITE_API_LINK;

const Inicio = () => {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getFetch } = UseCustomFetch();

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await getFetch(`${API}/banner/list`);
        const enlaces = Array.isArray(response.obj) ? response.obj.map((item) => item.link) : [];
        setImagenes(enlaces);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setImagenes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchImagenes();
  }, [getFetch]);

  return loading ? (
    <CarrouselSkeleton />
  ) : (
    <>
      <Carrousel images={imagenes} />
      <Categorias />
    </>
  );
};
export default Inicio;
