import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/About'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
    </div>
  )
}

export default App
