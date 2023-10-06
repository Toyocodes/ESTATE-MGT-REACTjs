import React from 'react'
import Image from '../assets/img/banner4.png'
import Search from '../components/Search';
import Counter from './Counter';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24 pt-28'>
         <div className='flex flex-col lg:flex-row justify-center items-center'> 
            <div className='lg:ml-16 xl:ml-[75px] flex flex-col items-center lg:items-start
            text-center lg:text-left justify-center flex-1 px-4
            lg:px-0'>
                <div className='relative z-[1] '>
                    <div className="orange-circle"></div>
                    <h1 className='text-4xl lg:text-[48px] xl:text-[58px] font-semibold leading-none mb-6'>
                        <span className='text-[#3938CD]'>Find</span> Your Perfect <br /> Dream Home.
                    </h1>
                </div>
                <p className='max-w-[480px] mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti atque quo quaerat hic vel, incidunt debitis dolor! Provident, tempora dicta.
                </p>
                <Counter/>
            </div>
            {/* hero image */}
            {/* <div className='hidden lg:flex justify-center items-center'> */}
            <div className='lg:w-[40rem]'>
                <img src={Image} alt=""/>
            </div> 
        </div>
        <Search/>
    </section>
   
  )
}

export default Banner