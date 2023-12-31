import './donate.css'
import Afghanistan from '../assets/Afghanistan.png'
import Libya from '../assets/Libya.png'
import Congo from '../assets/Congo.jpg'
import haiti from '../assets/Haiti_Earthquake_10.jpg'
import hawai from '../assets/Hawaii_fire.png'
import china from '../assets/Hankow_city_hall.jpg'
import { Link } from 'react-router-dom'

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
                  <Link to={`/donate/${donatelist[key].id}`} className='button'>Donate</Link>
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