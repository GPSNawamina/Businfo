import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FindRoutes from './pages/FindRoutes'
import NormalFare from './pages/NormalFare'
import HighwayFare from './pages/HighwayFare'
import Timetables from './pages/Timetables'
import StandNumbers from './pages/StandNumbers'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findroutes" element={<FindRoutes />} />
            <Route path="/normalfare" element={<NormalFare />} />
            <Route path="/highwayfare" element={<HighwayFare />} />
            <Route path="/normalwaytimes" element={<Timetables />} />
            <Route path="/standnumbers" element={<StandNumbers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
