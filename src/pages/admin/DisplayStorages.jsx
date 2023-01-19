import React from 'react'
import CardList from './adminComponents/CardList'

export default function DisplayStorages() {
  return (
    <>
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-main-blue-color">
    <div className="sticky z-10 top-0 h-16 border-b bg-gray-300 lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">All Storages</h5>
            <div className="flex space-x-4">
                {/* <!--search bar --> */}
                <div hidden className="md:block">
                    <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400 mr-4">
                        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                        <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                            <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                        </svg>
                        </span>
                        <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                    </div>
                </div>
                {/* <!--/search bar --> */}
                
                <div aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <img src="https://www.csncare.co.uk/wp-content/uploads/2020/05/Image-placeholder-man.jpg" alt="" className="h-auto w-auto m-auto rounded" />

                    <div className="mt-2 text-center">
                        <span className="hidden text-custom-gold-color lg:block">{"Kevin"}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CardList />
  </div>






    
    </>
  )
}
