import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'

import {FaBars, FaTimes} from 'react-icons/fa'

import './NavBarStyles.css'


const NavBar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

  return (
   <header>
    <nav className='navbar'>
        <div className='logo'>
          <Link to='/'>
           <img src={Logo} alt="Movie Collection" />
          </Link> 
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/movies' className='nav-link'> See Movies</Link>
            </li>
        </ul>
{/* Hamburger Nav */}
<div className="hamburger" onClick={handleClick}>
    {click ? (<FaTimes size={20} style={{color: '#fefae0'}}/>) : (<FaBars size={20} style={{color: '#fefae0'}}/>) }
</div>
    </nav>
    </header>
  )
}

export default NavBar