import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Productos/ProductCard";
import GradientText from "../components/GradientText/GradientText";
import { ProductoSkeleton } from "../utils/skeleton/Producto.skeleton";

const API = import.meta.env.VITE_API_LINK;

const ProductosCategoria = () => {
  const categorias = useParams();
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`${API}/product/category/${categorias.categoria}/0`);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const result = await response.json();

        // Si el código de la respuesta JSON no es 200, maneja el error
        if (result.code && result.code !== 200) {
          throw new Error(`Error de negocio: ${result.message}`);
        }

        setProductos(result.obj || []);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  // Generación de Array de Skeletons
    const SKELETON_COUNT = 12;
    const skeletonCards = Array(SKELETON_COUNT)
      .fill(0)
      .map((_, index) => <ProductoSkeleton key={`skeleton-${index}`} />);

  return loading ? (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="container m-auto my-2 text-center">
        <GradientText animationSpeed={3} showBorder={false} className="custom-class text-4xl">
          {categorias.categoria}
        </GradientText>
      </div>
      <div className="max-w-6xl flex m-auto justify-center my-4 p-2 gap-9 flex-wrap">
        {skeletonCards}
      </div>
    </div>
    
  ) : (
    // Titulo de la pagina con el nombre de la categoria
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="container m-auto my-2 text-center">
        <GradientText animationSpeed={3} showBorder={false} className="custom-class text-4xl">
          {categorias.categoria}
        </GradientText>
      </div>
      {/* Espacio para los productos */}
      <div className="max-w-6xl flex m-auto justify-center my-4 p-2 gap-4 flex-wrap">
        {productos.map((pro, index) => (
          <ProductCard key={index} item={pro} />
        ))}
      </div>
    </div>
  );
};

export default ProductosCategoria;
