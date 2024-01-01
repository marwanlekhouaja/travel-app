import { Link } from 'react-router-dom'
import './style/video.css'
function Video() {
  return (
    <div className="bg-video">
        <video src="video/video.mp4" autoPlay loop muted style={{width:'100%'}}>
            
        </video>
        <div className="content">
          <h1>Unlock your travel dreams with us !</h1>
          <p>
            Discover the world most adevtures nature ,
            life is so short for a trip .
          </p>
          <button className="btn d-flex align-items-center" style={{backgroundColor:'orange',borderRadius:'1rem'}}>
            <Link to='/start' className='text-decoration-none text-light'>Get Started</Link>
            <span className="ms-2 fs-5 mt-2 text-light"><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </button>
        </div>
    </div>
  )
}

export default Video