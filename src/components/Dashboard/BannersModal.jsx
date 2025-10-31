import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { X, Save, Trash2, Edit } from "lucide-react";
import UseCustomFetch from "../../hooks/CustomFetch";

const API = import.meta.env.VITE_API_LINK;

const BannersModal = ({ onClose }) => {
  // Estado para el formulario de CREACIÓN (nuevo banner)
  const [formData, setFormData] = useState({ link: "" });
  const [isSaving, setIsSaving] = useState(false);
  // Estados para los banners traidas del backend
  const [banners, setBanners] = useState([]);
  const [isBannersLoading, setIsBannersLoading] = useState(true);

  // Estado para manejar la edición en línea
  const [editingId, setEditingId] = useState(null);

  // Estado para guardar el nuevo link mientras se edita
  const [editingLink, setEditingLink] = useState("");

  const { getFetch, postFetch, putFetch } = UseCustomFetch();

  // Manejar los datos del formulario de Creación
  const handleChange = (e) => {
    setFormData({ link: e.target.value });
  };

  // Manejar el cambio en el input de Edición
  const handleEditChange = (e) => {
    setEditingLink(e.target.value);
  };

  // Iniciar la edición
  const startEdit = (banner) => {
    setEditingId(banner.banner_id);
    setEditingLink(banner.link);
  };

  // Cancelar la edición
  const cancelEdit = () => {
    setEditingId(null);
    setEditingLink("");
  };

  // Efecto para listar los banners al abrir el modal
  useEffect(() => {
    const fetchBanners = async () => {
      setIsBannersLoading(true);
      try {
        const response = await getFetch(`${API}/banner/list`);
        if (response && response.obj) {
          setBanners(response.obj);
        }
      } catch (error) {
        console.error("Error al obtener banners:", error);
        setBanners([]);
        toast.error("Error al cargar banners.", { position: "bottom-center" });
      } finally {
        setIsBannersLoading(false);
      }
    };
    fetchBanners();
  }, [getFetch]);

  // Manejar la creación de un nuevo banner
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    if (!formData.link) return;

    try {
      const payload = { link: formData.link };

      const response = await postFetch(`${API}/banner/add`, payload, {
        credentials: "include",
      });

      if (response && response.status === "success" && response.obj) {
        toast.success("Banner creado con éxito.", { position: "top-center" });
        // 🔑 Actualiza la lista localmente
        setBanners((prev) => [...prev, response.obj]);
        setFormData({ link: "" }); // Limpiar formulario
        // Si tienes una función onSave en el componente padre, también la llamas
        // onSave(response.obj);
      } else {
        throw new Error(response.message || "Error desconocido al guardar.");
      }
    } catch (error) {
      console.error("Fallo al crear el banner:", error);
      toast.error(`Error al crear: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };

  // Manejar la edición de un banner
  const handleEditSave = async (banner_id) => {
    setIsSaving(true);
    if (editingLink === banners.find((b) => b.banner_id === banner_id)?.link) {
      // No hubo cambios, simplemente cancelamos la edición
      cancelEdit();
      setIsSaving(false);
      return;
    }

    try {
      const payload = {
        banner_id: banner_id,
        link: editingLink,
      };

      const response = await putFetch(`${API}/banner/edit`, payload, {
        credentials: "include",
      });

      if (response && response.status === "success" && response.obj) {
        toast.success("Banner actualizado con éxito.", { position: "top-center" });
        // Actualiza la lista localmente
        setBanners((prev) => prev.map((b) => (b.banner_id === banner_id ? response.obj : b)));
        cancelEdit();
        // onBannerUpdated(response.obj); // Llama al padre si es necesario
      } else {
        throw new Error(response.message || "Error desconocido al actualizar.");
      }
    } catch (error) {
      console.error("Fallo al actualizar el banner:", error);
      toast.error(`Error al actualizar: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };

  // Manejar la eliminación de un banner
  const handleDeleteBanner = async (banner_id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este banner?")) return;
    setIsSaving(true);

    try {
      const response = await deleteFetch(`${API}/banner/delete/${banner_id}`, {
        credentials: "include",
      });

      if (response && response.status === "success") {
        toast.success("Banner eliminado con éxito.", { position: "top-center" });
        // 🔑 Actualiza la lista localmente
        setBanners((prev) => prev.filter((b) => b.banner_id !== banner_id));
        // onBannerDeleted(banner_id); // Llama al padre si es necesario
      } else {
        throw new Error(response.message || "Error desconocido al eliminar.");
      }
    } catch (error) {
      console.error("Fallo al eliminar el banner:", error);
      toast.error(`Error al eliminar: ${error.message}`, { position: "top-center" });
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6" onClick={(e) => e.stopPropagation()}>
        {/* Encabezado */}
        <div className="flex justify-between items-center border-b border-b-violet-600 pb-3">
          <span className="block text-xl font-bold text-violet-600">Gestión de Banners</span>
          <button onClick={onClose} className="text-violet-500 hover:text-violet-700">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-4 max-h-[70vh] overflow-y-auto pr-2">
          {/* Crear Nuevo Banner */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">➕ Agregar Nuevo Banner</h2>
            <form onSubmit={handleCreateSubmit} className="flex gap-2 items-end">
              <div className="flex-1">
                <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                  Enlace (URL de la Imagen)
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  required
                  placeholder="https://ejemplo.com/imagen.jpg"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-1 px-3 border text-sm"
                />
              </div>
              <button
                type="submit"
                className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors h-fit ${
                  isSaving ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
                }`}
                disabled={isSaving || !formData.link}
              >
                {isSaving ? "Creando..." : "Crear"}
              </button>
            </form>
          </section>

          <hr className="border-gray-200" />

          {/* Listar y Editar Banners */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">📋 Banners Activos ({banners.length})</h2>

            {isBannersLoading ? (
              <p className="text-center text-gray-500">Cargando banners...</p>
            ) : banners.length === 0 ? (
              <p className="text-center text-gray-500">No hay banners. ¡Crea uno!</p>
            ) : (
              <ul className="space-y-3">
                {banners.map((banner) => (
                  <li key={banner.banner_id} className="p-3 border rounded-lg bg-gray-50 flex items-center gap-3">
                    <span className="text-xs text-gray-500 font-medium w-10 shrink-0">ID: {banner.banner_id}</span>

                    {/* Input de edición/Visualización */}
                    {editingId === banner.banner_id ? (
                      <input
                        type="url"
                        value={editingLink}
                        onChange={handleEditChange}
                        className="flex-1 rounded-md border-gray-300 shadow-sm py-1 px-2 border text-sm focus:border-indigo-500 focus:ring-indigo-500"
                        disabled={isSaving}
                      />
                    ) : (
                      <span className="flex-1 text-sm text-gray-700 truncate link-ellipsis" style={{ direction: "rtl", textAlign: "left" }}>
                        {banner.link}
                      </span>
                    )}

                    {/* Botones de Acción */}
                    <div className="flex gap-2 shrink-0">
                      {editingId === banner.banner_id ? (
                        <>
                          <button
                            onClick={() => handleEditSave(banner.banner_id)}
                            className="p-1.5 text-white bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                            title="Guardar"
                            disabled={isSaving}
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
                          onClick={() => startEdit(banner)}
                          className="p-1.5 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
                          title="Editar Enlace"
                          disabled={isSaving || editingId !== null}
                        >
                          <Edit size={18} />
                        </button>
                      )}

                      <button
                        onClick={() => handleDeleteBanner(banner.banner_id)}
                        className="p-1.5 text-white bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                        title="Eliminar Banner"
                        disabled={isSaving || editingId !== null}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
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

export default BannersModal;
