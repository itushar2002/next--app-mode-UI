import React from 'react'
import { RiMenuFill } from "react-icons/ri";
 const Nav = () => {
    return <>
     <div id='nav'>
               <div className='nav-left'>
                   <h3>Mode UI</h3>
               </div>
               <div className='nav-center'>
                   <a href=''>Card access</a>
                   <a href=''>banking</a>
                   <a href=''>processing</a>
                   <a href=''>about</a>
                   <a href=''>contact</a>
               </div>
               <div className='nav-right'>
                <button>Login <img src='/login-box-line.png'></img> </button>
                 <span><RiMenuFill/></span>
              </div>
            
           </div>    
    </>
}

export default Nav
