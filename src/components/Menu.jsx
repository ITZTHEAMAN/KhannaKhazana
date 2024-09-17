import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Menulist from './Menulist'
 
function Menu() {
  const [menu,setmenu] =  useState([])
  const {resid} = useParams()
  const [restname,setrestname] =  useState("")
  
 

  useEffect(()=>{
    fetchmenu()
  },[])

  const fetchmenu = async()=>{
    const mendata = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=`+resid)
    const menudata =   await mendata.json()
    const meu =  menudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    setmenu(meu)
    const test =  menudata
    const name = test.data.cards[0].card.card.text
    setrestname(name)
    
  }
  
  return (
    <div >
      <span className='flex flex-col items-center'>
      <h1 className='m-2 text-5xl font-bold underline-offset-1 '>{restname}</h1>
      </span>
      <hr />
       
       {menu.map((item)=>(<Menulist item={item} />))}
    </div>
    
    

  )
}

export default Menu