import React, { useState } from 'react'
import { MapPin, Search, ArrowRight } from 'lucide-react'

const FindRoutes = () => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle route search logic here
    console.log('Searching routes from', origin, 'to', destination)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Find Bus Routes</h1>
          <p>Search for bus routes across Sri Lanka with detailed stop information</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2>Search Routes</h2>
            <form onSubmit={handleSearch} className="search-form">
              <div className="form-group">
                <label htmlFor="origin">
                  <MapPin size={20} />
                  Origin
                </label>
                <input
                  type="text"
                  id="origin"
                  placeholder="Enter starting location"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="destination">
                  <MapPin size={20} />
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Search size={20} />
                Search Routes
              </button>
            </form>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>500+ Routes Covered</h3>
              <p>Access information on over 500 regulated bus routes across Sri Lanka</p>
            </div>
            <div className="info-card">
              <h3>Detailed Stop Information</h3>
              <p>View all stops along each route with accurate location data</p>
            </div>
            <div className="info-card">
              <h3>Real-Time Updates</h3>
              <p>Get the latest route information updated regularly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FindRoutes
