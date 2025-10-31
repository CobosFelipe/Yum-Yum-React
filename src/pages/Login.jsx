import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/contact-form.module.css";
import logo from "../assets/logo-yum-yum.png";
import UseCustomFetch from "../hooks/CustomFetch";
import { useToastify } from "../components/Toastify/Toastify";
import { useUsers } from "../hooks/useUsers";

const API = import.meta.env.VITE_API_LINK;

const Login = () => {
  // Estado de vista del formulario
  const [isLoginView, setIsLoginView] = useState(true);
  // Estados de campos
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Estado para los errores de registro
  const [regErrors, setRegErrors] = useState({});
  // Estados para los errores de login
  const [loginErrors, setLoginErrors] = useState({});

  const Navigate = useNavigate();
  const { postFetch } = UseCustomFetch();
  const { showPromiseToast, showToast } = useToastify();
  const { login } = useUsers();

  // Función de Validación para Registro
  const validateRegistration = () => {
    const errors = {};

    // Validar Nombre (mínimo 3, máximo 25)
    if (name.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres.";
    } else if (name.length > 25) {
      errors.name = "El nombre no puede exceder los 25 caracteres.";
    }

    // Validar Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Ingresa un correo electrónico válido.";
    } else if (email.length > 50) {
      errors.email = "El correo no puede exceder los 50 caracteres.";
    }

    // Validar Teléfono (10 dígitos, empieza con 3 o 6)
    const telRegex = /^[36]\d{9}$/;
    if (!telRegex.test(telephone)) {
      errors.telephone = "El número de teléfono debe tener 10 dígitos y empezar con 3 o 6.";
    }

    // Validar Contraseña (Regla compleja: 8-20, mayús, minús, número, símbolo)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,20}$/;
    if (!passwordRegex.test(password)) {
      errors.password = "La contraseña debe tener entre 8 y 20 caracteres, e incluir al menos una mayúscula, una minúscula, un número y un símbolo.";
    }

    setRegErrors(errors);
    return Object.keys(errors).length > 0;
  };

  // Función de Validación para Login
  const validateLogin = () => {
    const errors = {};

    // Validar Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Ingresa un correo electrónico válido.";
    } else if (email.length > 50) {
      errors.email = "El correo no puede exceder los 50 caracteres.";
    }

    // Validar Contraseña (mínimo 8, máximo 20)
    if (password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres.";
    } else if (password.length > 20) {
      errors.password = "La contraseña no puede exceder los 20 caracteres.";
    }

    setLoginErrors(errors);
    return Object.keys(errors).length > 0;
  };

  // Función de Login
  const handleLogin = (e) => {
    e.preventDefault();

    // Detener si hay errores de validación
    if (validateLogin()) {
      showToast("error", "Corrige los errores en el formulario.");
      return;
    }

    try {
      // Fetch al metodo de login
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

      // Pasar la promesa al toast
      showPromiseToast(loginPromise, {
        pending: "Verificando credenciales...",
        success: "¡Inicio de sesión exitoso!",
        error: "Fallo de conexión o credenciales incorrectas.",
      })
        .then((result) => {
          const data = result.obj;
          login(data);

          // Esperar un momento (simula la duración del toast) antes de redireccionar y mostrar el segundo toast.
          setTimeout(() => {
            const welcomeMessage = `¡Hola de nuevo! ${data.userName}`;
            if (data.isAdmin) {
              Navigate("/Dashboard/Products");
              showToast("success", welcomeMessage);
            } else {
              Navigate("/");
              showToast("success", welcomeMessage);
            }
          }, 2000);
        })
        .catch((error) => {
          // Manejo de error si la promesa es rechazada
          console.error("Fallo al iniciar sesión:", error.message);
        });
    } catch (error) {
      console.error("Fallo el handleLogin:", error.message);
    }
  };

  // Función de Registro
  const handleSignUp = (e) => {
    e.preventDefault();

    // Detener si hay errores de validación
    if (validateRegistration()) {
      showToast("error", "Corrige los errores en el formulario.");
      return;
    }

    try {
      // fetch al metodo de register
      const registerPromise = postFetch(`${API}/user/add`, {
        name: name,
        email: email,
        telephone: telephone,
        password: password,
      });

      // Pasar la promesa al toast
      showPromiseToast(registerPromise, {
        pending: "Creando usuario...",
        success: "¡Usuario creado con éxito!",
        error: "Error al crear usuario, por favor intente mas tarde",
      })
        .then(() => {
          // Limpiar el estado y volver a la vista de login después del éxito
          setIsLoginView(true);
          setEmail("");
          setPassword("");
          setName("");
          setTelephone("");

          setTimeout(() => {
            Navigate("/");
            showToast("info", "Por favor, inicia sesión con tus nuevas credenciales.");
          }, 2000);
        })
        .catch((error) => {
          // Manejo de error si la promesa es rechazada
          console.error("Fallo al registrar usuario:", error.message);
        });
    } catch (error) {
      console.error("Fallo el handleSignUp:", error.message);
    }
  };

  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <div className={`container ${styles.formContainer}`}>
        <img className="max-w-1/2 self-center" src={logo} alt="logo Yum-Yum" />

        {isLoginView ? (
          // FORMULARIO DE INICIO DE SESIÓN
          <form className={`${styles.form}`} onSubmit={handleLogin}>
            {/* Email Login */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setLoginErrors((prev) => ({ ...prev, email: null }));
                }}
              />
              {/* Mostrar error de Login */}
              {loginErrors.email && <p className="text-red-500 text-xs mt-1">{loginErrors.email}</p>}
            </div>

            {/* Contraseña Login */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginErrors((prev) => ({ ...prev, password: null }));
                }}
              />
              {/* Mostrar error de Login */}
              {loginErrors.password && <p className="text-red-500 text-xs mt-1">{loginErrors.password}</p>}
            </div>
            {/* Botón y handler */}
            <button
              className="px-2 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-violet-600 rounded hover:bg-violet-700 focus:outline-none self-center"
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
          <form className={`${styles.form}`} onSubmit={handleSignUp}>
            {/* Nombre Registro */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="name-reg">Nombre de usuario</label>
              <input
                type="text"
                id="name-reg"
                name="name-reg"
                placeholder="Ingresa tu nombre"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setRegErrors((prev) => ({ ...prev, name: null }));
                }}
              />
              {/* Mostrar error de Registro */}
              {regErrors.name && <p className="text-red-500 text-xs mt-1">{regErrors.name}</p>}
            </div>

            {/* Teléfono Registro */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="telephone-reg">Número celular</label>
              <input
                type="tel"
                id="telephone-reg"
                name="telephone-reg"
                placeholder="Ingresa tu número celular"
                required
                value={telephone}
                onChange={(e) => {
                  setTelephone(e.target.value);
                  setRegErrors((prev) => ({ ...prev, telephone: null }));
                }}
              />
              {/* Mostrar error de Registro */}
              {regErrors.telephone && <p className="text-red-500 text-xs mt-1">{regErrors.telephone}</p>}
            </div>

            {/* Email Registro */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="email-reg">Correo electrónico</label>
              <input
                type="email"
                id="email-reg"
                name="email-reg"
                placeholder="Ingresa tu correo electrónico"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setRegErrors((prev) => ({ ...prev, email: null }));
                }} // Limpiar error al escribir
              />
              {/* Mostrar error de Registro */}
              {regErrors.email && <p className="text-red-500 text-xs mt-1">{regErrors.email}</p>}
            </div>

            {/* Contraseña Registro */}
            <div className={`${styles.formGroup}`}>
              <label htmlFor="password-reg">Contraseña</label>
              <input
                type="password"
                id="password-reg"
                name="password-reg"
                placeholder="Ingresa tu contraseña"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setRegErrors((prev) => ({ ...prev, password: null }));
                }}
              />
              {/* Mostrar error de Registro */}
              {regErrors.password && <p className="text-red-500 text-xs mt-1">{regErrors.password}</p>}
            </div>
            <button
              className="px-2 py-2 min-w-1/2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-violet-600 rounded hover:bg-violet-700 focus:outline-none self-center"
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
