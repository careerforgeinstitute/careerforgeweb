import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <footer className="modern-footer">
      {/* TOP CTA SECTION */}

      <div className="footer-cta-section">
        <div className="container">
          <div className="footer-cta-box">
            <div>
              <span className="footer-badge">
                🚀 FUTURE-READY BUSINESS ANALYST TRAINING
              </span>

              <h2 className="footer-cta-title mt-3">
                Start Your Career Transformation Journey
              </h2>

              <p className="footer-cta-description">
                Learn Business Analysis, Agile, Jira and AI-powered workflows
                through practical industry-oriented training.
              </p>
            </div>

            <button
              className="footer-cta-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Book Free Career Guidance
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}

      <div className="container footer-main">
        <div className="row gy-5">
          {/* BRANDING */}

          <div className="col-lg-4">
            <div className="footer-brand">
              <h2>CareerForge Institute</h2>

              <p>
                Helping students and professionals become industry-ready
                Business Analysts through practical training, Agile workflows
                and AI-powered learning.
              </p>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/careerforgeinstitute/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/careerforge-institute-undefined-a34944410"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://wa.me/919175914828"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="col-lg-2 col-md-6">
            <div className="footer-links-modern">
              <h4>Quick Links</h4>

              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/courses">Courses</Link>
                </li>

                <li>
                  <Link to="/payment">Enrollment</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* SPECIALIZATION */}

          <div className="col-lg-3 col-md-6">
            <div className="footer-links-modern">
              <h4>What We Teach</h4>

              <ul>
                <li>Business Analysis</li>

                <li>Agile & Scrum</li>

                <li>Jira & Confluence</li>

                <li>AI for Business Analysts</li>

                <li>Resume & Interview Prep</li>
              </ul>
            </div>
          </div>

          {/* CONTACT */}

          <div className="col-lg-3">
            <div className="footer-contact-modern">
              <h4>Contact Us</h4>

              <p>
                C1-2401, Nyati Elysia, RiverFront Road, Kharadi, Pune 411014
              </p>

              <p>+91 9175914828</p>

              <p>careerforgeinstitute@gmail.com</p>

              <a
                href="https://wa.me/919175914828"
                target="_blank"
                rel="noreferrer"
                className="footer-whatsapp-btn"
              >
                <i className="bi bi-whatsapp"></i>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 CareerForge Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
