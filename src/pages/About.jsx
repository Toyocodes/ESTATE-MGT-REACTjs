import React, {useEffect} from "react"
import Image from '../assets/img/happyfam.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section className='about pb-20'>
        <div className="heading">
          <div className="text-white">
            <p className="mb-2 text-base">About</p>
            <h1 className="text-3xl lg:text-5xl font-bold">About Us - Who We Are?</h1>
          </div>
        </div>

        <div className='mx-[10%]  mt-28'>
          <div className="grid grid-cols lg:grid-cols-2 gap-[3rem] items-center">
            <div className='' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <h1 className="text-[2.5rem] text-[#3938CD] font-bold">Our Agency Story</h1>
              <p className="text-[#3938CD] text-[15px] mt-2 mb-8">Check out how we started..........</p>
              <p className="text-justify text-[15px] mb-6 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-justify text-[15px] mb-6 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              <button className='p-3 px-6 pt-2 text-white bg-[#3938CD] font-semibold rounded-full 
                    hover:opacity-70 transition duration-500'>
                      More About Us
                    </button>
            </div>
            <div className='flex justify-center items-center mt-[40px]' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <img src={Image} alt='' className="w-full h-full"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About