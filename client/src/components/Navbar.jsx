import { Link } from 'react-router-dom';
import logo from '../assets/nav-logo.png';
import './Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} className='logo-nav' alt="logo" />
      <div className='nav-links'>
        <Link className="nav-link" to="/">
          Home
          <div className='underline'></div>
        </Link>
        <Link className="nav-link" to="/about">
          About
          <div className='underline'></div>
        </Link>
        <Link className="nav-link" to="/services">
          Services
          <div className='underline'></div>
        </Link>
        <Link className="nav-link" to="/dashboard">
          Dashboard
          <div className='underline'></div>
        </Link>
      </div>
      <div className='buttons'>
        <button className='button'>Raise $</button>
        <button className='button'>Recieve $</button>
        <Link to="/signin">
          <button className='button'>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar