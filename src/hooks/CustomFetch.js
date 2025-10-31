import { useCallback } from "react";

const UseCustomFetch = () => {
  /**
   * Realiza una petición GET.
   */
  const getFetch = useCallback(async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });

      if (response.status === 401 || response.status === 403) {
        throw new Error("Sesión no autorizada");
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `ERROR HTTP: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error al hacer fetch GET:", error);
      throw error;
    }
  }, []);

  /**
   * Realiza una petición POST.
   */
  const postFetch = useCallback(async (url, data, options = {}) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (response.status === 401 || response.status === 403) {
        throw new Error("Sesión no autorizada");
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `ERROR HTTP: ${response.status}`);
      }

      const result = await response.json();
      if (!result.code) {
        throw new Error(result.message);
      }
      return result;
    } catch (error) {
      console.error("Error al hacer fetch POST:", error);
      throw error;
    }
  }, []);

  /**
   * Realiza una petición PUT.
   */
  const putFetch = useCallback(async (url, data, options = {}) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (response.status === 401 || response.status === 403) {
        throw new Error("Sesión no autorizada");
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `ERROR HTTP: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error al hacer fetch PUT:", error);
      throw error;
    }
  }, []);

  /**
   * Realiza una petición DELETE.
   */
  const deleteFetch = useCallback(async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });

      if (response.status === 401 || response.status === 403) {
        throw new Error("Sesión no autorizada");
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `ERROR HTTP: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error al hacer fetch DELETE:", error);
      throw error;
    }
  }, []);

  return {
    postFetch,
    getFetch,
    putFetch,
    deleteFetch,
  };
};

export default UseCustomFetch;
