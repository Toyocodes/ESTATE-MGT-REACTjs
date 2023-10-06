import React, {useContext} from 'react'
import {HouseContext} from './HouseContext'
import House from './House'
import {Link} from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'

const HouseList = () => {
  const { houses, loading }= useContext(HouseContext)

  if (loading){
    return (
      <ImSpinner2 className='mx-auto animate-spin 
       text-[#3938CD] text-4xl mt-[200px]' />
      )
  }

  if(houses.length < 1){
    return <div className='text-center text-3xl text-gray-400 mt-48'> Sorry, nothing found</div>
    
  }

  return (
    <section id='property' className='mt-[30rem] xs:mt-[32rem] sm:mt-[36rem] lg:mt-36'>
      <h2 className='text-center text-[#3938CD] text-3xl 
        lg:text-4xl font-bold mb-12 lg:mb-16 '>
        Properties
      </h2>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
            {
              houses.map((house, index)=>{
                  return(
                    <Link to={`/property/${house.id}`} 
                      key={index}>
                      <House house={house} />
                    </Link>
                  )
              })
            }
            </div>
        </div>
    </section>
      
   
  )
}

export default HouseList