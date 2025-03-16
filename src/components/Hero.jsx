import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='sm:h-[320px] h-[500px] w-full  px-4 sm:py-12 py-4 flex items-center justify-center'>
        <div className='h-full w-max bg-secondary rounded-3xl'>
            <video src="https://pikaso.cdnpk.net/public/media/banners/veo2_i2v_banner.mp4" muted loop  autoPlay playsinline webkit-playsinline className='h-full w-[1220px] rounded-2xl object-cover'></video>
        </div>
    </div>
    </>
  )
}

export default Hero
