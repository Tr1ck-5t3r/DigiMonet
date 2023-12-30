import './signin.css'
import login from '../assets/login.png'



// fcl.config()
//   .put("accessNode.api", "https://access-testnet.onflow.org")
//   .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
//   .put("flow.network", "testnet")
//   .put("app.detail.title", "DigiMonate")
//   .put("app.detail.icon",logo)

// const SignIn = () => {
//   console.log("Hello");
//   fcl.authenticate();
// }


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
            <button className="button-footer" >Sign In</button>
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