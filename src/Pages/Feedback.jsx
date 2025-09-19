import React, { useState } from "react";
import useDynamicTitle from "../Hooks/DynamicTitle";
import "../Css/Feedback.css";

const Feedback = () => {
    useDynamicTitle("LifeLink - Feedback")
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    feedback: "",
    rating: 0,
  });
  const [hover, setHover] = useState(0);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const setRating = (v) => setForm((s) => ({ ...s, rating: v }));

  const reset = () =>
    setForm({ name: "", email: "", service: "", feedback: "", rating: 0 });

  const submit = (e) => {
    e.preventDefault();
    // minimal validation
    if (!form.feedback.trim()) {
      alert("Please add feedback text.");
      return;
    }
    // For now just log + clear
    console.log("Feedback submitted:", form);
    alert("Thank you — feedback submitted.");
    reset();
  };

  return (
    <>
    
    <div className="feedback-container-simple">
      <h2 className="title">🚑 Ambulance Feedback</h2>

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
          Email or Phone
          <input required
            name="email"
            value={form.email}
            onChange={handleChange}
            type="text"
            placeholder="you@example.com or 03xx-xxxxxxx"
          />
        </label>

        <label>
          Service Type
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select service</option>
            <option value="emergency">Emergency Ambulance</option>
            <option value="transfer">Patient Transfer</option>
            <option value="nonemergency">Non-Emergency Transport</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Feedback
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            rows="4"
            placeholder="Describe your experience..."
            required
          />
        </label>

        <div className="rating-row">
          <div className="rating-label">Rate our service</div>
          <div className="rating-stars" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((i) => {
              const active = hover ? i <= hover : i <= form.rating;
              return (
                <button
                  key={i}
                  type="button"
                  className={`star ${active ? "active" : ""}`}
                  onClick={() => setRating(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  aria-pressed={form.rating === i}
                  title={`${i} star${i > 1 ? "s" : ""}`}
                >
                  ★
                </button>
              );
            })}
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn primary">Submit</button>
          <button type="button" className="btn secondary" onClick={reset}>Reset</button>
        </div>
      </form>

    </div>
    
    <section class="faqs container" aria-labelledby="faqs-heading">
        <h2 id="faqs-heading">Frequently Asked Questions</h2>
        <div class="faq-list">
          <details class="faq-item">
            <summary>How quickly can an ambulance reach me?</summary>
            <p>
              Our response time depends on your location, but our dispatch
              system ensures that the nearest ambulance is sent immediately to
              minimize waiting time.
            </p>
          </details>

          <details class="faq-item">
            <summary>
              {" "}
              What kind of medical support is available inside the ambulance?
            </summary>
            <p>
              All our ambulances are equipped with advanced life-saving
              equipment including oxygen, defibrillators, ventilators, and
              medications, operated by trained paramedics.
            </p>
          </details>

          <details class="faq-item">
            <summary>Are your services available 24/7?</summary>
            <p>
              Yes. Our emergency medical services are available 24 hours a day,
              7 days a week — including weekends and public holidays.
            </p>
          </details>

          <details class="faq-item">
            <summary>Do you cover areas outside the city?</summary>
            <p>
              Yes, we provide inter-city patient transport services depending on
              availability. Please contact our helpline to confirm service in
              your area.
            </p>
          </details>

          <details class="faq-item">
            <summary>How can I pay for the ambulance service?</summary>
            <p>
              We accept cash, credit/debit cards, and in some cases insurance
              coverage. Our staff will guide you at the time of service.
            </p>
          </details>
        </div>
      </section>
    
    <main className="container">
        <section className="about-card" aria-labelledby="about-heading">
          <div className="about-content">
            <span className="eyebrow">Emergency Medical Services</span>
            <h2 id="about-heading">About Us</h2>
            <p>
              At <strong>RapidAid Ambulance Service</strong>, we provide fast,
              reliable, and compassionate pre-hospital care. Our highly trained
              paramedics and fully equipped ambulances are available 24/7 to
              ensure patients receive immediate medical attention wherever they
              are.
            </p>
            <div className="features" role="list">
              <div className="feature" role="listitem">
                <svg
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 7v6l4 2"
                    stroke="#dc2626"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    stroke="#fca5a5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h4>Rapid Response</h4>
                  <p>
                    Strategically located teams to minimize arrival time in
                    emergencies.
                  </p>
                </div>
              </div>
              <div className="feature" role="listitem">
                <svg
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x={2}
                    y={7}
                    width={20}
                    height={12}
                    rx={2}
                    stroke="#dc2626"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 11h6M12 11v6"
                    stroke="#dc2626"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h4>Advanced Medical Support</h4>
                  <p>
                    Modern life-saving equipment and trained paramedics onboard
                    every ambulance.
                  </p>
                </div>
              </div>
              <div className="feature" role="listitem">
                <svg
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20.8 7.6a4.4 4.4 0 0 0-7.7-1.9 4.4 4.4 0 0 0-7.7 1.9c0 6 7.7 9.5 7.7 9.5s7.7-3.5 7.7-9.5z"
                    stroke="#b91c1c"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h4>Compassionate Care</h4>
                  <p>
                    We treat every patient with dignity and a personal touch.
                  </p>
                </div>
              </div>
              <div className="feature" role="listitem">
                <svg
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx={12}
                    cy={12}
                    r={9}
                    stroke="#fca5a5"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M16 8v4h-5"
                    stroke="#dc2626"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h4>24/7 Availability</h4>
                  <p>
                    Round-the-clock dispatch and patient transport services.
                  </p>
                </div>
              </div>
            </div>
            <div className="cta"></div>
          </div>
          <aside className="about-illustration" aria-hidden="false">
            <div className="illustration-card">
              <img
                src="https://www.role1medical.co.uk/wp-content/uploads/2023/05/ambulance-trans-bg-768x576.png"
                height={300}
              />
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--muted)",
                textAlign: "center",
                maxWidth: 320,
              }}
            >
              Fully equipped ambulances, trained paramedics, and a rapid
              dispatch network—ready when you need us most.
            </div>
          </aside>
        </section>
      </main>
      </>
  );
};

export default Feedback;
