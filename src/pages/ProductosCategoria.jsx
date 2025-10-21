import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Productos/ProductCard";
import GradientText from "../components/Inicio/GradientText/GradientText";
import { ProductoSkeleton } from "../utils/skeleton/Producto.skeleton";
import Pagination from "../components/Productos/Pagination";
import UseCustomFetch from "../hooks/CustomFetch";

const API = import.meta.env.VITE_API_LINK;
const PAGE_SIZE = 12;

const ProductosCategoria = () => {
  const categorias = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] = useState({}); // Estado para toda la metadata

  const { getFetch } = UseCustomFetch();

  // Función que se pasará al componente Pagination
  const handlePageChange = (newPage) => {
    // Aseguramos que el número de página esté dentro de los límites
    if (newPage > 0 && newPage <= paginationData.totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    const offset = (page - 1) * PAGE_SIZE; // Calcular el offset
    const fetchProductos = async () => {
      try {
        const response = await getFetch(`${API}/product/category/${categorias.categoria}/${offset}`);
        // Guardar lista de productos o []
        setProductos(response.obj.products || []);

        // Guardar toda la metadata de paginación
        setPaginationData(response.obj.pagination || {});
      } catch (error) {
        console.error(`Error al obtener productos por categoría ${categorias.categoria}:`, error);
        setProductos([]);
        setPaginationData({ totalPages: 1, currentPage: 1, hasNextPage: false, hasPrevPage: false });
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, [page, categorias.categoria]);

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
      <div className="max-w-6xl flex m-auto justify-center my-4 p-2 gap-9 flex-wrap">{skeletonCards}</div>
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
      <Pagination
        currentPage={page}
        totalPages={paginationData.totalPages}
        onPageChange={handlePageChange}
        //Pasar hasPrevPage y hasNextPage para más control
        hasPrevPage={paginationData.hasPrevPage}
        hasNextPage={paginationData.hasNextPage}
      />
    </div>
  );
};

export default ProductosCategoria;
