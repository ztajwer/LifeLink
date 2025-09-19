import React, { useState, useEffect } from "react";
import useDynamicTitle from "../Hooks/DynamicTitle";
import "../Css/Services.css";

const counters = [
  { id: 1, label: "Patients Served", value: 15000 },
  { id: 2, label: "Ambulances Active", value: 120 },
  { id: 3, label: "Medical Staff", value: 450 },
  { id: 4, label: "Cities Covered", value: 60 },
];

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    text: "The ambulance arrived within 10 minutes and the staff was very professional. Truly life-saving service!",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    name: "Omar Farooq",
    text: "I was impressed by the mobile ICU facilities. Everything was modern and handled with care.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Sara Ali",
    text: "Reliable and quick service. The medical staff made us feel safe during a stressful time.",
    img: "https://i.pravatar.cc/150?img=12",
  },
];

const allServices = [
  {
    id: 1,
    title: "Emergency Transport",
    img: "https://copilot.microsoft.com/th/id/BCO.a612eeac-8a84-498b-b72e-9acda8883906.png",
    desc: "Rapid response and safe patient transport with GPS and medical staff.",
    category: "transport",
  },
  {
    id: 2,
    title: "Hospital Transfer",
    img: "https://copilot.microsoft.com/th/id/BCO.00169831-8b44-456b-a13d-5197b48687c8.png",
    desc: "Safe scheduled hospital transfers with full monitoring.",
    category: "transport",
  },
  {
    id: 3,
    title: "Mobile ICU",
    img: "https://copilot.microsoft.com/th/id/BCO.89792543-6c60-4a8b-a95e-c0c78e6709e3.png",
    desc: "ICU-grade ambulance with critical care equipment.",
    category: "icu",
  },
  {
    id: 4,
    title: "On-Site First Aid",
    img: "https://copilot.microsoft.com/th/id/BCO.c2796992-df82-403d-9237-948187211de0.png",
    desc: "Immediate first aid at events and workplaces.",
    category: "firstaid",
  },
  {
    id: 5,
    title: "GPS Dispatch",
    img: "https://copilot.microsoft.com/th/id/BCO.99376e67-ab6a-4a5c-9c80-329ab2bdb421.png",
    desc: "Fast tracking with advanced GPS-based dispatch.",
    category: "tech",
  },
  {
    id: 6,
    title: "Trained Medical Staff",
    img: "https://copilot.microsoft.com/th/id/BCO.4164fd6d-51bd-49a1-96c6-da4daaf8c39e.png",
    desc: "Experienced doctors, nurses, and paramedics.",
    category: "staff",
  },
];

const Services = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));
  const [modalService, setModalService] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("title");

  // Animate counters
  useEffect(() => {
    counters.forEach((counter, i) => {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(counter.value / 40);
        if (start >= counter.value) {
          start = counter.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
      }, 40);
    });
  }, []);

  // Apply filter + sort
  const filteredServices = allServices
    .filter((s) => (filter === "all" ? true : s.category === filter))
    .sort((a, b) =>
      sortBy === "title" ? a.title.localeCompare(b.title) : a.id - b.id
    );
  useDynamicTitle("LifeLink - Services")

  return (
    <>
      {/* === Banner (unchanged) === */}
      <div className="sb">
        <h1 className="emer">Emergency Response in Minutes</h1>
        <button className="ambulance-btn">
          <span>🚑 Emergency</span>
        </button>
      </div>

      <br />
      <hr />
      <center>
        <h1 className="red">Our Emergency Services</h1>
      </center>

      {/* === Filter + Sort === */}
      <div className="filter-sort">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Services</option>
          <option value="transport">Transport</option>
          <option value="icu">Mobile ICU</option>
          <option value="firstaid">First Aid</option>
          <option value="tech">Technology</option>
          <option value="staff">Medical Staff</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Sort by Title</option>
          <option value="id">Sort by ID</option>
        </select>
      </div>

      {/* === Services Grid === */}
      <div className="services-grid">
        {filteredServices.map((s) => (
          <div
            className="service-card"
            key={s.id}
            onClick={() => setModalService(s)}
          >
            <div className="icon-wrapper">
              <img src={s.img} alt={s.title} />
            </div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* === Stats Section === */}
      <section className="stats-section">
        {counters.map((c, i) => (
          <div key={c.id} className="stat-box">
            <h2>{counts[i]}</h2>
            <p>{c.label}</p>
          </div>
        ))}
      </section>

      {/* === Testimonials Section === */}
      <section className="testimonials">
        <h1 className="red center">What People Say</h1>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <img src={t.img} alt={t.name} />
              <p>"{t.text}"</p>
              <h3>- {t.name}</h3>
            </div>
          ))}
        </div>
      </section>
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
        <div className="image">
          <img src="./service.png" alt="" height={600} />
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
      {/* === Modal === */}
      {modalService && (
        <div className="modal-overlay" onClick={() => setModalService(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setModalService(null)}
            >
              ×
            </button>
            <img src={modalService.img} alt={modalService.title} />
            <h3>{modalService.title}</h3>
            <p>{modalService.desc}</p>
            <p className="extra-info">
              🚑 Available 24/7 <br />
              ✅ Certified Medical Staff <br />
              📍 Nationwide Coverage
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
