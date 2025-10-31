import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import UseCustomFetch from "../../hooks/CustomFetch";

const API = import.meta.env.VITE_API_LINK;

const CreateProductModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  // Estados para las categorias traidas del backend
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);

  const { getFetch, postFetch } = UseCustomFetch();

  // Manejar los datos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Efecto para listar las categorías al abrir el modal
  useEffect(() => {
    const fetchCategories = async () => {
      setIsCategoriesLoading(true);
      try {
        const response = await getFetch(`${API}/category/get`);
        if (response && response.obj) {
          setCategories(response.obj);
        }
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setCategories([]);
        toast.error("Error al cargar categorías.", { position: "bottom-center" });
      } finally {
        setIsCategoriesLoading(false);
      }
    };
    fetchCategories();
  }, [getFetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const payload = {
        fk_category_id: Number(formData.fk_category_id),
        product_name: formData.product_name,
        price: Number(formData.price),
        description: formData.description,
        img: formData.img,
        available: formData.available || false,
        quantity: Number(formData.quantity),
      };

      const response = await postFetch(`${API}/product/add`, payload, {
        credentials: "include",
      });

      if (response && response.status === "success") {
        toast.success("Producto creado con éxito.", { position: "top-center" });
        onSave(response.obj);
      } else {
        throw new Error(response.message || "Error desconocido al guardar.");
      }
    } catch (error) {
      console.error("Fallo al crear el producto:", error);
      toast.error(`Error al crear: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 p-6" onClick={(e) => e.stopPropagation()}>
        {/* Encabezado */}
        <div className="flex justify-between items-center border-b border-b-violet-600 pb-3">
          <span className="block text-md font-medium text-violet-600">CREANDO</span>
          <span className="block text-md font-medium text-violet-600">{formData.product_name}</span>

          <button onClick={onClose} className="text-violet-500 hover:text-violet-700">
            <X size={24} />
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          <div className="flex gap-4">
            {/* Imagen y disponibilidad */}
            <div className="flex flex-col items-center max-h-[50%] min-w-[190px] object-contain">
              {/* Previsualización de la imagen */}
              <div className="w-full min-w-[150px] max-w-[200px] h-auto rounded-md overflow-hidden border border-gray-300">
                {formData.img ? (
                  <img src={formData.img} alt={formData.product_name || "Imagen del producto"} className="w-full h-full object-contain" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 bg-gray-50">No image</div>
                )}
              </div>
              {/* Disponible */}
              <div className="flex gap-4 items-center">
                <label htmlFor="available" className="ml-2 block text-sm font-medium text-gray-700">
                  Disponible
                </label>
                <input
                  type="checkbox"
                  id="available"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Demás info producto */}
            <div>
              {/* Nombre y Categoria */}
              <div className="flex gap-2 mb-1">
                {/* Nombre */}
                <div>
                  <label htmlFor="product_name" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    value={formData.product_name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-0.5 px-2 border"
                  />
                </div>
                {/* Categoría */}
                <div className="w-[50%]">
                  <label htmlFor="fk_category_id" className="block text-sm font-medium text-gray-700">
                    Categoría
                  </label>
                  <select
                    id="fk_category_id"
                    name="fk_category_id"
                    value={formData.fk_category_id || ""}
                    onChange={handleChange}
                    required
                    disabled={isCategoriesLoading}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-0.5 px-2 border bg-white"
                  >
                    {isCategoriesLoading ? (
                      <option value="" disabled>
                        Cargando...
                      </option>
                    ) : (
                      <>
                        <option value="" disabled>
                          Selecciona una Categoría
                        </option>

                        {categories.map((cat) => (
                          <option key={cat.category_id} value={cat.category_id}>
                            {cat.category_name}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Precio y cantidad */}
              <div className="flex gap-2 mb-1">
                {/* Precio */}
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Precio
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-0.5 px-2 border"
                  />
                </div>

                {/* Cantidad */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Cantidad en Stock
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-0.5 px-2 border"
                  />
                </div>
              </div>

              {/* Descripción y url de la imágen */}
              <div className="flex flex-col gap-1 mb-1">
                {/* Descripción */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="1"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-0.5 px-2 border text-sm"
                  ></textarea>
                </div>
                {/* Url */}
                <div>
                  <label htmlFor="img" className="block text-sm font-medium text-gray-700">
                    Imagen
                  </label>
                  <input
                    type="text"
                    id="img"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-0.5 px-2 border text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

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
              {isSaving ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
