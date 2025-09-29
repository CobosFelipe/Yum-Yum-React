import styles from "../styles/contact-form.module.css";
import logo from "../assets/logo-yum-yum.png";
import { useState } from "react";
const Login = () => {
  const [userExist, setUserExist] = useState(true);

  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <div className={`container ${styles.formContainer}`}>
        <img className="max-w-1/2 self-center" src={logo} alt="logo Yum-Yum" />
        {userExist ? (
          <form className={`${styles.form}`}>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="name">Nombre de usuario</label>
              <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Ingresa tu número célular" required />
            </div>
            <button
              className="px-2 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none self-center"
              type="submit"
            >
              Enviar
            </button>
            <div className="flex self-center gap-2">
              <p>¿Todavía no tienes una cuenta?</p>
              <p className="text-purple-600 cursor-pointer hover:underline" onClick={() => setUserExist(false)}>Registrate</p>
            </div>
          </form>
        ) : (
          <form className={`${styles.form}`}>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="name">Nombre de usuario</label>
              <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="name">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required />
            </div>
            <button
              className="px-2 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none self-center"
              type="submit"
            >
              Enviar
            </button>
            <div className="flex self-center gap-2">
              <p>¿Ya estás registrado?</p>
              <p className="text-purple-600 cursor-pointer hover:underline" onClick={() => setUserExist(true)}>Inicia sesión</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
