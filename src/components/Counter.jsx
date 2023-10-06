import React from 'react'
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <div className='flex justify-center lg:justify-start gap-x-6 w-full'>
        <div className='stat flex flex-col'>
            <span>
                <div className='text-[1.3rem] text-[#3938CD] font-bold'>
                    <CountUp start={100} end={173} duration={5}/>
                    <span>+</span>
                </div>
                <span className='text-[0.9rem] text-gray-500'>Investors</span>
            </span>
        </div>
        <div className='stat flex flex-col'>
            <span>
                <div className='text-[1.3rem] text-[#3938CD] font-bold'>
                    <CountUp start={1000} end={1200} duration={5}/>
                    <span>+</span>
                </div>
                <span className='text-[0.9rem] text-gray-500'>Customers</span>
            </span>
        </div>
        <div className='stat flex flex-col'>
            <span >
                <div className='text-[1.3rem] text-[#3938CD] font-bold'>
                    <CountUp end={19} duration={5}/>
                    <span>+</span>
                </div>
               <span className='text-[0.9rem] text-gray-500'>Award Won</span>
            </span>
        </div>
    </div>
  )
}

export default Counter