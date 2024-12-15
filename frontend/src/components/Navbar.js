import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">CREATE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Read" className="nav-link active">All POST</Link>
            </li>
            <li className="nav-item">
              <Link to="/Update" className="nav-link">Update Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// Commented-out Login and Signup sections for future use
// <ul className="navbar-nav ms-auto">
//   <li className="nav-item">
//     <Link to="/Login" className="nav-link active">Login</Link>
//   </li>
// </ul>

// <ul className="navbar-nav ms-auto">
//   <li className="nav-item">
//     <Link to="/Signup" className="nav-link active">Signup</Link>
//   </li>
// </ul>

export default Navbar
