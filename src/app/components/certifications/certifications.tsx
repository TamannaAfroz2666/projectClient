import React from 'react';

const Certifications = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>certifications</h1>
                <hr className='w-72 mt-4' />
              
                <a href="https://drive.google.com/file/d/1BFvj3RvgAI95AngXZt5C6BDT3BQCjqiH/view?usp=sharing">
                    <p className='text-[#ffffff] text-[24px] hover:text-sky-700  pt-8'> <strong className=' tracking-[.1rem]'> Introduction to Software Testing </strong>
                    </p>
                </a>
                <a href="https://drive.google.com/file/d/1uIE1_NO2Stxwqy-5vDie2dLgRkbZdLVn/view?usp=sharing">
                    <p className='text-[#ffffff] text-[24px] hover:text-sky-700  pt-2 pb-6'> <strong className=' tracking-[.1rem]'> Software Architecture  </strong>
                    </p>
                </a>
              
                <h1 className=' text-[1.5rem] capitalize tracking-[.1rem] leading-[1.4rem] text-[#ffffff] font-semibold  '>Achievement</h1>
                <hr className='w-40 mt-4' />
                <a href="https://drive.google.com/file/d/1p-Xsfx4C4wxFUCB1TEVQDGDFcYOCgcBw/view?usp=sharing">
                    <p className='text-[#ffffff] text-[18px] hover:text-sky-700  pt-2 pb-6'> <strong className=' tracking-[.1rem]'> I have completed a semester exchange program at Memorial University, Newfoundland,
                    Canada. (2021) </strong>
                    </p>
                </a>
            </div>

        </div>
    );
};

export default Certifications;