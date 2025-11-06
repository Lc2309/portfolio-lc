import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-icons">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p className="contact-text">rasamoelinaloic@gmail.com</p>
        </div>

        <div className="contact-item">
          <a
            href="https://www.facebook.com/profile.php?id=61581895476039"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="contact-icon" />
          </a>
          <p className="contact-text">Loïc Rasamoelina</p>
        </div>

        <div className="contact-item">
          <a
            href="https://www.instagram.com/lc.rasamoelina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="contact-icon" />
          </a>
          <p className="contact-text">lc.rasamoelina</p>
        </div>
      </div>

      <div className="contact-phone">
        <FaPhoneAlt className="phone-icon" />
        <p className="phone-number">+261 32 99 948 48 / +261 34 51 808 48</p>
      </div>
    </section>
  );
};

export default Contact;
