import React from 'react'
import Navbar from './Navbar'
const HomeHero = () => {

  return (
    <div className='min-h-screen' id='Home'>
      <Navbar />
      <section id='Home' className='min-h-[calc(100vh-56px)] flex items-center justify-center'>
        <div className='md:flex gap-2.5 w-[90%] p-auto'>
          <div className=''>
            <h1 className='text-[#00bca0] font-bold text-[15px] lg:text-3xl'>Fron<span className='text-[18px] lg:text-4xl'>t</span>end Developer</h1>
            <h1 className='text-5xl leading-none lg:text-7xl'>WE ARE <span className='text-[#09c7b9]'>CREATIVE</span> DEVELOPERS</h1>
            <div className='h-[0.7vh] w-[4vw] bg-[#3b837d] rounded-2xl mt-1 mb-1'></div>
            <p className='text-[10px] lg:text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus quidem asperiores repudiandae saepe molestias deserunt aperiam eligendi numquam praesentium, nulla officiis! Sunt itaque dignissimos et saepe minima repellendus! Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque consectetur omnis est numquam voluptatum harum perferendis deleniti sint repudiandae dolor expedita illum et accusamus facilis, ipsum, beatae explicabo maiores!</p>
          </div>
          <div className='pic   md:block md:min-h-62.5 md:min-w-45 bg-center bg-cover rounded-2xl h-50 max-w-100 m-auto mt-5 lg:min-h-80 lg:min-w-60 2xl:min-h-100 2xl:min-w-80'>

          </div>

        </div>
      </section>
    </div>
  )
}

export default HomeHero
