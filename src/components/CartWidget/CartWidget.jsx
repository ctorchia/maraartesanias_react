import { NavLink } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";

const CartWidget = () => {

    const { cart, cartCountItems } = useCartContext()

    return (

        <li className="nav-item m-1">
            <NavLink className="nav-link py-0" to='/cart'>
                <div className="d-flex">
                    <div>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="ps-1">
                        {cart.length === 0 ? "" : cartCountItems()}
                    </div>
                </div>
            </NavLink>
        </li>
    );
}

export default CartWidget;
