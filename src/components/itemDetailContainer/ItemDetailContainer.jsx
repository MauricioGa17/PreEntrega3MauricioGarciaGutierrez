import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

//Importar FireStore GET
import { getFireStore } from '../../firebase/config'

//Componenets
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [ loading, setLoading ] = useState(false)
    const [ item, setItem ] = useState({})
    
    useEffect(() => {
        
        setLoading(true);

        const db = getFireStore();

        const producto = db.collection('Productos');

        const item = producto.doc(itemId);

        item.get().then((res) => {
            setItem({
                id: res.id, 
                ...res.data()
            })
        }).catch((error) => console.log(error)).finally(() => setLoading(false))

    }, [])

    return (
        <div>
            <Row>
                {loading 
                    ? <h4>Cargando</h4>
                    : <ItemDetail item={item}/>
                }
            </Row>
        </div>
    )
}

export default ItemDetailContainer