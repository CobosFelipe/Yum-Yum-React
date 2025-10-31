import { useState } from "react";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import UseCustomFetch from "../../hooks/CustomFetch";

const API = import.meta.env.VITE_API_LINK;

const DeleteProductModal = ({ product, onClose, onSave }) => {
  const [isSaving, setIsSaving] = useState(false);
  const { deleteFetch } = UseCustomFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const response = await deleteFetch(`${API}/product/delete/${product.product_id}`, {
        credentials: "include",
      });

      if (response && response.status === "success") {
        toast.success("Producto eliminado con éxito.", { position: "top-center" });
        onSave(product.product_id);
      } else {
        throw new Error(response.message || "Error desconocido al eliminar.");
      }
    } catch (error) {
      console.error("Fallo al eliminar el producto:", error);
      toast.error(`Error al eliminar: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 p-6" onClick={(e) => e.stopPropagation()}>
        {/* Encabezado */}
        <div className="flex justify-between items-center border-b border-b-violet-600 pb-3">
          <span className="block text-md font-medium text-violet-600">¿Seguro deseas eliminar "{product.product_name}"?</span>
          <button onClick={onClose} className="text-violet-500 hover:text-violet-700">
            <X size={24} />
          </button>
        </div>

        <div className="flex gap-4 mt-4">
          {/* Imagen */}
          <div className="flex items-center">
            <div className="w-full min-w-[150px] max-w-[200px] h-auto rounded-md overflow-hidden border border-gray-300">
              {product.img ? (
                <img src={product.img} alt={product.product_name || "Imagen del producto"} className="w-full h-full object-contain" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 bg-gray-50">No image</div>
              )}
            </div>
          </div>

          {/* Información del producto */}
          <div className="flex-1 space-y-2 text-sm mt-2 text-gray-700">
            {/* Nombre y categoria */}
            <div className="flex gap-2">
              <div className="flex-1">
                <p className="font-medium">Nombre</p>
                <p className="border rounded-md px-2 py-1">{product.product_name}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Categoría</p>
                <p className="border rounded-md px-2 py-1">{product.category_name}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <p className="font-medium">Precio</p>
                <p className="border rounded-md px-2 py-1">${product.price}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Cantidad en Stock</p>
                <p className="border rounded-md px-2 py-1">{product.quantity}</p>
              </div>
            </div>
            <div>
              <p className="font-medium">Descripción</p>
              <p className="border rounded-md px-2 py-1 text-sm">{product.description}</p>
            </div>
          </div>
        </div>
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {/* Botones de Acción */}
          <div className="flex justify-end pt-4 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              disabled={isSaving}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
                isSaving ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
              disabled={isSaving}
            >
              {isSaving ? "Eliminando..." : "Eliminar Producto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteProductModal;
