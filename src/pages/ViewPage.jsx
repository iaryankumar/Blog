import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { AiOutlineLike } from 'react-icons/ai'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const ViewPage = () => {
    let location = useLocation();
    let obj = location.state
    console.log(obj)
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location])  
    return (
        <>
            <nav className='h-max w-full sticky top-0 z-50'><Navbar /></nav>

            <div className='h-max w-full  sm:px-20 px-4 sm:py-9 py-0 flex flex-col mt-8'>
                <div className='h-max w-full mb-4 flex items-center justify-end'>
                    <div className='flex items-center gap-0.5 text-[14px]'>
                        <h1 className='mt-2'>275K +</h1>
                        <AiOutlineLike className='text-3xl cursor-pointer hover:text-blue-800' />
                    </div>
                </div>
                <h1 className='text-3xl font-poppins text-third tracking-wider font-popThin'>This is The Article Title</h1>
                <div className='h-max pt-9 pb-12 sm:px-9 px-4 text-fourth w-full bg-[#f7f7f7] mt-8 rounded-2xl  flex items-center flex-col '>
                    <h1 className='sm:leading-17 leading-8 sm:text-5xl text-2xl font-serif  italic'>Lorem ipsum dolor, sit amet conse Lorem, ipsum Lorem ipsum dolor sit amet.. </h1>
                    <p className='mt-5  font-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias aliquam asperiores inventore, cupiditate voluptatem sit temporibus delectus magnam dolores explicabo, doloribus ad eius, accusamus maxime quod eveniet impedit. Veniam, id maiores unde voluptatibus, minus eaque cumque at, magni placeat tempora repellendus? Consequatur ut aperiam non, quo animi fuga, repudiandae deserunt laboriosam harum ullam autem exercitationem ipsum voluptatibus minus illum eos quae fugiat possimus omnis quia perferendis? Ducimus, ut placeat error beatae praesentium temporibus officia optio nemo eligendi ratione reiciendis! Architecto a delectus enim reprehenderit incidunt labore fugit, ratione animi quas aliquid voluptas at voluptates vero mollitia. Sequi quisquam corporis adipisci.</p>
                </div>
                <div className='h-max w-full  md:mt-20 mt-1 relative flex'>
                    <div className='sticky top-9 h-[650px] w-[30%] bg-red-600 md:block hidden'></div>
                    <div className='h-max md:w-[70%] w-full sm:px-16 px-2 pt-16 flex items-center sm:gap-y-16 gap-y-9 flex-col'>
                        {/* this is the content part */}
                        {
                            Array(5).fill(0).map((ele) => {
                                return <div>
                                    <h1 className='leading-9 text-3xl font-serif  italic'>Lorem ipsum dolor, sit amet conse Lorem, ipsum Lorem ipsum dolor sit amet.. </h1>
                                    <p className='mt-5  font-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias aliquam asperiores inventore, cupiditate voluptatem sit temporibus delectus magnam dolores explicabo, doloribus ad eius, accusamus maxime quod eveniet impedit. Veniam, id maiores unde voluptatibus, minus eaque cumque at, magni placeat tempora repellendus? Consequatur ut aperiam non, quo animi fuga, repudiandae deserunt laboriosam harum ullam autem exercitationem ipsum voluptatibus minus illum eos quae fugiat possimus omnis quia perferendis? Ducimus, ut placeat error beatae praesentium temporibus officia optio nemo eligendi ratione reiciendis! Architecto a delectus enim reprehenderit incidunt labore fugit, ratione animi quas aliquid voluptas at voluptates vero mollitia. Sequi quisquam corporis adipisci.</p>
                                </div>
                            })
                        }
                        {/* this is the content part */}

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default ViewPage
