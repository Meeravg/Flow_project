import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Info from './Components/Info'
import Info_2 from './Components/Info_2'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
        <Navbar/>
        <Info/>
        <Info_2/>
        <Footer/>
    </>
  )
}


export default App
