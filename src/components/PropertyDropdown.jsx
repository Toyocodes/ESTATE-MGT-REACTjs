import {useState, useContext} from 'react'

import {RiHome8Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import {HouseContext} from './HouseContext'

const PropertyDropdown = () => {
  const { property, setProperty, properties} = useContext(HouseContext)
  
  const [isOpen, setIsOpen] = useState(false)


  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)}
          className='dropdown-btn w-full text-left'>
          <RiHome8Line className='dropdown-icon-primary'/>
          <div>
            <div className='text-[14px] font-medium leadding-tight'>{property}</div>
            <div className='text-[13px]'>Select apartment</div>
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
          properties.map(( property, index )=>{
            return(
              <Menu.Item as='li' key={index} 
              className="cursor-pointer hover:text-[#3938CD] text-black"
              onClick={() => setProperty(property)}
              >
                {property}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown