import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    // Estados y Funciones
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        // console.log(item)
        setCart([
            ...cart,
            item
        ])
    }

    return (
        <CartContext.Provider 
            value={{
                cart,
                addToCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// {id:1,name:'Fede'},{id:2,name:'Juan'}

