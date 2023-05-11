import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext();

//

export const CartProvider = ({children}) => {
    // const theme = "dark"
    // const alumno = "santiago"
    const [cart, setCart] = useState([])
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }
  
    const totalCantidad = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0) // el metodo reduce lo que hace es reducir el array a un unico
    }                                                           // valor, y trabaja con un acumulador. Lo que recibe por parametro
                                                                // el reduce es como primer parametro la variable del acumulador
                                                                // y como segundo parametro recibe cada elemento del array que voy
                                                                // iterando

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
            // <MyContext.Provider value={{ // si quiero pasarle varios valores al contexto para que puedan ser todos consumidos desde
            //   theme,                     // todos los componentes hijos, lo que hago es pasarle como value al contexto un objeto que 
            //   alumno                     // contenga todas las variables que yo quiero que sean consumidas
            // }}>
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            vaciarCarrito,
            removerItem,
            totalCarrito,
            editCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}