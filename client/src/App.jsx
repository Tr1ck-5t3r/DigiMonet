import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import NoMatch from './pages/NoMatch'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
