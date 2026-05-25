import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const phoneNumber = "919175914828";

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form id="contactForm2" onSubmit={handleSubmit}>
      <div className="mb-1">
        <label htmlFor="name" className="form-label">
          <strong>Name </strong>
          <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-1">
        <label htmlFor="email" className="form-label">
          <strong>Email address </strong>
          <span className="required-asterisk">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-1">
        <label htmlFor="phone" className="form-label">
          <strong>Phone number </strong>
          <span className="required-asterisk">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          id="phone"
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div className="mb-1">
        <label htmlFor="message" className="form-label">
          <strong>Message </strong>
        </label>
        <textarea
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          rows="4"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary float-end">
        Send
      </button>
    </form>
  );
}
