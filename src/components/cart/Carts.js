import React from 'react'
import './cart.css'
import message from '../../images/message.png'
import vector from '../../images/Vector.png'
import video from '../../images/video.png'
import line from '../../images/line.png'

function Carts(props) {

  return (
   
     
        <div className='box'>
      <img src={props.img} />
      <div className='content'>
      <div className='year'>

      <p>{props.expeience} + Years</p>
      <div className='box-btn'>
        {props.live=='Online' &&<span className='green'></span>}
        {props.live=='Offline' &&<span className="red"></span>}
      <p >{props.live}</p>
      </div>
      </div>
      <div className='box-split'>

      <p className='name1'>{props.name}</p>
      
        <p className='label'> Specialties</p>
        <p className='ans'>{props.Specialties}</p>
     
    
     
      
      <div className='price'>
        <div className='price1'>

        <p className='label'> Skills</p>
        <p className='ans' >{props.Skills}</p>
        </div>
        <div>

<p className='label p'> Price</p>
<p className='pp' >₹{props.price}<span className='pp-s'>/min</span></p>
</div>

      </div>
    
      </div>
      </div>
      <div className='chat-last'>
       <div>
        <img src={message} />
        <p>Chat</p>
        </div>
        <div>
        <img src={vector} />
        <p>Call</p>
        </div>
      </div>
        <div className='video'>
          <img src={video} />
          </div>
          <div className='line'>
          <img src={line} />
        </div>
        </div>
       

    
   
  )
}

export default Carts
