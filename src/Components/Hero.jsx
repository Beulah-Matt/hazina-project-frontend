import React from 'react'

function Hero() {
  return (
    <div name='home' id='home' className='w-full bg-cover bg-bgImg h-screen flex flex-col justify-between sm:bg-zinc-200 bg-blue-100'>
        <div className='my-32 grid text-center pt-24 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center w-full px-2 py-8'>
                <h1 className='py-3 text-white text-center'>
                    <span className='italic underline font-bold'>Hazina,</span> the best storage <br/>for all your items</h1>
                <p className='text-slate-200 text-center'>
                    We leverage technology to help you store <br/>
                    all your items for any duration. <br/>Focus on other important things and <br/> leave the security to us.</p>
                <button className='py-3 px-8  mt-12 mb-16 sm:px-5'>Explore</button>
            </div>       
        </div>
    </div>
    )
}

export default Hero

