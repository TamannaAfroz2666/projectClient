"use client"
import React, { useState } from 'react';

const AboutMe = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>aboutme</h1>
                <hr className='w-40 mt-4' />
            </div>
            <div>
                <p className='text-[#ffffff] text-[20px] py-1 '>👋 Hi, I am <strong className=' tracking-[.1rem]'> Mohammed Ahsan</strong> .</p>
                <p className='text-[#ffffff] text-[18px] py-1'>🎖️ <strong className=' tracking-[.1rem]'> Google Certified Data Analytics.</strong> .</p>
                <p className='text-[#ffffff] text-[20px] py-4 '>🧑‍🎓A graduate student at the University of North Texas in<strong className=' tracking-[.1rem]'> Data Science </strong>  graduating in May 2024.</p>

                <p className='text-[#ffffff] text-[18px] py-4'>🧑‍💻Having almost <strong className=' tracking-[.1rem]'> 1 year experience</strong> in data domains exploring the development, and implementing the various domain requirements designing the application. Proficient in cloud platforms like Azure, and GCP, databases like SQL, and NoSQL, and visualization tools like Power BI and Tableau.  .</p>

                <p className='text-[#ffffff] text-[18px] py-4 '>🕵️Demonstrated fine-tuning of <strong className=' tracking-[.1rem]'>Large Language Models(LLMs)</strong>    and implementing NLP Techniques like BERT, Roberta, and GPT for accurate bias detection and mitigation resulting in improving the accuracy by 25%.</p>

                <p className='text-[#ffffff] text-[18px] py-4 '>I am also been the members of the various organization in the university and outside the university:</p>

                <ol className='text-[#ffffff] text-[18px]' >
                    <li className='text-[#ffffff] text-[18px] font-semibold'> <p>1. <span className='pl-2'>Indian Student Association (ISA) Oct 2022—Present- Joint Secretary</span></p>  </li>
                    <li className='text-[#ffffff] text-[18px] font-semibold'> <p>2. <span className='pl-2'>Data Science Organization Aug 2022—Present- Secretary</span></p>  </li>
                    <li className='text-[#ffffff] text-[18px] font-semibold'> <p>3. <span className='pl-2'>Women in Computing World Feb 2023—Present - Graduate Student Ambassador</span></p>  </li>
                    <li className='text-[#ffffff] text-[18px] font-semibold'> <p>4. <span className='pl-2'>Junior Chamaber International (JCI) Mar 2017- Aug 2022 - Vice President, Training</span></p>  </li>
                    <li className='text-[#ffffff] text-[18px] font-semibold'> <p>5. <span className='pl-2'>Techkriti & Samskriti - Vice President</span></p>  </li>
                </ol>
            </div>


        </div>
    );
};

export default AboutMe;