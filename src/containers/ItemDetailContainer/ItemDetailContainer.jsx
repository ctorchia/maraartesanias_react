import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryItem = doc(db, 'products', id)
        getDoc(queryItem)
            .then(resp => setItem({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    return (

        <div className='space-top'>

            {loading ?
                <h2>Cargando...</h2>
                :
                <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer