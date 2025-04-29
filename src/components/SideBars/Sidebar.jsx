import { IoMdMenu } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import RecentChats from './RecentChats';
import Location from './Location';
import { useDispatch, useSelector } from 'react-redux'
import { setOpentoggle } from '../../slices/authSlice';
import Settings from "./Settings";
import { useNavigate } from "react-router-dom";
import { setChats, setResponse } from "../../slices/ChatSlice";
function Sidebar() {

    const { open } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleOnMenuClick = () => {
        dispatch(setOpentoggle(true))
    }
   const handleChatCLear=()=>{
    localStorage.removeItem("chats")
    localStorage.removeItem("response")
    setResponse(null)
    setChats("")
   }
   
  
    return (
        <div className={`bg-[#282A2C] relative  flex flex-col justify-evenly items-start p-2  text-[#A2A9B0] h-[100vh]   transition-all duration-300 ease-in-out ${open ? 'w-[22%]' : 'w-[5%]'}`}>

            <button className={`absolute ml-2 top-5 flex justify-center rounded-3xl p-2 h-[40px] items-center  hover:bg-[#353739] ${open ? (null) : ("bg-[#353739] ")}  `} onClick={handleOnMenuClick}>
                <div className='flex sticky'>
                    <IoMdMenu className='text-2xl ' />
                </div>
            </button>


            <div className=' absolute top-32 flex justify-start items-center w-[60%]' >
                <button onClick={handleChatCLear} className='  ml-2 flex h-10 w-[70%] bg-[#202123]  rounded-2xl text-md justify-evenly items-center'>
                    <IoMdAdd className='font-bold sticky text-md' />
                    {
                        open ? (<span className='font-bold'>New Chat</span>) : (null)
                    }

                </button>

            </div>

            {
                open ? (<RecentChats />) : (null)
            }



            <Settings/>

            <Location />


        </div>
    )
}

export default Sidebar
