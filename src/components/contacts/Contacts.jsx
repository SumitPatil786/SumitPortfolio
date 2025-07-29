import React from 'react';
import './contacts.css';

const Contacts = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in Touch</h2>
      <div className="contact_container container grid">
        <div className="contact_info">
          <h3 className="contact_subtitle">Email Me</h3>
          <p className="contact_text">sumitpatil0103@gmail.com</p>

          <h3 className="contact_subtitle">Call Me</h3>
          <p className="contact_text">+91 70286 40511</p>

          <h3 className="contact_subtitle">Location</h3>
          <p className="contact_text">Ballarpur, Maharashtra, India</p>
        </div>

        <form className="contact_form">
          <div className="contact_inputs">
            <input type="text" placeholder="Your Name" className="contact_input" required />
            <input type="email" placeholder="Your Email" className="contact_input" required />
          </div>
          <input type="text" placeholder="Subject" className="contact_input" />
          <textarea
            className="contact_input"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
