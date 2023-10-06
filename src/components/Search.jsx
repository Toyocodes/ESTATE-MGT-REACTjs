import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import { RiSearch2Line } from 'react-icons/ri'
import { HouseContext } from './HouseContext'


const Search = () => {
    // const {houses} = useContext(HouseContext);
  const {handleClick} = useContext(HouseContext);

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto mt-3
    flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3
     relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent 
    lg:backdrop-blur rounded-lg'>
        <CountryDropdown/>
        <PropertyDropdown/>
        <PriceRangeDropdown/>
        <button onClick={()=>handleClick()} className='bg-[#3938CD] hover:opacity-80 
        transition w-full lg:max-w-[162px] h-16 rounded-lg flex 
        justify-center items-center text-white text-xl'>
            <RiSearch2Line size={20}/>
        </button>
    </div>
  )
}

export default Search