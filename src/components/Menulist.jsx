import React from 'react'

function Menulist(item) {
 console.log(item)
  
  return (
    <div> 
        <div  className='flex flex-col items-center'> 
    
     <hr />
     <div className='flex border-solid border-2 rounded-lg m-2 w-7/12 items-center justify-between p-2 pl-12 pr-12 '>
     <div>
     <h1 className=' m-2 font-bold text-xl'>{item.item.card.info.name}</h1>
     <h1 className='ml-2'>₹{(item.item.card.info.price || item.item.card.info.defaultPrice)/100}</h1>
     <p className='font-thin text-slate-700'>{item.item.card.info.description}</p>
     </div>
      
      <div className='flex flex-col items-center'>
        <img className='h-28 w-28 rounded-3xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ item.item.card.info.imageId} alt="Food image" />
      <button className='border-2 rounded text-green-500 bg-slate-50 pl-5 pr-5  m-2'>ADD</button>
      </div>
      
     </div>
<hr />
    

    </div>
    </div>
  )
}

export default Menulist
