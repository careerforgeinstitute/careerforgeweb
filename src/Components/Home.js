import React, { useState, useEffect } from "react";
import heroImage from "../Img/content.jpeg";
import tab1Image from "../Img/Tabs/tab-1.png";
import tab2Image from "../Img/Tabs/tab-2.png";
import tab3Image from "../Img/Tabs/tab-3.png";
import tab4Image from "../Img/Tabs/tab-4.png";
import tab5Image from "../Img/Tabs/tab-5.png";
import course1Image from "../Img/course-1.jpg";
import course2Image from "../Img/course-2.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {

  const cards =
    document.querySelectorAll(
      ".interactive-card"
    );

  cards.forEach((card) => {

    card.addEventListener(
      "mousemove",
      (e) => {

        const rect =
          card.getBoundingClientRect();

        const x =
          e.clientX - rect.left;

        const y =
          e.clientY - rect.top;

        card.style.setProperty(
          "--x",
          `${x}px`
        );

        card.style.setProperty(
          "--y",
          `${y}px`
        );

      }
    );

  });

}, []);

  const [webinarForm, setWebinarForm] = useState({
    name: "",
    email: "",
    mobile: "",
    profession: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleWebinarSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby0b_SxUh-rZJwy0Fb3oSjo1OoPSXMM7wIouPYwKNO0vchVUBd0BfeuVQ5jEs0W9Q1d/exec",
        {
          method: "POST",
          body: JSON.stringify(webinarForm),
        },
      );

      setSuccess(true);

      setWebinarForm({
        name: "",
        email: "",
        mobile: "",
        profession: "",
      });
      /* AUTO CLOSE AFTER 3 SECONDS */

      setTimeout(() => {
        const modalElement = document.getElementById("webinarModal");

        const modal = window.bootstrap.Modal.getInstance(modalElement);

        modal.hide();

        /* WAIT FOR CLOSE ANIMATION */

        setTimeout(() => {
          setSuccess(false);
        }, 500);
      }, 5000);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };
  return (
    <>
      <section id="hero" className="hero section">
        <img src={heroImage} alt="" className="hero-bg" />

        <div className="hero-overlay"></div>

        {/* Floating Gradient Circles */}
        <div className="floating-circle circle-one"></div>
        <div className="floating-circle circle-two"></div>

        <div className="container position-relative z-3">
          <div className="row align-items-center min-vh-100">
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div data-aos="fade-right">
                <span className="hero-badge">
                  🚀 Practical Business Analyst Training + Gen AI Skills
                </span>

                <h1 className="hero-title mt-4">
                  Become a <span>Job-Ready Business Analyst</span>
                  <br />
                  with Real Industry Experience
                </h1>

                <p className="hero-description mt-4">
                  Master the exact Business Analyst skills companies expect —
                  including Agile, Jira, stakeholder communication, real project
                  scenarios and AI-powered workflows.
                </p>

                {/* FEATURES */}
                <div className="hero-features mt-4">
                  <div className="feature-pill">✅ Live Training</div>

                  <div className="feature-pill">✅ Real Project Scenarios</div>

                  <div className="feature-pill">
                    ✅ Agile + Jira + Confluence
                  </div>

                  <div className="feature-pill">✅ Resume Preparation</div>

                  <div className="feature-pill">
                    ✅ AI for Business Analysts
                  </div>

                  <div className="feature-pill">✅ Industry Mentorship</div>
                </div>

                {/* BUTTONS */}
                <div className="hero-buttons mt-5">
                  <Link to="/contact" className="btn hero-btn-primary">
                    Book Free Career Call
                  </Link>

                  <Link to="/courses" className="btn hero-btn-secondary">
                    View Curriculum
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FLOATING CARDS */}
            <div className="col-lg-5 d-none d-lg-block">
              <div className="hero-card-wrapper" data-aos="zoom-in">
                <div className="hero-small-card hero-card-top">
                  <i className="bi bi-kanban-fill"></i>
                  <span>Agile & Scrum</span>
                </div>

                <div className="hero-small-card hero-card-left">
                  <i className="bi bi-robot"></i>
                  <span>AI for BAs</span>
                </div>

                <div className="hero-small-card hero-card-right">
                  <i className="bi bi-bar-chart-fill"></i>
                  <span>Real Projects</span>
                </div>

                <div className="hero-main-glass">
                  <h3>CareerForge Institute</h3>
                  <p>
                    Transforming students into industry-ready Business Analysts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="career-journey section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="journey-badge">YOUR LEARNING ROADMAP</span>

            <h2 className="journey-title mt-3">
              Your Journey to Becoming a<span> Business Analyst</span>
            </h2>

            <p className="journey-subtitle">
              We help you transform from beginner to industry-ready Business
              Analyst through practical training and mentorship.
            </p>
          </div>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-container left" data-aos="fade-right">
              <div className="timeline-card">
                <div className="timeline-icon">
                  <i className="bi bi-lightbulb-fill"></i>
                </div>

                <h3>Learn Core BA Concepts</h3>

                <p>
                  Understand requirement gathering, stakeholder management,
                  BRDs, FRDs and business processes.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-container right" data-aos="fade-left">
              <div className="timeline-card">
                <div className="timeline-icon">
                  <i className="bi bi-kanban-fill"></i>
                </div>

                <h3>Master Agile & Scrum</h3>

                <p>
                  Learn sprint planning, user stories, backlog grooming, Agile
                  ceremonies and Scrum workflows.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-container left" data-aos="fade-right">
              <div className="timeline-card">
                <div className="timeline-icon">
                  <i className="bi bi-tools"></i>
                </div>

                <h3>Hands-On Tools Training</h3>

                <p>
                  Work with Jira, Confluence, Visio, Figma, Lucidchart and real
                  BA tools.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-container right" data-aos="fade-left">
              <div className="timeline-card">
                <div className="timeline-icon">
                  <i className="bi bi-robot"></i>
                </div>

                <h3>Use Gen AI Like Real BAs</h3>

                <p>
                  Learn ChatGPT, Claude AI and AI-powered techniques for
                  documentation and analysis.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-container left" data-aos="fade-right">
              <div className="timeline-card">
                <div className="timeline-icon">
                  <i className="bi bi-file-earmark-person-fill"></i>
                </div>

                <h3>Resume & Interview Preparation</h3>

                <p>
                  Build professional resumes, practice mock interviews and gain
                  confidence for real opportunities.
                </p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-container right" data-aos="fade-left">
              <div className="timeline-card">
                <div className="timeline-icon">
                  <i className="bi bi-rocket-takeoff-fill"></i>
                </div>

                <h3>Become Industry Ready</h3>

                <p>
                  Gain practical knowledge and confidence to transition into
                  Business Analyst roles successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
WHAT MAKES US DIFFERENT
======================================================= */}

      <section className="industry-section section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="industry-badge">REAL INDUSTRY EXPERIENCE</span>

            <h2 className="industry-title mt-3">
              What Makes <span>CareerForge Different?</span>
            </h2>

            <p className="industry-subtitle">
              Most institutes teach concepts. At CareerForge, you learn how
              Business Analysts actually work inside real IT projects using
              Agile, stakeholder collaboration, Jira workflows and AI tools.
            </p>
          </div>

          <div className="row gy-4">
            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="industry-card">
                <div className="industry-icon">
                  <i className="bi bi-people-fill"></i>
                </div>

                <h3>Real Requirement Gathering</h3>

                <p>
                  Learn how Business Analysts interact with stakeholders, ask
                  questions, conduct discussions and gather requirements in real
                  projects.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="industry-card">
                <div className="industry-icon">
                  <i className="bi bi-kanban-fill"></i>
                </div>

                <h3>Live Agile Ceremonies</h3>

                <p>
                  Experience sprint planning, backlog grooming, standups and
                  retrospectives through practical Agile simulations.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="industry-card">
                <div className="industry-icon">
                  <i className="bi bi-journal-text"></i>
                </div>

                <h3>Live User Story Writing</h3>

                <p>
                  Learn how to write professional user stories, acceptance
                  criteria and Agile documentation used in real teams.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="industry-card">
                <div className="industry-icon">
                  <i className="bi bi-robot"></i>
                </div>

                <h3>AI Tools for Business Analysts</h3>

                <p>
                  Learn how modern Business Analysts use ChatGPT, Claude AI and
                  Gen AI tools to improve productivity, documentation and
                  analysis.
                </p>
              </div>
            </div>

            {/* CARD 5 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="industry-card">
                <div className="industry-icon">
                  <i className="bi bi-chat-square-dots-fill"></i>
                </div>

                <h3>Stakeholder Communication</h3>

                <p>
                  Understand how to communicate professionally with clients,
                  developers, testers and business users in IT projects.
                </p>
              </div>
            </div>

            {/* CARD 6 */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="industry-card">
                <div className="industry-icon">
                  <i className="bi bi-bank2"></i>
                </div>

                <h3>Real Banking & Healthcare Examples</h3>

                <p>
                  Work on practical use cases and examples inspired by real
                  Banking and Healthcare domain projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* /* =======================================================
WHO IS THIS FOR SECTION
======================================================= */}

<section className="who-section section">

  <div className="container">

    {/* HEADING */}

    <div
      className="who-heading text-center"
      data-aos="fade-up"
    >

      <span className="who-badge">
        WHO IS THIS FOR?
      </span>

      <h2 className="who-title mt-4">

        Designed for
        <span> Career Growth & Transition</span>

      </h2>

      <p className="who-description mt-4">

        Whether you're starting your IT journey,
        transitioning careers or upgrading your
        Business Analysis skills — CareerForge
        is designed to help you become industry-ready.

      </p>

    </div>

    {/* CARDS */}

    <div className="row gy-4 mt-5">

      {/* FRESHERS */}

      <div
        className="col-lg-3 col-md-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        <div className="who-card interactive-card">

          <div className="who-icon">
            🎓
          </div>

          <h3>Freshers</h3>

          <p>

            Start your IT career with practical
            Business Analysis, Agile and AI skills
            used in real companies.

          </p>

        </div>

      </div>

      {/* NON IT */}

      <div
        className="col-lg-3 col-md-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        <div className="who-card interactive-card">

          <div className="who-icon">
            🚀
          </div>

          <h3>Non-IT Professionals</h3>

          <p>

            Transition into the IT industry through
            structured Business Analyst training
            and mentorship.

          </p>

        </div>

      </div>

      {/* QA / DEVELOPERS */}

      <div
        className="col-lg-3 col-md-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >

        <div className="who-card interactive-card">

          <div className="who-icon">
            💻
          </div>

          <h3>QA & Developers</h3>

          <p>

            Upgrade your career by learning
            stakeholder communication, Agile
            workflows and BA responsibilities.

          </p>

        </div>

      </div>

      {/* EXISTING BAs */}

      <div
        className="col-lg-3 col-md-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >

        <div className="who-card interactive-card">

          <div className="who-icon">
            🤖
          </div>

          <h3>Existing Business Analysts</h3>

          <p>

            Enhance your practical BA skills
            with Agile tools, AI-powered workflows
            and real project exposure.

          </p>

        </div>

      </div>

      <div
  className="agile-awareness-box mt-5"
  data-aos="fade-up"
>

  <div className="agile-awareness-icon">
    🚀
  </div>

  <div>

    <h3>
      Agile Knowledge Benefits Every IT Professional
    </h3>

    <p>

      Even if you're planning to become a Developer,
      QA Engineer or any other IT professional,
      most modern companies work in Agile environments.

      You'll participate in sprint planning,
      standups, retrospectives and other Agile ceremonies —
      so understanding Agile workflows gives you
      a strong career advantage.

    </p>

  </div>

</div>

    </div>

  </div>

</section>

      {/* =======================================================
AI POWERED BUSINESS ANALYSIS
======================================================= */}

      <section className="ai-section section">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <div data-aos="fade-right">
                <span className="ai-badge">AI-POWERED LEARNING</span>

                <h2 className="ai-title mt-4">
                  Learn Modern
                  <span> AI-Powered Business Analysis</span>
                </h2>

                <p className="ai-description mt-4">
                  Modern Business Analysts are increasingly using AI tools to
                  improve productivity, requirement analysis, documentation and
                  collaboration. At CareerForge, we teach you how to use AI the
                  way real professionals use it in IT companies.
                </p>

                {/* FEATURES */}

                <div className="ai-feature-list mt-5">
                  <div className="ai-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>ChatGPT for Business Analysis</span>
                  </div>

                  <div className="ai-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Claude AI for Documentation</span>
                  </div>

                  <div className="ai-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>AI for Requirement Gathering</span>
                  </div>

                  <div className="ai-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>AI for User Stories & BRDs</span>
                  </div>

                  <div className="ai-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>AI for Test Case Generation</span>
                  </div>

                  <div className="ai-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>AI Productivity Techniques</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">
              <div className="ai-visual-wrapper" data-aos="zoom-in">
                <div className="ai-glow-circle"></div>

                <div className="ai-main-card">
                  <div className="ai-chip">🤖 Gen AI</div>

                  <h3>Future-Ready BA Skills</h3>

                  <p>
                    Learn how modern Business Analysts combine AI tools with
                    Agile practices to work smarter, faster and more
                    efficiently.
                  </p>
                </div>

                <div className="floating-ai-card card-a">
                  <i className="bi bi-robot"></i>
                  <span>ChatGPT</span>
                </div>

                <div className="floating-ai-card card-b">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <span>AI Productivity</span>
                </div>

                <div className="floating-ai-card card-c">
                  <i className="bi bi-file-earmark-text-fill"></i>
                  <span>Smart Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tabs" className="tabs section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="modern-ba-heading text-center">
            <span className="modern-section-badge">CAREER PATH INSIGHTS</span>

            <h2 className="modern-ba-title mt-4">
              Discover the World of
              <span> Business Analysis</span>
            </h2>

            <p className="modern-ba-subtitle mt-4">
              Understand how Business Analysts work inside modern IT companies,
              collaborate with Agile teams and use AI-powered workflows to solve
              real business problems.
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4">
              <ul className="nav modern-ba-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="modern-ba-tab-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Who is a business analyst?
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="modern-ba-tab-link"
                    data-bs-toggle="tab"
                    href="#tab-2"
                  >
                    Why become a business analyst?
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="modern-ba-tab-link"
                    data-bs-toggle="tab"
                    href="#tab-3"
                  >
                    What are the prerequisites?
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="modern-ba-tab-link"
                    data-bs-toggle="tab"
                    href="#tab-4"
                  >
                    What are the main responsibilities of a Business Analyst?
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="modern-ba-tab-link"
                    data-bs-toggle="tab"
                    href="#tab-5"
                  >
                    What skills are essential for a Business Analyst?
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 mt-4 mt-lg-0">
              <div className="tab-content modern-ba-content">
                {/* Tab 1 starts */}
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 modern-ba-text-card">
                      <p className="fst-italic">
                        In a software company using Agile methodology, a
                        business analyst acts as the bridge between stakeholders
                        and the development team. They gather and document
                        requirements, create user stories, manage the product
                        backlog, facilitate communication, and assist in testing
                        and iteration planning. Their main role is to ensure the
                        final product meets business needs and delivers value.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={tab1Image}
                        alt=""
                        className="img-fluid modern-ba-image"
                      />
                    </div>
                  </div>
                </div>
                {/* Tab 2 starts */}
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 modern-ba-text-card">
                      <p className="fst-italic">
                        According to the U.S. Bureau of Labor Statistics (BLS),
                        the employment of management analysts, including
                        business analysts, is projected to grow by 14 percent
                        from 2018 to 2028, which is faster than the average for
                        other professions. Business analysts play a crucial role
                        by using data to identify business issues,
                        opportunities, and solutions, and reporting their
                        findings to stakeholders. They are instrumental in
                        driving innovation, improving outdated processes, and
                        leading technology adoption across various business
                        sectors. Career paths for business analysts can vary
                        depending on their experience and goals.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={tab2Image}
                        alt=""
                        className="img-fluid modern-ba-image"
                      />
                    </div>
                  </div>
                </div>
                {/* Tab 3 starts */}
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 modern-ba-text-card">
                      <p className="fst-italic">
                        There are no specific prerequisites for this course.
                        However, having a basic understanding of business
                        operations and familiarity with data analysis tools can
                        be advantageous.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={tab3Image}
                        alt=""
                        className="img-fluid modern-ba-image"
                      />
                    </div>
                  </div>
                </div>
                {/* Tab 4 starts */}
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 modern-ba-text-card">
                      <p className="fst-italic">
                        Following are the main responsibilities:
                        <ul>
                          <li>
                            {" "}
                            Gathering and documenting requirements from
                            stakeholders.
                          </li>
                          <li> Creating and prioritizing user stories.</li>
                          <li> Managing the product backlog.</li>
                          <li>
                            {" "}
                            Facilitating communication between stakeholders and
                            the development team.
                          </li>
                          <li>
                            {" "}
                            Participating in testing and iteration planning.
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={tab4Image}
                        alt=""
                        className="img-fluid modern-ba-image"
                      />
                    </div>
                  </div>
                </div>
                {/* Tab 5 starts */}
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 modern-ba-text-card">
                      <p className="fst-italic">
                        Following are the essential skills:
                        <ul>
                          <li>
                            {" "}
                            Strong communication and interpersonal skills.
                          </li>
                          <li>
                            {" "}
                            Ability to write clear and concise user stories.
                          </li>
                          <li>
                            {" "}
                            Proficiency in Agile tools like Jira or Trello.
                          </li>
                          <li>
                            {" "}
                            Understanding of Agile methodologies and principles.
                          </li>
                          <li> Analytical and problem-solving skills.</li>
                        </ul>
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={tab5Image}
                        alt=""
                        className="img-fluid modern-ba-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
