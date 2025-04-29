import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { sidebarLinks } from '../../data/SidebarLinks'
import { useSelector } from 'react-redux'



function Settings() {
    const { open } = useSelector((state) => state.auth)
    const [sideLinks, setSideLinks] = useState([])
    useEffect(() => {
        setSideLinks(sidebarLinks);
    }, [])
    return (
        <>
            <div className='absolute top-[500px] ml-0 mx-auto w-[85%] flex flex-col gap-2 p-2 justify-evenly items-center  '>
                {
                    sideLinks.map((links, index) => {
                        return <div key={index} className='mx-auto sticky  w-full hover:bg-[#333537] text-xl rounded-3xl flex justify-start items-center  p-1 '>

{open ? <links.icon className="ml-2 " />:<links.icon className="ml-2  mt-2" />}
                            {
                                open ? (<Link to={links.link} className='ml-4 flex justify-between gap-3 items-center'>
                                    {
                                        open ? (<p>{links.title}</p>) : (null)
                                    }
                                </Link>) : (
                                    null
                                )
                            }


                        </div>
                    })

                }
            </div>
            {/* {
                open ? (
                    <div className='absolute top-[500px] ml-0 mx-auto w-[85%] flex flex-col gap-2 p-2 justify-evenly items-center  '>
                        {
                            sideLinks.map((links, index) => {
                                return <div key={index} className='mx-auto w-full hover:bg-[#333537] text-xl rounded-3xl flex justify-start items-center  p-1 '>

                                    <links.icon />
                                    <Link to={links.link} className='ml-4 flex justify-between gap-3 items-center'>
                                        {
                                            open ? (<p>{links.title}</p>) : (null)
                                        }
                                    </Link>

                                </div>
                            })

                        }
                    </div>
                ) : (

                    <div className='absolute top-[500px] ml-0 mx-auto w-[85%] flex flex-col gap-6 p-2 justify-evenly items-center  ' >
                        {
                            sideLinks.map((links, index) => {
                                return <div key={index} className='mx-auto  rounded-4xl hover:bg-[#333537] flex justify-center items-center gap-2  text-xl'>

                                    <links.icon />


                                </div>
                            })

                        }
                    </div>
                )
            } */}
        </>


    )
}

export default Settings
