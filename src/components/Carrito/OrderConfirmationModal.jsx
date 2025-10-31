import { X } from "lucide-react";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";
import { useUsers } from "../../hooks/useUsers";
import UseCustomFetch from "../../hooks/CustomFetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const API = import.meta.env.VITE_API_LINK;

const OrderConfirmationModal = ({ onClose }) => {
  const { cart, clearCart } = useCart();
  const { user } = useUsers();
  const { getFetch, postFetch } = UseCustomFetch();

  // Estados de carga y datos de usuario
  const [userContactInfo, setUserContactInfo] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoadingContact, setIsLoadingContact] = useState(true);

  const Navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!user) {
        setIsLoadingContact(false);
        return;
      }
      
      try {
        const response = await getFetch(`${API}/user/get-info`, { credentials: "include" });

        if (response && response.status === "success" && response.obj) {
          setUserContactInfo(response.obj);
        } else {
          toast.error("Error al cargar datos de contacto. Por favor, revisa tu sesión.", { position: "top-center" });
        }
      } catch (error) {
        console.error("Fallo al obtener info de contacto:", error);
        toast.error("Fallo de conexión al cargar datos de contacto.", { position: "top-center" });
      } finally {
        setIsLoadingContact(false);
      }
    };

    fetchUserInfo();
  }, [getFetch, user]);

  // Calcular el total
  const totalCarrito = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  // Mapear el carrito al formato que el backend espera
  const productsPayload = cart.map((item) => ({
    product_id: item.product_id,
    quantity: item.cantidad,
  }));

  // Lógica para crear la orden
  const handleConfirmOrder = async () => {
    // Validación Carrito vacío
    if (cart.length === 0) {
      toast.error("El carrito está vacío.", { position: "top-center" });
      return;
    }

    // Validación Usuario logueado
    if (!user) {
      toast.error("Debes iniciar sesión para confirmar el pedido.", { position: "top-center" });
      setTimeout(() => {
        Navigate("/Login");
      }, 1000);
      return;
    }

    setIsProcessing(true);

    try {
      const response = await postFetch(
        `${API}/orders/add`,
        { products: productsPayload },
        {
          credentials: "include",
        }
      );    

      if (response && response.status === "success" && response.obj) {
        toast.success(`Pedido #${response.obj.orderId} creado con éxito.`, { position: "top-center" });
        clearCart();
        onClose();
        setTimeout(() => {
          Navigate("/Productos");
        }, 1000);
      } else {        
        throw new Error(response.message || "Error al procesar el pedido.");
      }
    } catch (error) {
      console.error("Fallo al crear la orden:", error);
      toast.error(`Error al confirmar: ${error.message}`, { position: "top-center" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6" onClick={(e) => e.stopPropagation()}>
        {/* Encabezado */}
        <div className="flex justify-between items-center border-b border-b-violet-600 pb-3 mb-4">
          <span className="block text-xl font-bold text-violet-600">📄 Confirmación y Resumen del Pedido</span>
          <button onClick={onClose} className="text-violet-500 hover:text-violet-700">
            <X size={24} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto pr-2">
          {/* Resumen del Carrito */}
          <div className="mb-6 p-4 border border-blue-300 rounded-lg bg-blue-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Detalles del Pedido:</h3>

            {/* Encabezados */}
            <div className={`grid grid-cols-[3fr_1fr_1fr_1fr] gap-3 p-2 text-center bg-blue-200/70 rounded-t-md font-bold text-sm`}>
              <p>Producto</p>
              <p>Precio U.</p>
              <p>Cant.</p>
              <p>Total</p>
            </div>

            {/* Filas por producto */}
            {cart.map((item) => (
              <div key={item.product_id} className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-3 p-2 text-center border-b border-gray-200 text-sm">
                <p className="italic text-left truncate">{item.product_name}</p>
                <p className="italic">${item.price.toLocaleString("es-CO")}</p>
                <p className="italic">{item.cantidad}</p>
                <p className="italic font-medium">${(item.price * item.cantidad).toLocaleString("es-CO")}</p>
              </div>
            ))}

            {/* Total general */}
            <div className={`grid grid-cols-[3fr_1fr_1fr_1fr] gap-3 p-2 text-center rounded-b-md text-sm mt-2 font-bold`}>
              <p className="col-span-3 text-right pr-4 text-violet-700">Total a Pagar:</p>
              <p className="text-md text-violet-700">${totalCarrito.toLocaleString("es-CO")}</p>
            </div>
          </div>

          <hr className="border-gray-200 mb-4" />

          {/* Información del Usuario */}
          <div className={`mb-6 p-4 border  rounded-lg ${userContactInfo ? "border-green-300 bg-green-50" : "border-pink-300 bg-pink-50" }`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Datos de Contacto</h3>

            {isLoadingContact ? (
              <p className="text-gray-500 font-medium">Cargando datos de contacto...</p>
            ) : userContactInfo ? (
              <>
                <p>👤 Cliente: {userContactInfo.userName}</p>
                <p>📬 Correo: {userContactInfo.email}</p>
                <p>📲 Teléfono: {userContactInfo.telephone}</p>
                <p className="text-xs mt-2 text-gray-500">Si necesitas cambiar esta información, hazlo en tu perfil.</p>
              </>
            ) : (
              <p className="text-red-500 font-medium">⚠️ No se pudo cargar la información del usuario. Para continuar, inicia sesión.</p>
            )}
          </div>
        </div>

        {/* Pie del Modal: Botones de Acción */}
        <div className="flex justify-end pt-4 space-x-3 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            disabled={isProcessing}
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleConfirmOrder}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
              isProcessing || !user || cart.length === 0 ? "bg-violet-400 cursor-not-allowed" : "bg-violet-600 hover:bg-violet-700"
            }`}
            disabled={isProcessing || !user || cart.length === 0}
          >
            {isProcessing ? "Procesando..." : "Realizar Pedido"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
