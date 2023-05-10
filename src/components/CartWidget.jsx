import React, { useContext } from 'react'
import { BiCart } from "react-icons/bi";

//Coontext
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {

    //Consumir context
    const { onSumarCantidad } = useContext(CartContext)

    return (
        <Link to={'/cart'} className='nav-link d-flex flex-row mx-3 text-light'>
            <BiCart className='text-light h4 me-1 font-weight-bold'/>
            Mi Carrito ({onSumarCantidad()})
        </Link>
    )
}

export default CartWidget