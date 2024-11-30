import Image from 'next/image'
import React from 'react'
import img1 from '../images/klashdash.PNG'
import img2 from '../images/gomasoil.PNG'
import Link from 'next/link'


const Projects = () => {

    return (
        <div>
            <div id='projects' className='md:mx-12 lg:mx-20 mx-5'>
                <h1 className='text-2xl font-bold text-center md:text-4xl mt-32 mb-2'>Projects</h1>
                <p className='text-center'>Here you will find some of the personal projects i have worked on.</p>
                <div className='mt-10'>
                    <div className='md:flex transform gap-10 border-md bg-zinc-100 p-4 rounded-md md:h-[50vh] '>
                        <div className='md:flex-1'>
                            <Image src={img2} alt='KLasdahsboard' className='w-full h-full object-fit rounded-md' objectFit="fit" />
                        </div>
                        <div className='md:flex-1 py-2'>
                            <h1 className='text-xl md:text-2xl font-bold text-slate-700'>Gomas Oil LTD</h1>
                            <p className='my-2 md:my-2'>Designing and developing a modern, responsive
                                 website for my previous company using Next.js,
                                 Tailwind CSS, and JavaScript. The project 
                                 involved creating a
                                  user-friendly interface, optimizing performance, and
                                   ensuring seamless navigation to enhance the 
                                   companys online presence. This project not
                                    only sharpened my web development skills but also demonstrated my ability to deliver 
                                    functional and aesthetically pleasing solutions.</p>
                            <Link href="https://gomas-ltd.vercel.app/" target="_blank" rel="noopener noreferrer"> <button className='px-4 md:px-8 text-white py-2 rounded-lg md:text-xl font-bold bg-slate-800 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105'>VISIT</button></Link>
                        </div>
                    </div>

                    <div className='md:flex md:mt-6 transform gap-10 border-md bg-zinc-100 p-4 rounded-md md:h-[50vh] '>
                        <div className='md:flex-1'>
                            <Image src={img1} alt='KLasdahsboard' className='w-full h-full object-cover rounded-md' objectFit="fit" />
                        </div>
                        <div className='md:flex-1 py-2'>
                            <h1 className='text-xl md:text-2xl font-bold text-slate-700'>Klas Clone(Dashboard)</h1>
                            <p className='my-4 md:my-12'>I cloned the frontend of the Klas user dashboard section due to its impressive JavaScript features and UI design.It was a great experience for me to build the entire frontend.</p>
                            <Link href="https://klas2-bright12037s-projects.vercel.app/dashboard" target="_blank" rel="noopener noreferrer"> <button className='px-4 md:px-8 text-white py-2 rounded-lg md:text-xl font-bold bg-slate-800 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105'>VISIT</button></Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects
