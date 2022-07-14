import { useCartContext } from "../../contexts/cartContext"
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import CartForm from "./CartForm"
import CartEmpty from "./CartEmpty"
import CartOrderConfirmation from "./CartOrderConfirmation"

const Cart = () => {
    const { cart, clear, totalPrice } = useCartContext()

    const [orderNumber, setOrderNumber] = useState()

    // ------------------------------------------------------------------------------
    async function generateOrder(e) {

        e.preventDefault()
        let order = {}

        order.buyer = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value
        }

        order.totalPrice = totalPrice()

        order.items = cart.map(item => {
            const id = item.id
            const title = item.title
            const price = item.price * item.quantity

            return { id, title, price }
        })

        // INSERT
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, order)
            .then(resp => setOrderNumber(resp.id))


        // UPDATE STOCK
        const queryCollectionStock = collection(db, 'products')

        const queryUpdateStock = await query(
            queryCollectionStock,
            where(documentId(), 'in', cart.map(it => it.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cart.find(item => item.id === res.id).quantity
            })))
            .finally(() => clear())

        batch.commit()
    }
    // ------------------------------------------------------------------------------

    return (

        orderNumber ?
            <CartOrderConfirmation orderNumber={orderNumber}/>
            :
            cart.length === 0 ?
                <CartEmpty />
                :
                <CartForm generateOrder={generateOrder} />
    )
}

export default Cart


