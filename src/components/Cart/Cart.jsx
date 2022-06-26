import { useCartContext } from "../../contexts/cartContext"
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

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
            <div className="contenedor d-flex row ">
                <div>
                    <h2 className='text-center'>Carrito de Compras</h2>

                    <ul className="list-unstyled">
                        {
                            cart.map(item => <li key={item.id}>
                                <div className="w-50">
                                    <img src={item.pictureUrl} className="w-25" alt="..." />
                                </div>

                                Nombre: {item.title} Precio: $ {item.price} Cantidad:{item.cantidad}
                                <div>
                                    <Button onClick={()=>{removeItem(item.id)}} variant="danger">X</Button>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <p>Precio Total: $ {totalPrice()}</p>
                </div>
                <div>
                    <Button onClick={clear} variant="primary">Vaciar Carrito</Button>
                </div>
            </div>
    )
}

export default Cart