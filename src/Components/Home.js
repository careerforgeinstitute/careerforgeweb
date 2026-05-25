import React from 'react'
import heroImage from '../Img/content.jpeg'
import tab1Image from '../Img/Tabs/tab-1.png'
import tab2Image from '../Img/Tabs/tab-2.png' 
import tab3Image from '../Img/Tabs/tab-3.png' 
import tab4Image from '../Img/Tabs/tab-4.png' 
import tab5Image from '../Img/Tabs/tab-5.png'
import course1Image from '../Img/course-1.jpg'
import course2Image from '../Img/course-2.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
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
            including Agile, Jira, stakeholder communication,
            real project scenarios and AI-powered workflows.
          </p>

          {/* FEATURES */}
          <div className="hero-features mt-4">

            <div className="feature-pill">
              ✅ Live Training
            </div>

            <div className="feature-pill">
              ✅ Real Project Scenarios
            </div>

            <div className="feature-pill">
              ✅ Agile + Jira + Confluence
            </div>

            <div className="feature-pill">
              ✅ Resume Preparation
            </div>

            <div className="feature-pill">
              ✅ AI for Business Analysts
            </div>

            <div className="feature-pill">
              ✅ Industry Mentorship
            </div>

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

          <div className="hero-floating-card card-one">
            <i className="bi bi-kanban-fill"></i>
            <span>Agile & Scrum</span>
          </div>

          <div className="hero-floating-card card-two">
            <i className="bi bi-robot"></i>
            <span>AI for BAs</span>
          </div>

          <div className="hero-floating-card card-three">
            <i className="bi bi-bar-chart-fill"></i>
            <span>Real Projects</span>
          </div>

          <div className="hero-main-glass">
            <h3>CareerForge Institute</h3>
            <p>Transforming students into industry-ready Business Analysts.</p>
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

      <span className="journey-badge">
        YOUR LEARNING ROADMAP
      </span>

      <h2 className="journey-title mt-3">
        Your Journey to Becoming a
        <span> Business Analyst</span>
      </h2>

      <p className="journey-subtitle">
        We help you transform from beginner to industry-ready
        Business Analyst through practical training and mentorship.
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
            Learn sprint planning, user stories, backlog grooming,
            Agile ceremonies and Scrum workflows.
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
            Work with Jira, Confluence, Visio, Figma,
            Lucidchart and real BA tools.
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
            Learn ChatGPT, Claude AI and AI-powered techniques
            for documentation and analysis.
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
            Build professional resumes, practice mock interviews
            and gain confidence for real opportunities.
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
            Gain practical knowledge and confidence to transition
            into Business Analyst roles successfully.
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

      <span className="industry-badge">
        REAL INDUSTRY EXPERIENCE
      </span>

      <h2 className="industry-title mt-3">
        What Makes <span>CareerForge Different?</span>
      </h2>

      <p className="industry-subtitle">
        Most institutes teach concepts.
        At CareerForge, you learn how Business Analysts
        actually work inside real IT projects using Agile,
        stakeholder collaboration, Jira workflows and AI tools.
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
            Learn how Business Analysts interact with stakeholders,
            ask questions, conduct discussions and gather requirements
            in real projects.
          </p>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">

        <div className="industry-card">

          <div className="industry-icon">
            <i className="bi bi-kanban-fill"></i>
          </div>

          <h3>Live Agile Ceremonies</h3>

          <p>
            Experience sprint planning, backlog grooming,
            standups and retrospectives through practical
            Agile simulations.
          </p>

        </div>

      </div>

      {/* CARD 3 */}
      <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">

        <div className="industry-card">

          <div className="industry-icon">
            <i className="bi bi-journal-text"></i>
          </div>

          <h3>Live User Story Writing</h3>

          <p>
            Learn how to write professional user stories,
            acceptance criteria and Agile documentation
            used in real teams.
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
            Learn how modern Business Analysts use ChatGPT,
            Claude AI and Gen AI tools to improve productivity,
            documentation and analysis.
          </p>

        </div>

      </div>

      {/* CARD 5 */}
      <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">

        <div className="industry-card">

          <div className="industry-icon">
            <i className="bi bi-chat-square-dots-fill"></i>
          </div>

          <h3>Stakeholder Communication</h3>

          <p>
            Understand how to communicate professionally
            with clients, developers, testers and business users
            in IT projects.
          </p>

        </div>

      </div>

      {/* CARD 6 */}
      <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">

        <div className="industry-card">

          <div className="industry-icon">
            <i className="bi bi-bank2"></i>
          </div>

          <h3>Real Banking & Healthcare Examples</h3>

          <p>
            Work on practical use cases and examples inspired by
            real Banking and Healthcare domain projects.
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

          <span className="ai-badge">
            AI-POWERED LEARNING
          </span>

          <h2 className="ai-title mt-4">
            Learn Modern
            <span> AI-Powered Business Analysis</span>
          </h2>

          <p className="ai-description mt-4">
            Modern Business Analysts are increasingly using AI tools
            to improve productivity, requirement analysis,
            documentation and collaboration.

            At CareerForge, we teach you how to use AI the way
            real professionals use it in IT companies.
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

            <div className="ai-chip">
              🤖 Gen AI
            </div>

            <h3>Future-Ready BA Skills</h3>

            <p>
              Learn how modern Business Analysts combine
              AI tools with Agile practices to work smarter,
              faster and more efficiently.
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
        <h3><strong>About Business Analyst</strong></h3>
        <br/>
        <br/>
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Who is a business analyst?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Why become a business analyst?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">What are the prerequisites?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">What are the main responsibilities of a Business Analyst?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-5">What skills are essential for a Business Analyst?</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {/* Tab 1 starts */}
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <p className="fst-italic">
                      In a software company using Agile methodology, a business analyst acts as the bridge between stakeholders and the development team. 
                      They gather and document requirements, create user stories, manage the product backlog, facilitate communication, and assist in testing 
                      and iteration planning. Their main role is to ensure the final product meets business needs and delivers value.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={tab1Image} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              {/* Tab 2 starts */}
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <p className="fst-italic">
                      According to the U.S. Bureau of Labor Statistics (BLS), the employment of management analysts, including business analysts, is projected to grow by 
                      14 percent from 2018 to 2028, which is faster than the average for other professions. Business analysts play a crucial role by using data to identify 
                      business issues, opportunities, and solutions, and reporting their findings to stakeholders. They are instrumental in driving innovation, improving 
                      outdated processes, and leading technology adoption across various business sectors. Career paths for business analysts can vary depending on their 
                      experience and goals.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={tab2Image} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
              {/* Tab 3 starts */}
              <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <p className="fst-italic">
                        There are no specific prerequisites for this course. However, having a basic understanding of business operations and 
                        familiarity with data analysis tools can be advantageous.</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={tab3Image} alt="" className="img-fluid"/>
                    </div>
                  </div>
              </div>
              {/* Tab 4 starts */}
              <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <p className="fst-italic">Following are the main responsibilities:
                        <ul>
                          <li> Gathering and documenting requirements from stakeholders.</li>
                          <li> Creating and prioritizing user stories.</li>
                          <li> Managing the product backlog.</li>
                          <li> Facilitating communication between stakeholders and the development team.</li>
                          <li> Participating in testing and iteration planning.</li>
                        </ul>
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={tab4Image} alt="" className="img-fluid"/>
                    </div>
                  </div>
              </div>
              {/* Tab 5 starts */}
              <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <p className="fst-italic">Following are the essential skills:
                        <ul>
                          <li> Strong communication and interpersonal skills.</li>
                          <li> Ability to write clear and concise user stories.</li>
                          <li> Proficiency in Agile tools like Jira or Trello.</li>
                          <li> Understanding of Agile methodologies and principles.</li>
                         <li> Analytical and problem-solving skills.</li>
                        </ul>
                     </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={tab5Image} alt="" className="img-fluid"/>
                    </div>
                  </div>
              </div>

            </div>
          </div>
          </div>
        </div>
    </section>
    {/* About us section starts */}
    <section id="why-us" className="section why-us">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="why-box">
              <h3>Why Choose Us?</h3>
              <br/>
              <br/>
              <p>
                Learn the exact skills companies expect from modern Business Analysts through practical training, real-world project scenarios and hands-on mentorship.
                Unlike traditional institutes that focus mainly on theory, CareerForge prepares you for how Business Analysts actually work inside IT companies using Agile, Jira, stakeholder communication and AI tools.
              </p>
              <br/>
              <br/>
              <br/>
              
              {/* <div className="text-center">
                <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
              </div> */}
            </div>
          </div>

          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">

              <div className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-award-fill"></i>
                  <h4>Learn from Industry Experts</h4>
                  <p>Gain insights from seasoned professionals with real-world experience in business analysis, ensuring you learn practical and up-to-date knowledge.</p>
                </div>
              </div>

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-gem"></i>
                  <h4>Flexible Weekend Training</h4>
                  <p>Our online courses are conveniently scheduled over weekends, allowing you to balance your education with your professional and personal commitments.</p>
                </div>
              </div>

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-clipboard-data"></i>
                  <h4>Hands-On Practical Experience</h4>
                  <p>Engage in real-world projects, case studies to apply what you learn and develop job-ready skills. Practical experience ensures that you can hit the ground running in your role.</p>
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

          <h3><strong>Tools we cover</strong></h3>

          {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="features-item">
              <i className="bi bi-briefcase" style={{color: '#ffbb2c'}}></i>
              <h3><Link to="/" className="stretched-link">Business Analysis</Link></h3>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="features-item">
              <i className="bi bi-infinity" style={{color: '#5578ff'}}></i>
              <h3><Link to="/" className="stretched-link">Agile</Link></h3>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="features-item">
              <i className="bi bi-mortarboard" style={{color: '#e80368'}}></i>
              <h3><Link to="/" className="stretched-link">Scrum</Link></h3>
            </div>
          </div> */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="features-item">
              <i className="bi bi-nut" style={{color: '#e361ff'}}></i>
              <h3><Link to="/" className="stretched-link">Jira</Link></h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="features-item">
              <i className="bi bi-shuffle" style={{color: '#47aeff'}}></i>
              <h3><Link to="/" className="stretched-link">Confluence</Link></h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="features-item">
              <i className="bi bi-star" style={{color: '#ffa76e'}}></i>
              <h3><Link to="/" className="stretched-link">Lovable</Link></h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div className="features-item">
              <i className="bi bi-x-diamond" style={{color: '#11dbcf'}}></i>
              <h3><Link to="/" className="stretched-link">Lucid Charts</Link></h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="800">
            <div className="features-item">
              <i className="bi bi-camera-video" style={{color: '#4233ff'}}></i>
              <h3><Link to="/" className="stretched-link">Figma</Link></h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="900">
            <div className="features-item">
              <i className="bi bi-command" style={{color: '#b2904f'}}></i>
              <h3><Link to="/" className="stretched-link">Visio</Link></h3>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section id="courses" className="courses section">

      {/* Section Title */}
      <div className="container" data-aos="fade-up">
        <h3><strong>Courses</strong></h3>
      </div>

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
                 Learn the real-world Business Analyst skills used in IT companies — including requirement gathering, stakeholder communication,
                Agile documentation, process modelling and AI-assisted workflows.
                Designed for freshers, career switchers and professionals
                looking to become job-ready Business Analysts.
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
                 Learn Agile the way real software teams work inside IT companies.
                  Gain hands-on experience with Scrum ceremonies,
                  Jira workflows, sprint planning, backlog management
                  and practical Agile BA collaboration techniques.
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
