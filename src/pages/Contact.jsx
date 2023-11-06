import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
    <>
      <section>

        <div>
          <div className="head">
            <div className="text-white pl-8 md:pl-0">
              <p className="mb-2 text-base">Contact Us</p>
              <h1 className="text-2xl lg:text-4xl text-white 
                  font-bold leading-10">
                  Would you like to make an enquiry? <br /> 
                  or Purchase a property?
              </h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center py-28'>
          <form className='shadow-xl bg-white p-7'>
            {/* <h4>Kindly Fill The Form Below:</h4> <br /> */}
            <div className="flex gap-x-2 mb-5">
              <input type='text' placeholder='Name' className="border border-gray-200 p-1 rounded w-full"/>
              <input type='text' placeholder='Email' className="border border-gray-200 p-1 rounded w-full" />
            </div>
            <input type='text' placeholder='Subject' className="mb-5 border border-gray-200 p-1 rounded w-full"/>
            <textarea cols='30' rows='10'
            className="border border-gray-200 w-full rounded-[8px] mb-[20px]"></textarea>
            <button className="py-3 px-4 text-white rounded-[8px] bg-[#3938CD] font-semibold
                    hover:opacity-80 transition duration-500">
                      Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact