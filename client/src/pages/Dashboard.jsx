import './dashboard.css'
import raised from '../assets/funds raised.png'
import sent from '../assets/fund-sent.png'
import recieved from '../assets/fund-recieved.png'
import wallet from '../assets/wallet.png'
import placeholder from '../assets/placeholder.png'
import Hawaii from "../assets/Hawaii_fire.png"
import China from "../assets/Hankow_city_hall.jpg"
import Haiti from "../assets/Haiti_Earthquake_10.jpg"
import Rwanda from "../assets/Rwanda.jpg"
import Cyclone from "../assets/Mocha.jpg"
import Nepal from "../assets/Nepal.jpg"
import { useSelector } from 'react-redux'
function Dashboard({ amount }) {
  const user = useSelector((state) => state.user.amount);
  console.log(user);
  return (
    <div className="dashboard">
      <div className="dash1">
        <h3>Overview</h3>
        <div className="overview-row">
          <div className="overview-cols">
            <img className="dash-icons" src={raised} alt="raised"/>
            <h4>Funds raised</h4>
            <h1>$ 0</h1>
          </div>
          <div className="overview-cols">
            <img className="dash-icons" src={wallet} alt="wallet"/>
            <h4>Wallet Balance</h4>
            <h1>$ {amount-user || 0}</h1>
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
              <img src={China} className="story-images" alt="story" />
              <p>
              <h4>China Floods</h4>
              A period of heavy rains in China has led to the dangerous rise in water levels of the rivers Yangtze and Huai leading to the displacement of many. </p>
            </div>
            <div className="history-row">
              <img src={Haiti} className="story-images" alt="story" />
              <p>
              <h4>Haiti Earthquake</h4>
              A massive Earthquake with a magnitude of 7.2 on the richter scale has hit Hiati leading to massive loss of life and property.</p>
            </div>
            <div className="history-row">
              <img src={Hawaii} className="story-images" alt="story" />
              <p>
              <h4>Hawaiin Wildfire</h4>
              A lack of rains and heavy winds during the summer season has led to a huge wildfire in Hawaii with a area of 100 Sq.Kms damaged and around a 100 estimated casualties 
              </p>
            </div>
          </div>
        </div>
        <div className="history">
          <h3>Impact History</h3>
          <div className="history-stories">
            <div className="history-row">
              <img src={Rwanda} className="story-images" alt="story" />
              <p>
              <h4>Rwanda Pummelled by Heavy Rains</h4>
              During the night of May 2, heavy rain pummeled northern and western Rwanda, destroying 5,000 homes and killing at least 129.</p>
            </div>
            <div className="history-row">
              <img src={Cyclone} className="story-images" alt="story" />
              <p>
              <h4>Cyclone Mocha Havoc</h4>
              Flash floods and winds of up to 130 mph from Cyclone Mocha ripped through Myanmar on May 14, causing the deaths of at least 145 people.</p>
            </div>
            <div className="history-row">
              <img src={Nepal} className="story-images" alt="story" />
              <p>
              <h4>Nepal Earthquakes</h4>
              On Nov. 3, a 5.6-magnitude earthquake struck western Nepal and killed at least 157 people. It is a Nation sitting at the meeting point of the Indian and Asian tectonic plates. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard