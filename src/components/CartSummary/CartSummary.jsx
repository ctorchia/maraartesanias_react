import { useCartContext } from "../../contexts/cartContext"
import { Button } from 'react-bootstrap'

const CartSummary = () => {

    const { clear, totalPrice } = useCartContext()

    return (
        <div className="summary">
            <h3>Resumen:</h3>
            <div className="summary-item"><span className="text">Precio Total:</span><span className="price">$ {totalPrice()}</span></div>
            <Button onClick={clear} variant="danger">Vaciar Carrito</Button>
        </div>
    )
}

export default CartSummary