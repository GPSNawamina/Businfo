import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Bus } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <Bus size={32} />
            <span>Businfo.click</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/normalfare" onClick={() => setIsOpen(false)}>Fares</Link>
            <Link to="/findroutes" onClick={() => setIsOpen(false)}>Routes</Link>
            <Link to="/normalwaytimes" onClick={() => setIsOpen(false)}>Timetables</Link>
            <Link to="/standnumbers" onClick={() => setIsOpen(false)}>Stand Numbers</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
