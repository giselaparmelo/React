import React from 'react'
import { Carrito } from './Carrito'

const NavBar = () => {
  return (
    <header>
        <h1>E-commerce</h1>
        <nav>
            <ul>
                <li> <a href="#">Inicio</a> </li>
                <li><a href="#">Camperas</a> </li>
                <li><a href="#">Pantalones</a> </li>
                <li><a href="#">Camisetas</a> </li>
            </ul>
        </nav>
        <Carrito />
    </header>
  )
}

export default NavBar
