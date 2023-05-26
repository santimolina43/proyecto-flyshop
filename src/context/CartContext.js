import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    // const [footer, setFooter] = useState(false);

    // const fijarFooter = () => {
    //     setFooter(true)
    // }

    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }
  
    const totalCantidad = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0) 
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const removerItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id))
    }

    const editCantidad = (id, num) => {
        const _cart = cart.slice()
        const item = _cart.find((prod) => prod.id === id)
        item.cantidad = item.cantidad + num

        setCart(_cart)
    }

    const totalCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
    }
  
    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            vaciarCarrito,
            removerItem,
            totalCarrito,
            editCantidad
            // footer,
            // fijarFooter
        }}>
            {children}
        </CartContext.Provider>
    )
}