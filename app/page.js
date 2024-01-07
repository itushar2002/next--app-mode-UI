import React from 'react'
import Announcement from '@/Components/Announcement'
import Hero from '@/Components/Hero'
import LogoCloud from '@/Components/LogoCloud'
import Nav from '@/Components/Nav'
import PageTwo from '@/Components/PageTwo'
import PageThree from '@/Components/PageThree'
import PageFour from '@/Components/PageFour'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const page = () => {
   return <>
      <div id='main'>
         <div id='page-one'>
         <Announcement /> 
          <Nav />
          <Hero />
         <LogoCloud />
       </div>
       <PageTwo />
       <PageThree />
       <PageFour />
       <div id='footer-section'>
         <div id='text'>
         <h1>Mode UI</h1>
         <p>Mode ui is a comprehensive design system that empowers
           designers and developers to create cohesive and visually stunning
           user interfaces accross various platforms and devices
           </p>
         </div>
         <div className='about'>
           <div className='lists'>
           <ul id='ul1'>
           <li>about us </li>
           <li> pricing </li>
           <li> contact us</li>
           <li> features </li>
        </ul>
        <ul id='ul2'>
           <li>figma design System</li>
           <li>los kit</li>
           <li> android kit</li>
           <li> wire frame </li>
         </ul>
         <ul>
           <li>Template </li>
           <li> Landing page </li>
           <li> Documentations</li>
           <li>Comp library</li>
         </ul>
         <ul>
           <li>privacy policy </li>
           <li> disclaimer </li>
           <li> Terms & Condition</li>
           <li> affiliate program </li>
        </ul>
            </div>
         <div className='Links'>
           <FaGithub />
           <FaLinkedin />
           <FaDiscord />
         </div>
         </div>
        </div>
    
      </div>
    </>
}

export default page
