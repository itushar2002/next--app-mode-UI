import React from 'react'


const PageFour = () => {
    return <>
        <div className='page-four'>
         <div className='page-four-top'>
           <div className='box' id='box-one'>
             <h2> 2 Million </h2>
             <h5>Costumer</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
           <div className='box' id='box-two'>
             <h2> 1 k </h2>
             <h5>Downloads</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
           <div className='box' id='box-three'>
             <h2> $73 Million </h2>
             <h5>transation</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
           <div className='box' id='box-four'>
             <h2> 2.0 </h2>
             <h5>Latest Version</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
            </div>
            <div className='page-four-center'>
                <img src='https://seeklogo.com/images/W/wise-transferwise-logo-75429A14EE-seeklogo.com.png'></img>
                <h1>I had the pleasure of experiancing the
                    the next generation of card solutions with this
                    incredible product.It's refreshing to see such innovation
                    int the financial industry
                </h1>
                <img className='imageTwo' src='/Image.png'></img>
                <h5>Lead Designer</h5>
                <img className='rating' src='/Rating.png'></img>
            </div> 
            <div className='page-four-bottom'>
                <h1>Unlock limitless possibilities with <br></br> our new card Solutions</h1>
                <div id='btn'>
                <button className='btn1'>Unlock your card</button>
                <button className='btn2'>Costumer Support</button>
               </div>
        </div>
       </div>
    </>
}

export default PageFour
