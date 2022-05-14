import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router'
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Register from "./pages/Register";

import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'
import FoodDiary from "./pages/FoodDiary";
import Foods from "./pages/Foods";
import AddFood from "./pages/AddFood";


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
        <Route path="/food-diary/4" element={<FoodDiary />} />
        <Route path="/foods" element={<Foods />} />
        <Route path='/add-food' element={<AddFood />} />
        <Route path="/food-details" />

      </Routes>
    </div>
  )
}