import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState()    

    const onAdd = (cant) => {
        setCantidad(cant)
    }

    console.log(item)
    return (
        <div className="row">
            <div className="col-6">
                <img src={item.pictureUrl} className="img-fluid" alt="..." />
            </div>
            <div className="col-6">
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                <h4>{item.price}</h4> 
                {
                    cantidad ?
                        <Link to="/cart">
                            <button className="btn btn-outline-primary">Ir al Carrito</button>
                        </Link>
                    :
                        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail