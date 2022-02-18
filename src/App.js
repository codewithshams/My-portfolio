import React from 'react'
import './App.css'
import About from './components/aboutMe/About.jsx'
import Contect from './components/contectus/Contect.jsx'
import Home from './components/home/Home.jsx'
import Tools from './components/tools/Tools.jsx'
// import Navbar from './components/navbar/Navbar.jsx'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Tools />
      <Contect />
    </>
  )
}

export default App
