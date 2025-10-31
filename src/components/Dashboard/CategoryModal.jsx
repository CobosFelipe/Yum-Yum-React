import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { X, Save, Trash2, Edit } from "lucide-react";
import UseCustomFetch from "../../hooks/CustomFetch";

const API = import.meta.env.VITE_API_LINK;

const CategoryModal = ({ onClose, onSave }) => {
  // --- ESTADOS ---

  // Estado para el formulario de CREACIÓN (nuevo)
  const [formData, setFormData] = useState({ category_name: "", img: "" });
  const [isSaving, setIsSaving] = useState(false);

  // Estado para la LISTA de categorías
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);

  // 🆕 Estados para manejar la EDICIÓN en línea
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [editingImg, setEditingImg] = useState("");

  const { getFetch, postFetch, putFetch, deleteFetch } = UseCustomFetch();

  // --- MANEJADORES DE ESTADO ---

  // Manejar solo el formulario de CREACIÓN
  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejar el cambio en los inputs de EDICIÓN
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (name === "category_name") setEditingName(value);
    if (name === "img") setEditingImg(value);
  };

  const startEdit = (category) => {
    setEditingId(category.category_id);
    setEditingName(category.category_name);
    setEditingImg(category.img || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingName("");
    setEditingImg("");
  };

  // --- FETCHES Y EFECTOS ---

  // Efecto para listar las categorías (sin cambios, solo limpiaremos la inicialización)
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

  // Manejar la creación de una nueva categoría
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    if (!formData.category_name || !formData.img) return;

    try {
      const payload = {
        category_name: formData.category_name,
        img: formData.img,
      };

      const response = await postFetch(`${API}/category/add`, payload, {
        credentials: "include",
      });

      if (response && response.status === "success" && response.obj) {
        toast.success("Categoría creada con éxito.", { position: "top-center" });
        setCategories((prev) => [...prev, response.obj]); // Actualizar lista local
        setFormData({ category_name: "", img: "" }); // Limpiar formulario
        onSave(response.obj);
      } else {
        throw new Error(response.message || "Error desconocido al crear.");
      }
    } catch (error) {
      console.error("Fallo al crear la categoría:", error);
      toast.error(`Error al crear: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };

  // Manejar la edición de una categoría
  const handleEditSave = async (category_id) => {
    setIsSaving(true);

    const originalCategory = categories.find((c) => c.category_id === category_id);
    if (editingName === originalCategory.category_name && editingImg === originalCategory.img) {
      cancelEdit(); // No hubo cambios
      setIsSaving(false);
      return;
    }

    try {
      const payload = {
        category_id: category_id,
        category_name: editingName,
        img: editingImg,
      };

      const response = await putFetch(`${API}/category/edit`, payload, {
        credentials: "include",
      });

      if (response && response.status === "success" && response.obj) {
        toast.success("Categoría editada con éxito.", { position: "top-center" });
        // Actualizar la lista localmente
        setCategories((prev) => prev.map((c) => (c.category_id === category_id ? response.obj : c)));
        cancelEdit();
      } else {
        throw new Error(response.message || "Error desconocido al guardar.");
      }
    } catch (error) {
      console.error("Fallo al editar la categoría:", error);
      toast.error(`Error al editar: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };

  // Manejar la eliminación de una categoría
  const handleDeleteCategory = async (category_id, category_name) => {
    if (!window.confirm(`¿Seguro que deseas eliminar la categoría "${category_name}"?`)) return;
    setIsSaving(true);

    try {
      const response = await deleteFetch(`${API}/category/delete/${category_id}`);

      if (response && response.status === "success") {
        toast.success("Categoría eliminada con éxito.", { position: "top-center" });
        // Actualizar la lista localmente
        setCategories((prev) => prev.filter((c) => c.category_id !== category_id));
      } else {
        throw new Error(response.message || "Error desconocido al eliminar.");
      }
    } catch (error) {
      console.error("Fallo al eliminar la categoría:", error);
      toast.error(`Error al eliminar: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };

  // --- JSX (VISTA) ---

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6" onClick={(e) => e.stopPropagation()}>
        {/* Encabezado al estilo BannersModal */}
        <div className="flex justify-between items-center border-b border-b-violet-600 pb-3">
          <span className="block text-xl font-bold text-violet-600">Gestión de Categorías</span>
          <button onClick={onClose} className="text-violet-500 hover:text-violet-700">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-4 max-h-[70vh] overflow-y-auto pr-2">
          {/* Sección 1: Crear Nueva Categoría */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">➕ Agregar Nueva Categoría</h2>

            <form onSubmit={handleCreateSubmit} className="space-y-3 p-3 border rounded-lg bg-gray-50">
              <div className="flex gap-4">
                {/* Nombre */}
                <div className="flex-1">
                  <label htmlFor="category_name_new" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="category_name_new"
                    name="category_name"
                    value={formData.category_name}
                    onChange={handleCreateChange}
                    required
                    placeholder="Electrónica, Ropa, etc."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-1 px-3 border text-sm"
                  />
                </div>
                {/* URL Imagen */}
                <div className="flex-1">
                  <label htmlFor="img_new" className="block text-sm font-medium text-gray-700">
                    URL Imagen
                  </label>
                  <input
                    type="url"
                    id="img_new"
                    name="img"
                    value={formData.img}
                    onChange={handleCreateChange}
                    required
                    placeholder="https://ejemplo.com/cat.jpg"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-1 px-3 border text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
                    isSaving ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                  disabled={isSaving || !formData.category_name || !formData.img || editingId !== null}
                >
                  {isSaving ? "Creando..." : "Crear Categoría"}
                </button>
              </div>
            </form>
          </section>

          <hr className="border-gray-200" />

          {/* Sección 2: Listar y Editar Categorías (Edición en línea) */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">📋 Categorías Activas ({categories.length})</h2>

            {isCategoriesLoading ? (
              <p className="text-center text-gray-500">Cargando categorías...</p>
            ) : categories.length === 0 ? (
              <p className="text-center text-gray-500">No hay categorías. ¡Crea una!</p>
            ) : (
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.category_id} className="p-3 border rounded-lg bg-gray-50 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 font-medium w-10 shrink-0">ID: {category.category_id}</span>

                      {/* Vista del Nombre */}
                      {editingId === category.category_id ? (
                        <input
                          type="text"
                          name="category_name"
                          value={editingName}
                          onChange={handleEditChange}
                          placeholder="Nombre"
                          className="flex-1 rounded-md border-gray-300 shadow-sm py-1 px-2 border text-sm focus:border-indigo-500 focus:ring-indigo-500"
                          disabled={isSaving}
                        />
                      ) : (
                        <span className="flex-1 text-sm font-medium text-gray-700">{category.category_name}</span>
                      )}

                      {/* Botones de Acción */}
                      <div className="flex gap-2 shrink-0">
                        {editingId === category.category_id ? (
                          <>
                            <button
                              onClick={() => handleEditSave(category.category_id)}
                              className="p-1.5 text-white bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                              title="Guardar"
                              disabled={isSaving || !editingName || !editingImg}
                            >
                              <Save size={18} />
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="p-1.5 text-white bg-gray-500 hover:bg-gray-600 rounded-full transition-colors"
                              title="Cancelar"
                              disabled={isSaving}
                            >
                              <X size={18} />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => startEdit(category)}
                            className="p-1.5 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
                            title="Editar Categoría"
                            disabled={isSaving || editingId !== null}
                          >
                            <Edit size={18} />
                          </button>
                        )}

                        <button
                          onClick={() => handleDeleteCategory(category.category_id, category.category_name)}
                          className="p-1.5 text-white bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                          title="Eliminar Categoría"
                          disabled={isSaving || editingId !== null}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Vista de la URL de la Imagen */}
                    {editingId === category.category_id ? (
                      <input
                        type="url"
                        name="img"
                        value={editingImg}
                        onChange={handleEditChange}
                        placeholder="URL Imagen"
                        className="rounded-md border-gray-300 shadow-sm py-1 px-2 border text-xs focus:border-indigo-500 focus:ring-indigo-500"
                        disabled={isSaving}
                      />
                    ) : (
                      <span className="text-xs text-gray-500 truncate w-full" style={{ direction: "rtl", textAlign: "left" }}>
                        {category.img}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
