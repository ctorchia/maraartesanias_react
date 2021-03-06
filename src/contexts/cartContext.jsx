import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        return cart.find(element => element.id === item.id)
    }

    const addItem = (item) => {
        if (isInCart(item)) {
            (cart.find(element => element.id === item.id)).quantity += item.quantity
            setCart([...cart])
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

    const totalPrice = () => {
        let totalPrice = 0;

        cart.forEach((product) => {
            totalPrice += parseInt(product.price) * parseInt(product.quantity)
        })
        return parseInt(totalPrice)
    }

    const removeItem = (id) => {
        setCart(cart.filter((element) => element.id !== id))
    }

    const cartCountItems = () => cart.reduce((acum, item) => acum + item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                clear,
                totalPrice,
                removeItem,
                cartCountItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
