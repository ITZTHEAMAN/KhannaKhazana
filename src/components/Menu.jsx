import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Menulist from './Menulist'
 
function Menu() {
  const [menu,setmenu] =  useState([])
  const {resid} = useParams()
  
 

  useEffect(()=>{
    fetchmenu()
  },[])

  const fetchmenu = async()=>{
    const mendata = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=`+resid)
    const menudata =   await mendata.json()
    const meu =  menudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    setmenu(meu)
    // const test =  menudata.data
    // console.log(test)
    
  }
  
  return (
    <>
     <h1>restarant name</h1>
    {menu.map((item)=>(<Menulist item={item} />))}
    </>

  )
}

export default Menu