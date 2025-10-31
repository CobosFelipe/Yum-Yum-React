import { useState, useMemo, useCallback, useEffect } from "react";
import UsersContext from "./UsersContext";
import UseCustomFetch from "../hooks/CustomFetch";
import { toast } from "react-toastify";

const API = import.meta.env.VITE_API_LINK;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { getFetch } = UseCustomFetch();

  const login = useCallback((user) => {
    setUser(user);
  }, []);

  const logout = useCallback(async () => {
    try {
      const response = await getFetch(`${API}/user/logout`, {
        credentials: "include",
      });
      if (response && response.status === "success") {
        setUser(null);
        toast.success("Has cerrado la sesión.", { position: "top-center" });
      } else {
        toast.error(response.message || "Error al cerrar sesión.", { position: "top-center" });
      }
    } catch (error) {
      setUser(null);
      console.error("Fallo de red o del servidor al cerrar sesión:", error);
    }
  }, [getFetch]);

  // Para actualizar un usuario sin necesidad de hacer logout
  const updateUser = useCallback((newUserData) => {
    // Fusión de los datos existentes con los nuevos
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  }, []);

  // useEffect para verificar la cookie/token al cargar la aplicación
  useEffect(() => {
    const verifySession = async () => {
      try {
        // Llama al backend. El navegador envía la cookie httpOnly automáticamente.
        const response = await getFetch(`${API}/user/verify-session`, { credentials: "include" });

        // Si la cookie es válida, el backend devuelve el objeto del JWT
        const userData = response.obj;

        // Guardar los datos en el estado
        setUser(userData);
      } catch (error) {
        setUser(null);
        console.warn(`${error} o cookie expirada.`);
      } finally {
        // Terminar el estado de carga
        setIsLoading(false);
      }
    };

    verifySession();
  }, [getFetch]);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
      updateUser,
      isLoading,
    }),
    [user, login, logout, updateUser, isLoading]
  );

  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>;
}
