import React, { useState } from 'react'
import astro1 from '../../images/astro1.png'
 import astro2 from '../../images/astro2.png'
 import astro3 from '../../images/astro3.png'
 import astro4 from '../../images/asto4.png'
 import r1 from '../../images/r1.png'
 import './review.css'
 import star from '../../images/star.png'

function RR() {
    const[isActive,setActive]=useState(false)
   const data1=[{
    id:0,
        img:r1,
        rating:4,
        content:'Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ',
        name:"Astrologer Ramraj",
        Specialties:"Love, Business, Life ", 
       
    },
    {  
        id:1,
         img:astro2,
         rating:4,
         content:'The Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ',
        name:"Astrologer Ramraj",
        Specialties:"Love, Business, Life ",
      
    },
    {  
        id:2,
         img:astro3,
         rating:4,
         content:' Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ',
        name:"Astrologer Ramraj",
        Specialties:"Love, Business, Life ",
        
          
    },
]
const [sliderdata,setSlider]=useState(data1[0])
const handle=(i)=>{
    console.log(i)
  
    const slider=data1[i];
    setSlider(slider)
    
}
  return (
    <div>
  <h3 className='chakra-h3 r-h3'><tt><span ><img className='star' src={star} /></span>User Review<span><img className='star1' src={star} /></span></tt></h3>
   
    <div className='evi'>
        {/* <img src={sliderdata.img} height="300" hight="100"/> */}
        <div className='rating'><h3></h3>{Array(Math.floor(sliderdata.rating)).fill().map((_,i)=>(
                                <p>⭐</p>
                                ))}</div>
        <div className='user-text'>
        
        
        
        
        <p>{sliderdata.content}</p>
        </div>
        <div className='ff1'>

        {
            
            data1.map((item,i)=>(
                
                <div className='ff' >
        <img className='user-pic' key={item.id} src={item.img} onClick={()=>handle(i)}  />
        
       </div>
         
         
         ))
         
        }
        <div className='f-name'>
            <h3>{sliderdata.name}</h3>
        </div>
        </div>
    </div>
        </div>
  )
}

export default RR
