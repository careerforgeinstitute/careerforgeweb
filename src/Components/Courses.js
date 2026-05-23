import React from 'react'
import course1Image from '../Img/course-1.jpg'
import course2Image from '../Img/course-2.jpg'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
     <>
   {/* Page Title */}
   <div className="page-title" data-aos="fade">
     <nav className="breadcrumbs">
       <div className="container">
         <ol>
           <li><a href="index.html">Home</a></li>
           <li className="current">Courses</li>
         </ol>
       </div>
     </nav>
     <div className="heading">
       <div className="container">
         <div className="row d-flex justify-content-center text-center">
           <div className="col-lg-8">
             <h1>Courses</h1>
           </div>
         </div>
       </div>
     </div>
   </div>

   {/* Courses Section */}
   <section id="courses" className="courses section">
     <div className="container">
       <div className="row">

         {/* Course 1 — Core Business Analysis */}
         <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
           <div className="course-item">
             <img src={course1Image} className="img-fluid" alt="Core Business Analysis" />
             <div className="course-content">

               <div className="d-flex justify-content-between align-items-center mb-3">
                 <p className="category">Business Analysis</p>
                 <p className="price">₹8,000</p>
               </div>

               <h3><Link to="/course-details-ba">Core Business Analysis</Link></h3>
               <p className="description">
                 A comprehensive 6-week program covering stakeholder management, requirements
                 documentation, process modelling, Visio, Lucidchart, Gen AI tools, and
                 career readiness — built for anyone transitioning into a BA role.
               </p>

               <div className="d-flex justify-content-between align-items-center mt-3">
                 <span className="badge bg-success">6 Weeks · 12 Sessions</span>
                 <Link to="/course-details-ba" className="btn btn-sm btn-outline-success">
                   View Details →
                 </Link>
               </div>

             </div>
           </div>
         </div>

         {/* Course 2 — Agile & Scrum */}
         <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
           <div className="course-item">
             <img src={course2Image} className="img-fluid" alt="Agile and Scrum for BAs" />
             <div className="course-content">

               <div className="d-flex justify-content-between align-items-center mb-3">
                 <p className="category">Agile & Scrum</p>
                 <p className="price">₹5,000</p>
               </div>

               <h3><Link to="/course-details-agile">Agile &amp; Scrum for BAs</Link></h3>
               <p className="description">
                 A focused 4-week program covering Agile fundamentals, Scrum framework,
                 Kanban, JIRA, Confluence, backlog management, sprint simulations and
                 Gen AI tools for Agile BA work.
               </p>

               <div className="d-flex justify-content-between align-items-center mt-3">
                 <span className="badge bg-primary">4 Weeks · 8 Sessions</span>
                 <span className="badge bg-primary">1 Bonus Session</span>
                 
                 <Link to="/course-details-agile" className="btn btn-sm btn-outline-primary">
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
