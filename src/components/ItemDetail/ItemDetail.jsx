import { useState } from "react"
import { useCartContext } from "../../contexts/cartContext"
import CartItemDetailButtons from "../CartItemDetailButtons/CartItemDetailButtons"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {

    const { addItem } = useCartContext()

    const [quantity, setQuantity] = useState()

    const onAdd = (quantity) => {
        setQuantity(quantity)
        addItem({ ...item, quantity: quantity })
    }

    return (

        <div class="card" >
            <div class="row g-0">
                <div class="col-md-6">
                    <img src={item.pictureUrl} className="img-fluid" alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{item.description}</p>
                        <h3>$ {item.price}</h3>
                        <p>Stock: {item.stock}</p>
                        {item.stock === 0 ?
                            <>
                                <h2 className="d-flex justify-content-center align-middle">Sin Stock</h2>
                                <CartItemDetailButtons />
                            </>
                            :
                            quantity ?
                                <CartItemDetailButtons />
                                :
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail