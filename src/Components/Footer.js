import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'

export default function footer() {
  return (
    <footer id="footer" className="footer position-relative">
    
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-links">
          <h3>Important links</h3>
          <br/>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      
        <div className="col-lg-4 col-md-6">
          <h3>Request a call back</h3>
          <Form/>
        </div>
        <div className="col-lg-4 col-md-6 footer-about">
          <Link to="/" className="logo d-flex align-items-center">
            <h3>Contact us</h3>
          </Link>
          <div className="footer-contact pt-3">
            <h6><strong>Address:</strong> <span>C1-2401, Nyati Elysia, RiverFront RD</span></h6>
            <h6><span> Kharadi, Pune, Maharashtra 411014</span></h6>
            <h6 className="mt-3"><strong>Phone:</strong> <span>+91 9175914828</span></h6>
            <h6><strong>Email:</strong> <span>info@careerforgeinstitute.in</span></h6>
          </div>
          <div className="social-links d-flex mt-4">
            {/* <Link to="/"><i className="bi bi-facebook"></i></a> */}
            <a href="https://www.instagram.com/careerforgeinstitute/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="www.linkedin.com/in/careerforge-institute-undefined-a34944410" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">CareerForge Institute</strong> <span>All Rights Reserved</span></p>
    </div>
    
  </footer>
  )
}
