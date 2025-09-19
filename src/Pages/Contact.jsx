import React, { useState } from "react";
import useDynamicTitle from "../Hooks/DynamicTitle";
import "../Css/Contact.css";

const Contact = () => {
    useDynamicTitle("LifeLink - Contact")
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="contact-page">
      {/* Contact Form */}
      <div className="contact-form-card">
        <h2 className="contact-title">📩 Get in Touch</h2>
        <p className="contact-subtitle">We’d love to hear from you!</p>

        <form className="form-col" onSubmit={submit}>
          <label>
            Name
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+92 3xx xxx xxxx"
            />
          </label>

          <label>
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              required
            />
          </label>

          <div className="actions">
            <button type="submit" className="btn primary">
              Send
            </button>
            <button type="button" className="btn secondary" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Extra Contact Sections */}
      <div className="contact-info-sections">
        <div className="contact-card">
          <h3>📍 Our Address</h3>
          <p>123 Main Street, Lahore, Pakistan</p>
        </div>

        <div className="contact-card">
          <h3>📞 Call Us</h3>
          <p>+92 300 1234567</p>
        </div>

        <div className="contact-card">
          <h3>✉️ Email Us</h3>
                    <a href="mailto:zimaltajwer@gmail.com" className="e">ZIMALTAJWER@GMAIL.COM</a>
        </div>

        <div className="contact-card">
          <h3>🌐 Follow Us</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27220.049660077453!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483a3b9ad0b%3A0xf3d7b72b5e9dc7f3!2sLahore!5e0!3m2!1sen!2s!4v1664123456789!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
