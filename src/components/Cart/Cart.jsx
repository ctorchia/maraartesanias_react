import { useCartContext } from "../../contexts/cartContext"


const Cart = () => {
    const { cart, emptyCart } = useCartContext()
    return (
        <div className="contenedor">
            <h1>Proximamente: Carrito</h1>
            
            <ul>
                {
                    cart.map(item => <li key={item.id}>
                    <div className="w-50">
                    <img src={item.pictureUrl} className="w-25" alt="..." />
                    </div>
                    
                    Nombre: {item.title} Precio: {item.price} Cantidad:{item.cantidad}
                    </li>)
                }
            </ul>
            <div>
                <button onClick={emptyCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart