import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router'
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Register from "./pages/Register";
import { useNavigate } from 'react-router-dom'


import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'
import FoodDiary from "./pages/FoodDiary";
import Foods from "./pages/Foods";
import AddFood from "./pages/AddFood";
import NewPage from "./pages/NewPage";
import ExerciseDiary from "./pages/ExerciseDiary";
import AddExercise from "./pages/AddExercise";


export default function App() {

  let navigate = useNavigate()

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
    navigate('/')
  }

  useEffect(() => {
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
        <Route path='/login' element={<LogIn handleLogOut={handleLogOut} setUser={setUser} toggleAuthenticated={toggleAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/food-diary" element={<FoodDiary user={user} />} />
        <Route path="/foods" element={<Foods />} />
        <Route path='/add-food' element={<AddFood user={user} />} />
        <Route path="/food-details" />
        <Route path="/food-diary/edit/:food_id" element={<NewPage user={user} />} />
        <Route path="/exercise-diary" element={<ExerciseDiary user={user} />} />
        <Route path="/add-exercise" element={<AddExercise user={user} />} />
      </Routes>
    </div>
  )
}