import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { MultiPageContext } from '../Context.jsx/MultiFormProvider'
import ConfirmPage from './ConfirmPage'

function UserForm() {
    const { togglePageBtn, togglepage, state, dispatch } = useContext(MultiPageContext)
    const [isContinue, setisContinue] = useState(true)
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Occupation, setOccupation] = useState('')
    const [city, setcity] = useState('')
    const [Bio, setBio] = useState('')

    const getUserDetail = () => {
        dispatch({ type: "Add User Details", payload: { FirstName, LastName, Email, Occupation, city, Bio } })
    }

    return (
        <div>
            {isContinue ? (
                <div className='lg:w-[400px] lg:h-[550px] w-[100%] h-[100vh] flex flex-col items-center'>
                    <Navbar title={"Enter User Details"} />
                    <div className='w-[80%] flex flex-col items-center'>
                        <div className='w-[100%] flex flex-col my-2 text-[15px] lg:text-xl'>
                            <label htmlFor="username">First Name</label>
                            <input type="text" required name='username' value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder='enter name' className='py-2 px-2 outline-none border-b-2 border-gray-500 bg-transparent' />
                        </div>
                        <div className='w-[100%] flex flex-col text-[15px] lg:text-xl'>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" required name='lastname' value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' className='py-2 px-2 outline-none border-b-2 border-gray-500 bg-transparent' />
                        </div>
                        <input type="text" required name='email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='py-2 px-2 lg:text-xl outline-none border-b-2 border-gray-500 bg-transparent w-[100%] my-2 lg:my-4' />
                        <button onClick={() => setisContinue(!isContinue)} className='bg-[#00b4cb] py-1 px-2 text-white'>CONTINUE</button>
                    </div>
                </div>
            ) : (
                <div>
                    {togglepage ? (
                        <div className='lg:w-[400px] lg:h-[550px] w-[100%] h-[100vh] flex flex-col items-center'>
                            <Navbar title={"Enter Personal Details"} />
                            <div className='w-[80%] flex flex-col items-center'>
                                <div className='w-[100%] flex flex-col my-2 text-[15px] lg:text-xl'>
                                    <label htmlFor="occupation">Occupation</label>
                                    <input type="text" required name='occupation' value={Occupation} onChange={(e) => setOccupation(e.target.value)} placeholder='occupation' className='py-2 px-2 outline-none border-b-2 border-gray-500 bg-transparent' />
                                </div>
                                <div className='w-[100%] flex flex-col text-[15px] lg:text-xl'>
                                    <label htmlFor="city">City</label>
                                    <input type="text" required name='city' value={city} onChange={(e) => setcity(e.target.value)} placeholder='Enter City' className='py-2 px-2 outline-none border-b-2 border-gray-500 bg-transparent' />
                                </div>
                                <input type="text" required name='bio' value={Bio} onChange={(e) => setBio(e.target.value)} placeholder='Bio' className='py-2 px-2 outline-none border-b-2 border-gray-500 bg-transparent w-[100%] my-2 lg:my-4 lg:text-xl' />
                                <div className='flex gap-5'>
                                    <button onClick={() => { togglePageBtn(), getUserDetail() }} className='bg-[#00b4cb] py-1 px-2 text-white'>CONTINUE</button>
                                    <button onClick={() => setisContinue(!isContinue)} className=' shadow-xl bg-white w-[80px] font-semibold'>BACK</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <ConfirmPage />
                    )}
                </div>
            )}
        </div>
    )
}

export default UserForm