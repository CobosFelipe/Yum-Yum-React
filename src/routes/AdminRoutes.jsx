import { Navigate, Outlet } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useUsers();

  if (isLoading) {
    return <div>Cargando autenticación...</div>;
  }

  // Verificar si el usuario NO existe (no logueado)
  if (!user) {
    // Redirigir al login si no está logueado
    return <Navigate to="/Login" replace />;
  }

  // Verificar si el usuario NO es administrador
  if (!user.isAdmin) {
    // Redirigir al inicio o mostrar un mensaje de error 403
    return <Navigate to="/" replace />;
    // Opcional: return <h1>Acceso Denegado (403)</h1>;
  }

  // Si pasó todas las validaciones, renderiza las rutas hijas
  return children ? children : <Outlet />;
};

export default AdminRoute;
