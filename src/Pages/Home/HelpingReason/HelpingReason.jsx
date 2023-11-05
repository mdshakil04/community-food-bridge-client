/* eslint-disable no-unused-vars */
import React from 'react';

const HelpingReason = () => {
    return (
        <div className=' container mx-auto items-center justify-center '>
            <div className=' lg:flex lg:flex-col  items-center lg:p-4'>
                <h2 className="md:text-4xl font-mono rounded-full md:p-4 mt-12 text-center md:bg-[#a3f1d2]">Reasons of Helping</h2>
            </div>
            {/* Reasons Container */}
            <div className=' lg:mt-8 md:grid lg:grid-cols-3 md:grid-cols-1 justify-center items-center lg:ml-32'>
                {/* Reasons one */}
                <div className=' card'>
                    <div className=''>
                        <img className='rounded-xl' src='https://i.ibb.co/T8Vkdxq/1.png' alt="" />
                    </div>
                    <div className='card md:w-[280px] card-body bg-white border shadow-lg relative md:-top-52 md:left-16 md:py-12'>
                        <h2 className="md:text-2xl mb-4">Collecting Fund</h2>
                        <p>Collecting funds is a common practice used by various organizations, charities, and individuals to raise money for specific causes, projects ....</p>
                        <button className="btn btn-outline btn-info md:mt-8">Read More</button>
                    </div>
                </div>
                <div className=' card'>
                    <div>
                        <img className='rounded-xl' src='https://i.ibb.co/wCxvvzS/2.png' alt="" />
                    </div>
                    <div className='card md:w-[280px] card-body bg-white border shadow-lg relative md:-top-52 md:left-16 md:py-12'>
                        <h2 className="md:text-2xl mb-4">Blood Camp</h2>
                        <p>A blood donation camp is an organized event where individuals voluntarily donate blood ....</p>
                        <button className="btn btn-outline btn-info mt-8">Read More</button>
                    </div>
                </div>
                <div className=' card'>
                    <div>
                        <img className='rounded-xl' src='https://i.ibb.co/yg8b9vV/3.png' alt="" />
                    </div>
                    <div className='card md:w-[280px] card-body bg-white border shadow-lg relative md:-top-52 md:left-16 md:py-12'>
                        <h2 className="md:text-2xl mb-4">Friendly Volunteer</h2>
                        <p>A friendly volunteer is an individual who selflessly dedicates their time, energy, and skills to support various....</p>
                        <button className="btn btn-outline btn-info mt-8">Read More</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HelpingReason;