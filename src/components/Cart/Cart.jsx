import { useCartContext } from "../../contexts/cartContext"
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, clear, totalPrice, removeItem } = useCartContext()
    return (

        cart.length === 0 ?

            <div className="contenedor d-flex row text-center">
                <h2>Carrito de Compras</h2>
                <h3>(El carrito esta vacio)</h3>
                <NavLink to="/">
                    <Button variant="primary">Ir al Inicio</Button>
                </NavLink>
            </div>
            :
            <div className="contenedor shopping-cart dark">
                <div className="container">
                    {/* <div className="block-heading">
		                <h2>Carrito de Compras</h2>
		            </div> */}
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
                                                                <div className="form-control quantity-input">{item.cantidad} </div>
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
                                    <Button onClick={clear} variant="primary">Vaciar Carrito</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Cart


