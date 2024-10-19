import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
