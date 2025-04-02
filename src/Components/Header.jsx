import React from 'react'
import { assets } from '/assets/assets'

const Header = () => {
    return (

        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen  flex flex-col items-center justify-center gap-4'>
            <div>
                <img src={assets.profile_img} alt="profile image" className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 regular'>Hi! I'm William<img src={assets.hand_icon} alt="handicon" className='w-6' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] regular'>
                Frontend web developer based in london
            </h1>
            <p className='max-w-2xl mx-auto regular'>
                I am a Front End developer from california, USA with 10 years of expereience in multiple companies like Microsoft ,Tesla and Apple
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2 '>Contact me
                    <img src={assets.right_arrow_white} alt="arrow" /> </a>
                <a href="/sample-resume.pdf" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume
                    <img src={assets.download_icon} alt="" className='w-5' /> </a>
            </div>
        </div>
    )
}

export default Header;
