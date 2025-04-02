import React from 'react'
import { workData } from '../../assets/assets';
import { assets } from '../../assets/assets';


const work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl regular'>My portfolio</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 regular'>
                Welcome to my web development portfolio ! Explore a collection of projects showcasing my expertise in Front-end devlopment
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 my-10'>
                {workData.map((project, index) => (
                    <div key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 duration-500 group-hover:bottom-7'>
                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition'>
                                <img src={assets.send_icon} alt="icon" className='w-5' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2 px-10 mx-auto my-20 hover:bg-black hover:text-white duration-500'> Show More <img src={assets.right_arrow_bold} alt="" /></a>
        </div>
    )
}

export default work;
