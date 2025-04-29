import React from 'react'
import geminiIcon from "../../assets/geminilogo.png"
import LoginButton from '../MainComponents/LoginButton'
function Navbar() {
  return (
    <div className='top-0 h-16 sticky border-1 w-[100%] text-white flex justify-between items-center'>
      <div className='ml-2 flex flex-col justify-start items-start gap-2'><p className='text-2xl '>Gemini</p>
        <select name="" id="" className='text-white rounded-2xl bg-[#282A2C] w-full flex justify-evenly items-center px-2 py-[2px]'>
          <option value="" className=''>2.0 Flash</option>
        </select>
      </div>
      <div className='flex justify-evenly items-center gap-10 '>


        <button className='flex justify-evenly gap-2 items-center  py-2 bg-[#4C4E51] rounded-xl px-4 '><img src={geminiIcon} alt="" className='h-6 w-6' />Try Gemini Advance</button>
        <LoginButton  />
      </div>
    </div>
  )
}

export default Navbar
