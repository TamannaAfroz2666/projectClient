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
                        {/* <p className='text-[#ffffff] text-[18px] py-1'> <strong className=' tracking-[.1rem]'>Front End Developer.</strong> </p> */}
                        <p className='text-[#ffffff] text-[20px] py-4 '>A Front End Developer with a bachelors degree in  <strong className=' tracking-[.1rem]'> Software Engineering </strong> from Daffodil International University.  </p>

                    </div>
                    <div>
                    <Image
                            src="/Images/portfolio/portfolioImage.jpg"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                            className='h-[200px] rounded-[8px] '
                        />

                    </div>
                </div>


                <p className='text-[#ffffff] text-[18px] py-4'>I have <strong className=' tracking-[.1rem]'> 1.5 years experience</strong> with React.js, Next.js, and Vue.js, during which I've developed projects such as an e-commerce platform, a job portal, and an airline booking system. I am proficient in React.js and Next.js, and have foundational knowledge of backend tools like the Nest.js framework and databases such as PostgreSQL and MySQL. </p>

                <p className='text-[#ffffff] text-[18px] py-4 '>I am skilled in using Git and GitLab for version control, and I effectively manage tasks with Jira and Microsoft Excel. </p>
            </div>
        </div>
    );
};

export default AboutMe;