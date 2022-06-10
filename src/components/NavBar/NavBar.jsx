import React from 'react'
import './NavBar.css'
import logo from './logo.webp'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <div className="container-fluid">
                    <div>
                        <a href="#home"><img src={logo} alt="Logo MaraArtesanias" width="140" height="110" /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item m-1">
                                <NavLink className="nav-link py-0" to="/">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item m-1">
                                <NavLink className="nav-link py-0" to="/item">
                                    Productos
                                </NavLink>
                            </li>
                            <li className="nav-item m-1">
                                <a className="nav-link py-0" href="#action2">Trabajos</a>
                            </li>
                            <li className="nav-item m-1">
                                <a className="nav-link py-0" href="#action3">Nosotros</a>
                            </li>
                            <li className="nav-item m-1">
                                <a className="nav-link py-0" href="#action4">Contacto</a>
                            </li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar