import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const OrderConfirmation = ({orderNumber}) => {
    return (
        <div className="space-top d-flex row text-center">
            <h2>Número de Orden de Compra:</h2>
            <h3>{orderNumber}</h3>
            <NavLink to="/">
                <Button variant="primary">Ir al Inicio</Button>
            </NavLink>
        </div>
    )
}

export default OrderConfirmation