import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    // console.log(categoryId)

    useEffect(() => {
        if (categoryId) {
            getFetch()
                .then((resp) => setItems(resp.filter(item => item.category === categoryId)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch()
                .then((resp) => setItems(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [categoryId])

    // console.log(items)
    // console.log(loading)

    return (
        <div className='contenedor row row-cols-1 row-cols-sm-3 row-cols-lg-4 g-4'>

            {loading ?
                <h2>Cargando...</h2>
                :
                ItemList(items)}
        </div>
    );
}

export default ItemListContainer;
