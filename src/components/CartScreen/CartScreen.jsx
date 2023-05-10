import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTrashFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap';

const CartScreen = () => {

    const { cart, onPrecioTotal, onEliminarItem, onVaciarCarrito } = useContext(CartContext)

    return (
        <div className='mt-3'>

            { cart.length > 0 
            ? (
                <div>
                    <div className='d-flex flex-row justify-content-between'>
                        <h4 className='text-start'>Lista de productos</h4>
                        <button className='btn btn-danger' onClick={() => onVaciarCarrito()}>Vaciar Carrito</button>
                    </div>

                    <hr />

                    <ListGroup as="ol" numbered>
                        { cart.map( c => (
                            <ListGroup.Item
                                key={c.id}
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">
                                        <Button onClick={() => onEliminarItem(c.id)} variant={'danger'} className='me-2'>
                                            <BsFillTrashFill/>
                                        </Button>
                                        {c.producto}
                                    </div>
                                    <p className='mt-2'>
                                        <strong>$ {c.price}</strong>
                                    </p>
                                </div>
                                <Badge bg="primary" pill>
                                    Total: {c.counter}
                                </Badge>
                            </ListGroup.Item>
                        ))}

                    </ListGroup>

                     <hr />

                        <div className='d-flex flex-row justify-content-between'>
                            <h4 className='text-end'>Total: $ {onPrecioTotal()}</h4>
                            <NavLink to="/checkout" className='btn btn-primary'>Confirmar Compra</NavLink>
                        </div>
                    </div>
            ) : (
                <div>
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Carrito Vacio!</h4>
                        <p>Agrega productos para poder visualizar</p>
                        <hr />
                        <p className="mb-0">
                            <NavLink to='/'>Mostrar Productos</NavLink>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartScreen