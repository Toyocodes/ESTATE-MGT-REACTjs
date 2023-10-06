import {useState, useContext} from 'react'

import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import {HouseContext} from './HouseContext'

const CountryDropdown = () => {
  const { country, setCountry, countries} = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false)


  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)}
          className='dropdown-btn w-full text-left'>
          <RiMapPinLine className='dropdown-icon-primary'/>
          <div>
            <div className='text-[14px] font-medium leadding-tight'>{country}</div>
            <div className='text-[13px]'>Select location</div>
          </div>
            {
              isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary'/>
              ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary'/>
              )
            }
          
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {
          countries.map(( country, index )=>{
            return(
              <Menu.Item as='li' key={index} 
              className="cursor-pointer hover:text-[#3938CD] text-black"
              onClick={() => setCountry(country)}
              >
                {country}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
}

export default CountryDropdown