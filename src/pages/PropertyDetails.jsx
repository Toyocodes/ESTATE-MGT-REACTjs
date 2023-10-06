import React from 'react'
import { housesData } from '../data'
import { useParams } from 'react-router-dom'
import { BiBed, BiBath, BiArea} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const PropertyDetails = () => {

  const {id} = useParams()
  
  //get the house based on the id

  const house = housesData.find((house) =>{
    return house.id === parseInt(id);
  })
  // console.log(house)

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-4">
          <div className='flex flex-col lg:flex-row lg:items-center 
          lg:justify-between'>
              <div>
                  <h2 className='text-2xl font-semibold'>{house.name}</h2>
                  <h3 className='text-lg mb-4'>{house.address}</h3>
              </div>
              <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                  <div className='bg-green-500 text-white px-3 rounded-full'>
                    {house.type}
                  </div>
                  <div className='bg-violet-500 text-white px-3 rounded-full'>
                    {house.country}
                  </div>
              </div>
              <div className='text-3xl font-semibold text-violet-600'>
                $ {house.price}
              </div>
          </div>
         
          <div className='flex flex-col items-start gap-8 lg:flex-row'>
               
              <div className='max-w-[768px]'>
                  <div className='mb-8'>
                    <img src={house.imageLg} alt={house.name} />
                  </div>
                  <div className='flex gap-x-6 text-[#3938CD] mb-4'>
                  <div className="flex gap-x-2 items-center">
                      <BiBed className='text-2xl'/>
                      <div>{house.bedrooms}</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                      <BiBath className='text-2xl'/>
                      <div>{house.bathrooms}</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                      <BiArea className='text-3xl'/>
                      <div>{house.surface}</div>
                  </div>
              </div>
              <div>{house.description}</div>
              </div>
            
              <div className='flex-1 bg-white w-full mb-6 
                border border-gray-300 rounded-lg px-6 py-8'>
                <div className='flex items-center gap-x-4 mb-6'> 
                  <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                      <img src={house.agent.image} alt="" />
                  </div>
                  <div>
                    <div className='font-bold text-lg'>{house.agent.name}</div>
                    <Link to="" className='text-[#3938CD] text-sm'>
                        View Listings
                    </Link>
                  </div>
                </div>

                <form className="flex flex-col gap-y-4">
                  <input 
                    className='border border-gray-300 focus:border-[#3938CD] 
                    outline-none rounded w-full px-3 h-12 text-sm mb-3' 
                    type="text" 
                    placeholder='Name'
                  />
                  <input 
                    className='border border-gray-300 focus:border-[#3938CD] 
                    outline-none rounded w-full px-3 h-12 text-sm mb-3' 
                    type="text" 
                    placeholder='Email address'
                  />
                  <input   
                    className='border border-gray-300 focus:border-[#3938CD] 
                    outline-none rounded w-full px-3 h-12 text-sm mb-3' 
                    type="text" 
                    placeholder='Phone number'
                  />
                  <textarea 
                    className='border border-gray-300 focus:border-[#3938CD] 
                    outline-none resize-none rounded w-full p-4 h-32 text-sm 
                    text-gray-400'
                    placeholder='Message'
                    defaultValue="Hello, I'm interested in [Modern apartment]"
                    name="message" id="" cols="30" rows="10">
                  </textarea>
                  
                  <div className='flex gap-x-2'>
                    <button className='bg-[#3938CD] hover:opacity-80 text-white 
                     rounded p-4 text-sm w-full transition'>
                      Send message
                    </button>
                    <button className='border border-[#3938CD] text-[#3938CD] 
                      hover:border-violet-500 hover:opacity-80
                        rounded p-4 text-sm w-full transition'>
                      Call us
                    </button>
                  </div>
                </form>
              </div>

          </div>
      </div>
      <Footer/>
    </section>

    
  )
}

export default PropertyDetails