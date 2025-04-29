import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from '../../../service/operations/backendAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import googleimage from "../../assets/googleimage.png"
import geminiailogo from "../../assets/gemini.png"
function GoogleLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await googleAuth(authResult['code'], dispatch);
        console.log("res.data.user", result.data.user)
      }
      navigate("/")

    } catch (error) {
      console.error("Wrror while requesting google code", error)
    }
  }
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })
  return (
    <div className='text-white flex flex-col justify-between items-center  bg-black h-[100vh] w-[100vw]'>
      <div className='w-full h-20%'>
        <img src={geminiailogo} alt="" className='h-24 w-[20%]' />
      </div>
      <div className='h-[80%] w-full flex justify-center items-start'>
        <div className='flex flex-col w-[60%] justify-center items-center  gap-10 '>
          <h1 className='text-3xl'>Welcome Back!</h1>
          <div className='h-16 w-16 border-[1px] border-gray-500 p-3 rounded-[400px]'>
          <img src={googleimage} alt="" />
          </div>
          
          <button onClick={googleLogin} className='flex justify-evenly gap-2 items-center mt-1 border-[1px] p-4 rounded-3xl border-gray-500 hover:bg-gray-900'>
            <img src={googleimage} alt=" " className='h-10 w-10' />
            <p className='text-xl'>Login with google</p>
          </button>
        </div>
      </div>



    </div>
  )
}

export default GoogleLogin
