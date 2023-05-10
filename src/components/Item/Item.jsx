import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillStarFill } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


import './Item.css'

const Item = ({ item }) => {

    return (
        <Card className="mb-4">
            <Card.Img className="rounded mx-auto img-fluid w-75 card-image p-1" src={item.imagen} />
            <Card.Body className='p-0'>
                <Link to={`/item/${item.id}`}><Card.Title className='bg-transparent px-3 py-2 text-start my-2 sf-5'>{item.producto}</Card.Title></Link>
                <Card.Text className='px-3 d-flex flex-row justify-content-start'>
                    <label className='text-start h4'><strong>$ </strong>{item.costo}</label>
                    <label className='ms-3 mt-2 text-capitalize text-secondary'>Categoria: {item.categoria}</label>
                </Card.Text>
                <Accordion defaultActiveKey="0" className='mt-3 mb-2'>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Descripcion del producto</Accordion.Header>
                        <Accordion.Body>
                            {item.descripcion}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Card.Footer>
                    <div className='d-flex justify-content-center'>
                        <BsFillStarFill className='text-warning fs-5'/>
                        <BsFillStarFill className='text-warning fs-5'/>
                        <BsFillStarFill className='text-warning fs-5'/>
                        <BsFillStarFill className='text-warning fs-5'/>
                        <BsFillStarFill className='text-warning fs-5'/>

                        <h6 className='ms-3 fs-6'>367 Valoraciones</h6>
                    </div>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default Item