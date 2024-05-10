
'use client'

import Image from 'next/image'
import pfpic from '../images/myimg.jpg'
import { useState } from 'react'
import { RxDragHandleHorizontal } from "react-icons/rx";

const Topcomponent = () => {

    const[Show,setShow] = useState(false)

    const shownav = () =>{
      setShow(!Show)
    }
  

  return (
    <div>
       <div>
        <nav className='flex  md:mx-12 lg:mx-20 mx-5 px-4 mt-3 rounded-lg py-5 bg-zinc-100'>
          <h1 className='font-black text-xl cursor-pointer'>Logo</h1>
          <div className='ml-auto font-medium relative'>
              <p onClick={shownav} className='lg:hidden md:hidden text-4xl font-black'><RxDragHandleHorizontal /></p>
                {Show===false ? '': (<div className='gap-4 md:hidden lg:hidden absolute top-3 py-1 right-0'>
                <p className='cursor-pointer underline hover:border-blue-500'>About</p>
                <p>Work</p>
                <p>Contact</p>
              </div>)}
              <div className='hidden gap-4 md:flex lg:flex absolute top-3 py-1 right-0'>
                <p className='cursor-pointer underline hover:border-blue-500'>About</p>
                <p>Work</p>
                <p>Contact</p>
              </div>
          </div>
        </nav>
      </div> 
        <div className='TopSEction'>
        <div className='px-10 lg:hidden md:hidden pt-10 h-screen'>
              <div className='flex items-center pb-2'>
                <div>
                <p className='font-semibold text-sm'><span className='pr-1 border-r-2 border-solid border-black'>FrontEnd</span><span className='pl-1'>BackEnd</span></p>
                <h1 className='text-2xl font-semibold'>Software Developer</h1>
                </div>
              <div className='ml-auto overflow-hidden'>
                <Image className='rounded-full w-auto h-auto max-w-full max-h-full' src={pfpic} alt='mypic' />
              </div>
            </div>
                <p className='text-sm text-slate-800'>This is a template figma turned into coding using anima learn more at anima.com</p>
                <button className='bg-black text-white text-lg py-2 px-2 mt-1 rounded-lg'>Contact</button>
        </div>

        <div className='px-10 lg:flex md:flex pt-10 lg:px-32 md:px-16 h-screen bg-grey-600'>
              <div className='mb-4'>
                <p className='font-semibold text-lg'><span className='pr-1 border-r-2 border-solid border-black'>FrontEnd</span><span className='pl-1'>BackEnd</span></p>
                <h1 className='text-2xl py-3 lg:text-6xl md:text-4xl md:py-4 lg:py-6 font-semibold'>Software Developer</h1>
                <p className='text-sm md:text-lg lg:text-lg text-slate-800'>This is a template figma turned into coding using anima <br></br> learn more at anima.com</p>
                <button className='bg-black md:py-5 md:px-5 lg:py-5 lg:py-5 text-white text-lg py-3 px-4 mt-3'>Contact</button>

              </div>
              <div className='ml-auto rounded-lg overflow-hidden'>
                <Image className='rounded-full' src={pfpic} alt='mypic' />
              </div>
        </div>
        </div>

        <div>.....</div>
    </div>
  )
}

export default Topcomponent
