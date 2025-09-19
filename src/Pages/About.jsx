import useDynamicTitle from "../Hooks/DynamicTitle";
import "../Css/about.css";

const About = () => {
    useDynamicTitle("LifeLink - About")
  
  return (
    <>
      <div className="timg">
        <p>
          <h1>About Page</h1>
          eAmbulance is a next-generation emergency response service committed
          to delivering fast, reliable, and patient-focused care when it matters
          most. By integrating advanced technology with a compassionate
          approach, we ensure that every call for help is met with precision,
          urgency, and professionalism. Our fleet of modern ambulances,
          real-time tracking systems, and dedicated medical teams work
          seamlessly to provide life-saving support across diverse communities.
          At eAmbulance, we believe that access to emergency care should be
          efficient, transparent, and centered around the well-being of every
          individual we serve.
        </p>
        <img src="./about1.jpg" alt="" />
      </div>
      <hr />
      <center>
        <h1>Our Values</h1>
      </center>
      <div className="v">
        <div className="v1">
          <center>
            <img src="./a.png" alt="" />
            <h2>Reliability</h2>
            <p>
              Consistently Providing <br /> Depandable Emergency Care
            </p>
          </center>
        </div>
        <div className="v2">
          <center>
            <img src="./a2.png" alt="" />
            <h2>Patient Centered</h2>
            <p>
              Prioriting The Needs <br />
              And Well-Being of Patients <br />
            </p>
          </center>
        </div>
        <div className="v3">
          <center>
            <img src="./a3.png" alt="" />
            <h2>Innovation</h2>
            <p>
              Continuosly Advancing <br />
              Through Coffing-Edge Solution <br />
            </p>
          </center>
        </div>
      </div>
      <br />
      <hr />
      <div className="main">
        <div className="works">
          <h2>How It Works?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            nam amet voluptates nihil dolores excepturi consequuntur ea tempore
            quidem, dolore facere temporibus inventore quas blanditiis
            praesentium officiis molestias? Repellendus, eligendi fugiat
            sapiente alias dicta aut iste, est odit ipsum, pariatur sunt magni
            omnis? Nostrum accusamus vitae veritatis earum consequatur
            aspernatur?
          </p>
        </div>
        <div className="count">
          <div className="c">
            <h1>70+</h1>
            <p>eAmbulances</p>
          </div>
          <div className="c">
            <h1>40+</h1>
            <p>Doctors</p>
          </div>
          <div className="c">
            <h1>50+</h1>
            <p>Hospitals</p>
          </div>
          <div className="c">
            <h1>30+</h1>
            <p>Emergency</p>
          </div>
        </div>
      </div>
      <hr />
      {/* New Section of Doctors */}
      <center>
        <h1 className="team">
          Our Team <p>Best Members</p>
        </h1>
      </center>
      <div className="parent">
        <div className="cs">
          <center>
            <img src="https://copilot.microsoft.com/th/id/BCO.a024f75b-8f43-4c05-a61b-a64f09cb162a.png" />
            <p>
              Othopatic Sergen <br /> Sara
            </p>
          </center>
        </div>
        <div className="cs">
          <center>
            <img src="https://copilot.microsoft.com/th/id/BCO.50144417-cc18-4392-96d5-a9c2baa3337e.png" />
            <p>
              General Physician <br /> Ali
            </p>
          </center>
        </div>
        <div className="cs">
          <center>
            <img src="https://copilot.microsoft.com/th/id/BCO.a6cdb543-8b8b-479e-96e5-5fe0ec1d94e2.png" />
            <p>
              Cardiologist <br /> Zimal
            </p>
          </center>
        </div>
      </div>
      <hr />
      <center>
        <h1 className="vm">Our Mission Our Vision</h1>
      </center>
      <div className="mv">
        <div className="vision">
          <img
            src="https://copilot.microsoft.com/th/id/BCO.1e5ce80f-c2a9-49e3-a297-eb3da9624ddf.png"
            alt=""
          />
        </div>
        <div className="vision">
          <img
            src="https://copilot.microsoft.com/th/id/BCO.58fcc6b7-0e18-4fb5-a6c1-d7ae3c9ab0c7.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
