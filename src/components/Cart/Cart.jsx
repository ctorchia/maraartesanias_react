import { useCartContext } from "../../contexts/cartContext"
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"

const Cart = () => {
    const { cart, clear, totalPrice, removeItem } = useCartContext()

    const [orderNumber, setOrderNumber] = useState()

    // ------------------------------------------------------------------------------
    async function generateOrder(e) {

        e.preventDefault()
        let order = {}

        order.buyer = { name: 'Cristian', email: 'cmt@gmail.com', phone: '44445555' }
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
            .finally(()=> clear())

        batch.commit()
    }
    // ------------------------------------------------------------------------------

    return (

        orderNumber ?
            <div className="space-top d-flex row text-center">
                <h2>Número de Orden de Compra:</h2>
                <h3>{orderNumber}</h3>
                <NavLink to="/">
                    <Button variant="primary">Ir al Inicio</Button>
                </NavLink>
            </div>
        :

        cart.length === 0 ?

        <div className="space-top d-flex row text-center">
            <h2>Carrito de Compras</h2>
            <h3>(El carrito esta vacio)</h3>
            <NavLink to="/">
                <Button variant="primary">Ir al Inicio</Button>
            </NavLink>
        </div>
        :
        <div className="space-top shopping-cart dark">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="items">
                                {
                                    cart.map(item => <div className="product border" key={item.id}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src={item.pictureUrl} className="img-fluid mx-auto d-block image rounded" alt="..." />
                                            </div>

                                            <div className="col-md-8">
                                                <div className="info">
                                                    <div className="row">
                                                        <div className="col-md-5 product-name">
                                                            <div className="product-name">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 quantity">
                                                            <label>Cantidad</label>
                                                            <div className="form-control quantity-input">{item.quantity} </div>
                                                        </div>
                                                        <div className="col-md-3 price">
                                                            <span>${item.price}</span>
                                                        </div>
                                                        <div className="col-md-1 price">
                                                            <Button onClick={() => { removeItem(item.id) }} variant="danger">X</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="summary">
                                <h3>Resumen</h3>
                                <div className="summary-item"><span className="text">Precio Total:</span><span className="price">$ {totalPrice()}</span></div>
                                <Button onClick={clear} variant="danger">Vaciar Carrito</Button>
                                <Button onClick={generateOrder} variant="primary">Terminar Compra</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart


