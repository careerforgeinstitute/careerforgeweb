import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import myLogo from '../logo.png'



export default function Navbar(props) {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <Link to="/home" className="logo d-flex align-items-center me-auto">
        <img src={myLogo} alt="Logo"/>
        <h1>CareerForge Institute</h1>
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li className='transitionOne'><NavLink to="/home" activeclassName="active">Home<br/></NavLink></li>
          <li className='transitionOne'><NavLink to="/about" activeclassName="active">About</NavLink></li>
          <li className='transitionOne'><NavLink to="/courses" activeclassName="active">Courses</NavLink></li>
          <li className='transitionOne'><NavLink to="/payment" activeclassName="active">Payment</NavLink></li>
          <li className='transitionOne'><NavLink to="/contact" activeclassName="active">Contact</NavLink></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
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