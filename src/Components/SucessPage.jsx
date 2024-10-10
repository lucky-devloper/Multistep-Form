import React from 'react'
import Navbar from './Navbar'

function SucessPage() {
    return (
        <div className='w-[100%] h-[100%] lg:w-[400px] lg:h-[550px] lg:bg-white'>
            <Navbar title={"Register Successfully"} />
            <div className='px-1'>
                <h1 className='text-center my-4 font-semibold text-xl'>Thank You For Your Submission!</h1>
                <p className='text-center'>You will get an email with future instructions.</p>
            </div>
        </div>
    )
}

export default SucessPage