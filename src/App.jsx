import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Destination from './components/destination/Destination'
import Crew from './components/crew/Crew'
import Technology from './components/technology/Technology'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className='main-div'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/*" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes> 
      </div>
    </Router>
  )
}

export default App
