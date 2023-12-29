import "./Footer.css"
import logo from '../assets/nav-logo.png';
function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <img src={logo} alt="logo" className="logo-footer" />
        </div>
        <div className="col">
          <h5>Support</h5>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Get started</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col">
          <h5>DigiMonet</h5>
          <ul>
            <li>About Us</li>
            <li>Vision</li>
            <li>News</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="col">
          <form className="query_form">
            <div className="input-group">
                <input className="input-form" type="email" required=""/>
                <label>Email</label>
            </div>
            <div className="input-group">
                <input className="input-form" type="text" required="" />
                <label>Query</label>
            </div>
            <button className="button-footer">Send</button>
        </form>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <p>© 2023 DigiMonet. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer