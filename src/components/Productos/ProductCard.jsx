import styles from "../../styles/product-card.module.css";
import { useCart } from "../../hooks/useCart";
import { Toastify } from "../Toastify/Toastify";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center justify-center max-w-sm">
      {/* Espacio para la imagen del producto*/}
      <div className="w-64 h-64 bg-gray-300 bg-center bg-cover shadow-md rounded-2xl">
        <img src={item.imagen} className="w-64 h-64 rounded-2xl" />
      </div>

      {/* Contenedor de la data del producto */}
      <div className={`flex flex-col w-55 -mt-10 overflow-hidden min-h-[6rem] bg-white rounded-lg shadow-lg border-1 ${styles.card}`}>
        {/* Nombre del producto */}
        <div className="flex flex-grow items-center justify-center">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">{item.nombre}</h3>
        </div>
        {/* Espacio para el precio del producto y agregar al carrito */}
        <div className="flex items-center justify-between px-3 py-2">
          <span className="font-bold text-gray-800">$ {item.precio.toLocaleString("es-CO")}</span>
          <Toastify
            text={"Producto agregado al carrito"}
            btnText={"Agregar"}
            className={
              "px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
            }
            onClick={() => addToCart(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
