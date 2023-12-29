import './signin.css'
import login from '../assets/login.png'
function Login() {
  return (
    <div className="login" >
      <div className="signin">
        <div className='signin-left'>
          <h2>Sign In</h2>
          <form>
            <div className="input-group">
                <input className="input-form" type="email" required=""/>
                <label>Email</label>
            </div>
            <div className="input-group">
                <input className="input-form" type="password" required="" />
                <label>Password</label>
            </div>
            <button className="button-footer">Sign In</button>
          </form>
        </div>
        <div className='signin-right'>
          <img src={login} alt="login" className="login-img" />
        </div>
      </div>
    </div>
  )
}

export default Login