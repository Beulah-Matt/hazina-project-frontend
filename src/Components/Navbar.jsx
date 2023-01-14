import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [navig, setNav] = useState(false)
  const handleClick = () => setNav(!navig)

    return (
      <>
        <div className='w-screen h-[80px] z-10 bg-main-blue-color fixed drop-shadow-lg'>
            <div className='flex items-center justify-between w-full h-full px-2'>
              <div className='flex items-center'>
                {/* <Link to="/"> */}
                  {/* <img className="block h-6 md:h-9 w-auto" src={logo} alt="OSP home page" /> */}
                {/* </Link> */}
                  <h1 className='mr-4 text-3xl text-custom-gold-color font-bold sm:text-4xl pl-2'><a href="/">Hazina</a></h1>
              </div>
              <div className='hidden md:flex pr-4 text-white'>
                <ul className='hidden md:flex'>
                  <li className='hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl'>
                    <NavLink
                        to="/"
                        exact
                        smooth={true} 
                        duration={500}
                      >
                        Home
                    </NavLink>          
                  </li>
                  {/* <li className='hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl'><a href="/contact" smooth={true} offset={-200} duration={500}>Contact Us</a></li> */}
                  <li className='hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl'>
                    <NavLink
                        to="/contact"
                        exact
                        smooth={true} 
                        offset={-200} 
                        duration={500}
                      >
                        Contact
                    </NavLink>
                  </li>
                  <li className='hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl mr-2'>
                    <NavLink
                        to="/catalogue"
                        exact
                        smooth={true} 
                        offset={-50} 
                        duration={500}
                      >
                        Catalogue
                    </NavLink>
                  </li>
                </ul>
                <button className='px-8 py-3 bg-transparent mr-4 signupBtn'>
                  <NavLink
                    to="/sign-up"
                    exact
                    >
                    Sign Up
                  </NavLink>
                </button>
                <button className='px-8 py-3 signinBtn'>
                  <NavLink
                    to="/sign-in"
                    exact
                    >
                    Sign In
                  </NavLink>                
                </button>
              </div>

              <div className='md:hidden mr-2' onClick={handleClick}>
                {(!navig ? <Bars3Icon className="h-6 w-6 text-white"/> : <XMarkIcon className='h-6 w-6 text-white' />)}
              </div>
            </div>

            <ul className={!navig ? 'hidden' : 'md:hidden absolut bg-zinc-200 2-full px-8'}>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color'>
                <NavLink
                    onClick={handleClick}
                    to="/"
                    exact
                    smooth={true} 
                    duration={500}
                  >
                    Home
                </NavLink>
              </li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color'>
                <NavLink
                    onClick={handleClick}
                    to="/contact"
                    exact
                    smooth={true} 
                    offset={-200} 
                    duration={500}
                  >
                    Contact Us
                </NavLink>
              </li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color'>
                <NavLink
                  onClick={handleClick}
                  to="/catalogue"
                  exact
                  smooth={true} 
                  offset={-50} 
                  duration={500}
                  >
                  Catalogue
                </NavLink>
              </li>
              <div className='flex flex-col my-4'>
                <button className='bg-transparent text-main-blue-color px-2 py-3 mb-4 hover:bg-white'><a href="/sign-up">Sign Up</a>
                  <NavLink
                    to="/sign-up"
                    exact
                    >
                    Sign Up
                  </NavLink>
                </button>
                <button className='mb-4 px-2 py-3'>
                  <NavLink
                    to="/sign-in"
                    exact
                    >
                    Sign In
                  </NavLink>                
                </button>
              </div>
            </ul>
        </div>
      </>
    );
}

export default Navbar;


        