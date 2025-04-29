import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoMdList } from "react-icons/io";
import { Link } from 'react-router-dom';
import Gems from './Gems';
import { useSelector } from 'react-redux';
function RecentChats() {
    const [upmore, setUpmore] = useState(true);
    const { chats } = useSelector((state) => state.chat)
    const handleChangeMore = () => {
        if (upmore) {
            setUpmore(false)
        } else {
            setUpmore(true);
        }

    }
    const [localChats, setLocalChats] = useState([]);

    // Load chats from localStorage when the component mounts
    useEffect(() => {
        const storedChats = localStorage.getItem('chats');
        if (storedChats) {
            setLocalChats(JSON.parse(storedChats));
        }
    }, []);
    console.log("chat length", chats.length)
    const text = "define the term o of Biotechnology";

    return (

        <div className="absolute   top-52 mx-auto w-[90%] max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 flex flex-col gap-3">
            <p className='ml-4 text-white flex gap-2 items-center text-xl font-bold'>
                Recent
            </p>
            <div className=' flex flex-col gap-3 justify-evenly'>

                {
                    chats ? (
                        <>
                            {chats.slice().reverse().map((chat, index) => {
                                return (
                                    <p key={index} className='text-[15px] w-full p-1 hover:bg-[#333537] rounded-3xl'>
                                        <Link onClick={"https://chatgpt.com/"} className="flex items-center gap-2 mx-4">
                                            <IoMdList />
                                            {chat.slice(0, 20) + "..."}
                                        </Link>
                                    </p>
                                );
                            })}
                        </>

                    ) : (" ")
                }

            </div>
            <button onClick={handleChangeMore} className=' flex justify-start ml-4  gap-2 mt-4 items-center'>
                {upmore ? <FaAngleDown /> :<FaAngleUp /> }
                More
            </button>
            {
                upmore?(""):(<Gems />)
            }
            
        </div>

    )
}

export default RecentChats
