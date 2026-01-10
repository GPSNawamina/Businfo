import React, { useState } from 'react'
import { DollarSign, MapPin, Calculator } from 'lucide-react'

const NormalFare = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [busType, setBusType] = useState('normal')

  const handleCalculate = (e) => {
    e.preventDefault()
    // Handle fare calculation logic here
    console.log('Calculating fare from', from, 'to', to, 'for', busType)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Normal Route Fare Calculator</h1>
          <p>Calculate official bus fares following government regulatory guidelines</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2>Calculate Fare</h2>
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
                <label htmlFor="busType">
                  <DollarSign size={20} />
                  Bus Type
                </label>
                <select
                  id="busType"
                  value={busType}
                  onChange={(e) => setBusType(e.target.value)}
                >
                  <option value="normal">Normal Bus</option>
                  <option value="semi-luxury">Semi-Luxury</option>
                  <option value="luxury">Luxury</option>
                  <option value="ac">Air Conditioned</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                <Calculator size={20} />
                Calculate Fare
              </button>
            </form>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Official Pricing</h3>
              <p>Fares calculated according to government transport authority tables</p>
            </div>
            <div className="info-card">
              <h3>Distance-Based</h3>
              <p>Accurate pricing based on exact route distances</p>
            </div>
            <div className="info-card">
              <h3>Multiple Bus Types</h3>
              <p>Support for normal, semi-luxury, luxury, and AC buses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NormalFare
