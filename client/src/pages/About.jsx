import './about.css'
import about from '../assets/about.png'
import vision from '../assets/vision.png'
import working from '../assets/working.png'
import community from '../assets/community.png'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className='article'>
          <p className='right'>
            <h2 className='title'>This is DigiMonate</h2>
            DigiMonate is a platform that allows people to raise money for their future.
            At DigiMonate, we understand the significance of financial aspirations and
            the impact they have on shaping the lives of individuals. That&apos;s why we&apos;ve
            created a unique platform that empowers people to raise funds for their future
            endeavors, turning aspirations into realities.
          </p>
        </div>
        <img src={about} alt="about" className='about-img'/>
      </div>
      <div className="about-container">
        <img src={vision} alt="vision" className='about-img'/>
        <div className='article'>
          <p className='left'>
            <h2 className='title'>Vision</h2>
            At the core of DigiMonate is a vision to foster a
            community-driven approach towards financial growth.
            We believe that everyone deserves a chance to achieve their dreams,
            and by harnessing the collective strength of individuals,
            we can create a platform that enables the realization of those dreams.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className='article'>
          <p className='right'>
            <h2 className='title'>How we work</h2>
            <ol className='ol-about'>
              <li className='li-about'>Create Your Campaign:Share your story, outline your goals,
                and set the tone for your journey.</li>
              <li className='li-about'>Spread the Word: Utilize the power of social networks to
                amplify your message.</li>
              <li className='li-about'>Receive Contributions: Watch as the community comes together
                to support your cause.</li>
              <li className='li-about'>Track Your Progress: Real-time tracking features to showcase the impact of every contribution.</li>
            </ol>
          </p>
        </div>
        <img src={working} alt="how it works" className='about-img'/>
      </div>
      <div className="about-container">
        <img src={community} alt="community" className='about-img'/>
        <div className='article'>
          <p className='left'>
            <h2 className='title'>Join the Community</h2>
            Whether you&apos;re saving for education, starting a business,
            or pursuing a passion project, DigiMonate is here to help
            you turn your dreams into tangible achievements. Join our
            growing community and experience the joy of contributing
            to others&apos; success while embarking on your own journey
            towards a brighter future.
            <br/>
            At DigiMonate, we believe that together, we can create a
            world where financial barriers are overcome, and every dream
            has the chance to flourish. Welcome to a future filled with
            possibilities - welcome to DigiMonate!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About