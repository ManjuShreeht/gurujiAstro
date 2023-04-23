import React from 'react'
import Chakra from '../components/chakra/Chakra'
import './home.css'
import Cart from '../components/cart/Cart';
import Slide from '../components/slide/Slide'
import RR from '../components/reviews/RR';

function main() {
  return (
    <div className='home'>
      <div className='home1'>

        <Slide />
      </div>
      
      <div className='home2'>

       <Cart />
      </div>
      <div className='home3'>
        <Chakra />
      </div>
      <div className='home4'>
        <RR />
      </div>
       
        {/* <Chakra /> */}
    </div>
  )
}

export default main
