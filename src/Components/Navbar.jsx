import React from 'react'
import { IoMenuSharp } from "react-icons/io5";


function Navbar({title}) {
    return (
        <div className='w-[100%] h-[45px] lg:h-[50px] bg-[#00b4cb] flex items-center gap-16 px-5'>
            <IoMenuSharp className='lg:text-3xl'/>
            <h1 className='text-white font-semibold lg:text-2xl'>{title}</h1>
        </div>
    )
}

export default Navbar