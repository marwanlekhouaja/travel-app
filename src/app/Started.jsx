import 'bootstrap/dist/css/bootstrap.css'
import Destination from './Destination'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos'
function Started() {
    useEffect(()=>{
        Aos.init({duration:1200})
    })
  return (
    <div className='container '>
    <div data-aos="fade-up" className="card flex-row statistic shadow d-flex align-items-center p-2 justify-content-evenly rounded m-3">
        <div className='d-flex align-items-center'>
            <div style={{fontWeight:'900'}}>10</div>
            <p>World of <br/>experiences</p>
        </div>
        <div className='d-flex align-items-center'>
            <div style={{fontWeight:'900'}}>2k+</div>
            <p>Fine Destinations</p>
        </div>
        <div className='d-flex align-items-center'>
            <div style={{fontWeight:'900'}}>10k+</div>
            <p>Custormer Reviews</p>
        </div>
        <div className='d-flex align-items-center'>
            <div style={{fontWeight:'900'}}>4.8</div>
            <p>Overall Rating</p>
        </div>
    </div>
    <Destination/>
    </div>
  )
}

export default Started