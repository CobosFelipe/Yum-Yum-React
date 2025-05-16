import { useState } from "react";
import CartContext from "./CartContext";

export function CartProvider ({children}){
  const [cart, setCart] = useState([])

  const addToCart = producto => {
    // Revisar si el productoo ya existe en el carrito
    const productoInCartIndex = cart.findIndex(item => item.id === producto.id)

    if (productoInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productoInCartIndex].cantidad += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...producto,
        cantidad: 1
      }
    ]))
  }

  const removeToCart = producto => {
    const productoInCartIndex = cart.findIndex(item => item.id === producto.id)
  
    if (productoInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      const productoEnCarrito = newCart[productoInCartIndex]
  
      if (productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad -= 1
      } else {
        newCart.splice(productoInCartIndex, 1)
      }
  
      setCart(newCart)
    }
  }
  

  const deleteToCart = producto => {
    const newCart = cart.filter(item => item.id !== producto.id)
    return setCart(newCart)
  }
  

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeToCart,
      deleteToCart,
      clearCart
    }

    }>
      {children}
    </CartContext.Provider>
  )
}