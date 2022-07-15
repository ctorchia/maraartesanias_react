import { Link } from "react-router-dom"

const CartItemDetailButtons = () => {
    return (
        <div className="d-flex justify-content-center align-middle">
            <Link to="/">
                <button className="btn btn-primary m-2">Seguir Comprando</button>
            </Link>
            <Link to="/cart">
                <button className="btn btn-success m-2">Ir al Carrito</button>
            </Link>
        </div>
    )
}

export default CartItemDetailButtons