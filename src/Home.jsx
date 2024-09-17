import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Body from './components/Body'
 
 
 function Home() {
   return (
     <div> 
         <Header />
      <h1 className='font-black ml-10 text-2xl'>What's on your mind?</h1>
        <Slider />
        <hr />
      <Body />
    </div>
   )
 }
 
 export default Home