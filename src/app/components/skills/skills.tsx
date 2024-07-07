"use client"
import React, { useState } from 'react';

const Skills = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>skills</h1>
                <hr className='w-32 mt-4' />
            </div>
            <div>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>1. Programming Languages:</strong> Python, C </p>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>2.Web Design:</strong> HTML5, CSS3,Css animation,Framer motion, SASS,Bootstrap, Tailwind css, Javascript, TypeScript.</p>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>3.UI Design:</strong> Ant Design, Material-UI, Semantic UI</p>
                <p className='text-[#ffffff] text-[18px] py-2'> <strong className=' tracking-[.1rem]'>4.Library and Frameworks:</strong> React.js, Next.js,Vue.js, -Nest.js.</p>
                <p className='text-[#ffffff] text-[20px] py-2 '><strong className=' tracking-[.1rem]'>5.Database: </strong> Postgresql, mysql,sql.</p>
                <p className='text-[#ffffff] text-[20px] py-2 '><strong className=' tracking-[.1rem]'>6.Version Control: </strong> Github, Gitlab.</p>
                <p className='text-[#ffffff] text-[20px] py-2 '><strong className=' tracking-[.1rem]'>7.Task management: </strong> Jira, Excel.</p>
                <p className='text-[#ffffff] text-[20px] py-2 '><strong className=' tracking-[.1rem]'>8.Test management: </strong> Postman, Cypress.</p>           
            </div>
        </div>
    );
};

export default Skills;