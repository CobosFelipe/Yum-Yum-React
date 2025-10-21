import { toast } from "react-toastify";

export const useToastify = () => {
  const showToast = (type, message) => {
    const baseClass = "text-white font-semibold rounded-lg shadow-lg p-3";
    switch (type) {
      case "success":
        toast.success(message, { icon: "✅", className: `${baseClass} bg-green-600` });
        break;
      case "error":
        toast.error(message, { icon: "❌", className: `${baseClass} bg-red-600` });
        break;
      case "warn":
        toast.warn(message, { icon: "⚠️", className: `${baseClass} bg-yellow-500 text-black` });
        break;
      case "cart":
        toast(`${message}  🛒`, { icon: "🛒", className: `${baseClass} bg-violet-600` });
        break;
      case "delete-cart":
        toast(`${message}  😢`, { icon: "🛒", className: `${baseClass} bg-violet-600` });
        break;
      default:
        toast.info(message, { icon: "ℹ️", className: `${baseClass} bg-blue-600` });
    }
  };

  const showPromiseToast = (promise, messages = {}) => {
    toast.promise(promise, {
      pending: {
        render: () => messages.pending || "Procesando...",
        icon: "⏳",
        className: "bg-blue-600 text-white font-semibold rounded-lg shadow-lg",
      },
      success: {
        render: () => messages.success || "Operación exitosa",
        icon: "✅",
        className: "bg-green-600 text-white font-semibold rounded-lg shadow-lg",
      },
      error: {
        render: ({ data }) => `${data?.message || messages.error || "Ocurrió un error"}`,
        icon: "❌",
        className: "bg-red-600 text-white font-semibold rounded-lg shadow-lg",
      },
    });
    return promise;
  };

  return { showToast, showPromiseToast };
};
