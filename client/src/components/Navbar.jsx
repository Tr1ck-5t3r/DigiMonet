import { Link } from 'react-router-dom';
import logo from '../assets/nav-logo.png';
import './Navbar.css';

function Navbar({ user, signin, signout }) {


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
        <Link className="nav-link" to="/donate">
          Donate
          <div className='underline'></div>
        </Link>
        <Link className="nav-link" to="/dashboard">
          Dashboard
          <div className='underline'></div>
        </Link>
      </div>
      <div className='buttons'>
        <Link to="/raise">
          <button className='button'>Raise $</button>
        </Link>
        {!user.loggedIn ?
          <button className='button' onClick={signin}>Sign In</button>
          :
          <button className='button' onClick={signout}>Sign Out</button>}
      </div>
    </div>
  )
}

export default Navbar
