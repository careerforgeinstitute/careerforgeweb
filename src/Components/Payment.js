import React from 'react'

export default function Payment() {
  return (
    <>
  {/* HERO */}

  <section className="payment-hero">

    <div className="container text-center">

      <span className="payment-badge">
        SECURE ENROLLMENT
      </span>

      <h1 className="payment-title mt-4">
        Complete Your
        <span> Course Enrollment</span>
      </h1>

      <p className="payment-description mt-4">
        Start your journey toward becoming a modern
        Business Analyst with practical industry training,
        Agile workflows and AI-powered learning.
      </p>

    </div>

  </section>

  {/* PAYMENT METHODS */}

  <section className="payment-methods section">

    <div className="container">

      <div className="text-center mb-5">

        <h2 className="payment-section-title">
          Available Payment Methods
        </h2>

      </div>

      <div className="row gy-4">

        {/* CARD 1 */}

        <div className="col-lg-3 col-md-6">

          <div className="payment-card">

            <div className="payment-icon">
              <i className="bi bi-phone-fill"></i>
            </div>

            <h3>UPI Payments</h3>

            <p>
              Pay securely using Google Pay,
              PhonePe, Paytm or any UPI app.
            </p>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="col-lg-3 col-md-6">

          <div className="payment-card">

            <div className="payment-icon">
              <i className="bi bi-bank2"></i>
            </div>

            <h3>Bank Transfer</h3>

            <p>
              Transfer course fees through
              NEFT, IMPS or online banking.
            </p>

          </div>

        </div>

        {/* CARD 3 */}

        <div className="col-lg-3 col-md-6">

          <div className="payment-card">

            <div className="payment-icon">
              <i className="bi bi-credit-card-fill"></i>
            </div>

            <h3>Cheque Deposit</h3>

            <p>
              Submit payments through
              branch or ATM cheque deposit.
            </p>

          </div>

        </div>

        {/* CARD 4 */}

        <div className="col-lg-3 col-md-6">

          <div className="payment-card">

            <div className="payment-icon">
              <i className="bi bi-shield-lock-fill"></i>
            </div>

            <h3>Secure Process</h3>

            <p>
              All enrollment payments are
              handled through secure channels.
            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* ENROLLMENT PROCESS */}

  <section className="enrollment-section section">

    <div className="container">

      <div className="text-center mb-5">

        <h2 className="payment-section-title">
          Enrollment Process
        </h2>

      </div>

      <div className="row gy-4">

        <div className="col-lg-3">

          <div className="enrollment-step">

            <div className="step-number">1</div>

            <h4>Choose Course</h4>

            <p>Select the course that fits your career goals.</p>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="enrollment-step">

            <div className="step-number">2</div>

            <h4>Book Guidance Call</h4>

            <p>Talk with our team and understand the roadmap.</p>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="enrollment-step">

            <div className="step-number">3</div>

            <h4>Complete Payment</h4>

            <p>Secure your enrollment using available payment methods.</p>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="enrollment-step">

            <div className="step-number">4</div>

            <h4>Start Learning</h4>

            <p>Begin your journey toward becoming job-ready.</p>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* SUPPORT SECTION */}

  <section className="payment-support section">

    <div className="container">

      <div className="support-box text-center">

        <h2>
          Need Help With Enrollment?
        </h2>

        <p>
          Our team is here to guide you through
          course selection and enrollment.
        </p>

        <a
          href="https://wa.me/919175914828"
          target="_blank"
          rel="noreferrer"
          className="support-btn"
        >
          <i className="bi bi-whatsapp"></i>
          Contact on WhatsApp
        </a>

      </div>

    </div>

  </section>

</>
  )
}