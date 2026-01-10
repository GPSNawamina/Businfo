import React, { useState } from 'react'
import { Clock, MapPin, Search } from 'lucide-react'

const Timetables = () => {
  const [route, setRoute] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle timetable search logic here
    console.log('Searching timetable for route', route, 'at', location)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Bus Timetables</h1>
          <p>Find bus schedules with departure and arrival times</p>
        </div>
      </div>

      <section className="search-section">
        <div className="container">
          <div className="search-card">
            <h2>Search Timetables</h2>
            <form onSubmit={handleSearch} className="search-form">
              <div className="form-group">
                <label htmlFor="route">
                  <MapPin size={20} />
                  Route Number or Name
                </label>
                <input
                  type="text"
                  id="route"
                  placeholder="Enter route number (e.g., 138, 177)"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">
                  <MapPin size={20} />
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter location or bus stop"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <Search size={20} />
                Search Timetables
              </button>
            </form>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Updated Schedules</h3>
              <p>Constantly maintained timetables for accurate planning</p>
            </div>
            <div className="info-card">
              <h3>Peak & Off-Peak Times</h3>
              <p>Complete schedule information for all times of day</p>
            </div>
            <div className="info-card">
              <h3>Reliable Forecasts</h3>
              <p>Estimated departure and arrival times you can trust</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Timetables
