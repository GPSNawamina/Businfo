import React, { useState } from 'react'
import { MapPin, Search, Navigation } from 'lucide-react'

const StandNumbers = () => {
  const [terminal, setTerminal] = useState('')
  const [route, setRoute] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle stand number search logic here
    console.log('Searching stand for', route, 'at', terminal)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Bus Stand Numbers</h1>
          <p>Find the exact bus stand or bay for your route at major terminals</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2>Search Stand Numbers</h2>
            <form onSubmit={handleSearch} className="search-form">
              <div className="form-group">
                <label htmlFor="terminal">
                  <Navigation size={20} />
                  Bus Terminal
                </label>
                <select
                  id="terminal"
                  value={terminal}
                  onChange={(e) => setTerminal(e.target.value)}
                  required
                >
                  <option value="">Select a terminal</option>
                  <option value="pettah">Pettah Central Bus Stand</option>
                  <option value="fort">Fort Bus Stand</option>
                  <option value="bastian">Bastian Mawatha</option>
                  <option value="kaduwela">Kaduwela</option>
                  <option value="maharagama">Maharagama</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="route">
                  <MapPin size={20} />
                  Route Number
                </label>
                <input
                  type="text"
                  id="route"
                  placeholder="Enter route number"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Search size={20} />
                Find Stand
              </button>
            </form>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Major Terminals</h3>
              <p>Coverage of all major bus terminals across Sri Lanka</p>
            </div>
            <div className="info-card">
              <h3>Exact Locations</h3>
              <p>Find the precise stand or bay number for your bus</p>
            </div>
            <div className="info-card">
              <h3>Save Time</h3>
              <p>Navigate large terminals quickly and efficiently</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StandNumbers
