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
     <Slider />
      <Body />
    </div>
  )
}

export default App