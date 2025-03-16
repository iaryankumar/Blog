import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import { PiGitlabLogoSimpleFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='h-[95px] w-full  flex items-center justify-between md:px-16 px-7 bg-primary sm:relative sticky top-0'>
                <div className='flex items-center justify-center font-poppins gap-2'>
                <PiGitlabLogoSimpleFill className='text-3xl' />
                <h1 className='tracking-widest font-popLight text-[22px] sm:block hidden'><span className='font-popBold'>Blog</span>Times</h1>
                </div>
                <div className='h-full w-[390px] flex items-center justify-end font-secondary'>
                    <Link to={'/auth-reg'} className='h-[50px] sm:w-[200px] w-[150px] border border-border text-third rounded-full flex items-center justify-center gap-4 cursor-pointer hover:bg-secondary hover:text-primary transition-all ease-in'>Get Start <GrFormNextLink className='text-2xl' /></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
