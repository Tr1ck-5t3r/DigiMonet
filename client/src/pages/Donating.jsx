import { useParams } from "react-router-dom";
import { useState } from 'react'
import './donating.css'

function Donating() {
  const id = useParams();
  console.log(id);
  const donatelist = {
    1:{
      "name": "Story 1",
      "id": 1,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    2:{
      "name": "Story 2",
      "id": 2,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    3:{
      "name": "Story 3",
      "id": 3,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    4:{
    "name": "Story 4",
      "id": 4,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    5:{
      "name": "Story 5",
      "id": 5,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    6:{
      "name": "Story 6",
      "id": 6,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  }
    const [donate, setDonate] = useState(0);
    const [donateAmount, setDonateAmount] = useState(0);
    const [donateName, setDonateName] = useState("");
    const [donateMessage, setDonateMessage] = useState("");
    const [donateWallet, setDonateWallet] = useState("");
  return (
    <div className="donating">
      <div className="donating-container">
        <h2>Donating to</h2>
        <h3>{donatelist[id.id].name}</h3>
        <p>{donatelist[id.id].Description}</p>
        <br/>
        <form>
          <div className="input-group">
            <input className="input-form" type="text" required=""/>
            <label>Name</label>
          </div>
          <div className="input-group">
            <input className="input-form" type="text" required="" placeholder=""/>
            <label>Wallet Address</label>
          </div>
          <div className="input-group">
            <input className="input-form" type="number" required=""/>
            <label>Amount</label>
          </div>
          <div className="input-group">
            <input className="input-form" type="text" required=""/>
            <label>Message</label>
          </div>
          <button className="button">Donate</button>
        </form>
      </div>
    </div>
  )
}

export default Donating