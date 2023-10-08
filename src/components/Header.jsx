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
        <nav className='container mx-auto flex justify-between items-center gap-2 md:gap-4'> 
            
           <div>
           <Link to ='/' className='text-2xl text-[#3938CD] font-bold md:pr-5'>
                Feel@Home
            </Link>
           </div>

            <div className='hidden md:flex items-center gap-4 md:text-[15px]'> 
                <Link className='lg:text-[16px] hover:text-[#3938CD] hover:font-[500] transition' to='/'>
                    Home
                </Link>
                <Link className='lg:text-[16px] hover:text-[#3938CD] hover:font-[500] transition' to='/About'>
                    About
                </Link>
                <Link className='lg:text-[16px] hover:text-[#3938CD] hover:font-[500] transition' to='/Property'>
                    Property
                </Link>
                <Link className='lg:text-[16px] hover:text-[#3938CD] hover:font-[500] transition' to='/Contact'>
                    Contact
                </Link>
                <a className='lg:text-[16px] hover:text-[#3938CD] hover:font-[500] transition' href='#testimonials'>
                    Testimonials
                </a>
            </div>

            <div className='hidden md:flex items-center gap-6 md:pl-5 md:text-[15px]'> 
                <Link className='hover:bg-[#3938CD] hover:text-white transition duration-500 px-4 py-3 rounded-lg border-[2px] border-[#3938CD]' to=''>
                    Log in
                </Link>
                <Link className='bg-[#3938CD] hover:opacity-90 text-white px-4 py-3 rounded-lg transition duration-500 ' to=''>
                    Sign up
                </Link>
            </div>

           
            {/*  mobile menu */}
            <div className="md:hidden z-10 mt-10">
            {nav && (
                <div id="menu" className="absolute flex flex-col items-center
                    py-8 mt-8 space-y-6 bg-[#3938CD] transition duration-400
                    left-6 right-6 drop-shadow-md rounded-3xl">
                     <Link onClick={closeMobileMenu} className='text-white hover:pl-3 hover:font-[500] transition' to='/'>
                        Home
                    </Link>
                    <Link onClick={closeMobileMenu} className='text-white hover:pl-3 hover:font-[500] transition' to='/About'>
                        About
                    </Link>
                    <Link onClick={closeMobileMenu} className='text-white hover:pl-3 hover:font-[500] transition' to='/property'>
                        Property
                    </Link>
                    <Link onClick={closeMobileMenu} className='text-white hover:pl-3 hover:font-[500] transition' to='/Contact'>
                        Contact
                    </Link>
                    <a onClick={closeMobileMenu} className='text-white hover:pl-3 hover:font-[500] transition' href='#testimonials'>
                        Testimonials 
                    </a>
                    <Link className='p-3 px-6 pt-2 text-[#3938CD] bg-white font-semibold rounded-full 
                         hover:opacity-70 transition duration-500 ' to='/'>
                        Log in
                    </Link>
                    <Link className='p-3 px-6 pt-2 text-[#3938CD] bg-white font-semibold rounded-full 
                         hover:opacity-70 transition duration-500' to='/'>
                        Sign up
                    </Link>
                </div> 
            )}
            </div>

                {/* toggle icons */}
            <div onClick={handleClick} className='md:hidden'>
                {nav ? (<FaTimes size={30} className='text-red-500'/>) : <BiMenuAltRight size={50} className='bg-[#3938CD] text-white p-3 hover:p-[0.9rem] transition rounded'/>}
            </div>
           

        </nav>
    </header>
        
  )
}

export default Header