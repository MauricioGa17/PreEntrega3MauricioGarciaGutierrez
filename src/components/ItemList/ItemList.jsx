import React, { useState, useEffect, useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

//Importar FireStore GET
import { getFireStore } from '../../firebase/config'

//Componets
import Item from '../Item/Item';

//Context
import { UIContex } from '../../context/UIContext';


const ItemList = () => {

  const {categoryId} = useParams();
  const { loading, setLoading } = useContext(UIContex)

  const [ items, setItems ] = useState([]);
  
  useEffect(() => {

    setLoading(true);

    const db = getFireStore();

    const productos = db.collection('Productos');

    if(categoryId){
      const filtrado = productos.where("categoria", "==", categoryId);

      filtrado.get().then((res) => {
        const newItem = res.docs.map( doc => {
          return { id: doc.id, ...doc.data() }
        })

      setItems(newItem);
      }).catch((error) => console.log(error)).finally(() => setLoading(false))

      return;
    }

    //Obtener datos de Firebase
    productos.get()
      .then((res) => {
        const newItem = res.docs.map( doc => {
          return { id: doc.id, ...doc.data() }
        })
      setItems(newItem);
    }).catch((error) => console.log(error)).finally(() => setLoading(false))

  }, [categoryId])
      
    return (
        <Row>
            {loading 
                ? <h4>Cargando</h4>
                : items.map((item) => (
                    <Col key={item.id} md="3">
                       <Item item={item}/> 
                    </Col>
                ))
            }
        </Row>
    )
}

export default ItemList