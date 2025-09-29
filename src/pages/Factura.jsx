import TotalesCarrito from "../components/Carrito/TotalesCarrito";
import BotonCompra from "../utils/BotonCompra";
import ContactForm from "../utils/Formspree";
const Factura = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto gap-3">
        <TotalesCarrito />
        <div className="flex justify-center items-center m-auto gap-3 max-md:flex-wrap lg:flex-nowrap">
          <BotonCompra to={"/Productos/Todo"} className={"md:min-w-40"}>
            Seguir Comprando
          </BotonCompra>
          <BotonCompra to={"/Carrito"} className={"md:min-w-40"}>
            Editar Pedido
          </BotonCompra>
          <BotonCompra to={"/Carrito"} className={"md:min-w-40"}>
            Confirmar Pedido
          </BotonCompra>
        </div>
        <ContactForm/>
      </div>
    </>
  );
};

export default Factura;
