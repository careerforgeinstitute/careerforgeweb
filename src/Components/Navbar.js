import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import myLogo from '../logo.png'

export default function Navbar(props) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  

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

      {/* DESKTOP NAV */}

<nav className="modern-nav d-none d-xl-flex">

  <NavLink
    to="/home"
    className={({ isActive }) =>
      isActive ? "nav-item active" : "nav-item"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "nav-item active" : "nav-item"
    }
  >
    About
  </NavLink>

  <NavLink
    to="/courses"
    className={({ isActive }) =>
      isActive ? "nav-item active" : "nav-item"
    }
  >
    Courses
  </NavLink>

  <NavLink
    to="/payment"
    className={({ isActive }) =>
      isActive ? "nav-item active" : "nav-item"
    }
  >
    Payment
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "nav-item active" : "nav-item"
    }
  >
    Contact
  </NavLink>

</nav>

{/* MOBILE SIDEBAR */}

<div className={`mobile-sidebar ${mobileMenuOpen ? 'active' : ''}`}>

  {/* CLOSE BUTTON */}

  <div className="mobile-sidebar-top">

    <h3>Menu</h3>

    <button
      className="mobile-close-btn"
      onClick={() => setMobileMenuOpen(false)}
    >
      <i className="bi bi-x-lg"></i>
    </button>

  </div>

  {/* LINKS */}

  <div className="mobile-sidebar-links">

    <NavLink
      to="/home"
      className="mobile-link"
      onClick={() => setMobileMenuOpen(false)}
    >
      Home
    </NavLink>

    <NavLink
      to="/about"
      className="mobile-link"
      onClick={() => setMobileMenuOpen(false)}
    >
      About
    </NavLink>

    <NavLink
      to="/courses"
      className="mobile-link"
      onClick={() => setMobileMenuOpen(false)}
    >
      Courses
    </NavLink>

    <NavLink
      to="/payment"
      className="mobile-link"
      onClick={() => setMobileMenuOpen(false)}
    >
      Payment
    </NavLink>

    <NavLink
      to="/contact"
      className="mobile-link"
      onClick={() => setMobileMenuOpen(false)}
    >
      Contact
    </NavLink>

  </div>

  {/* CTA */}

  <button
    className="mobile-career-btn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Book Free Career Guidance
  </button>

</div>

{/* OVERLAY */}

<div
  className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
  onClick={() => setMobileMenuOpen(false)}
></div>

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

      <div
  className="mobile-menu-icon d-xl-none"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>

  <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>

</div>

    </div>

  </div>

</header>
  )
}


Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.defaultProps ={ title: 'CareerForge'}