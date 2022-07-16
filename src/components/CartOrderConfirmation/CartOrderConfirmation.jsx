import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const CartOrderConfirmation = ({orderNumber}) => {
    return (
        <div className="space-top d-flex row text-center">
            <h2>Número de Orden de Compra:</h2>
            <h3 className="text-success">{orderNumber}</h3>
            <NavLink to="/">
                <Button variant="primary">Ir al Inicio</Button>
            </NavLink>
        </div>
    )
}

export default CartOrderConfirmation