import React, { useState } from "react";

export default function DemoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const phoneNumber = "919175914828";

  const handleSubmit = (e) => {
    e.preventDefault();
    // const whatsappMessage ='Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}';
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMobile: ${phone}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");

    // Clear form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div
      className="modal fade modern-demo-modal"
      id="exampleModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content modern-modal-content">
          {/* LEFT SIDE */}

          <div className="row g-0">
            <div className="col-lg-5 d-none d-lg-flex">
              <div className="modern-modal-left">
                <div className="modal-glow"></div>

                <span className="modal-badge">🚀 Career Transformation</span>

                <h2>
                  Start Your
                  <span> Business Analyst Journey</span>
                </h2>

                <p>
                  Learn real-world Business Analysis, Agile, Jira and AI-powered
                  workflows from industry professionals.
                </p>

                <div className="modal-points">
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Live Interactive Sessions
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Real Industry Scenarios
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Resume & Interview Preparation
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    AI for Business Analysts
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="col-lg-7">
              <div className="modern-modal-right">
                <div className="modal-header border-0 pb-0">
                  <div>
                    <h3 className="modern-modal-title">
                      Book Free Career Guidance
                    </h3>

                    <p className="modern-modal-subtitle">
                      We’ll help you understand how to transition into Business
                      Analysis.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body pt-2">
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="modern-input-group mb-4">
                      <label>Name</label>

                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control modern-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="modern-input-group mb-4">
                      <label>Email Address</label>

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control modern-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="modern-input-group mb-4">
                      <label>Phone Number</label>

                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control modern-input"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="modern-input-group mb-4">
                      <label>Message</label>

                      <textarea
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control modern-input"
                        placeholder="Tell us about your career goals"
                      ></textarea>
                    </div>

                    <button type="submit" className="modern-submit-btn">
                      <i className="bi bi-lightning-charge-fill"></i>
                      Book Free Guidance
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
