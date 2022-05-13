import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">TrueFit</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/login">Sign In</a>
                        <a className="nav-link" href="/register">Register</a>
                    </div>
                </div>
            </div>
        </nav>

    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="#">Navbar</a>
    //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div class="navbar-nav">
    //           <a class="nav-link active" aria-current="page" href="#">Home</a>
    //           <a class="nav-link" href="#">Features</a>
    //           <a class="nav-link" href="#">Pricing</a>
    //           <a class="nav-link disabled">Disabled</a>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    )
}

export default NavBar