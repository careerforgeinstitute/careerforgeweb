import React from "react";
/* import contentImage from '../Img/content.jpeg' */
import coursedetailsImage from "../Img/course-details.jpg"; // replace with an agile-specific image if you have one
import CareerForgeCertificates from "./CareerForgeCertificates";

export default function CourseDetailsAgile() {
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
                AGILE + SCRUM + JIRA MASTERCLASS
              </span>

              <h1 className="course-hero-title mt-4">
                Master
                <span> Agile & Scrum for Business Analysts</span>
              </h1>

              <p className="course-hero-description mt-4">
                Learn how Agile teams actually work inside IT companies using
                Scrum ceremonies, Jira workflows, Confluence collaboration and
                AI-powered Agile BA techniques.
              </p>

              <div className="course-hero-features mt-5">
                <div className="hero-feature-pill">
                  ✅ Live Sprint Simulation
                </div>

                <div className="hero-feature-pill">
                  ✅ Jira + Confluence Hands-On
                </div>

                <div className="hero-feature-pill">✅ Agile BA Workflows</div>

                <div className="hero-feature-pill">✅ AI for Agile BAs</div>
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

                  <h3 className="modern-subtitle">₹5,000</h3>

                  <p>Practical Agile training program</p>
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
                alt="Agile and Scrum for BAs"
              />
              <br />
              <br />

              <h2 className="modern-section-title">
                Agile &amp; Scrum for BAs
              </h2>
              <p>
                This focused 4-week program is built for existing BAs moving
                into Agile teams, IT professionals joining Scrum environments,
                and developers or testers transitioning into the BA role. You'll
                gain deep practical knowledge of Agile, Scrum, JIRA, Confluence
                and Gen AI tools.
              </p>

              <h3 className="modern-subtitle">Key Course Features</h3>
              <ul>
                <li>
                  <strong>Instructor-Led Online Training:</strong> Convenient
                  weekend live sessions with direct access to your trainer.
                </li>
                <li>
                  <strong>9+ Years Industry Experience:</strong> Learn from a
                  practising BA using real Agile project examples.
                </li>
                <li>
                  <strong>Live Sprint Simulation:</strong> Participate in a full
                  2-sprint simulation with real ceremonies — planning, standup,
                  review, retrospective.
                </li>
                <li>
                  <strong>JIRA Hands-On:</strong> Set up boards, manage epics
                  and stories, run sprints and read burndown charts.
                </li>
                <li>
                  <strong>Confluence Hands-On:</strong> Create BA workspaces,
                  write BRDs, integrate with JIRA.
                </li>
                <li>
                  <strong>Gen AI for Agile BAs:</strong> Use ChatGPT, Claude AI
                  and Lovable to accelerate backlog writing, sprint planning and
                  prototyping.
                </li>
                <li>
                  <strong>Resume &amp; Interview Prep:</strong> Agile
                  BA-specific resume guidance and mock interview with feedback.
                </li>
                <li>
                  <strong>Affordable Fees:</strong> High-quality training at
                  ₹5,000 — one of the most accessible programs available.
                </li>
                <li>
                  <strong>WhatsApp Support:</strong> Community group for
                  doubt-solving between sessions.
                </li>
                <li>
                  <strong>Certificate:</strong> Certificate of completion issued
                  on capstone submission.
                </li>
              </ul>

              <h3 className="modern-subtitle">What You'll Learn</h3>
              <ul>
                <li>
                  Agile manifesto — 4 values and 12 principles explained
                  practically
                </li>
                <li>
                  Scrum framework — roles (PO, SM, Dev team), ceremonies and
                  artifacts
                </li>
                <li>
                  BA's role inside a Scrum team — backlog refinement, story
                  pointing, Definition of Done
                </li>
                <li>
                  Writing epics, user stories and tasks — story mapping and
                  MoSCoW prioritisation
                </li>
                <li>
                  JIRA — epics, sprint boards, JQL filters, burndown charts and
                  reporting
                </li>
                <li>
                  Confluence — workspace setup, BRD pages, meeting notes, JIRA
                  integration
                </li>
                <li>
                  Gen AI tools — ChatGPT, Claude AI and Lovable for Agile BA
                  tasks
                </li>
                <li>Live sprint simulation and capstone project</li>
              </ul>

              <h3 className="modern-subtitle">Course Curriculum</h3>

              <h5 className="modern-phase-title">Phase 0 · Orientation</h5>
              <ul>
                <li>
                  <strong>Session 1:</strong> Why Agile? Who is this for? —
                  Waterfall problems, Agile promise, course roadmap
                </li>
              </ul>

              <h5 style={{ color: "#0d6efd", marginTop: "16px" }}>
                Phase 1 · Agile Foundations
              </h5>
              <ul>
                <li>
                  <strong>Session 2:</strong> Agile manifesto &amp; principles —
                  4 values, 12 principles, Waterfall vs Agile
                </li>
                <li>
                  <strong>Session 3:</strong> Scrum framework deep dive —
                  PO/SM/Dev team, sprint planning, standup, review, retro
                </li>
              </ul>

              <h5 style={{ color: "#0d6efd", marginTop: "16px" }}>
                Phase 2 · BA Role in Agile
              </h5>
              <ul>
                <li>
                  <strong>Session 4:</strong> BA inside the Scrum team — backlog
                  refinement, story pointing, BA vs PO, Definition of Done
                </li>
                <li>
                  <strong>Session 5:</strong> Backlog management &amp; story
                  writing — Epic→Story→Task, story mapping, MoSCoW, sprint goals
                </li>
              </ul>

              <h5 style={{ color: "#0d6efd", marginTop: "16px" }}>
                Phase 3 · Tools Masterclass
              </h5>
              <ul>
                <li>
                  <strong>Session 6:</strong> JIRA hands-on — epics, sprint
                  board setup, JQL basics, burndown charts
                </li>
                <li>
                  <strong>Session 7:</strong> Confluence hands-on — space setup,
                  BRD pages, JIRA integration, team templates
                </li>
              </ul>

              <h5 style={{ color: "#0d6efd", marginTop: "16px" }}>
                Phase 4 · Gen AI + Capstone
              </h5>
              <ul>
                <li>
                  <strong>Session 8:</strong> Gen AI for Agile BAs + live sprint
                  simulation — ChatGPT for backlog writing, Claude for sprint
                  planning, sprint roleplay, retrospective, certificate
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Bonus Session:</strong> Capstone project review,
                  resume guidance, interview prep, LinkedIn profile update,
                  Naukri profile update, and next steps
                </li>
              </ul>

              {/* Enrol CTA */}
              {/* MODERN ENROLL CTA */}

              <div className="modern-enroll-cta mt-5">
                <h3>Ready to Master Agile as a Business Analyst?</h3>

                <p>
                  Contact us for enrollment guidance, Agile roadmap discussion
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
                <p>4 Weeks</p>
              </div>
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>📚 Sessions</h5>
                <p>8 Sessions + 1 Bonus Session</p>
              </div>
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>💻 Mode</h5>
                <p>Online · Weekend batches</p>
              </div>
              <div className="modern-sidebar-card d-flex justify-content-between align-items-center">
                <h5>💰 Fee</h5>
                <p>
                  <strong>₹5,000</strong>{" "}
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#aaa",
                      fontSize: "13px",
                    }}
                  >
                    ₹6,500
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
              {/*  <div className="container mt-4">
                <h4>Course Content</h4>
                <a href="../assets/Agile Scrum outline.docx" download>
                  <img src={contentImage} alt="Download course content" className="img-fluid" style={{width: '100px'}} />
                </a>
                <p className="mt-3">Click the image to download the syllabus</p>
              </div> */}

              {/* Enquiry Form */}
              {/* <div className="container mt-4">
                <h4>Have any queries? Request a call back.</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="agile-name" className="form-label"><strong>Name:</strong></label>
                    <input type="text" className="form-control" id="agile-name" placeholder="Enter your name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="agile-email" className="form-label"><strong>Email address:</strong></label>
                    <input type="email" className="form-control" id="agile-email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="agile-phone" className="form-label"><strong>Phone number:</strong></label>
                    <input type="tel" className="form-control" id="agile-phone" placeholder="Enter your phone number" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="agile-message" className="form-label"><strong>Message:</strong></label>
                    <textarea className="form-control" id="agile-message" rows="4" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
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
