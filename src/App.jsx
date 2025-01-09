import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Header from "./Header";
import AboutUs from "./component/AboutUs";
import Services from "./component/Services";
import FAQ from "./component/FAQ";


function App() {
  return (
    <Router>
      <div>
        {/* Common Header */}
        <Header />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/FAQ" element={<FAQ />} />
          {/* <Route path="/contact-us" element={<Contact />} /> */}
        </Routes>

        {/* Common Footer */}
        <Footer />
        <div>
<img src="img/icons/whatsapp.png" alt="WhatsApp Icon" className="fixed-icon-whatsapp" />
  </div>
      </div>
    </Router>
  );
}

export default App;
