import './donate.css'
import placeholder from '../assets/placeholder.png'
import { Link } from 'react-router-dom'

function Donate() {
  
  const donatelist = {
    1:{
      "name": "Story 1",
      "id": 1,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "image": placeholder,
    },
    2:{
      "name": "Story 2",
      "id": 2,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "image": placeholder,
    },
    3:{
      "name": "Story 3",
      "id": 3,
      "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "image": placeholder,
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
        <div className="history-stories">
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