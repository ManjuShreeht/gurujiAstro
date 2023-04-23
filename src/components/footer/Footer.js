import React from 'react'
import './footer.css';
import logo from '../../images/logo.png'
import paytem from '../../images/paytem.png'
import razo from '../../images/razorpay.png'
import stripe from '../../images/stripe.png'
import fbb from '../../images/fbb.png'
import insta from '../../images/insta.png'
import you from '../../images/you.png'
import four from '../../images/four.png'

const Footer = () => {
  return (
    <div className='f'>

    <div className='footer'>
        <div className='col1'>
            <div className='in'>
            <img className='logo' src={logo} alt="miss"/>
            <h4>Guruji</h4>
            </div >
            <div  className='pi'><p>About Guruji s2 to 3 lines what guruji do and how it works About Guruji s2 to 3 lines what guruji do and how it works</p></div>

            <div className='flex'>
                <div className='round-img'>

                <img  src={fbb} alt=""/>
                </div>
                <div className='round-img'>

                <img className='round-img' src={insta} alt=""/>
                </div>
                <div className='round-img'>

                <img className='round-img' src={four} alt=""/>
                </div>
                <div className='round-img'>

                <img className='round-img' src={you} alt=""/>
                </div>
            </div>
            <div>

            <div className='turst'>
                <h4>Trusted & Seals</h4>
            <div className='pa' >

            <img className='razo'  src={razo} alt="" />
            <img className='razo' src={paytem} alt=" " />
            <img className='razo' src={stripe} alt=" " />
            </div>
            </div>
            </div>
        </div>


        <div className='col2' style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
         <div className='in-div'>
        <h3>Company</h3>
        <p>Home</p>
        <p>Privacy Policy</p>
        <p>T &C</p>
        <p>Varied Payment</p>
        </div>  
        <div className='in-div'>
         <h3>Collaborate</h3>
        <p>Clever Tap</p>
            <p>Exotel</p>
            <p>Facebook</p>
            <p>Quora</p>
            <p>Google</p>
            <p>Youtube</p>
            </div>
        </div>

        <div className='col2' >
         <div className='in-div'>
        <h3>Support</h3>
        <p>Home</p>
        <p>Privacy Policy</p>
        <p>T &C</p>
        <p>Varied Payment</p>
        </div>  
            <div className='in-div'>
            <h3>Important Link</h3>
            <p>Tarot Reader</p>
            <p>Vedic Astrology </p>
            <p>Palmistry </p>
            <p>Gemology</p>
            <p>Vastu</p>
            <p>Numerology</p>
            </div>
        </div>
            <div className='col3'>
            <div >
                <form className='in-div' >
                    <input className='input' type="text" placeholder='Your Name' />
                    <input className='input' type="email" placeholder='Mail Id' />
                    <textarea className='input1' placeholder='Write Query' ></textarea>
                    <button className='btn'>Submit</button>
                 </form>

            </div>
            </div>
        
       </div>
    </div>
  )
}

export default Footer