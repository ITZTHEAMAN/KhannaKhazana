import React from 'react'
import Body from './components/Body'
import footer from './components/footer'
import Header from './components/Header'
import { useEffect } from 'react'
import Slider from './components/Slider'  


function App() {


  return (
  
  
    <div>
      <Header />
      <h1 className='font-black ml-10 text-2xl'>What's on your mind?</h1>
     <Slider />
      <Body />
    </div>
  )
}

export default App