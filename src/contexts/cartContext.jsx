import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // Estados y Funciones
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        return cart.find(producto => producto.id === item.id)
    }

    const addItem = (item) => {
        // console.log(item)
        if (isInCart(item)) {
            (cart.find(element => element.id === item.id)).cantidad += item.cantidad
        } else {
            setCart([
                ...cart,
                item
            ])
        }
    }

    const clear = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                clear
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// removeItem(ItemId)