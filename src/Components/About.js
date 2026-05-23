import React from 'react'
import myImage from '../about-2.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    <div className="page-title" data-aos="fade">
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">About Us<br/></li>
          </ol>
        </div>
      </nav>
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>About Us<br/></h1>
              <p className="mb-0">Welcome to CareerForge Institute, where we are dedicated to empowering individuals with the skills and knowledge required to excel in business analysis and agile methodologies. Our academy is built on a foundation of innovation, excellence, and a commitment to providing top-tier education and training.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<section id="about-us" className="section about-us">

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
      <img src={myImage} className="img-fluid" alt=""/>
    </div>

    <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
      {/* <h3>Voluptatem dignissimos provident quasi corporis</h3>
      <p className="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <ul>
        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
        <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
      </ul> */}
      <h5><strong>Our Mission</strong></h5>
      <p>
        At CareerForge Institute, our mission is to cultivate the next generation of business leaders and analysts. We strive to provide a transformative learning experience that equips our students with practical skills and theoretical knowledge, ensuring they are prepared to meet the challenges of today’s dynamic business environment.
      </p>

      <h5><strong>Our vision</strong></h5>
      <p>Our vision is to be the premier destination for individuals seeking to enhance their careers in business analysis and agile methodologies. We aim to foster a community of continuous learners who are driven by curiosity, innovation, and a desire to make a meaningful impact in their organizations and industries.
      </p>

      <h5><strong>Our Team</strong></h5>
      <p>Our team comprises industry experts, seasoned educators, and experienced practitioners who bring real-world insights into the class. Their diverse backgrounds and extensive experience ensure that our curriculum is both relevant and comprehensive.
      </p>

      <h5><strong>Why Choose Us?</strong></h5>
      <ul>
          <li><i className="bi bi-check-circle"></i> <span><strong>Instructors:</strong> Learn from professionals with years of industry experience.</span></li>
          <li><i className="bi bi-check-circle"></i> <span><strong>Comprehensive Curriculum:</strong> Our courses are designed to cover all aspects of business analysis and agile methodologies.</span></li>
          <li><i className="bi bi-check-circle"></i> <span><strong>Flexible Learning:</strong> We offer both online and in-person classes to fit your schedule.</span></li>
          <li><i className="bi bi-check-circle"></i> <span><strong>Career Support:</strong> Receive guidance and resources to help you advance in your career.</span></li>
      </ul>
      <p>  
        Join us at CareerForge Institute and take the next step towards a successful future in business analysis and agile.
      </p>  

    </div>

  </div>

</div>

</section>
</>
  )
}