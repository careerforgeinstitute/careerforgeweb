import React from 'react'
import heroImage from '../Designer.jpeg'
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
      <img src={heroImage} alt="" data-aos="fade-in"/>
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">We train for better future!</h2>
        {/* <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p> */}
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
        <Link to="/courses" className="btn-get-started">Get Started</Link>
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
                Invest in your future with our online business analysis courses. Learn from industry experts, enjoy flexible weekend classes, and 
                gain hands-on experience. Our career development support ensures you have the skills and resources to excel in your career. 
                Join us to achieve your professional goals with confidence.
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
