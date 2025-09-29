import styles from "../styles/contact-form.module.css";
import logo from "../assets/logo-yum-yum.png"
const Contacto = () => {
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <div className={`container ${styles.formContainer}`}>
        <img className="max-w-1/2 self-center" src={logo} alt="logo Yum-Yum" />
        <form className={`${styles.form}`}>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="cel">Número de télefono</label>
            <input type="cel" id="cel" name="cel" placeholder="Ingresa tu número célular" required />
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="name">Correo electrónico</label>
            <input type="text" id="name" name="name" placeholder="Ingresa tu correo electrónico" required />
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea name="textarea" id="textarea" placeholder="Opcional" rows="10" cols="50" required />
          </div>
          <button className="px-2 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none self-center" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
