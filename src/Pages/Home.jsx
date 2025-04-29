import React, { useState } from 'react'
import Sidebar from '../components/SideBars/Sidebar'
import ChatSection from '../components/MainComponents/ChatSection'
function Home() {
  
  return (
    <div className='text-black mx-auto h-full w-full'>
        <div className='mx-auto flex justify-start items-start h-full w-full '>
            <Sidebar />
            <ChatSection/>
     
        </div>
   
    </div>
  )
}

export default Home
