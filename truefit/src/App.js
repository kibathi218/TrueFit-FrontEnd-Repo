import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router'
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Register from "./pages/Register";

import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'


export default function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  
  
    const handleLogOut = () => {
   
      setUser(null)
      toggleAuthenticated(false)
      localStorage.clear()
    }
  
    useEffect(() =>{
      const token = localStorage.getItem('token')
      console.log(process.env.NODE_ENV)
      if (token) {
        checkToken()
      }
    }, [])



  return (
    <div>
      <header>
        <NavBar
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut} 
        />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  )
}