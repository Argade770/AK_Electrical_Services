import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-logo">AK</span>
        <span className="brand-name">AK Electrical <b>Services</b></span>
      </Link>
      <nav className="main-nav">
        <NavLink to="/" end>Home</NavLink>
        <a href="/#products">Services</a>
        <a href="/#categories">Categories</a>
        <a href="/#offers">Offers</a>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>AK Electrical <span>Services</span></h2>
          <p>Premium electrical and lighting solutions for homes, offices and commercial spaces.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link><Link to="/contact">Contact</Link><Link to="/admin">Admin</Link>
        </div>
        <div>
          <h3>Our Services</h3>
          <p>Electrical Installation</p><p>Lighting Solutions</p><p>Switchboard Repair</p><p>Wiring & Piping</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>☎ +91 7775940775</p><p>✉ argadekiran@gmail.com</p><p>⌖ Soundala, Ahilyanagar</p>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} AK Electrical Services. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}