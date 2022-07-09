import React from 'react'
import { useCartContext } from "../../contexts/cartContext"
import { Button } from 'react-bootstrap'


const CartForm = ({ generateOrder }) => {

    const { cart, clear, totalPrice, removeItem } = useCartContext()

    return (
        <div className="space-top shopping-cart dark">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
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
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="summary">
                                <h3>Resumen</h3>
                                <div className="summary-item"><span className="text">Precio Total:</span><span className="price">$ {totalPrice()}</span></div>
                                <Button onClick={clear} variant="danger">Vaciar Carrito</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Datos del Cliente:</h3>
                    <form className="row g-3 form-control-lg mb-5" onSubmit={generateOrder}>
                        <div className="col-md-3">
                            <label htmlFor="name" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="phone" className="form-label">Telefono:</label>
                            <input type="text" className="form-control" id="phone" required />
                        </div>
                        <div className="col-12">
                            <Button type="submit" variant="primary">Terminar Compra</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CartForm