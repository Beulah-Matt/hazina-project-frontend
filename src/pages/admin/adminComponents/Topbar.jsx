//import React from 'react'
//
//export default function Topbar() {
//  return (
//    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-main-blue-color">
//    <div className="sticky z-10 top-0 h-16 border-b bg-gray-300 lg:py-2.5">
//        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
//            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">All Storages</h5>
//            <div className="flex space-x-4">
//                {/* <!--search bar --> */}
//                <div hidden className="md:block">
//                    <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400 mr-4">
//                        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
//                        <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
//                            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
//                        </svg>
//                        </span>
//                        <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
//                    </div>
//                </div>
//                {/* <!--/search bar --> */}
//                
//                <div aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
//                    <img src="https://www.csncare.co.uk/wp-content/uploads/2020/05/Image-placeholder-man.jpg" alt="" className="h-auto w-auto m-auto rounded" />
//
//                    <div className="mt-2 text-center">
//                        <span className="hidden text-custom-gold-color lg:block">{"Kevin"}</span>
//                    </div>
//                </div>
//            </div>
//        </div>
//    </div>
//    </div>
//  )
//}



import React, {useState} from 'react';
import {Link, NavLink, Outlet, useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';

function RootLayout() {
  const [navig, setNav] = useState(false)
  const handleClick = () => setNav(!navig)
  const location = useLocation()
  const path = location.pathname
  // console.log(path.includes('admin'))

    return (
      <>
        <div className='w-screen h-[80px] z-10 bg-gradient-to-tr from-main-blue-color to-sky-600 fixed drop-shadow-lg'>
          { ! path.includes('admin') &&
            <div className='flex items-center justify-between w-full h-full px-2'>
              <div className='flex items-center'>
                {/* <Link to="/"> */}
                  {/* <img className="block h-6 md:h-9 w-auto" src={logo} alt="OSP home page" /> */}
                {/* </Link> */}
                  <h1 className='mr-4 text-3xl text-custom-gold-color font-bold sm:text-4xl pl-2'><Link to="/">Hazina</Link></h1>
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
                        All Storages 
                    </NavLink>          
                  </li>
                  <li className='hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl'>
                    <NavLink
                        to=""
                        exact
                        smooth={true} 
                        offset={-200} 
                        duration={500}
                      >
                        New storage
                    </NavLink>
                  </li>
                  <li className='hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl mr-2'>
                    <NavLink
                        to=""
                        exact
                        smooth={true} 
                        offset={-50} 
                        duration={500}
                      >
                        New storage
                    </NavLink>
                  </li>
                  <li className='hover:bg-blue-200 transition text-custom-gold-color duration-300 ease-in-out cursor-pointer rounded-xl mr-2'>
                    <NavLink
                        to=""
                        exact
                        smooth={true} 
                        offset={-50} 
                        duration={500}
                      >
                        Clients
                        <div className="relative flex">
                        <svg className="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                          </svg>
                          <span className="absolute right-0 top-0 rounded-full bg-white w-4 h-4 top right p-0 m-0 text-main-blue-color font-mono text-sm  leading-tight text-center">{ "0" || "cart.length"}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </ul>
                <button className='px-8 py-2 signinBtn'>
                  <NavLink
                    to="sign-in"
                    exact
                    >
                    Admins
                  </NavLink>                
                </button>
              </div>

              <div className='md:hidden mr-2' onClick={handleClick}>
                {(!navig ? <Bars3Icon className="h-6 w-6 text-white"/> : <XMarkIcon className='h-6 w-6 text-white' />)}
              </div>
            </div>
        }

            { ! path.includes('admin') &&
            <ul className={!navig ? 'hidden' : 'md:hidden absolut bg-zinc-200 2-full px-8'}>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color'>
                <NavLink
                    onClick={handleClick}
                    to="/"
                    exact
                    smooth={true} 
                    duration={500}
                  >
                    All Storages 
                </NavLink>
              </li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color'>
                <NavLink
                    onClick={handleClick}
                    to="contact"
                    exact
                    smooth={true} 
                    offset={-200} 
                    duration={500}
                  >
                    New storage
                </NavLink>
              </li>
              <li className='border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color'>
                <NavLink
                  onClick={handleClick}
                  to="/storages"
                  exact
                  smooth={true} 
                  offset={-50} 
                  duration={500}
                  >
                  Clients
                </NavLink>
              </li>
              <div className='flex flex-col my-4'>
                <button className='bg-transparent text-main-blue-color px-2 py-3 mb-4 hover:bg-white'>
                  <NavLink
                    to="/sign-up"
                    exact
                    >
                    Admins
                  </NavLink>
                </button>
              </div>
            </ul>
          }
        </div>
        <main>
            <Outlet/>
        </main>
      </>
    );
}

export default RootLayout;