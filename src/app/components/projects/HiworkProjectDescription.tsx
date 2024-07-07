"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const HiworkDescription = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>projectDescription</h1>
                <hr className='w-[400px] mt-4' />
            </div>
            <div>
                <div className=''>
                    <div>
                        <p className='text-[#ffffff] text-[20px] py-1 '> Hiwork is a popular job portal website in Japan. I am working here and mainly handle the user interface with language in Next.js, with state management Redux.</p>
                        <p className='text-[#ffffff] text-[18px] py-1'>I was maintained in this project: add to cart system,
                        maintains orders ,</p>
                        <p className='text-[#ffffff] text-[18px] py-1'>Order details</p>
                        <p className='text-[#ffffff] text-[18px] py-1'>Customer Details</p>
                        <p className='text-[#ffffff] text-[18px] py-1'>Invoice
                        </p>
                        <p className='text-[#ffffff] text-[18px] py-1'>Email sending
                      </p>
                        <p className='text-[#ffffff] text-[18px] py-1'>Authentification
                     </p>
                        <p className='text-[#ffffff] text-[18px] py-1'>Validation and so on</p>
                        <p className='text-[#ffffff] text-[20px] py-4 '>For ui design used by ant design in react and Sass. </p>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default HiworkDescription;