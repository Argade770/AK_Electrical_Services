import { useState } from "react";
import { addContact } from "../db";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  workType: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess("");
    setError("");

    try {
      await addContact(form);
      setSuccess("Your message has been saved successfully!");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setError("Could not save your message. Please try again.");
    }
  }

  return (
    <main className="contact-page">
      <div className="page-heading">
        <p className="eyebrow">— GET IN TOUCH</p>
        <h1>Contact <span>Us</span></h1>
        <p>
          Have questions about our electrical products or services?
          We're here to help.
        </p>
      </div>

      <section className="contact-grid">

        {/* Contact Details */}
        <div className="panel details-panel">
          <h2>Our Contact <span>Details</span></h2>
          <p className="card-description">
            Reach out to us through any of the following channels.
          </p>

          <div className="detail-item">
            <span className="detail-icon">☎</span>
            <div>
              <h3>Phone Number</h3>
              <p>+91 7775940775</p>
              <p>+91 8575482432</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">✉</span>
            <div>
              <h3>Email Address</h3>
              <p>argadekiran@gmail.com</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">⌖</span>
            <div>
              <h3>Our Location</h3>
              <p>Soundala, Ahilyanagar</p>
              <p>Maharashtra, India</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">◷</span>
            <div>
              <h3>Working Hours</h3>
              <p>Monday – Saturday</p>
              <p>9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="panel form-panel">
          <h2>Send Us a <span>Message</span></h2>
          <p className="card-description">
            Fill out the form and our team will get back to you.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <label>
                Full Name *
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email Address *
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </label>

              <label>
                Subject *
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </label>

              {/* Address Field */}
              <label className="full-width-field">
                Full Address *
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House No, Street, Village, District, State, PIN Code"
                  rows="3"
                  required
                />
              </label>

              {/* Work Type Dropdown */}
              <label className="full-width-field">
                Select Work Type *
                <select
                  name="workType"
                  value={form.workType}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Electrical Work --</option>
                  <option value="House Wiring">House Wiring</option>
                  <option value="Industrial Wiring">Industrial Wiring</option>
                  <option value="Electrical Repair">Electrical Repair</option>
                  <option value="Fan Installation">Fan Installation</option>
                  <option value="Light Installation">Light Installation</option>
                  <option value="CCTV Installation">CCTV Installation</option>
                  <option value="Inverter Installation">Inverter Installation</option>
                  <option value="Solar Installation">Solar Installation</option>
                  <option value="Electrical Maintenance">Electrical Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </label>

            </div>

            <label className="message-label">
              Your Message *
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              />
            </label>

            <button className="gold-btn" type="submit">
              ➤ Send Message
            </button>

            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}

          </form>
        </div>
      </section>
    </main>
  );
}