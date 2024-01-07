import React from 'react'
import Image from 'next/image'
import mobile from '../public/mobile.png'
import cardtwo from '../public/cardtwo.png'

const PageThree = () => {
    return <>cl
       <div className='page-three'>
         <div className='page-three-container'>
            <div className='text-container'>
                  <h1>elevating card program with <br></br> cutting
                     edge technology
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur.</p>
                  <h5>Compare all pro feature →</h5>
              </div>
            <div className='page-three-footer'>
               <div className='card' id='card-one'>
                 <img src='/mobile.png'></img>
             </div>
             <div className='card' id='card-two'>
             <img src='/cardtwo.png'></img>
              </div>
          </div>
            </div>
       </div>
    </>
}

export default PageThree
