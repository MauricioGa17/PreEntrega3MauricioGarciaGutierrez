import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import firebase from "firebase";
import 'firebase/firestore'
import Swal from 'sweetalert2'

//
import { useNavigate } from 'react-router-dom'

//Context
import { CartContext } from '../../context/CartContext'
import { getFireStore } from '../../firebase/config';

const Checkout = () => {

    const navigate = useNavigate();

    const { cart, onVaciarCarrito, onPrecioTotal } = useContext(CartContext)
    
    const [ email, setEmail ] = useState("");
    const [ nombre, setNombre ] = useState("");
    const [ apellidos, setApellidos ] = useState("");
    const [ telefono, setTelefono ] = useState("");

    const onHandleSubmmit = async (e) => {
        e.preventDefault();

        const orden = {
            buyer :{
                email,
                nombre,
                apellidos,
                telefono,
            },
            item: cart,
            totalPrice: onPrecioTotal(),
            data: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        console.log(orden)

        const db = getFireStore();

        const ordenes = db.collection('Ordenes');

        try {
            await ordenes.add(orden);
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Orden Generada',
                text: 'Se genero correctamente la orden',
                showConfirmButton: false,
                timer: 1500
            })
            
            setTimeout(() => {
                onVaciarCarrito();
                setApellidos("");
                setEmail("");
                setTelefono("");
                setNombre("")

                navigate('/cart')
            }, 1500);

        } catch (error) {
            console.log(error)
        }

        // Actualizamos la cantidad en la base de datos
        // Con forEach re corremos toda la colección de la base de datos
        cart.forEach((item) => {
            const docRef = db.collection('Productos').doc(item.id)
    
            docRef.get()
            .then((doc) => {
                docRef.update({
                stock: doc.data().stock - item.counter
                })
            })
        })

    }

    return (
        <div>
            <h3>Terminar Compra</h3>
            <hr />

            <form action="" onSubmit={(e) => onHandleSubmmit(e)}>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Apellidos</label>
                    <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="form-control" />
                </div>

                <hr /> 

                <div className='d-flex flex-row justify-content-between'>
                    <button type='submit' className='btn btn-success'>Finalizar Compra</button>
                    <NavLink className='btn btn-primary' to={'/cart'}>Volver al carrito</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Checkout