import React from 'react'
import { Button } from 'react-bootstrap'

const Contador = ({ counter, setCounter }) => {

    const onSumarCantidad = () => {
        setCounter(counter + 1)
    }

    const onRestarCantidad = () => {

        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <div className='mb-3'>
                Cantidad: <strong>{ counter }</strong>
            </div>
            <div className='d-flex justify-content-around'>
                <Button className='btn-lg w-25' onClick={() => onRestarCantidad()}>
                    -
                </Button>
                <Button className='me-4 btn-lg w-25' onClick={() => onSumarCantidad()}>
                    +
                </Button>
            </div>
        </div>
    )
}

export default Contador