import React, { useState } from "react";
import "./ContactUs.css"; // Import CSS file for styling

const ContactUs = () => {
  // State variables to store form data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic (e.g., sending data to backend)
    console.log({ fullName, email, message });
    // Clear form fields after submission
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: +1234567890</p>
        <p>Email: example@example.com</p>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="headingpadding" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="headingpadding" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="headingpadding" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
