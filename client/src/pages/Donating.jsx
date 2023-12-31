import { useParams } from "react-router-dom";
import { useState } from 'react'
import './donating.css'

function Donating() {
  const id = useParams();
  console.log(id);
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
    "name": "Story 4",
      "id": 4,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "image": placeholder,
    },
    5:{
      "name": "Story 5",
      "id": 5,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "image": placeholder,
    },
    6:{
      "name": "Story 6",
      "id": 6,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "image": placeholder,
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