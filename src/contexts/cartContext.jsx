import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

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

    const emptyCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                emptyCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// {id:1,name:'Fede'},{id:2,name:'Juan'}

