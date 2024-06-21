import React from 'react';
import '../../Styles/page.css'

const Contact = () => {
    return (
        <div>
            <div>
                <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>contact</h1>
                <hr className='w-40 mt-4' />
                <div>
                    <h1 className="uppercase text-[#fff]  text-[1.4rem] tracking-[.5rem] pt-12">Mohammed Ahsan</h1>
                    <div>
                        <p className='text-[#ffffff] text-[18px] py-4'> <strong className=' tracking-[.1rem]'>Address</strong> </p>
                        <p className='text-[#ffffff] text-[15px] tracking-[.1rem] pb-2 address-sub '> Denton, TX 76201 • USA
                        <hr className='border-b-1 border-dashed w-52 mt-2' />
                             </p>
                       

                    </div>
                    <div>
                        <p className='text-[#ffffff] text-[18px] py-4'> <strong className=' tracking-[.1rem]'>Email</strong> </p>
                        <p className='text-[#ffffff] text-[15px] tracking-[.1rem] pb-2 email-sub'> am7907176@gmail.com 
                        <hr className='border-b-1 border-dashed w-52  mt-2' />
                             </p>
                       

                    </div>
                    <div>
                        <p className='text-[#ffffff] text-[18px] py-4'> <strong className=' tracking-[.1rem]'>Mobile Number</strong> </p>
                        <p className='text-[#ffffff] text-[15px] tracking-[.1rem] number-sub '> 940-353-0181 

                        <hr className='border-b-1 border-dashed w-28 mt-2' />
                        </p>
                       

                    </div>
                    <div>
                        <p className='text-[#ffffff] text-[18px] py-4'> <strong className=' tracking-[.1rem]'> LinkedIn
                        </strong> </p>
                        <p className='text-[#ffffff] text-[15px] tracking-[.1rem]  linkdin-sub'> <a href=" http://linkedin.com/in/mmohammed-hossain" >mmohammed-hossain</a>
                        <hr className='border-b-1 border-dashed w-52  mt-2' />

                            </p>
                        

                    </div>




                </div>
            </div>


        </div>
    );
};

export default Contact;