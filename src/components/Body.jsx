
import React from 'react'
import Card from './Card';
import { useEffect,useState } from 'react';
import Slider from './Slider';



function Body() {

const [listofrestau,setlistofrestau] = useState([])

  useEffect(() => {
    getdata();
  }, [])
  

  const getdata = async ()=>{

    const fdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await fdata.json();
   const restau = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
   setlistofrestau(restau);
  // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

   
   }
  
  
 
  return (

   
    
    <div className='flex flex-wrap'>
   
      {listofrestau.map((item,index)=>(
        <Card key={index} item={item}/>
      ))}

     

    </div>
    
  )
}

export default Body