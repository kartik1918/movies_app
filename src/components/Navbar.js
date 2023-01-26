import "./Navbar.css"
import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav-container">
        <Link to="/"><h1 className="nav-items">Movies App</h1></Link>
        <Link to="/favourites"><h3 className="nav-items">Favourites</h3></Link>
    </div>
  )
}

export default Navbar