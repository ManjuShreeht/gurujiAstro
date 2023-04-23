import React from 'react'
import { data } from './data'
import Carts from './Carts'
import star from '../../images/star.png'

function Cart() {
    console.log(data)
   
                  
      
       
  return (
    <div>
       <h3 className='chakra-h3 h33'><tt><span ><img className='star' src={star} /></span>Premium Astrologers<span><img className='star1' src={star} /></span></tt></h3>
    
       <div className='cart-row' >
        
        {data.map(item=>{
        
          return(
            <Carts id={item.id} img={item.img} name={item.name} 
            Specialties={item. Specialties}
            live={item.live}
            price={item.price}
            expeience={item.expeience}
            Skills={item.Skills}
            />
            )
            
          })
          
        }
        </div>
        
      
    </div>
  )
}

export default Cart
