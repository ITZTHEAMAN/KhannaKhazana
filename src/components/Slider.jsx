import React from 'react'
import { useEffect, useState } from 'react';
import Upperfood from './Upperfood';
import ShimmerH from './ShimmerH';

function Slider() {

    const [food,setfood] = useState([]);

  useEffect(() => {
    calla();
  }, [])
  

  const calla = async ()=>{

    const fdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await fdata.json();
   const restau = json.data.cards[0].card.card.gridElements.infoWithStyle.info
   setfood(restau);
  
   
   }
   if(food.length ===0){
    return <ShimmerH />
    
   }

  return (
    <div className='scroller flex overflow-x-auto ml-10 mr-10 h-56 '>
        {food.map((item,index)=>(
             <img key={index} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item.imageId} alt="" />
        

        ))}
    </div>
  )
}

export default Slider