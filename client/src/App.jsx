import './App.css'
import { Route, Routes, useAsyncError } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import NoMatch from './pages/NoMatch'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import * as fcl from '@onflow/fcl'
import Raise from './pages/Raise'
import Donating from './pages/Donating'
import Donate from './pages/Donate'
import Logo from "./assets/nav-logo.png"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

fcl.config()
  .put("accessNode.api", "https://access-testnet.onflow.org")
  .put("challenge.handshake", "https://fcl-discovery.onflow.org/testnet/authn")
  
const SignIn = () => {
  console.log("Hello");
  fcl.authenticate(); 
}

const SignOut = () => { 
  fcl.unauthenticate(); 
  useNavigate("/");
}

function App() {
  const [user, setUser] = useState({ loggedIn: null, amount: 0 });
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
    if (user.loggedIn) { navigate("/dashboard"); }
    else navigate("/");
    setAmount(1000);
  },[user.loggedIn])
  console.log(user);
  return (
    <>
      <Navbar user={user} signin={SignIn} signout={SignOut} />
          <div className='move-down'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard amount={amount} />} />
              <Route path="/raise" element={<Raise />} />
              <Route path="/donate" element={<Donate />} />
          <Route path='/donate/:id' element={<Donating user={user.addr} />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
      <Footer />
      
    </>
  )
}

export default App
