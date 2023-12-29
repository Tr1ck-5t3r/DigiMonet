import hero from '../assets/hero.png'
import './home.css'
import News from '../components/News'
function Home() {
  return (
    <div className="Home">
      <div className="hero">
        <img className="hero-img" src={hero} alt="hero" />
      </div>
      <div className="newsletter">
        <h1>Around the World today</h1>
        <News />
      </div>
    </div>
  )
}

export default Home