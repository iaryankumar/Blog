import React from 'react'
import { Link } from 'react-router-dom'

const Articles = () => {
    
    return (
        <>
            <div className='h-max pt-8 pb-10 w-full sm:px-14 px-5'>
                <div>
                    <h1 className='text-[20px] font-primary font-popBold text-fourth'>Weekly Articles</h1>
                    <p className='text-[15px] mt-2 text-gray-600 font-primary font-popLight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, alias. Architecto saepe porro at doloremque?</p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full mt-9 gap-x-16 sm:gap-y-16 gap-y-8 sm:px-3 px-0'>
                    {
                        Array(12).fill(0).map((ele)=>{
                            return <Link to={'/view'} state={"hello"} className='h-max pb-8 w-full border border-borderLight shadow rounded-xl p-2 cursor-pointer hover:bg-gray-100 hover:scale-[1.01] transition-all ease-initial'>
                            <img src='https://traveldesk-djbmfrc9edfxb9ec.z01.azurefd.net/photos/1933-hd.jpg' alt="" className='h-[200px] w-full  rounded-tr-[8px] rounded-tl-[8px]' />
                            <h1 className='mt-4 font-poppins text-fifth font-popMid ps-0.5 text-[18px]'>Jurasic Wolrd</h1>
                            <p className='text-[14px] ps-1 text-fourth'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores rerum corrupti doloremque natus reprehenderit illum, quae amet praesentium? Similique, impedit.</p>
                        </Link>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Articles
