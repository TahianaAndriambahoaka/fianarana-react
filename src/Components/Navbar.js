import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='links'>
            <a className='active' href='/'>Home</a>
            <a href='/create'>New Blog</a>
        </div>
    </nav>
  )
}
