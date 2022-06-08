import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch()
            .then((resp) => {
                setProductos(resp)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(productos)

    return (
        <div id='contenedor'>

            {loading ?
                <h1>Cargando...</h1>
                :
                ItemList(productos)}
        </div>
    );
}

export default ItemListContainer;
