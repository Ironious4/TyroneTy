import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
     </Routes>

    </div>
  )

  
}

export default App
