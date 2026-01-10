import React, { useState } from 'react'
import { DollarSign, MapPin, Calculator, Route } from 'lucide-react'

const HighwayFare = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [expressway, setExpressway] = useState('southern')

  const handleCalculate = (e) => {
    e.preventDefault()
    // Handle highway fare calculation logic here
    console.log('Calculating highway fare from', from, 'to', to, 'via', expressway)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Expressway Fare Calculator</h1>
          <p>Calculate fares for expressway routes with official toll charges included</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2>Calculate Highway Fare</h2>
            <form onSubmit={handleCalculate} className="search-form">
              <div className="form-group">
                <label htmlFor="from">
                  <MapPin size={20} />
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  placeholder="Enter starting location"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">
                  <MapPin size={20} />
                  To
                </label>
                <input
                  type="text"
                  id="to"
                  placeholder="Enter destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="expressway">
                  <Route size={20} />
                  Expressway
                </label>
                <select
                  id="expressway"
                  value={expressway}
                  onChange={(e) => setExpressway(e.target.value)}
                >
                  <option value="southern">Southern Expressway</option>
                  <option value="outer-circular">Outer Circular Expressway</option>
                  <option value="colombo-katunayake">Colombo-Katunayake Expressway</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                <Calculator size={20} />
                Calculate Highway Fare
              </button>
            </form>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Toll Charges Included</h3>
              <p>Complete fare breakdown with expressway toll charges</p>
            </div>
            <div className="info-card">
              <h3>Fast & Accurate</h3>
              <p>Quick calculations based on official expressway rates</p>
            </div>
            <div className="info-card">
              <h3>All Expressways</h3>
              <p>Coverage for all major expressways in Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HighwayFare
