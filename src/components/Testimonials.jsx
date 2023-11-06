import React, {useState, useEffect} from 'react'
import { testimonialsData } from '../data/testimonialsData'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    const [selected, setSelected] = useState(0)
    const testLength = testimonialsData.length;

  return (
    <div id='testimonials' className='Testimonials container mx-auto pt-16 lg:pb-16 pb-[28rem]'>
        <div className='flex flex-col justify-center gap-[5rem] lg:flex-row'>
            <div className='left-t flex-1 justify-center sm:text-center md:text-justify text-[#3938CD] ml-5' 
            data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className='text-2xl text-red-500 font-bold'>Testimonials</div>
                <div className='text-[3rem] font-bold text-[#3938CD]'>What People</div>
                <div className='text-[3rem] font-bold text-[#3938CD]'>Say About Us</div>
                <div className='text-[15px] leading-[25px] sm:text-center md:text-justify'>
                    {testimonialsData[selected].review}
                </div>
                <div className='text-red-500 py-2'>
                    {testimonialsData[selected].name}
                </div>
                <div>
                - {testimonialsData[selected].status}
                </div>
            </div>

            <div className='right-t flex-1 relative'
            data-aos="slide-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className=''>
                    <div className='absolute w-[17rem] h-[20rem] 
                    border-2  border-red-500 bg-transparent 
                    right-[9rem] top-[0.9rem]'></div>
                    <div className='absolute w-[17rem] h-[19rem] 
                    border-2 bg-[#3938CD]
                    right-[7rem] top-[4rem]'></div>
                    
                   <div className=''>
                   <img src={testimonialsData[selected].image} alt="" 
                    className='absolute w-[17rem] h-[20rem] object-cover 
                        right-[8rem] top-[2rem] lg:right-[8rem] lg:top-[2rem] lg:mb-0'/>
                   </div>
                </div>

                <div className='arrows flex gap-[1rem] absolute 
                bottom-[0] left-[30%]
                sm:bottom-[0] sm:left-[50%] 
                lg:bottom-[-25%] lg:left-[12%] text-[2.2rem] 
                    text-[#3938CD] cursor-pointer'>
                        <AiOutlineArrowLeft 
                            onClick={()=>{
                                selected === 0
                                ? setSelected(testLength - 1)
                                : setSelected((prev)=>prev - 1);
                            }} 
                        />
                        <AiOutlineArrowRight 
                            onClick={()=>{
                                selected === (testLength - 1)
                                ? setSelected(0)
                                : setSelected((prev)=>prev + 1);
                            }}
                        />
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonials