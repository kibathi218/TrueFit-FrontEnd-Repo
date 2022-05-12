import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router'
import Home from "./pages/Home";


export default function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />


      </Routes>
    </div>
  )
}