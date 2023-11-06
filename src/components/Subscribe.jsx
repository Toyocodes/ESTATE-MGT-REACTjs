import React, {useRef, useEffect} from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hoh8jqy', 'template_5s07ugn', form.current, 'JzEautCxKF0or6rVJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='getStarted' className='mx-8 mt-24 mb-10 lg:mb-0 xl:mt-24 xl:mb-24'>
    <div className='flex flex-col justify-center items-center gap-x-16 lg:flex-row' id='join-us'>
      <div className='left-j text-[3rem] font-bold uppercase relative'>
        
        <div className='flex gap-[1rem] text-2xl md:text-3xl' 
        data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <span className='stroke-text'>READY TO</span>
          <span>BUY A HOME</span>
          <hr className='absolute w-[12rem] rounded-[20%] border-[#3938CD] border-2 my-[-10px] mx-0'/>
        </div>
        <div>
          <span>FROM US? </span> <br />
          <span className='stroke-text text-[#3938CD]'>LET'S GO!</span>
        </div>
          <hr className='absolute w-[12rem] rounded-[20%] border-[#3938CD] border-2 my-[-10px] mx-0'/> 
      </div>

      <div className="right-j flex justify-center items-center mt-10">

        <form ref={form} onSubmit={sendEmail} action="" className='email-container flex flex-col lg:flex-row' 
          data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <input type="email" name='user_email' placeholder='Enter your email address'/>
          <button className='btn btn-j'>Join Now</button>
        </form>

      </div>
    </div>
    </section>
  )
}

export default Subscribe