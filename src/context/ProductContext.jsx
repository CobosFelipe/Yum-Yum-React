import { useState, useMemo, useCallback } from "react";
import CartContext from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback(
    (producto) => {
      // Revisar si el productoo ya existe en el carrito
      const productoInCartIndex = cart.findIndex((item) => item.product_id === producto.product_id);

      if (productoInCartIndex >= 0) {
        const newCart = structuredClone(cart);
        newCart[productoInCartIndex].cantidad += 1;
        return setCart(newCart);
      }

      setCart((prevState) => [
        ...prevState,
        {
          ...producto,
          cantidad: 1,
        },
      ]);
    },
    [cart]
  );

  const removeToCart = useCallback(
    (producto) => {
      const productoInCartIndex = cart.findIndex((item) => item.product_id === producto.product_id);

      if (productoInCartIndex >= 0) {
        const newCart = structuredClone(cart);
        const productoEnCarrito = newCart[productoInCartIndex];

        if (productoEnCarrito.cantidad > 1) {
          productoEnCarrito.cantidad -= 1;
        } else {
          newCart.splice(productoInCartIndex, 1);
        }

        setCart(newCart);
      }
    },
    [cart]
  );

  const deleteToCart = useCallback(
    (producto) => {
      const newCart = cart.filter((item) => item.product_id !== producto.product_id);
      return setCart(newCart);
    },
    [cart]
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const contextValue = useMemo(
    () => ({
      cart,
      addToCart,
      removeToCart,
      deleteToCart,
      clearCart,
    }),
    [cart, addToCart, removeToCart, deleteToCart, clearCart]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
