
import React from 'react'
import { useState } from 'react';


function ItemCount({ stock, initial, onAdd }) {

    const [counter, setCounter] = useState(parseInt(initial));
   
    const increase = () => {
        if (counter !== parseInt(stock)) {
            setCounter(counter + 1);
        }
    }

    const decrease = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        }
    }

    const showCounter = () => {
        onAdd(counter)
    }

    return (
        <div className="d-flex flex-column bg-light align-items-center p-3">
            <div className="d-flex">
                <button className="m-2 btn btn-primary" onClick={decrease}>
                    -
                </button>
                <div className="p-2 m-2 d-flex align-items-center">
                    <div className="font-italic"><h2>{counter}</h2></div>
                </div>
                <button className="m-2 btn btn-primary" onClick={increase}>
                    +
                </button>
            </div>
            <div>
                <button className="btn btn-success text-center" onClick={showCounter}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount