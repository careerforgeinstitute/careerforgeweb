import React from 'react'
import { Link } from 'react-router-dom'

export default function Payment() {
  return (
    <>
    <div className="page-title" data-aos="fade">
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">Payment</li>
          </ol>
        </div>
      </nav>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Payment</h1>
              <p className="mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="pricing" className="pricing section">

    <div className="container">

      <div className="row gy-3">

          <h5><strong>Payment Modes:</strong></h5>
            <ol>
                 <li>Branch/ATM Cheque drop</li>
                 <li>Cheque or Cash</li>
                 <li>Google Pay/PhonePe</li>
                 <li>NEFT/IMPS</li>
            </ol>
      </div>
    </div>
    </section>
    </>
  )
}