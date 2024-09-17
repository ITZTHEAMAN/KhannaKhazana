import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import About from './components/About'
import Home from './Home'
import Contact from './components/Contact'
import Menu from './components/Menu'




 
const Routing =  createBrowserRouter([
  {
    path:"/",
  element: <Home /> 
  
},
{
  path:"/about",
  element: <About />
},
{
  path:"/contact",
  element:<Contact />
},
{
  path:"/restaurant/:resid",
  element:<Menu />
}
])

function App() {


  return (
    <div>
    <RouterProvider router={Routing} > </RouterProvider>
     
    </div>
 
  )
}

export default App
