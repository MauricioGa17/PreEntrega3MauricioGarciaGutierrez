import React, { useContext, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import Contador from '../Contador/Contador'

//Context
import { CartContext }  from '../../context/CartContext';

import './ItemDetail.css'

const ItemDetail = ({ item }) => {

    const navigate = useNavigate();

    // Context Consumer
    const { onAgregarCart } = useContext(CartContext)

    const [ counter, setCounter ] = useState(0)

    const onSumarAlCarrito = () =>{
        const newItem = {
            id: item.id,
            producto: item.producto,
            descripcion: item.descripcion,
            image: item.imagen,
            price: item.costo,
            category: item.categoria,
            counter: counter,
        }

        onAgregarCart(newItem)
    }


    return (
        <Row className='mt-3'>
            <Col md="3">
                <img className="rounded mx-auto d-block img-thumbnail card-image-detail p-1" src={item.imagen} alt={`alt_${item.producto}`}/>
            </Col>
            <Col md="8">
                <Card className="mb-4"> 
                    <Card.Body className='px-0 py-3'>
                        <div className='px-3'>
                            <Card.Title><Button variant='secondary' onClick={() => navigate(-1)}>Regresar</Button></Card.Title>
                        </div>
                        <Card.Title className='bg-transparent px-3 py-2 text-start my-2 sf-5'>{item.producto}</Card.Title>
                        <Card.Text className='px-3 d-flex flex-row justify-content-start'>
                            <label className='text-start h4'><strong>$ </strong>{item.costo}</label>
                            <label className='ms-3 mt-2 text-capitalize text-secondary'>Categoria: {item.categoria}</label>
                        </Card.Text>
                        <p className='px-3'>
                            {item.descripcion}
                        </p>
                        <Row>
                            <Col md="4">
                                <div className='mt-3 mb-3 px-3'>
                                    <Contador counter={counter} setCounter={setCounter}/>
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="d-grid gap-2 mt-3 mb-3 px-3">
                                    <label className='mb-2'>Agregar Producto</label>
                                    <Button variant="success" size="lg" onClick={() => onSumarAlCarrito()}>
                                        Agregar
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-start px-3'>
                            <BsFillStarFill className='text-warning fs-5'/>
                            <BsFillStarFill className='text-warning fs-5'/>
                            <BsFillStarFill className='text-warning fs-5'/>
                            <BsFillStarFill className='text-warning fs-5'/>
                            <BsFillStarFill className='text-warning fs-5'/>

                            <h6 className='ms-3 fs-6'>367 Valoraciones</h6>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ItemDetail