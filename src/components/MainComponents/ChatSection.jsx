import Navbar from '../common/Navbar'
import GradientTitle from '../common/GradientTitle'
import React, { useState } from 'react';
import { MdKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { RiImageAiLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { generateContent } from '../../../service/operations/backendAPI';
import { setChats } from '../../slices/ChatSlice';
import geminilogo from "../../assets/geminilogo.png"
function ChatSection() {
  const [content, setInputArea] = useState("");
  const [Isbuttonactive, setbuttonactive] = useState(true)
  const { referesh } = useSelector((state) => state.auth)
  const { chats } = useSelector((state) => state.chat)
  const [responsee, setResponse] = useState(null)
  const [question, setquestion] = useState("")
  const dispatch = useDispatch()
  const [activeLoader, setactiveloader] = useState(true)
  // if (referesh) {
  //   setInputArea("")
  // }
  const delayPara=(index,nextWord)=>{
    setTimeout(() => {
      setResponse(prev=>prev+nextWord)
    }, 75*index);
  }
  const handleInputChange = (e) => {
    setbuttonactive(false)
    setInputArea(e.target.value);
    e.target.style.height = "auto"; // Reset height
    e.target.style.height = `${e.target.scrollHeight}px`; // Expand based on content
  };

  const handleSentChat = async (e) => {
    e.preventDefault();
    setquestion(content);
    setactiveloader(true)
    console.log("Content hai yaha ", content)
    const response = await generateContent({ content });

    const rawResponse = response?.response;
    if (!rawResponse || typeof rawResponse !== "string") {
      console.error("Invalid or missing response:", response);
      setactiveloader(false);
      return; // exit early to avoid errors
    }
    
    let resarray=response?.response?.split("**")
    let newResponse="";
    for(let i=0;i<resarray.length;i++){
       
      if(i===0 || i%2!==1){
        
        newResponse+=resarray[i];
      }else{
        // newResponse += "<b>" + resarray[i] + "</b>";
        newResponse +="<b>"+resarray[i]+"</b>";
      }
    }
    let newResponse2 = newResponse?.split("*").join("<br>");

    setactiveloader(false)
    console.log("response is ye hai", newResponse2);
    // Check if the response has data
    dispatch(setChats([...chats, content]));
    // const data=await response.response.json();
    let newResponseArray=newResponse2.split(" ");
    for(let i=0;i<newResponseArray.length;i++){
      const nextWord=newResponseArray[i];
      delayPara(i,nextWord+" ")
    }
    // setResponse(newResponse2)
    
    const updatedChats = [...chats, content];
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    setInputArea("");
  };
  localStorage.setItem('response', JSON.stringify(responsee));
  // const cleanedResponse = responsee.replace(/^null/, "");

  return (
    <div className={`mx-auto flex flex-col justify-between items-center p-4 bg-[#1B1C1D] h-[100vh]  text-[#A2A9B0] transition-all duration-300 ease-in-out ${open ? 'w-[95%]' : 'w-[87%]'}`} >
      <Navbar />
      {/* heading part  */}
      {
        responsee ? ("") : (<GradientTitle  />)
      }
      {/* Question and response part  */}


      {
        question ? (

          <div className=' w-full flex justify-center items-center max-h-[100%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800  '>
            <div className='w-[70%]  h-full mt-40'>
              {
                question ? (
                  <div className=' flex justify-end items-center w-full h-[12%] text-white'>
                    <div className='bg-[#333537] h-full rounded-l-3xl rounded-br-3xl rounded-tr-sm  text-xl p-4  flex justify-end items-center'>
                      {question}
                    </div>
                  </div>) : ("")
              }
              {/* response part  */}

              <div className='flex mt-10'>
                <div className='relative flex w-[6%]   justify-center items-start'>
                  {
                    activeLoader ? (<><img src={geminilogo} alt="" className='loader absolute h-8 w-8 z-50 ' />
                      <span className="mr-10 z-100">


                      </span> </>) : (<img src={geminilogo} alt="" className=' absolute h-8 w-8 z-50' />)
                  }

                </div>
                <div className='flex w-[92%]'>
                  {
                    activeLoader ? (
                      // <div className='opacity-1'>

                      <div className="flex w-[100%] flex-col items-center space-y-3">
                      <div className="h-5 w-full origin-left animate-loading rounded-sm bg-gradient-to-r from-[#7A7ECD] from-40% via-blue-500/60 to-[#5099DD] to-70% bg-[length:200%] opacity-0"></div>
                      <div className="h-5 w-full origin-left animate-loading rounded-sm bg-gradient-to-r from-[#7A7ECD] from-40% via-blue-500/60 to-[#5099DD] to-70% bg-[length:200%] opacity-0"></div>
                      <div className="h-5 w-full origin-left animate-loading rounded-sm bg-gradient-to-r from-[#7A7ECD] from-40% via-blue-500/60 to-[#5099DD] to-70% bg-[length:200%] opacity-0"></div>
                    </div>
                    


                      // </div>

                    ) : (

                      <div>{
                        responsee ? (<div dangerouslySetInnerHTML={{__html:responsee }}/>) : (<p>just a sec</p>)
                      }</div>
                    )



                  }

                </div>

              </div>

            </div>
          </div>


        ) : ("")
      }






      <div className="w-[70%] mt-8 flex items-center border border-gray-500 rounded-3xl mb-8 px-4 py-2 bg-[#1B1C1D]">
        <RiImageAiLine className="text-2xl text-white mr-2" />

        <textarea
          className="flex-1 p-2 bg-[#1B1C1D] text-white text-xl placeholder-gray-400 border-none focus:outline-none resize-none overflow-hidden"
          value={content}
          onChange={handleInputChange}
          placeholder="Type your message..."
          rows="1"
        />

        <button onClick={handleSentChat} className={`ml-2 h-[45px] w-[45px] flex justify-center  items-center p-3 ${Isbuttonactive ? ("") : ("bg-[#282A2C] rounded-3xl")}`}>
          {content.trim() ? (
            <IoSend className="text-2xl text-white ml-[3px]" />
          ) : (
            <MdKeyboardVoice className="text-2xl text-white" />
          )}
        </button>
      </div>
      {/* <InputArea/> */}
    </div>
  )
}

export default ChatSection
