import { useParams } from "react-router-dom";
import { useState } from 'react'
import Afghanistan from '../assets/Afghanistan.png'
import Libya from '../assets/Libya.png'
import Congo from '../assets/Congo.jpg'
import haiti from '../assets/Haiti_Earthquake_10.jpg'
import hawai from '../assets/Hawaii_fire.png'
import china from '../assets/Hankow_city_hall.jpg'
import { useDispatch } from 'react-redux'
import { setuseraddr,setuseramount,setusermessage,setuserwallet } from "../features/userSlice";
import './donating.css'
import { useNavigate } from 'react-router-dom'

function Donating({ user }) {
  const navigate = useNavigate();
  const useractions = useDispatch();
  const id = useParams();
  const donatelist = {
    1:{
      "name": "Libyan Storm",
      "id": 1,
      "Description": "On Sept. 10, Storm Daniel smashed into the Mediterranean coastal city of Derna in Libya, bringing with it torrential rain and considerable flooding and bursting two of the city's dams.",
      "image": Libya,
    },
    2:{
      "name": "Afghanistani Earthquake",
      "id": 2,
      "Description": "A 6.3-magnitude quake shook western Afghanistan on Oct. 7, killing at least 1,480 people and injuring thousands more. The disaster compounded already precarious conditions of food insecurity and further imperiled women in the country  ",
      "image": Afghanistan,
    },
    3:{
      "name": "Floods in Congo",
      "id": 3,
      "Description": "Early May saw torrential rain fall on the eastern region of the Democratic Republic of the Congo, causing flash flooding and mudslides.",
      "image": Congo,
    },
    4:{
    "name": "Haiti Earthquake",
      "id": 4,
      "Description": "A massive Earthquake with a magnitude of 7.2 on the richter scale has hit Hiati leading to massive loss of life and property.",
      "image": haiti,
    },
    5:{
      "name": "Hawaiin Wildfire",
      "id": 5,
      "Description": "A lack of rains and heavy winds during the summer season has led to a huge wildfire in Hawaii with a area of 100 Sq.Kms damaged and around a 100 estimated casualties ",
      "image": hawai,
    },
    6:{
      "name": "China Floods",
      "id": 6,
      "Description": "A period of heavy rains in China has led to the dangerous rise in water levels of the rivers Yangtze and Huai leading to the displacement of many.",
      "image": china,
    },
  }
    const [donate, setDonate] = useState(0);
    const [donateAmount, setDonateAmount] = useState(0);
    const [donateName, setDonateName] = useState("");
    const [donateMessage, setDonateMessage] = useState("");
    const [donateWallet, setDonateWallet] = useState("");
  const Amtded = (e) => {
      e.preventDefault();
      const amount = e?.target?.value;
      console.log(amount);
      if (amount !== undefined) {
    setDonateAmount(amount);
    useractions(setuseramount(amount));
  }
}

  const DonateNameHandler = (e) => {
  console.log(e);
  const name = e?.target?.value;
  if (name !== undefined) {
    setDonateName(name);
    useractions(setuseraddr(name));
  }
}

const DonateMessageHandler = (e) => {
  const message = e?.target?.value;
  if (message !== undefined) {
    setDonateMessage(message);
    useractions(setusermessage(message));
  }
}

const DonateWalletHandler = (e) => {
  const wallet = e?.target?.value;
  if (wallet !== undefined) {
    setDonateWallet(wallet);
    useractions(setuserwallet(wallet));
  }
}

  const calls = (e) => {
    e.preventDefault();
    useractions(setuseramount(100));
    console.log(donateAmount);
    console.log(donateName);
    console.log(donateMessage);
    console.log(donateWallet);
    navigate("/dashboard");
  }
  return (
    <div className="donating">
      <div className="donating-container">
        <h2>Donating to</h2>
        <h3>{donatelist[id.id].name}</h3>
        <p>{donatelist[id.id].Description}</p>
        <br/>
        <form onSubmit={calls}>
          <div className="input-group">
            <input className="input-form" type="text" required="" onChange={DonateNameHandler} placeholder="Name"/>
          </div>
          <div className="input-group">
            <input className="input-form" type="text" required="" value={user} onChange={DonateWalletHandler} />
          </div>
          <div className="input-group">
            <input className="input-form" type="number" required="" placeholder="amount " onChange={(e)=>Amtded}/>
          </div>
          <div className="input-group">
            <input className="input-form" type="text" required="" placeholder="enter your message" onChange={DonateMessageHandler} />
          </div>
          <button className="button" >Donate</button>
        </form>
      </div>
    </div>
  )
}

export default Donating