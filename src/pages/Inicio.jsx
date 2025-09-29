import { useEffect, useState } from "react";
import Carrousel from "../components/Inicio/Carrousel";
import Categorias from "../components/Inicio/Categorias";

const API = import.meta.env.VITE_API_LINK;

const Inicio = () => {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await fetch(`${API}/banner/list`);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const result = await response.json();

        if (result.code && result.code !== 200) {
          throw new Error(`Error de negocio: ${result.message}`);
        }

        setImagenes(result.obj || []);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setImagenes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchImagenes();
  }, []);

  return loading ? (
    <></>
  ) : (
    <>
      <Carrousel images={imagenes} />
      <Categorias />
    </>
  );
};
export default Inicio;
