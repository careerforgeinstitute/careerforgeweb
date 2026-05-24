import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import myLogo from '../logo.png'

export default function Navbar(props) {
  const [mobileNavActive, setMobileNavActive] = useState(false)

  const toggleMobileNav = () => setMobileNavActive((active) => !active)
  const closeMobileNav = () => setMobileNavActive(false)
  const navLinkClass = ({ isActive }) => isActive ? 'active' : ''

  return (
    <header id="header" className={`header d-flex align-items-center sticky-top${mobileNavActive ? ' mobile-nav-active' : ''}`}>
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <Link to="/home" className="logo d-flex align-items-center me-auto">
        <img src={myLogo} alt="Logo"/>
        <h1>CareerForge Institute</h1>
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li className='transitionOne'><NavLink to="/home" className={navLinkClass} onClick={closeMobileNav}>Home<br/></NavLink></li>
          <li className='transitionOne'><NavLink to="/about" className={navLinkClass} onClick={closeMobileNav}>About</NavLink></li>
          <li className='transitionOne'><NavLink to="/courses" className={navLinkClass} onClick={closeMobileNav}>Courses</NavLink></li>
          <li className='transitionOne'><NavLink to="/payment" className={navLinkClass} onClick={closeMobileNav}>Payment</NavLink></li>
          <li className='transitionOne'><NavLink to="/contact" className={navLinkClass} onClick={closeMobileNav}>Contact</NavLink></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleMobileNav}></i>
      </nav>

      <a className="btn-getstarted" href='/' data-bs-toggle="modal" data-bs-target="#exampleModal">Free Demo</a>
      </div>
      {/* <button className="modal-dialog modal-dialog-centered"> Free Demo</button>
    
              Button trigger modal
    <button type="button" className="btn-getstarted" data-bs-toggle="modal" data-bs-target="#exampleModal">Free Demo</button> */}

  </header>
  )
}


Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.defaultProps ={ title: 'CareerForge'}