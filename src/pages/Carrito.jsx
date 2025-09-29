import { useCart } from "../hooks/useCart";
import ProductosCarrito from "../components/Carrito/ProductosCarrito"
import GradientText from "../components/GradientText/GradientText";
import CarritoVacio from "../assets/imgs/Aqui pondría tus productos.jpg";
import BotonCompra from "../utils/BotonCompra";
const Carrito = () => {
  const { cart } = useCart();
  //const [isOpen, setIsOpen] = useState(false);

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
          <BotonCompra to={"/Factura"}>
            ¡Realizar Pedido!
          </BotonCompra>
        </>
      ) : (
        <div className="container flex m-auto my-2 justify-center">
          <img src={CarritoVacio} />
        </div>
      )}
    </div>
  );
};

export default Carrito