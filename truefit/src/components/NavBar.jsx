import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'


const NavBar = ({ user, authenticated, handleLogOut }) => {

  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <Link to="/food-diary">Food Diary</Link>
        <Link to="/exercise-diary">Exercise Diary</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link className="" to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Sign In</Link>
    </nav>
  )


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">TrueFit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link navbar-item"> {authenticated && user ? authenticatedOptions : publicOptions} </a>

          </div>
        </div>

      </div>
    </nav>


  )
}

export default NavBar