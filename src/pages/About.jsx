import React from 'react'
import { Shield, CheckCircle, Database, Users } from 'lucide-react'

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>About Businfo.click</h1>
          <p>Your trusted source for verified Sri Lankan bus transport information</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-card">
            <h2>Our Mission</h2>
            <p>
              Businfo.click is dedicated to providing the most comprehensive, accurate, and timely bus route, fare, and timetable data across Sri Lanka. We believe that reliable public transport information should be accessible to everyone, helping travelers make informed decisions and navigate the country with confidence.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={48} />
              </div>
              <h3>Verified Data</h3>
              <p>All our information is cross-referenced with official government sources and transport authorities to ensure accuracy and reliability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CheckCircle size={48} />
              </div>
              <h3>Quality Assurance</h3>
              <p>We perform daily audits and updates to maintain 99.9% data accuracy across all routes, fares, and schedules.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Database size={48} />
              </div>
              <h3>Comprehensive Coverage</h3>
              <p>Our database covers over 500 regulated routes and 2000+ verified stops across Sri Lanka.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={48} />
              </div>
              <h3>User-Centric</h3>
              <p>We actively listen to user feedback and continuously improve our platform to serve you better.</p>
            </div>
          </div>

          <div className="content-card">
            <h2>Our Methodology</h2>
            <p>
              We employ a rigorous three-step verification process:
            </p>
            <ul>
              <li><strong>Source Validation:</strong> Data is collected from official government gazettes, regulatory bodies, and licensed transport operators.</li>
              <li><strong>Continuous Auditing:</strong> Automated and manual daily audits ensure real-time accuracy of fares and schedules.</li>
              <li><strong>User Feedback Integration:</strong> We incorporate structured user reports to identify and correct any inconsistencies.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Why Trust Us?</h2>
            <p>
              Businfo.click adheres to the highest standards of Expertise, Authoritativeness, and Trustworthiness (E-A-T). Our fare calculation engine strictly follows government transport authority fare tables, including complex expressway charges. Every route displayed is validated against official permits and physical route data.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
