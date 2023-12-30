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
import Signout from './pages/Signout'
import Raise from './pages/Raise'
import Donate from './pages/Donate'

fcl.config()
  .put("accessNode.api", "https://access-testnet.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")


function App() {
  return (
    <>
      <Navbar />
      <div className='move-down'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/raise" element={<Raise />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
      
    </>
  )
}

export default App
