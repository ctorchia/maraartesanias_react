import { useCartContext } from "../../contexts/cartContext"


const Cart = () => {
    const { cart, clear } = useCartContext()
    return (
        <div className="contenedor d-flex row ">            
            <div>
                <ul className="list-unstyled">
                    {
                        cart.map(item => <li key={item.id}>
                        <div className="w-50">
                        <img src={item.pictureUrl} className="w-25" alt="..." />
                        </div>
                
                        Nombre: {item.title} Precio: {item.price} Cantidad:{item.cantidad}
                        </li>)
                    }
                </ul>
            </div>
            <div>
                <button onClick={clear}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart