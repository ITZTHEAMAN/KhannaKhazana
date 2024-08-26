import React from 'react'

function Card(item) {
    
  return (
    <div className='bg-slate-300 w-60 m-8 my-4 overflow-hidden'>
        <span className=''>
        <img className=' pt-1 h-60 border-2 rounded-2xl m-1' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+item.item.info.cloudinaryImageId}  alt="" />
        </span>
        <span className='p-5 m-5'>
            <h1 className='font-black '>{item.item.info.name}</h1>
            <p className='flex'>{item.item.info.cuisines.join(",")}</p>
            <p>Price Range: {item.item.info.costForTwo}</p>
            <p>Delivery Time : {item.item.info.sla.deliveryTime}min.</p>
        </span>
    </div>
  )
}

 export default Card



 


