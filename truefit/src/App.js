import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router'
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import Register from "./pages/Register";


export default function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  )
}