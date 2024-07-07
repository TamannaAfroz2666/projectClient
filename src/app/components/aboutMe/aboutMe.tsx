"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const AboutMe = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>aboutme</h1>
                <hr className='w-40 mt-4' />
            </div>
            <div>
                <div className='flex gap-4'>
                    <div>
                        <p className='text-[#ffffff] text-[20px] py-1 '> Hi, I am <strong className=' tracking-[.1rem]'> Tamanna Afroz</strong> </p>
                        <p className='text-[#ffffff] text-[18px] py-1'> <strong className=' tracking-[.1rem]'>Front End Developer.</strong> </p>
                        <p className='text-[#ffffff] text-[20px] py-4 '>A graduate student at the University of Daffodil International University with major <strong className=' tracking-[.1rem]'> Software Engineering </strong></p>

                    </div>
                    <div>
                    <Image
                            src="/Images/portfolio/portfolioImage.jpg"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                            className=' rounded-[8px] pt-6'
                        />

                    </div>
                </div>


                <p className='text-[#ffffff] text-[18px] py-4'>Having almost <strong className=' tracking-[.1rem]'> 1.5 year experience</strong> in React.js, Next.js, Vue.js, and implementing the various projects such as e-commarce project, Job Portal, Air lines project and so on. Proficient in React.js and Next.js but have basic ideas about Backend tools Nest.js framework and database postgresql, mySQL. </p>

                <p className='text-[#ffffff] text-[18px] py-4 '>I am skillful to use at git, gitLab and maintain task for Jira and Microsoft Excel.</p>
            </div>
        </div>
    );
};

export default AboutMe;