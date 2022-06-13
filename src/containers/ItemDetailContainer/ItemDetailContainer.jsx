import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/getFetch"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()


    useEffect(() => {
        getFetch(id)
            .then((resp) => setItem(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    return (

        <div className='contenedor'>

            {loading ?
                <h2>Cargando...</h2>
                :
                <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer