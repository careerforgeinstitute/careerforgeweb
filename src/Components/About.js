import React from 'react'
import myImage from '../about-2.jpg'
 

export default function About() {
  return (
    <>
    {/* =======================================================
MODERN ABOUT HERO
======================================================= */}

<section className="modern-about-hero">

  <div className="about-hero-overlay"></div>

  <div className="container position-relative z-3">

    <div className="row justify-content-center text-center">

      <div className="col-lg-9">

        <span className="about-badge">
          ABOUT CAREERFORGE
        </span>

        <h1 className="about-hero-title mt-4">
          Transforming Learners Into
          <span> Industry-Ready Business Analysts</span>
        </h1>

        <p className="about-hero-description mt-4">
          CareerForge Institute helps students and professionals
          build practical Business Analysis, Agile and AI-powered
          skills through real-world project scenarios,
          mentorship and hands-on learning.
        </p>

        <div className="about-hero-stats mt-5">

          <div className="about-stat-card">
            <h3>Real Projects</h3>
            <p>Practical IT scenarios</p>
          </div>

          <div className="about-stat-card">
            <h3>AI-Powered Learning</h3>
            <p>Modern BA workflows</p>
          </div>

          <div className="about-stat-card">
            <h3>Career Focused</h3>
            <p>Resume + Interview prep</p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="modern-about-content section">

  <div className="container">

    <div className="row align-items-center gy-5">

      {/* IMAGE */}

      <div className="col-lg-6" data-aos="fade-right">

        <div className="modern-about-image-wrapper">

          <img
            src={myImage}
            className="img-fluid modern-about-image"
            alt=""
          />

          <div className="floating-about-card">

            <i className="bi bi-lightning-charge-fill"></i>

            <span>
              Learn Real Industry Workflows
            </span>

          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="col-lg-6" data-aos="fade-left">

        <span className="content-badge">
          OUR MISSION
        </span>

        <h2 className="modern-about-title mt-4">
          Learn the Skills
          <span> Companies Actually Expect</span>
        </h2>

        <p className="modern-about-description mt-4">

          At CareerForge Institute, we focus on practical,
          industry-oriented Business Analysis training
          rather than just theoretical concepts.

          We help learners understand how Business Analysts
          actually work inside Agile IT teams using Jira,
          stakeholder collaboration, AI tools and
          real project scenarios.

        </p>

        {/* FEATURE LIST */}

        <div className="modern-about-features mt-5">

          <div className="modern-about-feature">
            <i className="bi bi-check-circle-fill"></i>
            <span>Real-world BA workflows & Agile practices</span>
          </div>

          <div className="modern-about-feature">
            <i className="bi bi-check-circle-fill"></i>
            <span>Hands-on Jira, Confluence & AI tools</span>
          </div>

          <div className="modern-about-feature">
            <i className="bi bi-check-circle-fill"></i>
            <span>Banking & Healthcare domain examples</span>
          </div>

          <div className="modern-about-feature">
            <i className="bi bi-check-circle-fill"></i>
            <span>Resume building & mock interviews</span>
          </div>

          <div className="modern-about-feature">
            <i className="bi bi-check-circle-fill"></i>
            <span>Mentorship from industry professionals</span>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* =======================================================
MISSION VISION CARDS
======================================================= */}

<section className="mission-vision-section section">

  <div className="container">

    <div className="row gy-4">

      {/* MISSION */}

      <div className="col-lg-6" data-aos="zoom-in">

        <div className="mission-card">

          <div className="mission-icon">
            <i className="bi bi-bullseye"></i>
          </div>

          <h3>Our Mission</h3>

          <p>
            To help aspiring professionals become
            confident, job-ready Business Analysts
            through practical training, Agile workflows,
            AI-powered learning and real industry exposure.
          </p>

        </div>

      </div>

      {/* VISION */}

      <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">

        <div className="mission-card">

          <div className="mission-icon">
            <i className="bi bi-stars"></i>
          </div>

          <h3>Our Vision</h3>

          <p>
            To build a modern learning platform that bridges
            the gap between theoretical education and
            real IT industry expectations using innovation,
            mentorship and AI-driven learning.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
</>
  )
}