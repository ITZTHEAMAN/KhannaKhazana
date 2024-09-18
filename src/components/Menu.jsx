import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Menulist from './Menulist'
 
function Menu() {
  const [menu,setmenu] =  useState([])
  const [menu2,setmenu2] =  useState([])
  const [menu3,setmenu3] =  useState([])
  const [menu4,setmenu4] =  useState([])
  const [menu5,setmenu5] =  useState([])
  const [menu6,setmenu6] =  useState([])

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
    const meu2 =  menudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards
  setmenu2(meu2)
  const meu3 =  menudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards
  setmenu3(meu3)
  const meu4 =  menudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards
  setmenu4(meu4)
  const meu5 =  menudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards
  setmenu5(meu5)
  const meu6 =  menudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards
  setmenu6(meu6)
  }
  
  return (
    <div >
      <span className='flex flex-col items-center'>
      <h1 className='m-2 text-5xl font-bold underline-offset-1 '>{restname}</h1>
      </span>
      <hr />
       
       {menu.map((item)=>(<Menulist item={item} />))}
       {menu2.map((item)=>(<Menulist item={item} />))}
       {menu3.map((item)=>(<Menulist item={item} />))}
       {menu4.map((item)=>(<Menulist item={item} />))}
       {menu5.map((item)=>(<Menulist item={item} />))}
       {menu6.map((item)=>(<Menulist item={item} />))}
    </div>
    
    

  )
}

export default Menu
