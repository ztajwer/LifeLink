import { Link } from "react-router-dom";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="brand">
          <div className="brand-title">
            <div className="heartbeat"></div>
            <h3>RapidAid Ambulance</h3>
          </div>
          <p>
            Saving lives with fast, reliable, and compassionate emergency
            medical care — available 24/7 whenever you need us.
          </p>
        </div>

        <div className="l">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/services"}>Services</Link></li>
            <li><Link to={"/abmbutype"}>Ambulance Types</Link></li>
            <li><Link to={"/feedback"}>Feedback</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
          </ul>
        </div>

        <div className="contact">
          <h4>Contact Us</h4>
          <ul>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ support@rapidaid.com</li>
            <li>📍 123 Main Street, Cityville</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        © {new Date().getFullYear()} RapidAid Ambulance Service. All rights reserved.
      </div>
    </footer>
  );
}
