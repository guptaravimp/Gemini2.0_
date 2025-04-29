import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { setToken, setUser } from '../../slices/authSlice';

function LoginButton() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.auth)
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const handleLogout=()=>{
        setOpenModal(false)
        dispatch(setToken(""))
        dispatch(setUser(""))
        localStorage.clear()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
       
    }
    // console.log(token)
    return (
        <div className='relative mr-24 '>
            {
                token ? (
                    <button onClick={() => setOpenModal(!openModal)} className='h-12 w-12 rounded-3xl'><img src={user?.profilePicture} alt="" className='h-12 w-12 rounded-3xl' /></button>

                ) : (

                    <button className='bg-[#4C4E51] rounded-md text-xl  h-10 w-[100px] flex justify-center items-center' onClick={() => navigate('/login')}>Login</button>
                )
            }

            {
                openModal && token ? (<div className='absolute right-[-45px] bg-[#282A2C] top-14 rounded-2xl border-[1px] border-gray-600  w-32'>
                    <div className='flex flex-col w-full gap-2'>
                        <p className='w-full flex justify-start gap-2 items-center text-sm border-b-[1px] border-gray-600 p-2'><FaUser className='text-md'/>
                        {user.name}</p>
                        <button onClick={handleLogout} className='w-full flex justify-start items-center gap-2 text-sm   p-2'><IoLogOutOutline className='text-xl' />
                        Logout</button>
                    </div>

                </div>) : (
                    ""
                )
            }


        </div>
    )
}

export default LoginButton
