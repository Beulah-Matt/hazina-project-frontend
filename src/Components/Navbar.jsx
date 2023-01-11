import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'

function Navbar() {
  const [navig, setNav] = useState(false)
  const handleClick = () => setNav(!navig)

    return (
        <div className='w-screen h-[80px] z-10 bg-main-blue-color fixed drop-shadow-lg'>
            <div className='flex items-center justify-between w-full h-full px-2'>
              <div className='flex items-center'>
                {/* <Link to="/"> */}
                  {/* <img className="block h-6 md:h-9 w-auto" src={logo} alt="OSP home page" /> */}
                {/* </Link> */}
                <h1 className='mr-4 text-3xl text-custom-gold-color font-bold sm:text-4xl pl-2'>Hazina</h1>
              </div>
              <div className='hidden md:flex pr-4 text-white'>
                <ul className='hidden md:flex'>
                  <li className='hover:bg-blue-800 cursor-pointer rounded-xl'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                  <li className='hover:bg-blue-800 cursor-pointer rounded-xl'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                  <li className='hover:bg-blue-800 cursor-pointer rounded-xl mr-2'><Link to="gallery" smooth={true} offset={-50} duration={500}>Contact us</Link></li>
                </ul>

                <button className='px-8 py-3 bg-transparent mr-4 signupBtn'>Sign Up</button>
                <button className='px-8 py-3 signinBtn'>Sign In</button>
              </div>

              <div className='md:hidden mr-2' onClick={handleClick}>
                {(!navig ? <Bars3Icon className="h-6 w-6 text-white"/> : <XMarkIcon className='h-6 w-6 text-white' />)}
              </div>
            </div>

            <ul className={!navig ? 'hidden' : 'md:hidden absolut bg-zinc-200 2-full px-8'}>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 cursor-pointer hover:text-main-blue-color'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 cursor-pointer hover:text-main-blue-color'><Link onClick={handleClick} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 cursor-pointer hover:text-main-blue-color'><Link onClick={handleClick} to="gallery" smooth={true} offset={-50} duration={500}>Gallery</Link></li>
              
              <div className='flex flex-col my-4'>
                <button className='bg-transparent text-main-blue-color px-2 py-3 mb-4 hover:bg-white'>Sign Up</button>
                <button className='mb-4 px-2 py-3'>Sign In</button>
              </div>
            </ul>
            
        </div>
    );
}

export default Navbar;