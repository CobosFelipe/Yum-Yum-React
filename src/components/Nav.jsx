import { useState } from "react";
import logo from "../assets/logo-yum-yum.png";
import NavLinkItem from "../utils/NavLinkItem";
import { UserRound, ShoppingBag, Menu, X, SlidersHorizontal, LogOut } from "lucide-react";
import { useUsers } from "../hooks/useUsers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useUsers();

  // Activador de modo desktop-mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Manejo de logout
  const handleLogout = () => {
    logout();
    // Opcional: Llamar a la API para limpiar la cookie de sesión si fuera necesario
  };

  // Clases de estilo para el menú
  const menuClasses = `absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center min-w-xs lg:min-w-2xs ${
    isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
  }`;

  return (
    <>
      <nav className="fixed top-0 bg-white shadow w-full z-20">
        <div className="px-4 py-2 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <NavLinkItem to="/">
                <div className="w-auto h-6 sm:h-7">
                  <img src={logo} alt="logo-yum-yum" className="h-6 cursor-pointer hover:drop-shadow-[0px_2px_theme(colors.rose.300)]" />
                </div>
              </NavLinkItem>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? <Menu /> : <X />}
                </button>
              </div>
            </div>

            {/* Bloque de Navegación Principal */}
            <div className={menuClasses}>
              {user?.isAdmin ? (
                // --- NAVEGACIÓN ADMINISTRADOR ---
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  <NavLinkItem to="/Dashboard/Products">
                    <span>Gestión Productos</span>
                  </NavLinkItem>
                  <NavLinkItem to="/Dashboard/Orders">
                    <span>Órdenes</span>
                  </NavLinkItem>
                  <NavLinkItem to="/Dashboard/Users">
                    <span>Usuarios</span>
                  </NavLinkItem>

                  {/* Botón de Logout para el Admin */}
                  <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 transition-colors py-2 lg:py-0">
                    <LogOut />
                  </button>
                </div>
              ) : (
                // --- NAVEGACIÓN PÚBLICA / CLIENTE ---
                <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                  {/* Link a Productos */}
                  <NavLinkItem to="/Productos">
                    <span>Productos</span>
                  </NavLinkItem>
                  {/* Link a Nosotros */}
                  <NavLinkItem to="/Nosotros">
                    <span>Nosotros</span>
                  </NavLinkItem>
                  {/* Link a Contacto */}
                  <NavLinkItem to="/Contacto">
                    <span>Contacto</span>
                  </NavLinkItem>

                  {/* Botón de Carrito (si no es admin) */}
                  <NavLinkItem to="/Carrito">
                    <ShoppingBag />
                  </NavLinkItem>

                  {/* Botón de Usuario/Logout para el Cliente */}
                  {user ? (
                    <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 transition-colors py-2 lg:py-0">
                      <LogOut />
                    </button>
                  ) : (
                    <NavLinkItem to="/Login">
                      <UserRound />
                    </NavLinkItem>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="h-10 w-full"></div>
    </>
  );
};

export default Navbar;
