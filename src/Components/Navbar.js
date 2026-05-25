import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import myLogo from '../logo.png'

export default function Navbar(props) {
  

  return (
    <header id="header" className="modern-header sticky-top">

  <div className="container-fluid container-xl">

    <div className="modern-navbar">

      {/* LOGO */}

      <Link to="/home" className="modern-logo">

        <img src={myLogo} alt="CareerForge Logo" />

        <div className="logo-text">

          <h1>CareerForge</h1>
          <span>Institute</span>

        </div>

      </Link>

      {/* NAVIGATION */}

      <nav className="modern-nav">

        <NavLink to="/home" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-item">
          About
        </NavLink>

        <NavLink to="/courses" className="nav-item">
          Courses
        </NavLink>

        <NavLink to="/payment" className="nav-item">
          Payment
        </NavLink>

        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>

      </nav>

      {/* CTA BUTTON */}

      <a
        className="modern-demo-btn"
        href="/"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-lightning-charge-fill"></i>
        Free Career Guidance
      </a>

      {/* MOBILE ICON */}

      <div className="mobile-menu-icon d-xl-none">
        <i className="bi bi-list"></i>
      </div>

    </div>

  </div>

</header>
  )
}


Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.defaultProps ={ title: 'CareerForge'}