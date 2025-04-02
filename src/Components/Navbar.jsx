import React, { useRef } from 'react'
import { assets } from '/assets/assets'


const Navbar = () => {


    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <img src={assets.header_bg_color} alt="bg-color" />

            </div>
            <nav className="flex items-center justify-between w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50" >
                <a href="#top">
                    <img src={assets.logo} alt="logo" className='w-28 cursor-pointer mr-14' />
                </a>
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50 regular cursor-pointer">
                    <li onClick={() => scrollToSection("header")}>Home</li>
                    <li onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("services")}>Services</li>
                    <li onClick={() => scrollToSection("work")}>Work</li>
                    <li onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>
                <div className='flex items-center gap-4'>


                    <a href="#Connect" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 regular'>Connect <img src={assets.arrow_icon} alt="arrow-icon" className='w-3' /></a>

                    <button className=' block md:hidden ml-3' onClick={openMenu}>
                        <img src={assets.menu_black} alt="menuicon" className='w-6' />
                    </button>
                </div>

                {/* --------mobile menu--------- */}

                <ul ref={sideMenuRef} className="md:hidden flex flex-col gap-4  px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500" >

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <img src={assets.close_black} alt="close" className='w-4 cursor-pointer' />
                    </div>
                    <li><a href="#Home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#About" onClick={closeMenu}>About</a></li>
                    <li><a href="#Services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#MyWork" onClick={closeMenu}>My work</a></li>
                    <li><a href="#Testimonials" onClick={closeMenu}>Testimonials </a></li>
                </ul>
            </nav >
        </>
    )
}

export default Navbar;

