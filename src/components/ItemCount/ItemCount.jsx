
import React from 'react'
import { useState } from 'react';


function ItemCount({ stock, initial, onAdd }) {

    const [contador, setContador] = useState(parseInt(initial));
   
    const incrementar = () => {
        if (contador !== parseInt(stock)) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador !== 1) {
            setContador(contador - 1);
        }
    }

    const mostrarContador = () => {
        onAdd(contador)
    }

    return (
        <div className="d-flex flex-column bg-light align-items-center p-3">
            <div className="d-flex">
                <button className="m-2 btn btn-primary" onClick={decrementar}>
                    -
                </button>
                <div className="p-2 m-2 d-flex align-items-center">
                    <div className="font-italic"><h2>{contador}</h2></div>
                </div>
                <button className="m-2 btn btn-primary" onClick={incrementar}>
                    +
                </button>
            </div>
            <div>
                <button className="btn btn-success text-center" onClick={mostrarContador}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount