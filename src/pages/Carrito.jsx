import { useState } from "react";
import { useCart } from "../hooks/useCart";
import OrderConfirmationModal from "../components/Carrito/OrderConfirmationModal";
import ProductosCarrito from "../components/Carrito/ProductosCarrito";
import GradientText from "../components/Inicio/GradientText/GradientText";
import CarritoVacio from "../assets/imgs/Aqui pondría tus productos.jpg";

const Carrito = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

  return (
    <div className="min-h-[70vh] flex flex-col justify-center gap-5">
      <div className="container m-auto my-2 text-center">
        <GradientText animationSpeed={3} showBorder={false} className="custom-className text-4xl">
          Bolsa de compras
        </GradientText>
      </div>
      {cart?.length > 0 ? (
        <>
          <div className="flex items-center justify-center gap-5 flex-wrap mb-5">
            {cart.map((prod, index) => (
              <ProductosCarrito key={index} item={prod} />
            ))}
          </div>
          <div className="flex mx-auto">
            <button onClick={() => setIsModalOpen(true)} className="px-3 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-violet-600 rounded hover:bg-violet-700 focus:outline-none self-center">
              Realizar Pedido
            </button>
          </div>
        </>
      ) : (
        <div className="container flex m-auto my-2 justify-center">
          <img src={CarritoVacio} />
        </div>
      )}

      {/* Renderizar el Modal condicionalmente */}
      {isModalOpen && <OrderConfirmationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Carrito;
