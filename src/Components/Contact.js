import React from "react";
import Form from "./Form";

export default function Contact() {
  return (
    <>
      {/* =======================================================
MODERN CONTACT HERO
======================================================= */}

      <section className="modern-contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="container position-relative z-3">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="contact-badge">LET’S CONNECT</span>

              <h1 className="contact-title mt-4">
                Start Your Journey Toward Becoming a{" "}
                <span>Modern Business Analyst</span>
              </h1>

              <p className="contact-description mt-4">
                Whether you're a fresher, career switcher or working
                professional, we’ll help you understand the roadmap to becoming
                an industry-ready Business Analyst.
              </p>

              <div className="contact-hero-cards mt-5">
                <div className="contact-mini-card">
                  <i className="bi bi-kanban-fill"></i>
                  <span>Agile + Scrum</span>
                </div>

                <div className="contact-mini-card">
                  <i className="bi bi-robot"></i>
                  <span>AI for BAs</span>
                </div>

                <div className="contact-mini-card">
                  <i className="bi bi-person-workspace"></i>
                  <span>Industry Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="modern-contact-section section">
        <div className="container">
          <div className="row gy-5 align-items-stretch">
            {/* LEFT SIDE */}

            <div className="col-lg-5">
              <div className="modern-contact-info">
                <span className="info-badge">CONTACT INFORMATION</span>

                <h2 className="info-title mt-4">
                  Let’s Discuss Your Career Goals
                </h2>

                <p className="info-description mt-4">
                  Have questions about Business Analysis, Agile training or
                  AI-powered BA skills? Reach out and we’ll guide you.
                </p>

                {/* ADDRESS */}

                <div className="modern-info-card">
                  <div className="modern-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>
                    <h4>Address</h4>

                    <p>
                      C1-2401, Nyati Elysia, RiverFront Road, Kharadi, Pune
                      411014
                    </p>
                  </div>
                </div>

                {/* PHONE */}

                <div className="modern-info-card">
                  <div className="modern-info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>

                  <div>
                    <h4>Call Us</h4>

                    <p>+91 9175914828</p>
                  </div>
                </div>

                {/* EMAIL */}

                <div className="modern-info-card">
                  <div className="modern-info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>

                  <div>
                    <h4>Email Us</h4>

                    <p>info@careerforgeinstitute.in</p>
                  </div>
                </div>

                {/* WHATSAPP BUTTON */}

                <a
                  href="https://wa.me/919175914828"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-contact-btn"
                >
                  <i className="bi bi-whatsapp"></i>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="col-lg-7">
              <div className="modern-form-wrapper">
                <div className="form-top-content">
                  <span className="form-badge">FREE CAREER GUIDANCE</span>

                  <h2 className="form-title mt-3">Book a Free Consultation</h2>

                  <p className="form-description">
                    Tell us about your background and career goals.
                  </p>
                </div>

                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
