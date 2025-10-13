import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/contact-form.module.css";
import logo from "../assets/logo-yum-yum.png";
import UseCustomFetch from "../hooks/CustomFetch";
import { useToastify } from "../components/Toastify/Toastify";
import { useUsers } from "../hooks/useUsers";

const API = import.meta.env.VITE_API_LINK;

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const { postFetch } = UseCustomFetch();
  const { showPromiseToast, showToast } = useToastify();
  const { login } = useUsers();

  // Función de Login
  const Login = async (e) => {
    e.preventDefault();

    try {
      const loginPromise = postFetch(
        `${API}/user/login`,
        {
          email: email,
          password: password,
        },
        {
          credentials: "include",
        }
      );

      showPromiseToast(loginPromise, {
        pending: "Verificando credenciales...",
        success: "¡Inicio de sesión exitoso!",
        error: "Fallo de conexión.",
      })
        .then((result) => {
          const data = result.obj;
          //Setear al usuario en el userContext
          login(data);
          setTimeout(() => {
            if (data.isAdmin) {
              // Ejecutar la redirección después de que el toast de éxito se muestre.
              Navigate("/");
              showToast("success", `¡Hola de nuevo! ${data.userName}`);
            } else {
              // Ejecutar la redirección después de que el toast de éxito se muestre.
              Navigate("/");
              showToast("success", `¡Hola de nuevo! ${data.userName}`);
            }
          }, 2250);
        })
        .catch((error) => {
          // 4. Los errores ya son manejados por el render de error del toast,
          // pero puedes loguearlos aquí si lo necesitas.
          console.error("Fallo al iniciar sesión:", error.message);
        });
    } catch (error) {
      console.error("Fallo el login:", error.message);
    }
  };

  // Función de Registro
  const signUp = async (e) => {
    e.preventDefault();

    try {
      const registerPromise = await postFetch(`${API}/user/add`, {
        name: name,
        email: email,
        telephone: telephone,
        password: password,
      });

      showPromiseToast(registerPromise, {
        pending: "Creando usuario...",
        success: "¡Usuario creado con exito!",
        error: "Error al crear usuario.",
      })
        .then(() => {
          // 3. Ejecutar la redirección SÓLO después de que el toast de éxito se muestre.
          Navigate("/");
        })
        .catch((error) => {
          // 4. Los errores ya son manejados por el render de error del toast,
          // pero puedes loguearlos aquí si lo necesitas.
          console.error("Fallo al iniciar sesión:", error.message);
        });

      // Opcional: Volver a la vista de login y limpiar el estado
      setIsLoginView(true);
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.error("Fallo el registro:", error.message);
    }
  };

  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <div className={`container ${styles.formContainer}`}>
        <img className="max-w-1/2 self-center" src={logo} alt="logo Yum-Yum" />

        {isLoginView ? (
          // FORMULARIO DE INICIO DE SESIÓN
          <form className={`${styles.form}`} onSubmit={Login}>
            {" "}
            {/* Usar onSubmit */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                required
                value={email} // Conexión al estado
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
              />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
                value={password} // Conexión al estado
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
              />
            </div>
            <button
              className="px-2 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none self-center"
              type="submit"
            >
              Iniciar sesión
            </button>
            <div className="flex self-center gap-2">
              <p>¿Todavía no tienes una cuenta?</p>
              <p className="text-purple-600 cursor-pointer hover:underline" onClick={() => setIsLoginView(false)}>
                Regístrate
              </p>
            </div>
          </form>
        ) : (
          // FORMULARIO DE REGISTRO
          <form className={`${styles.form}`} onSubmit={signUp}>
            {" "}
            {/* Usar onSubmit */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="name-reg">Nombre de usuario</label>
              <input
                type="text"
                id="name-reg"
                name="name-reg"
                placeholder="Ingresa tu nombre"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="telephone-reg">Número celular</label>
              <input
                type="tel"
                id="telephone-reg"
                name="telephone-reg"
                placeholder="Ingresa tu número celular"
                required
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="email-reg">Correo electrónico</label>
              <input
                type="email"
                id="email-reg"
                name="email-reg"
                placeholder="Ingresa tu correo electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="password-reg">Contraseña</label>
              <input
                type="password"
                id="password-reg"
                name="password-reg"
                placeholder="Ingresa tu contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="px-2 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none self-center"
              type="submit"
            >
              Registrarse
            </button>
            <div className="flex self-center gap-2">
              <p>¿Ya estás registrado?</p>
              <p className="text-purple-600 cursor-pointer hover:underline" onClick={() => setIsLoginView(true)}>
                Inicia sesión
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
