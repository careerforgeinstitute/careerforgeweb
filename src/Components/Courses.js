import React from 'react'
import course1Image from '../Img/course-1.jpg'
import course2Image from '../Img/course-2.jpg'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
     <>
   {/* Page Title */}
   {/* =======================================================
MODERN COURSES HERO
======================================================= */}

<section className="modern-courses-hero">

  <div className="courses-hero-overlay"></div>

  <div className="container position-relative z-3">

    <div className="row justify-content-center text-center">

      <div className="col-lg-9">

        <span className="courses-badge">
          INDUSTRY-READY TRAINING PROGRAMS
        </span>

        <h1 className="courses-title mt-4">
          Learn the Skills Companies Expect from
          <span> Modern Business Analysts</span>
        </h1>

        <p className="courses-description mt-4">
          Practical Business Analysis, Agile and AI-powered
          training programs designed for freshers,
          career switchers and working professionals.
        </p>

      </div>

    </div>

  </div>

</section>

   {/* Courses Section */}
   <section id="courses" className="courses section">
     <div className="container">
       <div className="row">

         {/* Course 1 — Core Business Analysis */}
         <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
           <div className="modern-course-card">
             <img src={course1Image} className="img-fluid modern-course-image" alt="Core Business Analysis" />
             <div className="course-content">

               <div className="d-flex justify-content-between align-items-center mb-3">
                 <p className="category">Business Analysis</p>
                 <p className="price">₹8,000</p>
               </div>

               <h3><Link to="/course-details-ba">Core Business Analysis</Link></h3>
               <p className="description">
                  Learn the real-world Business Analyst skills
                  used inside IT companies — including requirement gathering,
                  stakeholder communication, process modelling,
                  Agile documentation, Visio, Lucidchart and AI-powered workflows.

                  Designed to help freshers and professionals become job-ready Business Analysts.
                </p>

               <div className="course-footer mt-4">

  <div className="course-badges">

    <span className="modern-course-badge">
      6 Weeks · 12 Sessions
    </span>

  </div>

  <Link
    to="/course-details-ba"
    className="modern-course-btn"
  >
    View Details →
  </Link>

</div>

             </div>
           </div>
         </div>

         {/* Course 2 — Agile & Scrum */}
         <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
           <div className="modern-course-card">
             <img src={course2Image} className="img-fluid modern-course-image" alt="Agile and Scrum for BAs" />
             <div className="course-content">

               <div className="d-flex justify-content-between align-items-center mb-3">
                 <p className="category">Agile & Scrum</p>
                 <p className="price">₹5,000</p>
               </div>

               <h3><Link to="/course-details-agile">Agile &amp; Scrum for BAs</Link></h3>
               <p className="description">
                  Learn Agile and Scrum the way real software teams work in IT companies.

                  Gain practical experience with Scrum ceremonies,
                  sprint planning, backlog management, Jira workflows,
                  Confluence collaboration and AI tools for Agile BA work.
               </p>

               <div className="course-footer mt-4">

  <div className="course-badges">

    <span className="modern-course-badge">
      4 Weeks · 8 Sessions
    </span>

    <span className="modern-course-badge">
      1 Bonus Session
    </span>

  </div>

  <Link
    to="/course-details-agile"
    className="modern-course-btn"
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
 </>
  )
}
