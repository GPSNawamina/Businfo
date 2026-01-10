import React from 'react'
import { Link } from 'react-router-dom'
import { Bus } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Bus size={32} />
              <h3>Businfo.click</h3>
            </div>
            <p>Your trusted companion for hassle-free bus travel across Sri Lanka. Real-time information at your fingertips.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/normalfare">Find Fares</Link></li>
              <li><Link to="/findroutes">Bus Routes</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/normalfare">Normal Way Fares</Link></li>
              <li><Link to="/highwayfare">Expressway Fares</Link></li>
              <li><Link to="/findroutes">Route Planning</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Businfo.click. All rights reserved. Made with ❤️ for Sri Lankan travelers</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
