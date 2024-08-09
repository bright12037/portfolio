import Image from 'next/image'
import React from 'react'
import img1 from '../images/klashdash.PNG'
import img2 from '../images/Klashomepage.PNG'
import Link from 'next/link'


const Projects = () => {

    return (
        <div>
            <div id='projects' className='md:mx-12 lg:mx-20 mx-5'>
                <h1 className='text-2xl font-bold text-center md:text-4xl mt-32 mb-2'>Projects</h1>
                <p className='text-center'>Here you will find some of the personal projects i have worked on.</p>
                <div className='mt-24'>
                    <div className='flex transform gap-10 border-md bg-slate-200 p-4 rounded-md h-[50vh] '>
                        <div className='flex-1'>
                            <Image src={img2} alt='KLasdahsboard' className='w-full h-full object-cover rounded-md' objectFit="fit" />
                        </div>
                        <div className='flex-1 py-2'>
                            <h1 className='text-2xl font-bold text-slate-700'>Klas Clone(Web Pages)</h1>
                            <p className='my-12'>I cloned the frontend of the Klas webpages using Tailwind CSS and
                                JavaScript for the UI design.
                                It was a great experience to build the entire frontend.</p>
                            <Link href="https://klas2-bright12037s-projects.vercel.app/" target="_blank" rel="noopener noreferrer"> <button className='px-8 text-white py-2 rounded-lg text-xl font-bold bg-purple-500 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105'>VISIT</button></Link>
                        </div>
                    </div>

                    <div className='flex mt-6 transform gap-10 border-md bg-slate-200 p-4 rounded-md h-[50vh] '>
                        <div className='flex-1'>
                            <Image src={img1} alt='KLasdahsboard' className='w-full h-full object-cover rounded-md' objectFit="fit" />
                        </div>
                        <div className='flex-1 py-2'>
                            <h1 className='text-2xl font-bold text-slate-700'>Klas Clone(Dashboard)</h1>
                            <p className='my-12'>I cloned the frontend of the Klas user dashboard section due to its impressive JavaScript features and UI design.It was a great experience for me to build the entire frontend.</p>
                            <Link href="https://klas2-bright12037s-projects.vercel.app/dashboard" target="_blank" rel="noopener noreferrer"> <button className='px-8 text-white py-2 rounded-lg text-xl font-bold bg-purple-500 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105'>VISIT</button></Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects
