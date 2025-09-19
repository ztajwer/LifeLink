import {Link} from "react-router-dom"
import "../Css/Nav.css"

function Nav() {
  return (
    <>
    <nav style={{ backdropFilter: "blur(16px)"}}>
    <div className="image"><img src="./logo.png" alt="" className="logo"/></div>
    <div className="links">
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About Us</Link>
    <Link to={"/services"}>Services</Link>
    <Link to={"/feedback"}>Feedback</Link>
    <Link to={"/contact"}>Contact Us</Link></div>
    </nav>
    </>
  )
}

export default Nav
