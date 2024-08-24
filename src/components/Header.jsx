import React from 'react'

function Header() {
  return (
    
    <div className=' flex border-2 border-slate-800 m-2 '>
        <span className='mr-20'>
            <img className='w-[6vw]' src="https://img.restaurantguru.com/rb89-emblem-Khana-Khazana-2022-09.jpg" alt="logo" />
        </span>
        <span className='flex gap-32 items-center relative translate-x-[20vw] cursor-pointer '>
            <h3>Home</h3>
            <h3>Contact</h3>
            <h3>Cart</h3>
            </span>

    </div>
  
)}

export default Header
