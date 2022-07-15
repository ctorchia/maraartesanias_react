import React from 'react'
import { Button } from 'react-bootstrap'

const CartForm = ({ generateOrder }) => {

    return (
        <div className="col-md-12">
            <h3 className=" text-center m-4">Datos del Cliente:</h3>
            <form className="row g-3 form-control-lg mb-5" onSubmit={generateOrder}>
                <div className="col-md-4">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="col-md-5">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="phone" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" id="phone" required />
                </div>
                <div className="col-12">
                    <Button type="submit" variant="primary">Terminar Compra</Button>
                </div>
            </form>
        </div>
    )
}

export default CartForm