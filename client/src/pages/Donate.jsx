import './donate.css'
import placeholder from '../assets/placeholder.png'
function Donate() {
  return (
    <div className="donate">
      <div className="donate-container">
        <h3>Donate</h3>
        <div className="history-stories">
            <div className="history-row">
              <div className='row-donate'>
                <img src={placeholder} className="story-images" alt="story" />
                <p>
                  <h4>Story 1</h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
              </div>
              <button className='button'>Donate</button>
            </div>
            <div className="history-row">
              <div className='row-donate'>
                <img src={placeholder} className="story-images" alt="story" />
                <p>
                  <h4>Story 2</h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
              </div>
              <button className='button'>Donate</button>
            </div>
            <div className="history-row">
              <div className='row-donate'>
                <img src={placeholder} className="story-images" alt="story" />
                <p>
                  <h4>Story 3</h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
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