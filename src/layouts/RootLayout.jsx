import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "../pages/Cart";

function RootLayout() {
  const [navig, setNav] = useState(false);
  const handleClick = () => setNav(!navig);
  const location = useLocation();
  const path = location.pathname;

  const { cart } = useSelector(state => state.storages)
  // console.log(path.includes('admin'))

  return (
    <>
      <div className="w-screen h-[80px] z-10 bg-gradient-to-tr from-main-blue-color to-sky-600 fixed drop-shadow-lg">
        {!path.includes("admin") && (
          <div className="flex items-center justify-between w-full h-full px-2">
            <div className="flex items-center">
              {/* <Link to="/"> */}
              {/* <img className="block h-6 md:h-9 w-auto" src={logo} alt="OSP home page" /> */}
              {/* </Link> */}
              <h1 className="mr-4 text-3xl text-custom-gold-color font-bold sm:text-4xl pl-2">
                <Link to="/">Hazina</Link>
              </h1>
            </div>
            <div className="hidden md:flex pr-4 text-white">
              <ul className="hidden md:flex">
                <li className="hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl">
                  <NavLink to="/" exact smooth={true} duration={500}>
                    Home
                  </NavLink>
                </li>
                <li className="hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl">
                  <NavLink
                    to="contact"
                    exact
                    smooth={true}
                    offset={-200}
                    duration={500}>
                    Contact
                  </NavLink>
                </li>
                <li className="hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer rounded-xl mr-2">
                  <NavLink
                    to="storages"
                    exact
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    Catalogue
                  </NavLink>
                </li>
                <li className="hover:bg-blue-200 transition text-custom-gold-color duration-300 ease-in-out cursor-pointer rounded-xl mr-2">
                  <NavLink
                    to="cart"
                    exact
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    <div className="relative flex">
                      <svg
                        className="flex-1 w-8 h-8 fill-current"
                        viewbox="0 0 24 24">
                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                      </svg>
                      <span className="absolute right-0 top-0 rounded-full bg-white w-4 h-4 top right p-0 m-0 text-main-blue-color font-mono text-sm  leading-tight text-center">
                        {cart.length || 0}
                      </span>
                    </div>
                  </NavLink>
                </li>
              </ul>
              <button className="px-8 py-2 signinBtn">
                <NavLink to="sign-in" exact>
                  My Account
                </NavLink>
              </button>
            </div>

            <div className="md:hidden mr-2" onClick={handleClick}>
              {!navig ? (
                <Bars3Icon className="h-6 w-6 text-white" />
              ) : (
                <XMarkIcon className="h-6 w-6 text-white" />
              )}
            </div>
          </div>
        )}

        {!path.includes("admin") && (
          <ul
            className={
              !navig ? "hidden" : "md:hidden absolut bg-zinc-200 2-full px-8"
            }>
            <li className="border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color">
              <NavLink
                onClick={handleClick}
                to="/"
                exact
                smooth={true}
                duration={500}>
                Home
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color">
              <NavLink
                onClick={handleClick}
                to="contact"
                exact
                smooth={true}
                offset={-200}
                duration={500}>
                Contact Us
              </NavLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full hover:bg-slate-300 transition duration-300 ease-in-out cursor-pointer hover:text-main-blue-color">
              <NavLink
                onClick={handleClick}
                to="/storages"
                exact
                smooth={true}
                offset={-50}
                duration={500}>
                Catalogue
              </NavLink>
            </li>
            <div className="flex flex-col my-4">
              <button className="bg-transparent text-main-blue-color px-2 py-3 mb-4 hover:bg-white">
                <NavLink to="/sign-up" exact>
                  Sign Up
                </NavLink>
              </button>
              <button className="mb-4 px-2 py-3">
                <NavLink to="/sign-in" exact>
                  Sign In
                </NavLink>
              </button>
            </div>
          </ul>
        )}
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
