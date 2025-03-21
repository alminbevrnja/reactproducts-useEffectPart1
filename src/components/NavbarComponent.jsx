import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavbarComponent() {
  return (
    <div>
      <nav className='flex justify-between items-center h-[100px] mx-auto'>
        <h1>LOGO</h1>
        <ul className='flex items-center gap-4'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/products'>All Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarComponent