import React from "react";
/* import contentImage from '../Img/content.jpeg' */
import coursedetailsImage from "../Img/course-details.jpg";
import CareerForgeCertificates from "./CareerForgeCertificates";
/* import Form from './Form' */

export default function CourseDetailsBA() {
  return (
    <>
      {/* Page Title */}
      {/* =======================================================
MODERN COURSE HERO
======================================================= */}

      <section className="modern-course-hero">
        <div className="course-hero-overlay"></div>

        <div className="container position-relative z-3">
          <div className="row align-items-center gy-5">
            {/* LEFT */}

            <div className="col-lg-7">
              <span className="course-hero-badge">
                INDUSTRY-READY BUSINESS ANALYST PROGRAM
              </span>

              <h1 className="course-hero-title mt-4">
                Become a<span> Job-Ready Business Analyst</span>
              </h1>

              <p className="course-hero-description mt-4">
                Learn practical Business Analysis, Agile workflows, stakeholder
                management, documentation, process modelling and AI-powered BA
                skills through real-world project scenarios.
              </p>

              <div className="course-hero-features mt-5">
                <div className="hero-feature-pill">✅ 6 Weeks Training</div>

                <div className="hero-feature-pill">
                  ✅ Real Project Scenarios
                </div>

                <div className="hero-feature-pill">
                  ✅ Jira + Agile + AI Tools
                </div>

                <div className="hero-feature-pill">
                  ✅ Resume & Interview Prep
                </div>
              </div>

              <div className="hero-course-buttons mt-5">
                <a
                  href="https://wa.me/919175914828"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-enroll-btn"
                >
                  Book Free Career Guidance
                </a>
              </div>
            </div>

            {/* RIGHT */}

            <div className="col-lg-5">
              <div className="hero-course-image-wrapper">
                <img
                  src={coursedetailsImage}
                  alt="Course"
                  className="img-fluid modern-course-hero-image"
                />

                <div className="floating-price-card">
                  <span>Course Fee</span>

                  <h3 className="modern-subtitle">₹8,000</h3>

                  <p>Industry-ready practical training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="modern-course-details courses-course-details section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {/* LEFT — Main Content */}
            <div className="col-lg-8">
              <img
                src={coursedetailsImage}
                className="img-fluid modern-details-image"
                alt="Core Business Analysis"
              />
              <br />
              <br />

              <h2 className="modern-section-title">Core Business Analysis</h2>
              <p>
                This 6-week program is designed for anyone looking to transition
                into a Business Analyst role — whether you're a fresh graduate,
                a sales professional, or a domain expert from any field. You'll
                gain practical, industry-ready skills with hands-on tools and
                real project work.
              </p>

              <h3 className="modern-subtitle">Key Course Features</h3>
              <ul>
                <li>
                  <strong>Instructor-Led Online Training:</strong> Convenient
                  weekend live sessions with direct access to your trainer.
                </li>
                <li>
                  <strong>Comprehensive Study Materials:</strong> Digital
                  templates, BRD, FRS and use case documents included.
                </li>
                <li>
                  <strong>9+ Years Industry Experience:</strong> Learn from a
                  practising BA using real-life project examples.
                </li>
                <li>
                  <strong>Resume Building:</strong> Expert guidance to build a
                  BA-specific resume that gets shortlisted.
                </li>
                <li>
                  <strong>Mock Interviews:</strong> Live mock interview sessions
                  with detailed feedback.
                </li>
                <li>
                  <strong>Hands-On Projects:</strong> End-to-end capstone
                  project — stakeholder analysis to BRD to presentation.
                </li>
                <li>
                  <strong>Tools Training:</strong> Hands-on sessions on
                  Microsoft Visio and Lucidchart.
                </li>
                <li>
                  <strong>Gen AI for BAs:</strong> Learn to use ChatGPT, Claude
                  AI and Lovable to supercharge your BA work.
                </li>
                <li>
                  <strong>Career Readiness:</strong> Resume review, LinkedIn
                  optimisation, interview prep and job placement guidance.
                </li>
                <li>
                  <strong>Affordable Fees:</strong> High-quality training at
                  ₹8,000 — one of the most accessible programs available.
                </li>
                <li>
                  <strong>WhatsApp Support:</strong> Community group for
                  doubt-solving between sessions.
                </li>
              </ul>

              <h3>What You'll Learn</h3>
              <ul>
                <li>
                  Stakeholder identification, mapping and management (RACI,
                  Power-Interest Grid)
                </li>
                <li>
                  Requirements elicitation — interviews, JAD workshops, 5 Whys,
                  observation
                </li>
                <li>
                  Writing BRDs, FRS, use cases and user stories with acceptance
                  criteria
                </li>
                <li>
                  Non-functional requirements, constraints, assumptions and
                  dependencies
                </li>
                <li>
                  Process modelling — AS-IS / TO-BE, BPMN, swimlane diagrams,
                  gap analysis
                </li>
                <li>
                  Data analysis — ER diagrams, data flow diagrams, data
                  dictionary
                </li>
                <li>Hands-on Visio and Lucidchart for professional diagrams</li>
                <li>
                  Gen AI tools — ChatGPT, Claude AI and Lovable for BA tasks
                </li>
                <li>Capstone project, resume, LinkedIn and mock interview</li>
              </ul>

              <h3 className="modern-subtitle">Course Curriculum</h3>

              <h5 className="modern-phase-title">Phase 0 · Orientation</h5>
              <ul>
                <li>
                  <strong>Session 1:</strong> What does a BA actually do? —
                  Roles, salaries, BA vs PM vs PO, course roadmap
                </li>
              </ul>

              <h5 style={{ color: "#198754", marginTop: "16px" }}>
                Phase 1 · Stakeholder &amp; Elicitation
              </h5>
              <ul>
                <li>
                  <strong>Session 2:</strong> Stakeholder management — register,
                  power-interest grid, RACI matrix
                </li>
                <li>
                  <strong>Session 3:</strong> Elicitation techniques —
                  interviews, JAD workshops, 5 Whys, surveys
                </li>
              </ul>

              <h5 style={{ color: "#198754", marginTop: "16px" }}>
                Phase 2 · Documentation
              </h5>
              <ul>
                <li>
                  <strong>Session 4:</strong> BRD &amp; FRS writing — templates,
                  structure, scope, sign-off
                </li>
                <li>
                  <strong>Session 5:</strong> Use cases &amp; user stories —
                  format, acceptance criteria, edge cases
                </li>
                <li>
                  <strong>Session 6:</strong> Non-functional requirements —
                  NFRs, constraints, assumptions
                </li>
              </ul>

              <h5 style={{ color: "#198754", marginTop: "16px" }}>
                Phase 3 · Process &amp; Data
              </h5>
              <ul>
                <li>
                  <strong>Session 7:</strong> Process modelling &amp; gap
                  analysis — AS-IS/TO-BE, BPMN, swimlanes
                </li>
                <li>
                  <strong>Session 8:</strong> Data analysis — ER diagrams, data
                  flow diagrams, data dictionary
                </li>
              </ul>

              <h5 style={{ color: "#198754", marginTop: "16px" }}>
                Phase 4 · Tools Masterclass
              </h5>
              <ul>
                <li>
                  <strong>Session 9:</strong> Microsoft Visio — interface, BPMN
                  stencils, swimlanes, ER diagrams
                </li>
                <li>
                  <strong>Session 10:</strong> Lucidchart — process flows,
                  wireframing, real-time collaboration
                </li>
              </ul>

              <h5 style={{ color: "#198754", marginTop: "16px" }}>
                Phase 5 · Gen AI for BAs
              </h5>
              <ul>
                <li>
                  <strong>Session 11:</strong> ChatGPT &amp; Claude AI — prompt
                  engineering, user story generation, BRD drafting
                </li>
                <li>
                  <strong>Session 12:</strong> Lovable — prompt-to-UI prototypes
                  for stakeholder demos
                </li>
              </ul>

              <h5 style={{ color: "#198754", marginTop: "16px" }}>
                Phase 6 · Career Readiness
              </h5>
              <ul>
                <li>
                  <strong>Session 13:</strong> Resume, LinkedIn &amp; personal
                  brand — templates, optimisation, portfolio
                </li>
                <li>
                  <strong>Session 14:</strong> Mock interviews &amp; capstone
                  project — Top 30 BA questions, STAR method, certificate
                </li>
              </ul>

              {/* MODERN ENROLL CTA */}

              <div className="modern-enroll-cta mt-5">
                <h3>Ready to Start Your BA Journey?</h3>

                <p>
                  Contact us for enrollment guidance, career roadmap discussion
                  and batch details.
                </p>

                <div className="enroll-contact-links">
                  <a
                    href="https://wa.me/919175914828"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📱 WhatsApp Us
                  </a>

                  <a href="mailto:info@careerforgeinstitute.in">✉️ Email Us</a>
                </div>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div className="col-lg-4">
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>📅 Duration</h5>
                <p>6 Weeks</p>
              </div>
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>📚 Sessions</h5>
                <p>12 Sessions (90 min each)</p>
              </div>
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>💻 Mode</h5>
                <p>Online · Weekend batches</p>
              </div>
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>💰 Fee</h5>
                <p>
                  <strong>₹8,000</strong>{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#aaa",
                      fontSize: "13px",
                    }}
                  >
                    ₹10,000
                  </span>
                </p>
              </div>
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>🎓 Certificate</h5>
                <p>Included on completion</p>
              </div>

              <hr
                style={{
                  height: "3px",
                  backgroundColor: "black",
                  border: "none",
                }}
              />

              {/* Course Content Download */}
              {/* <div className="container mt-4">
                <h4>Course Content</h4>
                <a href="../assets/Business Analysis outline.docx" download>
                  <img src={contentImage} alt="Download course content" className="img-fluid" style={{width: '100px'}} />
                </a>
                <p className="mt-3">Click the image to download the syllabus</p>
              </div> */}

              {/* Enquiry Form */}
              {/* <div className="col-lg-4">
                        <h3>Request a call back</h3>
                        <Form/>
              </div> */}
            </div>
            <div className="container mt-3 p-0" style={{ maxHeight: "80vh" }}>
              <CareerForgeCertificates />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
