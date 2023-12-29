import './dashboard.css'
import raised from '../assets/funds raised.png'
import sent from '../assets/fund-sent.png'
import recieved from '../assets/fund-recieved.png'
import wallet from '../assets/wallet.png'
import placeholder from '../assets/placeholder.png'
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash1">
        <h3>Overview</h3>
        <div className="overview-row">
          <div className="overview-cols">
            <img className="dash-icons" src={raised} alt="raised"/>
            <h4>Funds raised</h4>
            <h1>0</h1>
          </div>
          <div className="overview-cols">
            <img className="dash-icons" src={wallet} alt="wallet"/>
            <h4>Wallet Balance</h4>
            <h1>$ 0</h1>
          </div>
          <div className="overview-cols">
            <img className="dash-icons" src={sent} alt="sent"/>
            <h4>Funds sent</h4>
            <h1>$ 0</h1>
          </div>
          <div className="overview-cols">
            <img className="dash-icons" src={recieved} alt="recieved"/>
            <h4>Funds recieved</h4>
            <h1>$ 0</h1>
          </div>  
        </div>
      </div>
      <div className='dash2'>
        <div className="history">
          <h3>Impact Stories</h3>
          <div className="history-stories">
            <div className="history-row">
              <img src={placeholder} className="story-images" alt="story" />
              <p>
              <h4>Story 1</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="history-row">
              <img src={placeholder} className="story-images" alt="story" />
              <p>
              <h4>Story 2</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="history-row">
              <img src={placeholder} className="story-images" alt="story" />
              <p>
              <h4>Story 3</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>
        </div>
        <div className="history">
          <h3>Impact History</h3>
          <div className="history-stories">
            <div className="history-row">
              <img src={placeholder} className="story-images" alt="story" />
              <p>
              <h4>User history 1</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="history-row">
              <img src={placeholder} className="story-images" alt="story" />
              <p>
              <h4>User history 2</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="history-row">
              <img src={placeholder} className="story-images" alt="story" />
              <p>
              <h4>User history 3</h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard