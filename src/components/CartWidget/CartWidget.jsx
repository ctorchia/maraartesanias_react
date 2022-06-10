import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return (

        <li className="nav-item m-1">
            <NavLink className="nav-link py-0" to='/cart'>
                <i className="fas fa-shopping-cart"></i>
            </NavLink>
        </li>
    );
}

export default CartWidget;
