import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <img src={assets.logo} alt="logo" className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto regular'>
                    <img src={assets.mail_icon} alt="mailicon" className='w-6' />
                    greatstackdev@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>2025 William Mark. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 regular'>
                    <li><a target='_blank' href='https://github.com/'>GitHub</a></li>
                    <li><a target='_blank' href='https://linkedin.com/'>Linkedin</a></li>
                    <li><a target='_blank' href='https://twitter.com/'>Twitter</a></li>


                </ul>
            </div>
        </div>
    )
}

export default Footer;
