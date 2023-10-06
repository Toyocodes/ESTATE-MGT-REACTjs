import React from 'react'
import AboutImg from '../assets/img/r1.png'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../utils/accordion'


const About = () => {
  return (
    <section id='about' className='max-h-[640px] mt-10 mb-10 xl:mt-24 xl:mb-24'>
      <div className='flex flex-col justify-center items-center gap-x-12 lg:flex-row'>
          <div>
              <div>
                <div className='about-image mb-10'>
                  <img src={AboutImg} alt="" />
                </div>
              </div>
          </div>
          <div className="flex flex-col text-center lg:text-left">
              <span className='text-xl lg:text-2xl text-yellow-600 font-bold'>Our Core Values</span>
              <span className='text-2xl lg:text-3xl mb-4 text-violet-700 font-bold'>What We Offer You</span>
              <span className='text-[13px] mb-6 text-gray-500 leading-5'>
                At Feel@Home, we make you feel at home by providing <br />
                the best services for you.
              </span>


              <Accordion 
              className='mt-2 border-none'
              allowMultipleExpanded={false} 
              preExpanded={[0]}
              >
                {
                data.map((item, i)=>{
                  return(
                      <AccordionItem className='mx-8 lg:mx-0 bg-white border-[0.8px] rounded-[8px] overflow-hidden mb-[18px] shadow-1' key={i} uuid={i}>
                          <AccordionItemHeading className='mb-[-18px]'>
                              <AccordionItemButton className='flex justify-between bg-white cursor-pointer w-full p-6'>
                                  <div className='flex text-[20px] bg-[#eeeeff] p-2 rounded-[5px] text-violet-600'>
                                    {item.icon}
                                  </div>
                                  <span className='text-[14px] lg:text-[15px] mb-4 text-violet-700 font-bold'>
                                    {item.heading}
                                  </span>
                                  <div className='flex'>
                                      <MdOutlineArrowDropDown size={20}/>
                                  </div>
                              </AccordionItemButton>
                          </AccordionItemHeading>

                          <AccordionItemPanel>
                              <p className='text-[13px] text-gray-500 leading-5 max-w-[450px]'>
                                {item.detail}
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                      )
                    })
                }
              </Accordion>
          </div>
      </div>
    </section>
  )
}

export default About