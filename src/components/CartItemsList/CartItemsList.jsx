import { useCartContext } from "../../contexts/cartContext"
import { Button } from 'react-bootstrap'

const CartItemsList = () => {

    const { cart, removeItem } = useCartContext()

    return (
        <div className="items">
            {
                cart.map(item => <div className="product border" key={item.id}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={item.pictureUrl} className="img-fluid mx-auto d-block image rounded" alt="..." />
                        </div>

                        <div className="col-md-8">
                            <div className="info">
                                <div className="row">
                                    <div className="col-md-5 product-name">
                                        <div className="product-name">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className="col-md-3 quantity">
                                        <label>Cantidad</label>
                                        <div className="form-control quantity-input">{item.quantity} </div>
                                    </div>
                                    <div className="col-md-3 price">
                                        <span>${item.price}</span>
                                    </div>
                                    <div className="col-md-1 price">
                                        <Button onClick={() => { removeItem(item.id) }} variant="danger">X</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>)
            }
        </div>
    )
}

export default CartItemsList