FREE WEBINAR SECTION
======================================================= */}

      <section className="webinar-section section">
        <div className="container">
          <div className="webinar-box">
            <div className="row align-items-center">
              {/* LEFT */}

              <div className="col-lg-7">
                <span className="webinar-badge">🎯 FREE LIVE WEBINAR</span>

                <h2 className="webinar-title mt-4">
                  Business Analysis & Agile
                  <span> Career Webinar</span>
                </h2>

                <p className="webinar-description mt-4">
                  Discover how Business Analysts work in IT companies,
                  understand Agile workflows and learn how freshers and
                  professionals can transition into Business Analysis.
                </p>

                {/* DETAILS */}

                <div className="webinar-details">
                  <div className="webinar-detail">
                    📅 6th June 2026 (Saturday)
                  </div>

                  <div className="webinar-detail">⏰ 11:00 AM IST</div>

                  <div className="webinar-detail">💻 Online Live Session</div>

                  <div className="webinar-detail">🎓 Beginner Friendly</div>
                </div>

                {/* BUTTONS */}

                <div className="webinar-buttons mt-5">
                  <button
                    className="webinar-btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#webinarModal"
                  >
                    {" "}
                    Reserve Free Seat{" "}
                  </button>

                  <Link to="/contact" className="webinar-btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* RIGHT */}

              <div className="col-lg-5">
                <div className="webinar-card">
                  <div className="webinar-live">🔴 LIVE WEBINAR</div>

                  <h3 style={{ color: "#fff" }}>What You'll Learn</h3>

                  <ul>
                    <li>✅ What Business Analysts actually do</li>

                    <li>✅ Agile & Scrum explained practically</li>

                    <li>✅ Real BA project examples</li>

                    <li>✅ How AI helps Business Analysts</li>

                    <li>✅ Career roadmap into IT</li>

                    <li>✅ Resume & interview guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="webinarModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content webinar-modal">
            <div className="modal-body p-5">
              <h3 className="mb-4">
                {success
                  ? "🎉 You're Registered for the Webinar!"
                  : "Reserve Your Free Webinar Seat"}
              </h3>

              {success ? (
                <div className="webinar-success-box">
                  Registration Successful! Congratulations on taking the
                  first step towards your Business Analyst journey. You'll
                  receive webinar details on your email shortly.
                </div>
              ) : (
                <form onSubmit={handleWebinarSubmit}>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Full Name"
                    required
                    value={webinarForm.name}
                    onChange={(e) =>
                      setWebinarForm({
                        ...webinarForm,
                        name: e.target.value,
                      })
                    }
                  />

                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email Address"
                    required
                    value={webinarForm.email}
                    onChange={(e) =>
                      setWebinarForm({
                        ...webinarForm,
                        email: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Mobile Number"
                    required
                    value={webinarForm.mobile}
                    onChange={(e) =>
                      setWebinarForm({
                        ...webinarForm,
                        mobile: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Current Profession"
                    required
                    value={webinarForm.profession}
                    onChange={(e) =>
                      setWebinarForm({
                        ...webinarForm,
                        profession: e.target.value,
                      })
                    }
                  />

                  <button type="submit" className="webinar-submit-btn">
                    {loading ? "Submitting..." : "Reserve My Seat"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About us section starts */}
      <section id="why-us" className="section why-us">
        <div className="container">
          <div className="row gy-4">
            <div className="row align-items-center gy-5">
              {/* LEFT CONTENT */}

              <div className="col-lg-5">
                <div className="modern-why-box">
                  <span className="why-modern-badge">
                    <strong>WHY CAREERFORGE?</strong>
                  </span>

                  <h2 className="modern-why-title mt-4">
                    Learn the Way
                    <span> Real IT Teams Work</span>
                  </h2>

                  <p className="modern-why-description">
                    At CareerForge Institute, we focus on practical,
                    industry-oriented learning instead of just theory. Learn
                    Business Analysis, Agile workflows, Jira, stakeholder
                    communication and AI-powered techniques through real-world
                    project scenarios guided by working professionals.
                  </p>
                </div>
              </div>

              {/* RIGHT GRID */}

              <div className="col-lg-7">
                <div className="row gy-4">
                  {/* CARD 1 */}

                  <div className="col-md-6">
                    <div className="modern-icon-box">
                      <i className="bi bi-award-fill"></i>

                      <h4>Mentorship from Industry Professionals</h4>

                      <p>
                        Learn directly from working professionals with practical
                        IT industry experience.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2 */}

                  <div className="col-md-6">
                    <div className="modern-icon-box">
                      <i className="bi bi-lightning-charge-fill"></i>

                      <h4>AI-Powered Learning</h4>

                      <p>
                        Learn how modern Business Analysts use ChatGPT and AI
                        tools in real projects.
                      </p>
                    </div>
                  </div>

                  {/* CARD 3 */}

                  <div className="col-md-6">
                    <div className="modern-icon-box">
                      <i className="bi bi-kanban-fill"></i>

                      <h4>Real Agile Workflows</h4>

                      <p>
                        Understand Scrum ceremonies, Jira workflows and
                        stakeholder collaboration.
                      </p>
                    </div>
                  </div>

                  {/* CARD 4 */}

                  <div className="col-md-6">
                    <div className="modern-icon-box">
                      <i className="bi bi-briefcase-fill"></i>

                      <h4>Job-Ready Training</h4>

                      <p>
                        Build practical skills through real-world project
                        scenarios and mentorship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="row gy-4">
            <div className="modern-tools-heading text-center">
              <span className="tools-badge">INDUSTRY TOOLS + AI WORKFLOWS</span>

              <h2 className="modern-tools-title mt-4">
                Learn the Tools Used by
                <span> Modern Business Analysts</span>
              </h2>

              <p className="modern-tools-subtitle mt-4">
                Gain hands-on experience with Agile, collaboration,
                documentation and AI-powered tools used inside real IT
                companies.
              </p>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-nut modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Jira
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-shuffle modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Confluence
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-x-diamond modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Lucid Charts
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-camera-video modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Figma
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-command modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Visio
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-diagram-3-fill modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Draw.io
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-robot modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    ChatGPT
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-stars modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Claude AI
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="modern-tool-card interactive-card">
                <i className="bi bi-star modern-tool-icon"></i>
                <h3>
                  <Link to="/" className="stretched-link">
                    Lovable
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="courses section">
        {/* Section Title */}
        <div className="container" data-aos="fade-up">
          <div className="modern-home-courses-heading text-center">
            <span className="home-course-badge">INDUSTRY-READY PROGRAMS</span>
            <h2 className="modern-home-courses-title mt-4">
              Transform Your Career with
              <span> Practical BA Training</span>
            </h2>
            <p className="modern-home-courses-subtitle mt-4">
              Learn Business Analysis, Agile workflows, Jira, Confluence and
              AI-powered techniques through real-world project scenarios and
              mentorship.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* Course 1 — Core Business Analysis */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="modern-home-course-card interactive-card">
                <img
                  src={course1Image}
                  className="img-fluid"
                  alt="Core Business Analysis"
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="modern-home-course-category">
                      Business Analysis
                    </p>
                    <p className="price">₹8,000</p>
                  </div>

                  <h3>
                    <Link to="/course-details-ba">Core Business Analysis</Link>
                  </h3>
                  <p className="description">
                    Learn practical Business Analysis, requirement gathering,
                    stakeholder communication, Agile documentation and
                    AI-powered BA workflows used inside real IT companies.
                  </p>

                  <div className="modern-course-footer">
                    <div className="modern-course-tags">
                      <span className="modern-course-tag">
                        6 Weeks · 12 Sessions
                      </span>
                    </div>
                    <Link
                      to="/course-details-ba"
                      className="modern-home-course-btn"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 — Agile & Scrum */}
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="modern-home-course-card interactive-card">
                <img
                  src={course2Image}
                  className="img-fluid"
                  alt="Agile and Scrum for BAs"
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="modern-home-course-category">Agile & Scrum</p>
                    <p className="price">₹5,000</p>
                  </div>

                  <h3>
                    <Link to="/course-details-agile">
                      Agile &amp; Scrum for BAs
                    </Link>
                  </h3>
                  <p className="description">
                    Master Scrum ceremonies, Jira workflows, sprint planning,
                    Confluence collaboration and Agile BA practices through live
                    practical sessions.
                  </p>

                  <div className="modern-course-footer">
                    <div className="modern-course-tags">
                      <span className="modern-course-tag">
                        4 Weeks · 8 Sessions
                      </span>
                      <br></br>
                      <span className="modern-course-tag">Bonus Session</span>
                    </div>
                    <Link
                      to="/course-details-agile"
                      className="modern-home-course-btn"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
UPCOMING BATCH SECTION
======================================================= */}

      <section className="upcoming-batch-section section">
        <div className="container">
          <div className="upcoming-batch-box">
            <div className="row align-items-center">
              {/* LEFT */}

              <div className="col-lg-7">
                <span className="batch-badge">
                  🚀 NEW BATCH ENROLLMENTS OPEN
                </span>

                <h2 className="batch-title mt-4">
                  Upcoming Business Analyst Batch
                  <span> Starts on 20th June</span>
                </h2>

                <p className="batch-description mt-4">
                  Join our practical Business Analysis training program designed
                  for freshers, career switchers and IT professionals. Learn
                  Agile, Jira, stakeholder communication, AI-powered workflows
                  and real project scenarios with mentorship from working
                  professionals.
                </p>

                {/* HIGHLIGHTS */}

                <div className="batch-highlights">
                  <div className="batch-highlight">
                    ✅ Live Interactive Sessions
                  </div>

                  <div className="batch-highlight">✅ Weekend Batches</div>

                  <div className="batch-highlight">
                    ✅ Real Project Training
                  </div>

                  <div className="batch-highlight">
                    ✅ Resume + Interview Preparation
                  </div>

                  <div className="batch-highlight">
                    ✅ AI for Business Analysts
                  </div>

                  <div className="batch-highlight">✅ Industry Mentorship</div>
                </div>

                {/* CTA */}

                <div className="batch-buttons mt-5">
                  <a
                    href="https://wa.me/919175914828"
                    target="_blank"
                    rel="noreferrer"
                    className="batch-btn-primary"
                  >
                    Enroll Now
                  </a>

                  <Link to="/courses" className="batch-btn-secondary">
                    View Curriculum
                  </Link>
                </div>
              </div>

              {/* RIGHT */}

              <div className="col-lg-5">
                <div className="batch-card">
                  <div className="batch-live">🔥 LIMITED SEATS</div>

                  <h3>Batch Details</h3>

                  <div className="batch-info-list">
                    <div className="batch-info-item">
                      <span>📅 Start Date</span>
                      <strong>20th June 2026</strong>
                    </div>

                    <div className="batch-info-item">
                      <span>🕒 Schedule</span>
                      <strong>Weekend Live Sessions</strong>
                    </div>

                    <div className="batch-info-item">
                      <span>💻 Mode</span>
                      <strong>Online Training</strong>
                    </div>

                    <div className="batch-info-item">
                      <span>🎯 Ideal For</span>
                      <strong>Freshers & Working Professionals</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================================================
MOBILE STICKY CTA
======================================================= */}

      <div className="mobile-sticky-cta d-lg-none">
        {/* WHATSAPP */}

        <a
          href="https://wa.me/919175914828"
          target="_blank"
          rel="noreferrer"
          className="mobile-sticky-btn whatsapp-btn"
        >
          <i className="bi bi-whatsapp"></i>

          <span>WhatsApp</span>
        </a>

        {/* WEBINAR */}

        <button
          className="mobile-sticky-btn webinar-btn"
          data-bs-toggle="modal"
          data-bs-target="#webinarModal"
        >
          <i className="bi bi-camera-video-fill"></i>

          <span>Free Webinar</span>
        </button>
      </div>
    </>
  );
}
