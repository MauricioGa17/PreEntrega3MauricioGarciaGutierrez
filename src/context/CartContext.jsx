import { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({ children }) => {

  const [ cart, setCart ] = useState(init)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart));
  }, [cart])


  const onAgregarCart = (item) => {
    setCart([...cart, item])
  }
  
  const onSumarCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.counter, 0)
  }

  const onPrecioTotal = (item) => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
  }

  const onEliminarItem = (item) => {
    setCart(cart.filter((prod) => prod.id !== item))
  }

  const onVaciarCarrito = () => {
    setCart([])
  }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                onAgregarCart,
                onSumarCantidad,
                onPrecioTotal,
                onEliminarItem,
                onVaciarCarrito,
            }}
        >
            { children }
        </CartContext.Provider>
    )
}