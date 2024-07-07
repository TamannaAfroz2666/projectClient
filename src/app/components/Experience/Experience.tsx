"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const ExperienceContent = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>Working Experience</h1>
                <hr className='w-[400px] mt-4' />
            </div>
            <div>
                <div className=''>
                    <div>
                        <p className='text-blue-400 text-[24px] py-1 pt-2 '> <strong className=' tracking-[.1rem]'> Sawari Overseas</strong> </p>

                        <p className=' py-1 text-[16px] text-[#ffffff] '> <strong className=' tracking-[.1rem] text-[#818cf8] text-[24px]'> Software Engineer </strong>  [ 01/09/2022 – 30/10/2023 ]</p>

                        <p className='text-[#ffffff] text-[18px] py-1'> <strong className=' tracking-[.1rem]'>City:</strong> <span className='text-[20px] pl-1'>Dhaka</span> </p>
                        <p className='text-[#ffffff] text-[18px] py-1'> <strong className=' tracking-[.1rem]'>Country:</strong> <span className='text-[20px] pl-1'>Bangladesh</span> </p>
                    </div>
                </div>
                <p className='text-[#ffffff] text-[16px] py-2 '> Analysis in Galileo API.</p>
                <p className='text-[#ffffff] text-[16px] py-0 '> Ambor Admin site (Vue.Js).</p>
                <p className='text-[#ffffff] text-[16px] py-2 '> Ambor user interface (React.Js).</p>
                <p className='text-[#ffffff] text-[16px] py-0 '> User interface on the mySawari air site. (React.Js).</p>
                <p className='text-[#ffffff] text-[16px] py-0 '> Manual testing on several projects.</p>
            </div>

            <div className='pt-6'>
                <div className=''>
                    <div>
                        <p className='text-blue-400 text-[24px] py-1 pt-2 '> <strong className=' tracking-[.1rem]'>  B-cause Inc</strong> </p>

                        <p className=' py-1 text-[16px] text-[#ffffff] '> <strong className=' tracking-[.1rem] text-[#818cf8] text-[24px]'> Jr. Software Developer </strong>  [ 04/03/2024 – Current ]</p>

                        <p className='text-[#ffffff] text-[18px] py-1'> <strong className=' tracking-[.1rem]'>City:</strong> <span className='text-[20px] pl-1'>Dhaka</span> </p>
                        <p className='text-[#ffffff] text-[18px] py-1'> <strong className=' tracking-[.1rem]'>Country:</strong> <span className='text-[20px] pl-1'>Bangladesh</span> </p>
                    </div>
                </div>
                {/* <p className='text-[#ffffff] text-[16px] py-2 '> Analysis in Galileo API.</p> */}
                <p className='text-[#ffffff] text-[16px] py-0 '> Hiwork Admin site (Next.Js, Redux,Ant-design,Typescript, Tailwind Css).</p>
                <p className='text-[#ffffff] text-[16px] py-2 '> Hiwork user interface (Next.Js, Redux,Ant-design,Typescript, Tailwind Css).</p>
               
            </div>


        </div>
    );
};

export default ExperienceContent;