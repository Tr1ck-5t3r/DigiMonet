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


function Login({ sign }, { user }) {

  return (
    <div className="login" >
      <div className="signin">
        <img src={login} alt="login" className="login-img" />
        <div className='login-right'>
          <h2>Your Journey starts here</h2>
          <p>Sign in to your account to continue</p>
          <button className='login-button' onClick={() => { sign() }}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Login