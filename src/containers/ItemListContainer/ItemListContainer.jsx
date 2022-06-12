import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    console.log(categoryId)

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
