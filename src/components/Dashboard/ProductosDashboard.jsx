import { useState, useEffect, useCallback } from "react";
import ProductTable from "./ProductTable";
import ModalContainer from "./ModalContainer";
import UseCustomFetch from "../../hooks/CustomFetch";
import GradientText from "../Inicio/GradientText/GradientText";
import useModal from "../../hooks/useModal";
import Pagination from "../Productos/Pagination";

const API = import.meta.env.VITE_API_LINK;
const PAGE_SIZE = 12;

const ProductosDashboard = () => {
  const { getFetch } = UseCustomFetch();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] = useState({});

  // Hooks de modales
  const bannersModal = useModal();
  const createModal = useModal();
  const categoryModal = useModal();
  const deleteModal = useModal();
  const editModal = useModal();

  // Función que se llama al hacer cambios de página
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= paginationData.totalPages) {
      setPage(newPage);
    }
  };

  // Función para actualizar el estado de productos en edición
  const handleProductUpdate = useCallback(
    (updatedProduct) => {
      setProductos((prevProductos) => prevProductos.map((p) => (p.product_id === updatedProduct.product_id ? updatedProduct : p)));
      editModal.closeModal();
    },
    [editModal]
  );

  // Función para actualizar el estado de productos en eliminación
  const handleProductDelete = useCallback(
    (productId) => {
      setProductos((prevProductos) => prevProductos.filter((p) => p.product_id !== productId));
      deleteModal.closeModal();
    },
    [deleteModal]
  );

  // Función para re-fetch o actualización después de una creación
  const handleProductCreated = useCallback(() => {
    setPage(1);
    createModal.closeModal();
  }, [createModal]);

  useEffect(() => {
    const offset = (page - 1) * PAGE_SIZE;
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const response = await getFetch(`${API}/product/all-adm/${PAGE_SIZE}/${offset}`);

        setProductos(response.obj.products || []);
        setPaginationData(response.obj.pagination || {});
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setProductos([]);
        setPaginationData({ totalPages: 1, currentPage: 1, hasNextPage: false, hasPrevPage: false });
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, [page, getFetch]);

  return (
    <>
      <div className="min-h-[80vh] flex flex-col items-center">
        <div className="container m-auto my-2 text-center">
          <GradientText animationSpeed={3} showBorder={false} className="custom-class text-4xl">
            Panel de Control
          </GradientText>
        </div>

        <div className="container flex justify-center m-auto my-1 text-center gap-2">
          <button
            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={createModal.openModal}
          >
            Crear Producto
          </button>
          <button
            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={categoryModal.openModal}
          >
            Categorias
          </button>
          <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          onClick={bannersModal.openModal}>
            Banners
          </button>
        </div>

        {/* Contenedor de la Tabla */}
        <ProductTable productos={productos} loading={loading} onEdit={editModal.openModal} onDelete={deleteModal.openModal} />

        {/* Contenedor de paginación */}
        <Pagination
          currentPage={page}
          totalPages={paginationData.totalPages}
          onPageChange={handlePageChange}
          hasPrevPage={paginationData.hasPrevPage}
          hasNextPage={paginationData.hasNextPage}
        />

        {/* Contenedor de Modales */}
        <ModalContainer
          bannersModal={bannersModal}
          createModal={createModal}
          categoryModal={categoryModal}
          deleteModal={deleteModal}
          editModal={editModal}
          onProductUpdate={handleProductUpdate}
          onProductCreated={handleProductCreated}
          onProductDeleted={handleProductDelete}
        />
      </div>
    </>
  );
};

export default ProductosDashboard;
