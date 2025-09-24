import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Booknow from "./Pages/Booknow";

import ThankYou from "./Components/Booknow/Thankyou";
import GrohairLanding from "./Pages/Hairtransplant";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/hairtransplant" element={<GrohairLanding/>} />
      </Routes>
    </>
  );
}

export default App;
