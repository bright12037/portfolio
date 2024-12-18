
'use client'

import Image from 'next/image'
import pfpic from '../images/myimg.jpg'
import { useState } from 'react'
import { RxDragHandleHorizontal } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from 'next/link';

import imghtml from '../images/html.png'
import imgcss from '../images/css.webp'
import imgnj from '../images/nodejs.jpeg'
import img12 from '../images/tailwind.png'
import img13 from '../images/nextjs.png'
import Projects from './projects';

const Topcomponent = () => {

  const [Show, setShow] = useState(false)
  const [more, setMore] = useState(false)

  const shownav = () => {
    setShow(!Show)
  }

  const showMore = () =>{
    setMore(!more)
  }


  return (
    <div>
      <div>
        <nav className='flex items-center md:justify-center md:px-12 lg:px-20 mx-5 px-4 mt-3 rounded-lg py-5 bg-zinc-100'>
          <h1 className='font-black text-xl cursor-pointer'>Bright Igwe</h1>
          <div className='ml-auto font-medium relative'>
            <p onClick={shownav} className='lg:hidden md:hidden text-4xl font-black'><RxDragHandleHorizontal /></p>
            
            <div className='hidden font-semibold gap-10 md:flex lg:flex md:items-center lg:items-center py-1 right-1 '>
              <Link href="./#about"><p className='cursor-pointer hover:border-blue-500 cursor-pointer'>About me</p></Link>
              <Link href="./#skills" ><p className='cursor-pointer hover:border-blue-500 cursor-pointer'>My skills</p></Link>
              <Link href="./#projects"> <p className='cursor-pointer'>Work</p></Link>
              <Link href="./#contact"><button className='px-6 text-white py-2 rounded-lg text-md font-bold bg-black transition duration-300 ease-in-out transform hover:text-black hover:bg-zinc-300 hover:scale-105'>Contact</button></Link>
            </div>
          </div>
          
        </nav>
        {Show === false ? '' : (<div className='pl-4 h-3/4 md:hidden lg:hidden absolute top-0 w-full bg-slate-200 '>
          <p onClick={shownav} className='pt-4 border-b-black pb-4 lg:hidden md:hidden text-4xl font-black'><IoIosCloseCircleOutline /></p>
          <Link href="./#about"><p className='pb-4 border-b-black underline cursor-pointer'>About me</p></Link>
          <Link href="./#skills"><p className='pb-4 border-b-black underline cursor-pointer'>Skills</p></Link>
          <Link href="./#projects"><p className='pb-4 border-b-black underline cursor-pointer'>Work</p></Link>
          <Link href="./#contact"><p className='pb-4 border-b-black underline cursor-pointer'>Contact</p></Link>
            </div>)}
      </div>
      {/* =======================================topsection============================================================================ */}
      <div id='about' className='TopSEction'>
        <div className='px-10 lg:hidden md:hidden pt-10 h-3/4'>
          <div className='flex items-center  pb-2'>
            <div>
              {/* <p className='font-semibold text-sm'><span className='pr-1 border-r-2 border-solid border-black'>FrontEnd</span><span className='pl-1'>BackEnd</span></p> */}
              <h1 className='text-2xl font-semibold'>FrontEnd Developer</h1>

            </div>
            <div className='ml-auto overflow-hidden'>
              <Image className='rounded-full w-auto h-auto max-w-full max-h-full' src={pfpic} alt='mypic' />
            </div>
          </div>
          <p className='text-sm text-slate-800'>I am currently seeking an internship opportunity where I can apply and further develop my skills in web development. I am eager to work on real world projects that will challenge me and help sharpen my expertise in technologies like JavaScript, Next.js, CSS, and more. I am enthusiastic about contributing to a team while continuing to learn and grow as a developer.</p>
          <Link href="./#contact"><button className='bg-black text-white text-sm py-2 px-2 mt-1 rounded-lg'>Contact</button></Link>
        </div>

        <div className='hidden px-10 md:mx-5  lg:flex md:flex py-32 lg:px-32 md:px-16 h-3/4 bg-grey-600  md:h-3/4 md:justify-center'>
          <div className=''>
            {/* <p className='font-semibold text-lg'><span className='pr-1 border-r-2 border-solid border-black'>FrontEnd</span><span className='pl-1'>BackEnd</span></p> */}
            <h1 className='text-2xl py-3 lg:text-6xl md:text-4xl md:py-4 lg:py-6 font-semibold'>FrontEnd Developer</h1>
            <p className='text-sm md:text-lg lg:text-lg text-slate-800'>I am currently seeking an internship
               opportunity where I can apply <br />
              and further develop my skills in web development. I am eager to <br />
              work on real world projects that will challenge me and help sharpen <br /> my expertise in technologies like
              JavaScript, Next.js{more===false ? <span onClick={showMore} className='font-bold cursor-pointer'>...read more</span> :<span>, CSS, and more. <br /> I am enthusiastic about contributing to a team while continuing to
              learn <br /> and grow as a developer. <span onClick={showMore} className='font-bold cursor-pointer'>less</span></span> }</p> 
            <Link href="./#contact"><button className='bg-black md:py-5 md:px-5 lg:py-5 lg:py-5 text-white text-lg py-3 px-4 mt-3  rounded-lg'>Contact</button></Link>

          </div>
          <div className='ml-auto rounded-lg overflow-hidden'>
            <Image className='rounded-full' src={pfpic} alt='mypic' />
          </div>
        </div>
      </div>
      {/* ========================================================skills=========================================================================================== */}
      <div className='SECTION2 pt-6 mx-2 md:mx-12 lg:mx-20'>
        <h1 id='skills' className='text-2xl font-bold text-center md:text-4xl mb-4 md:mb-16'>My Skills</h1>
        <div className=' md:flex md:gap-2 justify-center  text-center'>
          <div className='flex flex-col items-center shadow-md mb-2 bg-zinc-100 transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 p-4 rounded-lg'>
            <Image className='h-24 w-24 md:w-24 md:h-24 overflow-hidden rounded-lg' src={imghtml} alt='dd' />
            <h1 className='font-bold text-xl py-3'>HTML</h1>
            <p className='text-sm font-semibold pb-4'>My experience includes creating well structured, accessible, and semantically correct web pages that are optimized for search engines.</p>
          </div>

          <div className='flex flex-col items-center shadow-md mb-2 bg-zinc-100 transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 p-4 rounded-lg'>
            <Image className='h-24 w-24 md:w-24 md:h-24 overflow-hidden rounded-lg' src={imgcss} alt='dd' />
            <h1 className='font-bold text-xl py-3'>CSS</h1>
            <p className='text-sm font-semibold'>I am proficient in creating responsive <br /> designs that enhance user experience across various devices, using advanced techniques like Flexbox, Grid, and animations.</p>
          </div>

          <div className='flex flex-col items-center shadow-md mb-2 bg-zinc-100 transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 p-4 rounded-lg'>
            <Image className='h-24 w-24 md:w-24 md:h-24 overflow-hidden rounded-lg object-cover' src={img12} alt='dd' />
            <h1 className='font-bold text-xl py-3'>Tailwind</h1>
            <p className='text-sm font-semibold'> My skills in Tailwind CSS enable me to quickly prototype and build modern, responsive user interfaces with minimal custom CSS.</p>
          </div>

          <div className='flex flex-col items-center shadow-lg mb-2 bg-zinc-100 transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 p-4 rounded-lg'>
            <Image className='h-24 w-24 md:w-24 md:h-24 overflow-hidden rounded-lg' src={img13} alt='dd' />
            <h1 className='font-bold text-xl py-3'>NextJS</h1>
            <p className='text-sm font-semibold'>I have developed strong skills in JavaScript, with a particular focus on using the Next.js framework</p>
          </div>
        </div>
      </div>

      {/* ==============================================project=========================================================== */}
      <Projects />

      {/*============================================  contact ============================================== */}
      <div className='px-4'>
        <h1 id='contact' className='text-2xl md:text-4xl font-bold text-center mt-16 md:mt-32 mb-4 md:mb-10'>Contact</h1>

        <p className='text-md text-center mb-4 md:mb-10'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <div className='flex justify-center mx-2 md:mx-24 lg:mx-72 py-6 shadow-md bg-white-700 '>
          <form className="w-full">
            <div className="mb-5">
              <label htmlFor="text" className="text-sm pb-2 font-semibold text-sans block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" id="email" className=" py-4 bg-slate-200 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="text-sm pb-2 font-semibold text-sans block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="email" className="py-4 bg-slate-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
            </div>
            <div className="mb-5">
              <label htmlFor="text" className="text-sm pb-2 font-semibold text-sans block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
              <input type="text" id="email" className="pb-32 bg-slate-200 pt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

          </form>
        </div>

      </div>


    </div>

  )
}

export default Topcomponent
