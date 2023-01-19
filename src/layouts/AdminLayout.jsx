import { Link, NavLink, Outlet } from 'react-router-dom'
//import '../css/admin/home.css'
import {GiClothes} from 'react-icons/gi'
import {VscNewFile} from 'react-icons/vsc'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import  {FiUsers} from 'react-icons/fi'
import {BiLogOutCircle} from 'react-icons/bi'

function AdminLayout() {
  return (
    <>
    
    

      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
            <div className="-mx-6 px-6 py-4 bg-gradient-to-r from-main-blue-color to-sky-600">
                <Link href="#" title="home" className="text-bold text-white text-[2.5rem]">
                  Hazina
                </Link>
            </div>
            <ul className="space-y-2 tracking-wide mt-8">
                <li>
                    <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:bg-gradient-to-r from-sky-600 to-cyan-400">
                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                        </svg>
                        <NavLink className="-mr-1 font-medium" to='displaystorages'>All Storages</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:bg-gradient-to-r from-sky-600 to-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                            <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                        </svg>
                        <NavLink className="-mr-1 font-medium" to='newproduct'>New Storages</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:bg-gradient-to-r from-sky-600 to-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                        </svg>
                        <NavLink className="-mr-1 font-medium group-hover:text-gray-700" to='clients'>Clients</NavLink>
                    </a>
                </li>
                <li>
                    <a href="#" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:bg-gradient-to-r from-sky-600 to-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                        </svg>
                        <NavLink className="-mr-1 font-medium group-hover:text-gray-700" to='admins'>Admins</NavLink>
                    </a>
                </li>
            </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-white group bg-gradient-to-r from-sky-600 to-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="group-hover:text-gray-700"><Link to="/">Logout</Link></span>
            </button>
        </div>
    </aside>
    <Outlet/>
    
    </>
  )
}

export default AdminLayout