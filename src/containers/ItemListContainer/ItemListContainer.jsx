import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {

        if (categoryId) {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            const queryColletionFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryColletionFilter) //Promise
                .then(resp => setItems(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection) // Promise
                .then(resp => setItems(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [categoryId])

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
