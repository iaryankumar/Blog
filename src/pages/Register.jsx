import React from 'react'
import { CiPhone } from 'react-icons/ci'
import { LuUser } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className='flex items-center justify-center  h-screen w-full'>
        <div className=' md:block hidden h-full w-[45%] bg-[url(../public/unko.jpg)] bg-cover'></div>
        <div className='h-full md:w-[55%] w-full  flex flex-col md:items-start items-center md:justify-start justify-center py-16 sm:px-16 px-7'>
            <div>
                <h1 className='sm:text-5xl text-4xl font-popBold font-secondary text-black tracking-[0.8px]'>Reader Signup</h1>
                <p className=' mt-3 text-[16px] font-secondary font-light tracking-wider text-third'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto distinctio numquam.</p>
            </div>
            <div className='h-max w-full py-5 flex flex-col gap-4 mt-3 text-gray-400 font-secondary'>
                <div className='h-[45px] sm:w-[90%] w-full border border-gray-200 rounded flex items-center px-3 gap-3'>
                <LuUser className='text-xl' />
                <input type="text" placeholder='Enter Username' className='flex-1 font-light text-[15px] text-gray-600 placeholder:text-gray-400 placeholder:tracking-wider outline-none mt-0.5'/>
                </div>
                <div className='h-[45px] sm:w-[90%] w-full border border-gray-200 rounded flex items-center px-3 gap-3'>
                <MdOutlineMail className='text-xl' />
                <input type="email" placeholder='Enter Email' className='flex-1 font-light text-[15px] text-gray-600 placeholder:text-gray-400 placeholder:tracking-wider outline-none mt-0.5'/>
                </div>
                <div className='h-[45px] sm:w-[90%] w-full border border-gray-200 rounded flex items-center px-3 gap-3'>
                <CiPhone className='text-xl' />
                <input type="number" placeholder='Enter Phone' className='flex-1 font-light text-[15px] text-gray-600 placeholder:text-gray-400 placeholder:tracking-wider outline-none mt-0.5'/>
                </div>
                <div className='h-[45px] sm:w-[90%] w-full border border-gray-200 rounded flex items-center px-3 gap-3'>
                <LuUser className='text-xl' />
                <input type="password" placeholder='Enter Password' className='flex-1 font-light text-[15px] text-gray-600 placeholder:text-gray-400 placeholder:tracking-wider outline-none mt-0.5'/>
                </div>
                <button className='bg-blue-800 py-2.5 rounded sm:w-[90%] w-full mt-3 text-white hover:bg-blue-600 cursor-pointer'>Signup</button>
                <p className='text-[15px] text-gray-800 text-end sm:pe-16 p-5 md:mt-1 mt-2'>Already have an account <Link to={'/auth-login'} className='text-blue-600 underline'> Login</Link></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
