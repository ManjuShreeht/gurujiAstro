import React from 'react'
import Chakra from '../components/chakra/Chakra'
import './home.css'
import Cart from '../components/cart/Cart';
import Slide from '../components/slide/Slide'

function main() {
  return (
    <div className='home'>
      <div className='home1'>

        <Slide />
      </div>
      <div className='home2'>

       <Cart />
      </div>
       
        {/* <Chakra /> */}
    </div>
  )
}

export default main
