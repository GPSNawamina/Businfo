import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MapPin, DollarSign, Clock, Shield, TrendingUp, Users, Database, RefreshCw, MessageCircle, Play } from 'lucide-react'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <CheckCircle size={16} />
                <span>The Authority in Sri Lankan Public Transport Data</span>
              </div>
              <h1>Instant Access to Verified Bus Fares and Route Intelligence</h1>
              <p className="hero-subtitle">
                <strong>Businfo.click</strong> provides the most <strong>comprehensive, verified, and timely</strong> bus route, fare, and timetable data across Sri Lanka. Leverage our platform for confident, efficient journey planning.
              </p>
              <div className="hero-buttons">
                <Link to="/normalfare" className="btn btn-primary">
                  Calculate Official Fares
                  <ArrowRight size={20} />
                </Link>
                <Link to="/findroutes" className="btn btn-secondary">
                  Explore Routes
                </Link>
              </div>
              <div className="hero-features">
                <div className="feature-tag">
                  <CheckCircle size={16} />
                  <span>Data Compliance & Accuracy</span>
                </div>
                <div className="feature-tag">
                  <CheckCircle size={16} />
                  <span>Official Pricing Integration</span>
                </div>
                <div className="feature-tag">
                  <CheckCircle size={16} />
                  <span>Extensive Route Coverage (500+)</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <MapPin size={100} className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <h2>Trusted by Thousands Across Sri Lanka</h2>
          <p className="section-subtitle">
            Our comprehensive database covers every major bus route in Sri Lanka, providing <strong>accurate and officially verified information</strong> to help you travel smarter and save time.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <MapPin size={40} />
              </div>
              <h3>500+</h3>
              <p>Regulated Routes</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Database size={40} />
              </div>
              <h3>2000+</h3>
              <p>Verified Stops</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Clock size={40} />
              </div>
              <h3>24/7</h3>
              <p>Data Availability</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={40} />
              </div>
              <h3>100k+</h3>
              <p>Monthly Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Businfo.click? Our Commitment to Accuracy</h2>
          <p className="section-subtitle">
            We are dedicated to providing the definitive source for Sri Lankan bus transport data, backed by a rigorous verification process.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={48} />
              </div>
              <h3>Official Fare Compliance</h3>
              <p>Our fare calculation engine strictly adheres to the latest Government transport authority fare tables, including complex expressway charges.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={48} />
              </div>
              <h3>Verified Route Mapping</h3>
              <p>We cross-reference physical route data and official permits to ensure every route displayed is valid, accurate, and current.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={48} />
              </div>
              <h3>Optimized for Speed</h3>
              <p>Our platform is engineered for rapid load times and instant search results, providing a seamless user experience on any device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="core-features">
        <div className="container">
          <h2>Core Features for Intelligent Travel Planning</h2>
          <p className="section-subtitle">
            Utilize our powerful tools to effortlessly plan and execute your journeys across the island.
          </p>
          <div className="features-grid-large">
            <div className="feature-card-large">
              <div className="feature-image">
                <MapPin size={64} className="placeholder-icon" />
              </div>
              <h3>Advanced Route Intelligence</h3>
              <p>Access detailed route breakdowns, including stops, total distance, and estimated travel duration.</p>
              <Link to="/findroutes" className="feature-link">
                Search Routes
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <DollarSign size={64} className="placeholder-icon" />
              </div>
              <h3>Official Fare Calculation</h3>
              <p>Get precise fare structures for any point-to-point journey, strictly following government regulatory guidelines.</p>
              <Link to="/normalfare" className="feature-link">
                Calculate Fare
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <Clock size={64} className="placeholder-icon" />
              </div>
              <h3>Sustained Timetable Accuracy</h3>
              <p>We maintain and update bus schedules constantly to provide you with the most reliable departure and arrival forecasts.</p>
              <Link to="/normalwaytimes" className="feature-link">
                View Schedules
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature-card-large">
              <div className="feature-image">
                <Shield size={64} className="placeholder-icon" />
              </div>
              <h3>Reliable Data Source</h3>
              <p>Our commitment is to transparency and trust. All data points are internally verified and sourced from legitimate public channels.</p>
              <Link to="/about" className="feature-link">
                Learn About Our Methods
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Integrity Section */}
      <section className="data-integrity">
        <div className="container">
          <h2>Our Data Integrity Process: Ensuring Reliable Information</h2>
          <p className="section-subtitle">
            Achieving E-A-T (Expertise, Authoritativeness, Trustworthiness) through quality content and rigorous verification.
          </p>
          <div className="integrity-grid">
            <div className="integrity-card">
              <div className="integrity-icon">
                <Shield size={48} />
              </div>
              <h3>Source Validation</h3>
              <p>We rigorously validate data from official government gazettes, regulatory bodies, and licensed transport operators, ensuring <strong>legitimacy</strong>.</p>
            </div>
            <div className="integrity-card">
              <div className="integrity-icon">
                <RefreshCw size={48} />
              </div>
              <h3>Continuous Auditing</h3>
              <p>Our team performs <strong>daily automated and manual audits</strong> of fares and schedules to capture real-time changes and maintain 99.9% data accuracy.</p>
            </div>
            <div className="integrity-card">
              <div className="integrity-icon">
                <MessageCircle size={48} />
              </div>
              <h3>User Feedback Loop</h3>
              <p>We actively integrate structured user reports to quickly identify and correct localized inconsistencies, providing <strong>accountability</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use">
        <div className="container">
          <h2>How to Utilize Businfo.click for Optimal Travel Planning</h2>
          <p className="section-subtitle">
            Our platform simplifies complex route finding into a straightforward, three-step process.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <MapPin size={48} />
              </div>
              <h3>Define Parameters</h3>
              <p>Input your precise origin and final destination points into our search interface.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Database size={48} />
              </div>
              <h3>Analyze Optimal Routes</h3>
              <p>Review multiple available routes, comparing official fares and estimated travel times.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <CheckCircle size={48} />
              </div>
              <h3>Execute Journey Confidently</h3>
              <p>Proceed with your journey using verified information, minimizing delays and confusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Validated by Our Growing User Community</h2>
          <div className="testimonial-card">
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Businfo.click is the most reliable fare finder in Sri Lanka. It significantly streamlined our operational planning."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">KP</div>
              <div className="author-info">
                <h4>Kasun Perera</h4>
                <p>Logistics Analyst, Colombo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Access Authoritative Transport Data?</h2>
          <p>Join over 100,000 satisfied users who trust Businfo.click for verified travel information.</p>
          <div className="cta-buttons">
            <Link to="/normalfare" className="btn btn-primary">
              Start Fare Calculation
              <ArrowRight size={20} />
            </Link>
            <Link to="/findroutes" className="btn btn-secondary">
              Browse Route Network
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
