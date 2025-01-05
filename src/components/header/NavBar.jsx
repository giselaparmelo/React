import React from 'react'

export const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='nav-menu'>
            <li className='nav-item'><a className='nav-link' href="#">Inicio</a></li>
            <li className='nav-item'><a className='nav-link' href="#">Categoría 1</a></li>
            <li className='nav-item'><a className='nav-link' href="#">Categoría 2</a></li>
            <li className='nav-item'><a className='nav-link' href="#">Categoría 3</a></li>
        </ul>
    </nav>
  )
}
