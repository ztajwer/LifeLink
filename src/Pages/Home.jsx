import React from "react";
import "../Css/Home.css";
import useDynamicTitle from "../Hooks/DynamicTitle";

function Home() {
  useDynamicTitle("LifeLink - Home")
  return (
    <>
      <main>
        <div className="img">
          <img src="./banner.jpg" alt="" width={700} />
        </div>
        <div className="content">
          <h1 style={{ color: "red", fontSize: "60px" }}>AMBULANCE</h1>
          <h1 style={{ fontSize: "60px" }}>SERVICE</h1>
          <p style={{ fontSize: "15px", lineHeight: "23px" }}>
            It is equipped with emergency medical equipment such as stretchers,
            oxygen cylinders, first aid kits, and sometimes even advanced life
            support systems. Ambulances are easily recognized by their bright
            colors, flashing lights, and sirens, which alert other drivers to
            give way during emergencies. They play a vital role in saving lives
            by providing quick medical assistance and ensuring that patients
            reach doctors as fast as possible.
          </p>
        </div>
      </main>
      <hr />
      <main className="service-section">
        <div className="content">
          <div className="head">
            <img
              src="https://www.clker.com/cliparts/w/y/G/f/C/W/circle-check-red.svg"
              alt=""
              height={60}
              style={{ marginTop: "5px" }}
            />
            <h1 style={{ color: "red", fontSize: "60px" }}>Services</h1>
          </div>
          <p style={{ fontSize: "15px", lineHeight: "23px" }}>
            Our ambulance service provides quick, reliable, and life-saving
            transportation for patients in need. We offer a wide range of
            services, including emergency response for accidents and sudden
            illnesses, ICU-equipped ambulances for critically ill patients, and
            non-emergency patient transport for hospital visits or routine
            medical care. Our fleet also includes specialized neonatal and
            pediatric ambulances, ensuring safe care for children and newborns.
            Each ambulance is staffed with trained medical professionals and
            equipped with modern life-saving equipment, guaranteeing that
            patients receive the best possible care while en route to medical
            facilities.
          </p>
        </div>
        <div className="i">
          <img src="./service.png" alt="" />
        </div>
      </main>
      <hr />

      <main className="services">
        <center>
          <div className="service-image">
            <img src="./steps.png" alt="" />
            <img src="./steps1.png" alt="" />
          </div>
        </center>

        <div className="lis">
          <div className="head">
            <img
              src="https://www.clker.com/cliparts/w/y/G/f/C/W/circle-check-red.svg"
              alt=""
              height={60}
              style={{ marginTop: "5px" }}
            />
            <h1 style={{ color: "red", fontSize: "60px" }}>Services</h1>
          </div>
          <ul style={{ fontSize: "15px", lineHeight: "30px" }}>
            <li>
              Emergency Ambulance Service 24/7 availability for accidents,
              medical emergencies, or sudden illnesses. Equipped with first aid,
              oxygen, and life-saving equipment.
            </li>
            <li>
              ICU Ambulance Service Advanced ambulances with ICU facilities for
              critically ill patients. Continuous monitoring and support during
              transfer.
            </li>
            <li>
              Patient Transport / Non-Emergency Ambulance Safe transport of
              patients for routine checkups, dialysis, or hospital transfers.
              Comfortable and hygienic rides with trained staff.
            </li>
            <li>
              Neonatal / Pediatric Ambulance Specialized ambulances for newborns
              and children. Equipped with incubators and child-specific medical
              care.
            </li>
            <li>
              Medical Equipment Support Ambulances carry essential medical
              equipment like stretchers, oxygen cylinders, defibrillators, and
              ventilators.
            </li>
            <li>
              Event Medical Coverage Ambulance services for public events,
              gatherings, or sports activities. On-site emergency support to
              handle any medical situations.
            </li>
          </ul>
        </div>
      </main>
      <hr />
      <main>
        <img src="./quick.png" className="steps" />
      </main>
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
      <section
        class="testimonials container"
        aria-labelledby="testimonials-heading"
      >
        <h2 id="testimonials-heading">Testimonials & Success Stories</h2>
        <div class="testimonial-grid">
          <article class="testimonial">
            <p class="quote">
              “RapidAid Ambulance reached us in less than 10 minutes. Their
              paramedics were calm, professional, and truly lifesaving.”
            </p>
            <div class="author">— Sarah M., Patient’s Family</div>
          </article>

          <article class="testimonial">
            <p class="quote">
              “As a hospital partner, we trust RapidAid for timely patient
              transfers. Their team is reliable and fully equipped.”
            </p>
            <div class="author">— Dr. Ahmed, City Hospital</div>
          </article>

          <article class="testimonial">
            <p class="quote">
              “The care and compassion shown by their staff made all the
              difference in a critical moment for our family.”
            </p>
            <div class="author">— James R., Patient</div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
