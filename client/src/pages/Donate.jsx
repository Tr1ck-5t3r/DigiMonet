import './donate.css'
import placeholder from '../assets/placeholder.png'
import Afghanistan from "../assets/Afghanistan.png"
import Libya from "../assets/Libya.png"
import Congo from "../assets/Congo.jpg"
import { Link } from 'react-router-dom'

const values = {}


function Donate() {
  
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
  return (
    <div className="donate">
      <div className="donate-container">
        <h3>Donate</h3>
        <div className='history-stories'>
          {
            Object.keys(donatelist).map((key) => {
              return (
                <div className="history-row" key={donatelist }>
                  <div className='row-donate'>
                    <img src={donatelist[key].image} className="story-images" alt="story" />
                    <p>
                      <h4>{donatelist[key].name}</h4>
                      {donatelist[key].Description}
                    </p>
                  </div>
                  <Link to={`/donating/${donatelist[key].id}`} className='button'>Donate</Link>
                </div>
              )
            })
          }
          </div>
      </div>
    </div>
  )
}

export default Donate