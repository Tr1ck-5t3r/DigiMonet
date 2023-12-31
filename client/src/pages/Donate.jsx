import './donate.css'
import placeholder from '../assets/placeholder.png'
import Afghanistan from "../assets/Afghanistan.png"
import Libya from "../assets/Libya.png"
import Congo from "../assets/Congo.jpg"


const values = {}

function Donate() {
  return (
    <div className="donate">
      <div className="donate-container">
        <h3>Donate</h3>
        <div className="history-stories">
            <div className="history-row">
              <div className='row-donate'>
                <img src={Libya} className="story-images" alt="story" />
                <p>
                  <h4>Libyan Storm</h4>
                On Sept. 10, Storm Daniel smashed into the Mediterranean coastal city of Derna in Libya, bringing with it torrential rain and considerable flooding and bursting two of the city's dams.
              </p>
              </div>
              <button className='button'>Donate</button>
            </div>
            <div className="history-row">
              <div className='row-donate'>
                <img src={Afghanistan} className="story-images" alt="story" />
                <p>
                  <h4>Floods in Congo</h4>
Early May saw torrential rain fall on the eastern region of the Democratic Republic of the Congo, causing flash flooding and mudslides.
              </p>
              </div>
              <button className='button'>Donate</button>
            </div>
            <div className="history-row">
              <div className='row-donate'>
                <img src={Congo} className="story-images" alt="story" />
                <p>
                  <h4>Afghanistani Earthquake</h4>
              A 6.3-magnitude quake shook western Afghanistan on Oct. 7, killing at least 1,480 people and injuring thousands more. The disaster compounded already precarious conditions of food insecurity and further imperiled women in the country  
              </p>
              </div>
              <button className='button'>Donate</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Donate