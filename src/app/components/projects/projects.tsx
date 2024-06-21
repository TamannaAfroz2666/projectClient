"user-client"
import React from 'react';
import Image from 'next/image'

const Projects = () => {
    const gitHabCodeHandle = () =>{
        window.location.href = 'https://github.com/TamannaAfroz2666/Inventory-Management'; 
    }
    const trafficHandler = () =>{
        window.location.href = 'https://github.com/TamannaAfroz2666/Inventory-Management';
    }
    return (
        <div>
            <div>
                <div>
                    <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>projects</h1>
                    <hr className='w-40 mt-4' />
                </div>

                <div>
                    <p className='text-[#ffffff] text-[18px] py-4 font-semibold'> Look at my Projects from different:</p>
                    <div>
                        <Image
                            src="/Images/walmart.jpeg"
                            width={700}
                            height={1000}
                            alt="Picture of the author"
                            className='h-[28rem] rounded-[8px] pt-6'
                        />
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-8 pl-2'>WALMART SALES PREDICTION</p>
                        <div>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={gitHabCodeHandle}>GitHubcode </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700">medium </button>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <Image
                            src="/Images/traffic.png"
                            width={700}
                            height={1000}
                            alt="Picture of the author"
                            className='h-[28rem] rounded-[8px] pt-6'
                        />
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-8 pl-2'>TRAFFIC SIGN RECOGNITION USING CNN</p>
                        <div>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={trafficHandler}>GitHubcode </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700">medium </button>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <Image
                            src="/Images/article_inventory_main.jpg"
                            width={700}
                            height={1000}
                            alt="Picture of the author"
                            className='h-[28rem] rounded-[8px] pt-6'
                        />
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-8 pl-2'>RESTAURANT MANAGEMENT SYSTEM</p>
                        <div>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700">GitHubcode </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700">medium </button>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <Image
                            src="/Images/rnn.png"
                            width={700}
                            height={1000}
                            alt="Picture of the author"
                            className='h-[28rem] rounded-[8px] pt-6'
                        />
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-8 pl-2'>RECURRENT NEURAL NETWORKS</p>
                        <div>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" >GitHubcode </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700">medium </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;