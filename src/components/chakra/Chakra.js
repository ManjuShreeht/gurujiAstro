import React from 'react'
import './chakra.css'
import sun from '../../images/sun.png'
import sumround from '../../images/sun-round.png'
import one1 from '../../images/one1.png'
import two2 from '../../images/two2.png'
import three3 from '../../images/three3.png'
import four4 from '../../images/four4.png'
import five5 from '../../images/five5.png'
import birth from '../../images/Birth.png'
import orbit from '../../images/Orbit.png'
import family from '../../images/Family.png'
import medical from '../../images/Medical.png'
import number from '../../images/number.png'
import star from '../../images/star.png'

function Chakra() {
  return (
    <div>

        <h3 className='chakra-h3'><tt><span ><img className='star' src={star} /></span>Many Problem one Solution<span><img className='star1' src={star} /></span></tt></h3>
    <div className='chakra'>
        <div className='chakra-1'>
            <div className='chakra-col1'>
                <img className='chakra-img' src={one1} />
                <p>Love Related Problem </p>
            </div>
            <div className='chakra-col1'>
                <img className='chakra-img' src={two2} />
                <p>Marriage Problem </p>
            </div>
            <div className='chakra-col1'>
                <img className='chakra-img' src={three3} />
                <p>Job/Business Problems</p>
            </div>
            <div className='chakra-col1'>
                <img className='chakra-img' src={four4} />
                <p>Money Problem </p>
            </div>
            <div className='chakra-col1'>
                <img className='chakra-img' src={five5} />
                <p>Education Problems</p>
            </div>

        </div>
        <div className='chakra-2'>
                <div className='sun' >

                <img className='sun1' src={sun} />
                </div>
            <div className='sunround ani'>
                <img src={sumround} />
            </div>
            
            
        </div>
        <div className='chakra-3'>
        <div className='chakra-col3'>
                <p>Health Problems </p>
                <img className='chakra-img3' src={medical} />
            </div>
            <div className='chakra-col3'>
                <p>Grah Shanti </p>
                <img className='chakra-img3' src={orbit} />
            </div>
            <div className='chakra-col3'>
                <p>Child Birth Issues</p>
                <img className='chakra-img3' src={birth} />
            </div>
            <div className='chakra-col3'>
                <p>Husband Wife Problems</p>
                <img className='chakra-img3' src={family} />
            </div>
            <div className='chakra-col3'>
                <p>Lucky Number / Color</p>
                <img className='chakra-img3' src={number} />
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Chakra
