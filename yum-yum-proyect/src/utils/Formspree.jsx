import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { useCart } from "../hooks/useCart";

function ContactForm() {
  const { cart } = useCart();
  const data = cart.map(item => `Item: ${item.nombre}, Cantidad: ${item.cantidad}, Precio: ${item.precio}.`).join('\n');

  const [state, handleSubmit] = useForm("xwkgpoko");
  const notify = () =>
    toast("¡Pedido realizado con exito! \n ¡Gracias por comprar en Yum! Yum!", {
      position: "top-center",
    });

  if (state.succeeded) {
    return notify();
  }
  return (
    <div className="flex flex-col bg-blue-100 rounded-xl p-3 justify-center items-center min-w-100">
      <h2 className="font-bold">Diligencia tus datos de contacto</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" name="name" className="border-1 rounded-lg bg-white p-1 shadow-cyan-500/50" placeholder="Nombre completo" required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cel">Número Celular</label>
          <input id="cel" type="tel" name="cel" className="border-1 rounded-lg bg-white p-1 shadow-cyan-500/50" placeholder="Introduzca su Telefono" required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            className="border-1 rounded-lg bg-white p-1 shadow-cyan-500/50"
            placeholder="Introduzca su Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-1 hidden">
          <label htmlFor="message">Carrito</label>
          <textarea
            id="message"
            type="text"
            name="message"
            className="border-1 rounded-lg bg-white p-1 shadow-cyan-500/50"
            placeholder="..."
            readOnly
            value={data}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className="flex flex-col my-3 justify-center items-center">
          <button
            type=""
            disabled={state.submitting}
            className="w-50 inline-flex items-center justify-center px-2 py-2 overflow-hidden tracking-tighter text-md font-semibold text-white capitalize bg-gray-800 rounded-md transition-transform duration-200 active:translate-y-1"
          >
            ¡Hacer pedido!
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
