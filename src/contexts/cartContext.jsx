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
            // console.log(product.price)
            totalPrice += parseInt(product.price) * parseInt(product.cantidad)
        })
        console.log(totalPrice)
        return parseInt(totalPrice)
    }

    const removeItem = (id) => {
        setCart(cart.filter((element) => element.id !== id))
    }

    const cartCountItems = () => cart.reduce((acum,item)=> acum + item.cantidad,0)
    
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
