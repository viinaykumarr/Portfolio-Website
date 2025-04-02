import React from 'react'
import { assets, serviceData } from '../../assets/assets';

const Services = () => {
    return (
        <div id='services' className='w-full px-[5%] md:px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg regular'>What I offer</h4>
            <h2 className='text-center text-3xl md:text-5xl regular'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 regular'>
                I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla, and Apple.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-gray-200 hover:-translate-y-2 duration-500'>
                        <img src={icon} alt="icon" className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <img src={assets.right_arrow} alt="right arrow" className='w-4' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;
