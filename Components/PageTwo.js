import React from 'react'
import { SlGlobe } from "react-icons/sl";
import { RiKey2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
const PageTwo = () => {
    return <>
       <div id='page-two'>
            <div className='container'>
               <div className='content-top'>
                  <h1>elevating card program with <br></br> cutting
                     edge technology
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur.</p>
                  <h5>Compare all pro feature →</h5>
               </div>
               <div className='content-bottom'>
                  <div className='elem' id='elem1'>
                   <span><SlGlobe /></span>
                  <h5>Globally Accepted</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                 </div>
                  <div className='elem' id='elem2'>
                   <span><RiKey2Fill/></span>
                  <h5>Biometric Integrated</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  </div>
                  <div className='elem' id='elem3'>
                <span>< FaLock/></span>
                  <h5>Fully Secure</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  </div>
               </div>
            </div>
         </div>
    </>
}

export default PageTwo
