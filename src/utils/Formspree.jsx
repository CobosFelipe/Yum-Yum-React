import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { useCart } from "../hooks/useCart";
import styles from "../styles/contact-form.module.css";
import logo from "../assets/logo-yum-yum.png"

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
    <div className={`container items-center ${styles.formContainer}`}>
      <img src={logo} className="max-w-1/2" alt="Logo-Yum-Yum" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
        <div className={`${styles.formGroup}`}>
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" name="name" className="border-1 rounded-lg bg-white p-1 shadow-cyan-500/50" placeholder="Nombre completo" required />
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="cel">Número Celular</label>
          <input id="cel" type="tel" name="cel" className="border-1 rounded-lg bg-white p-1 shadow-cyan-500/50" placeholder="Introduzca su Telefono" required />
        </div>
        <div className={`${styles.formGroup}`}>
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
        <div className="flex-col gap-1 hidden">
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
            className="px-2 py-2 mt-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none self-center"
          >
            ¡Hacer pedido!
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
