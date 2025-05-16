import { useCart } from "../../hooks/useCart";

const TotalesCarrito = () => {
  const { cart } = useCart();

  const totalCarrito = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer m-auto w-full mt-10">
      <div
        className={`grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 p-2 text-center xl:mx-64 lg:mx-32 md:mx-16 bg-gradient-to-r from-pink-200 to-blue-200 rounded-md`}
      >
        {/* Encabezados */}
        <p className="font-bold">Nombre</p>
        <p className="font-bold">Precio U.</p>
        <p className="font-bold">Cant.</p>
        <p className="font-bold">Total</p>

        {/* Filas por producto */}
        {cart.map((item) => (
          <div key={item.id} className="contents">
            <p className="italic">{item.nombre}</p>
            <p className="italic">$ {item.precio.toLocaleString("es-CO")}</p>
            <p className="italic">{item.cantidad}</p>
            <p className="italic">$ {(item.precio * item.cantidad).toLocaleString("es-CO")}</p>
          </div>
        ))}

        {/* Total general */}
        <p className="col-span-3 font-bold text-right pr-4">Total Carrito:</p>
        <p className="font-bold">${totalCarrito.toLocaleString("es-CO")}</p>
      </div>
    </div>
  );
};
export default TotalesCarrito;
