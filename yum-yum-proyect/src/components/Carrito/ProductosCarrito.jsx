import styles from "../../styles/product-card.module.css";
import { useCart } from "../../hooks/useCart";
import { Toastify } from "../Toastify/Toastify";
const ProductosCarrito = ({ item }) => {
  const { addToCart, removeToCart, deleteToCart } = useCart();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-64 h-64 bg-gray-300 bg-center bg-cover rounded-2xl shadow-md">
        <img src={item.imagen} alt={item.descripcion} className="w-64 h-64 rounded-2xl" />
      </div>

      <div className={`w-70 -mt-10 overflow-hidden bg-white rounded-2xl shadow-lg border-1 cursor-pointer ${styles.card}`}>
        {/* Nombre del producto */}
        <h3 className="pt-2 font-bold tracking-wide text-center text-gray-800 uppercase">{item.nombre}</h3>
        {/* Espacio para el precio y la cantidad de productos */}
        <div className="flex items-center justify-center gap-4 pb-2">
          <h3 className="font-bold tracking-wide text-center text-gray-800 uppercase">{item.cantidad}</h3>
          <h3> * </h3>
          <h3 className="font-bold tracking-wide text-center text-gray-800">$ {(item.cantidad * item.precio).toLocaleString("es-CO")}</h3>
        </div>
        {/* Espacio para cambiar cantidad y eliminar del carrito */}
        <div className="flex items-center justify-center px-3 py-2 gap-2">
          <button
            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={() => removeToCart(item)}
          >
            {/* Icono de restar */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>

          <button
            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            onClick={() => addToCart(item)}
          >
            {/* Icono de agregar */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>

          <Toastify
            text={"Producto eliminado del carrito"}
            btnText={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            }
            className={
              "px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-red-700 focus:bg-gray-700 focus:outline-none"
            }
            onClick={() => deleteToCart(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductosCarrito;
