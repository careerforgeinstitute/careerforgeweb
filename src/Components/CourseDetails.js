import React from 'react'
import contentImage from '../Img/content.jpeg'
import coursedetailsImage from '../Img/course-details.jpg'
import { Link } from 'react-router-dom'

export default function CourseDetails() {
  return (
    <>
    <div className="page-title" data-aos="fade">
    <nav className="breadcrumbs">
      <div className="container">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li className="current">Course Details</li>
        </ol>
      </div>
    </nav>
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Course Details</h1>
            <p className="mb-0"></p>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Courses Course Details Section */}
    <section id="courses-course-details" className="courses-course-details section">

      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-8">
            <img src={coursedetailsImage} className="img-fluid" alt=""/>
            <br/>
            <br/>
            <h2>Agile Business Analyst</h2>
            <h3>Key Course Features</h3>
            <ul>
              <li><strong>Instructor-Led Online Training:</strong> Enjoy convenient weekend classes.</li>
              <li><strong>Comprehensive Study Materials:</strong> Access both digital and printed manuals and study materials.</li>
              <li><strong>Expert Trainers:</strong> Learn from highly experienced professionals with over 7 years of industry experience, using real-life examples.</li>
              <li><strong>Resume Building:</strong> Get expert guidance and tips to refine and enhance your resume for Business Analyst roles.</li>
              <li><strong>Mock Interviews:</strong> Prepare for Business Analyst interviews with mock sessions conducted by industry experts.</li>
              <li><strong>Hands-On Projects:</strong> Work on practical projects aligned with industry standards to master Business Analysis concepts, with detailed reviews from experienced faculty.</li>
              <li><strong>Placement Assistance:</strong> Receive support to help you secure a job after course completion.</li>
              <li><strong>Interview Preparation:</strong> Obtain a booklet of Business Analyst interview questions.</li>
              <li><strong>Consistent Trainer Support:</strong> Benefit from pre and post-training support from the same trainer, ensuring personalized guidance throughout the course.</li>
              <li><strong>Affordable Fees:</strong> Enjoy high-quality training at one of the lowest fees in the region.</li>
              <li><strong>Tools knowledge:</strong> Knowledge on all the important tools provided with hand-on experience.</li>
              <li><strong>Experiential Learning:</strong> Engage in hands-on learning through various simulated games and activities, comprising nearly 50% of the training.</li>  
            </ul>
          </div>
          
          <div className="col-lg-4">

            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Learning from industry professionals</h5>
              {/* <p><a href="#">Walter White</a></p> */}
            </div>

            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Online training over weekends</h5>
              {/* <p>$165</p> */}
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Practical experience</h5>
              {/* <p>$165</p> */}
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Career development</h5>
              {/* <p>$165</p> */}
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Affordable fees</h5>
              {/* <p>$165</p> */}
            </div>
            <div className="container mt-5">
                {/* Replace 'image.jpg' with your image URL and 'file.pdf' with your file URL */}
                <h4>Course Content</h4>
                <a href="../assets/Business Analysis outline.docx" download>
                  {/* <img src="assets/img/content.jpeg" alt="Download Image" className="img-fluid" style={{max-width: '100px'}}/> */}
                  <img src={contentImage} alt="Download" className="img-fluid" style={{width: '100px'}}/>
                </a>
                <p className="mt-3">Click the image to download the file</p>
            </div>
        
            <div className="container mt-5">
              <h2>Have any queries? Request a call back.</h2>
              <form>
                  <div className="mb-3">
                      <label htmlFor="name" className="form-label"><strong>Name:</strong></label>
                      <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="email" className="form-label"><strong>Email address:</strong></label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="phone" className="form-label"><strong>Phone number:</strong></label>
                      <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label"><strong>Message:</strong></label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
           </div>

            {/* <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Online Training</h5>
              <p>30</p>
            </div>

            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Schedule</h5>
              <p>5.00 pm - 7.00 pm</p>
            </div> */}


          </div>
        </div>

      </div>

    </section>
    </>
  )
}

    
