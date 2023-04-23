import React from 'react'
import './header.css'
import guru from '../../images/guru.png'
import pic from '../../images/avatar.png'
import wom from '../../images/wom.png'
import wallet from '../../images/wallet.png'
import pri from '../../images/private.png'
import agree from '../../images/agree.png'
import secure from '../../images/secure.png'

function Header() {
  return (
    <div className='header'>
        <div className='nav'>
            <img className='guru' src={guru} alt=" " />
            <div className='links'>
                <p className='active' >Home</p>  
                <p >Call with Astrologer</p>
                <p >Live (Coming Soon) </p>
            </div>
            <div className='avtar'>
                <img src={pic} />

            </div>
        </div>

        <div className='mid'>
            <h1>“Astrology for Clarity”</h1>
            <p className='mid-p'>Your Name is a Vedic Astrologer and has expertise in Vaastu <br />
            and Mantra Theraphy </p>
           <button className='mid-btn' >Consult Now</button>

        </div>

        <div className='end'>
            <div className='end-1'>
                <img src={wom} />
                <p>24 X 7 Customer Support</p> 
            </div>
            <div className='end-1'>
                <img src={wallet} />
             <p>100% Refund if Unsatisfied</p>   
            </div>
            <div className='end-1'>
            <img src={pri} />
             <p>Private & Confidential</p>   
            </div>
            <div className='end-1'>
            <img src={agree} />
             <p>Verified Astrologer</p>   
            </div>
           
           
            <div className='end-1'>
            <img src={secure} />
             <p>Secure Payment</p>   
            </div>
                
          </div>
       

      
    </div>
  )
}

export default Header
