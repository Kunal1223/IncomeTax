import React from 'react'
import '../Style/header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="logo">
                    <NavLink to="/"><img src="./images/logo.png" alt="logo" /></NavLink>
                </div>

                <div className="name">
                    <span className='first'> PUSHKAR & </span><span className='second'>ASSOCIATES</span>
                </div>

                <div className="links">
                    <NavLink to="/" className="link">HOME</NavLink>
                    <NavLink to="./about" className="link">ABOUT US</NavLink>
                    <NavLink to="./service" className="link">SERVICES</NavLink>
                    <NavLink to="./choose" className="link">WHY CHOOSE US</NavLink>
                    <NavLink to="./news" className="link">NEWS</NavLink>
                    <NavLink to="./about" className="link">DOWNLOADS</NavLink>
                    <NavLink to="./about" className="link">CONTACT US</NavLink>
                    <NavLink to="./about" className="link">LINKS</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
