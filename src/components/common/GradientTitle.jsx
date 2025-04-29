import React from 'react'
import { useSelector } from 'react-redux'

function GradientTitle() {
    const {user}=useSelector((state)=>state.auth)
    return (
        <div className=''>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
                Hello, {user?.name || "Coder!"}
            </p>
            <h1 className='text-[#c4c7c5] text-3xl mt-2 font-bold opacity-30'>How can I help You Today?</h1>

        </div>
    )
}

export default GradientTitle
