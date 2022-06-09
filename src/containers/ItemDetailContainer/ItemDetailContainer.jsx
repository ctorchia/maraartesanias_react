import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/getFetch"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch("2")
            .then((resp) => setItem(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        
        <div id='contenedor'>

            {loading ?
                <h2>Cargando...</h2>
                :
                <ItemDetail item={item} />
                }
        </div>  
    )
}

export default ItemDetailContainer