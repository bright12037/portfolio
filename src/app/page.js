import React from 'react'
import Image from 'next/image'
import pfpic from '../images/myimg.jpg'

const page = () => {
  return (
    <div className=''>
        <nav className='flex  md:mx-12 lg:mx-20 mx-5 px-4 mt-3 rounded-lg py-5 bg-zinc-100'>
          <h1 className='font-black text-xl cursor-pointer'>Logo</h1>
          <div className='ml-auto flex gap-4 font-medium'>
            <p className='cursor-pointer underline hover:border-blue-500'>About</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
        </nav>
        <div className='flex pt-10 lg:px-32 md:px-16 h-screen'>
              <div className=''>
                <p className='font-semibold text-lg'><span className='pr-1 border-r-2 border-solid border-black'>FrontEnd</span><span className='pl-1'>BackEnd</span></p>
                <h1 className='text-6xl md:text-4xl md:py-4 py-6 font-semibold'>Software Developer</h1>
                <p className='text-lg text-slate-800'>This is a template figma turned into coding using anima <br></br> learn more at anima.com</p>
                <button className='bg-black md:py-5 md:px-5 text-white text-lg py-6 px-7 mt-5'>Contact</button>

              </div>
              <div className='ml-auto rounded-lg overflow-hidden'>
                <Image className='' src={pfpic} alt='mypic' />
              </div>
        </div>

    </div>
  )
}

export default page
