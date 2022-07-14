import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const CartEmpty = () => {
    return (
        <div className="space-top d-flex row text-center">
            <h3>"El carrito esta vacio"</h3>
            <NavLink to="/">
                <Button variant="primary">Ir al Inicio</Button>
            </NavLink>
        </div>
    )
}

export default CartEmpty