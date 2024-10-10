import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { MultiPageContext } from '../Context.jsx/MultiFormProvider'
import SucessPage from './SucessPage'

function ConfirmPage() {
    const { togglePageBtn, state, dispatch } = useContext(MultiPageContext)
    const [togglesuccespage, settogglesuccespage] = useState(true)
    return (
        <>
            {togglesuccespage ? (
                <div className='w-[100%] h-[100vh] lg:w-[400px] lg:h-[550px]'>
                    <Navbar title={"Confirm Details"} />
                    {state?.map((details, index) => {
                        return <div key={index} className='w-[100%] flex flex-col items-center text-center gap-4 mt-4'>
                            <div>
                                <label htmlFor="" className='font-semibold text-[18px]'>First Name</label>
                                <p className='text-gray-500'>{details.FirstName}</p>
                            </div>
                            <div>
                                <label htmlFor="" className='font-semibold text-[18px]'>Last Name</label>
                                <p className='text-gray-500'>{details.LastName}</p>
                            </div>
                            <div>
                                <label htmlFor="" className='font-semibold text-[18px]'>Email</label>
                                <p className='text-gray-500'>{details.Email}</p>
                            </div>
                            <div>
                                <label htmlFor="" className='font-semibold text-[18px]'>Occupation</label>
                                <p className='text-gray-500'>{details.Occupation}</p>
                            </div>
                            <div>
                                <label htmlFor="" className='font-semibold text-[18px]'>City</label>
                                <p className='text-gray-500'>{details.city}</p>
                            </div>
                            <div>
                                <label htmlFor="" className='font-semibold text-[18px]'>Bio</label>
                                <p className='text-gray-500'>{details.Bio}</p>
                            </div>
                        </div>
                    })}
                    <div className='flex justify-center mt-2 lg:mt-4 gap-4'>
                        <button onClick={() => settogglesuccespage(!togglesuccespage)} className='bg-[#00b4cb] text-white text-[16px] p-1'>CONFIRM & CONTINUE</button>
                        <button onClick={() => togglePageBtn()} className='shadow-xl bg-white w-[80px] font-semibold'>Back</button>
                    </div>
                </div>
            ) : (
                <SucessPage />
            )}
        </>
    )
}

export default ConfirmPage