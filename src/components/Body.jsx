
import React from 'react'
import Card from './Card';
import { useEffect,useState } from 'react';
import ShimmerB from './ShimmerB';
import { Link } from 'react-router-dom';



function Body() {



const [listofrestau,setlistofrestau] = useState([])
const [listofrestau2,setlistofrestau2] = useState([])
const [search,setsearch] = useState("")


  

// api fetching

  useEffect(() => {
    getdata();
  }, [])

  const getdata = async ()=>{

    const fdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await fdata.json();
   const restau = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
   setlistofrestau(restau);
   setlistofrestau2(restau);
  

   

   }
 
   
   
   

  if(listofrestau.length===0) {
   
    return <ShimmerB />
  }
  
 
  return (
    
    <>
    <input value={search} onChange={(aman)=>{setsearch(aman.target.value)}} className='m-5' placeholder='Serch....' type="text"  />
    <button onClick={()=>{
      
     const filterrest = listofrestau.filter((rest)=> rest.info.name.toLowerCase().includes(search.toLowerCase()) || rest.info.cuisines.toString().toLowerCase().includes(search.toLowerCase()))
      setlistofrestau2(filterrest)
}}>{search.length !== 0 ? "Search" : "All restaurant's"}</button>
    <div className='flex flex-wrap items-center justify-center'>
      {listofrestau2.map((item,index)=>(
       <Link key={index} to={"./restaurant/"+ item.info.id} > <Card item={item}/></Link>
      ))}

    </div>
    </>
    
  )
}

export default Body