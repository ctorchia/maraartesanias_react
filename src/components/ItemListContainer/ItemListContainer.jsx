import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch()
            .then((resp) => {
                setItems(resp)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(items)

    return (
        <div id='contenedor'>

            {loading ?
                <h2>Cargando...</h2>
                :
                ItemList(items)}
        </div>
    );
}

export default ItemListContainer;
