import React from 'react'
import './css/layout.css'

function Navbar() {
    return (
        <div >
            <nav className="navbar">
            <div className='container'>
            <a href="#">Hulk</a>
            <a href="#" class="logo is-active">Mavel</a>
            <a href="#">Venom</a>
            </div>
                
            </nav>
        </div>
    )
}

export default Navbar
