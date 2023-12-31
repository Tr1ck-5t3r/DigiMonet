import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import NoMatch from './pages/NoMatch'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import * as fcl from '@onflow/fcl'
import Signin from './pages/Signin'
import Logo from "./assets/nav-logo.png"


fcl.config()
  .put("accessNode.api", "http://localhost:8888")
  .put("challenge.handshake", "http://localhost:8701/flow/authenticate")
  
const SignIn = () => {
  console.log("Hello");
  fcl.authenticate();
}

function App() {
  return (
    <>
      <Navbar />
      <div className='move-down'> 
              <button onClick={() => {SignIn()}}>hello</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
      
    </>
  )
}

export default App
