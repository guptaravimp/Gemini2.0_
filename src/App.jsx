import { useState } from 'react'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/common/Navbar';
import Error from './components/common/Error';
import GoogleLogin from './components/common/GoogleLogin';

import { GoogleOAuthProvider } from '@react-oauth/google';


const GoogleAuthWrapper=()=>{
  return (
    <GoogleOAuthProvider clientId='76866074347-cvn76d7vf773dhq574rnebv14ur57un9.apps.googleusercontent.com'>
      <GoogleLogin></GoogleLogin>
    </GoogleOAuthProvider>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element: <div> <Home/></div> 
  },
  {
    path:"/login",
    element: <div> <GoogleAuthWrapper/></div> 
  },
  {
    path:"*",
    element: <div> <Error/></div> 
  }
]
  
)
function App() {

  

  return (
    <div className='mx-auto'>

       <RouterProvider router={router}/>
    </div>
  )
}

export default App
