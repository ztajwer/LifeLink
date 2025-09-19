import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Feedback from "./Pages/Feedback";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop"; 


function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
