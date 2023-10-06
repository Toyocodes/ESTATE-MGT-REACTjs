import React, {useState} from 'react'
// import Logo from '../assets/img/logo.svg'
import {BiMenuAltRight} from 'react-icons/bi'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Header = () => {

    const [nav, setNav] = useState()

    const handleClick = () => {
        setNav(!nav)
    }
    //close menu when each link is clicked
    const closeMobileMenu = () => {
        setNav(false);
      };

  return (
    <header className=' py-3 mb-8 bg-white fixed top-0 left-0 right-0 border-b z-10'>
        <nav className='container mx-auto flex justify-between items-center'> 
            
            <Link to ='/' className='text-2xl text-[#3938CD] font-bold'>
                {/* <img src={Logo} alt="" /> */}
                Feel@Home
            </Link>

            <div className='hidden md:flex items-center gap-6'> 
                <Link className='hover:text-[#3938CD] hover:font-[500] transition' to='/'>
                    Home
                </Link>
                <Link className='hover:text-[#3938CD] hover:font-[500] transition' to='/'>
                    About
                </Link>
                <a className='hover:text-[#3938CD] hover:font-[500] transition' href='#property'>
                    Property
                </a>
                <Link className='hover:text-[#3938CD] hover:font-[500] transition' to='#'>
                    Contact
                </Link>
                <a className='hover:text-[#3938CD] hover:font-[500] transition' href='#testimonials'>
                    Testimonials
                </a>
            </div>

            <div className='hidden md:flex items-center gap-6'> 
                <Link className='hover:bg-[#3938CD] hover:text-white transition duration-500 px-4 py-3 rounded-lg border-[1px] border-[#3938CD]' to=''>
                    Log in
                </Link>
                <Link className='bg-[#3938CD] hover:bg-[#3938CD] text-white px-4 py-3 rounded-lg transition duration-500 ' to=''>
                    Sign up
                </Link>
            </div>

           
            {/*  mobile menu */}
            <div className="md:hidden z-10 mt-10">
            {nav && (
                <div id="menu" className="absolute flex flex-col items-center
                    py-8 mt-8 space-y-6 bg-white transition duration-400
                    left-6 right-6 drop-shadow-md">
                     <Link onClick={closeMobileMenu} className='text-[#3938CD] hover:pl-3 hover:font-[500] transition' to='/'>
                        Home
                    </Link>
                    <a onClick={closeMobileMenu} className='text-[#3938CD] hover:pl-3 hover:font-[500] transition' href='#property'>
                        Property
                    </a>
                    <Link onClick={closeMobileMenu} className='text-[#3938CD] hover:pl-3 hover:font-[500] transition' to='#'>
                        Contact
                    </Link>
                    <Link onClick={closeMobileMenu} className='text-[#3938CD] hover:pl-3 hover:font-[500] transition' to='#'>
                        Get Started 
                    </Link>
                    <Link className='p-3 px-6 pt-2 text-white bg-[#3938CD] rounded-full 
                         hover:opacity-70 transition duration-500 ' to=''>
                        Log in
                    </Link>
                    <Link className='p-3 px-6 pt-2 text-white bg-[#3938CD] rounded-full 
                         hover:opacity-70 transition duration-500' to=''>
                        Sign up
                    </Link>
                </div> 
            )}
            </div>

                {/* toggle icons */}
            <div onClick={handleClick} className='md:hidden'>
                {nav ? (<FaTimes size={30} className='text-red-500'/>) : <BiMenuAltRight size={40} className='text-[#3938CD] hover:text-black transition'/>}
            </div>
           

        </nav>
    </header>
        
  )
}

export default Header