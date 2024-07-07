"user-client"
import React, { useState } from 'react';
import Image from 'next/image'
import { Button, Modal } from 'antd';

import AmborDescription from './AmborProjectDescription';
import HiworkDescription from './HiworkProjectDescription';
import ParlurDescription from './PurlourProjectDescription';

const Projects = () => {
    const [amborSystemModal, setAmborSystemModal] = useState(false)
    const [hiworkSystemModal, setHiworkSystemModal] = useState(false)
    const gitHabCodeHandle = () => {
        window.location.href = 'https://ambor.com.bd/';
    }
    const hiworkProject = () => {
        window.location.href = 'https://hiwork.jp/';
    }
    const parlourProject = () => {
        window.location.href = 'https://github.com/TamannaAfroz2666/Parlour-BD-Page';
    }
   
    return (
        <div>
            <Modal

                centered
                open={amborSystemModal}

                onCancel={() => setAmborSystemModal(false)}
                width={800}
                footer={null}
                className="custom-modal"
            >
                <AmborDescription />
            </Modal>
            <Modal

                centered
                open={hiworkSystemModal}

                onCancel={() => setHiworkSystemModal(false)}
                width={800}
                footer={null}
                className="custom-modal"
            >
                <ParlurDescription />
            </Modal>
            <Modal

                centered
                open={hiworkSystemModal}

                onCancel={() => setHiworkSystemModal(false)}
                width={800}
                footer={null}
                className="custom-modal"
            >
                <ParlurDescription />
            </Modal>
            <div>
                <div>
                    <h1 className=' text-[1.5rem] uppercase tracking-[.5rem] leading-[1.4rem] text-[#ffffff] font-semibold pt-16 '>projects</h1>
                    <hr className='w-40 mt-4' />
                </div>

                <div>
                    <p className='text-[#ffffff] text-[18px] py-4 font-semibold'> Look at my Projects from different:</p>
                    <div>
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-2 pl-2'> Ambor E-commerce site</p>
                        <Image
                            src="/Images/logoam.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className=' rounded-[8px] pt-6'
                        />

                        <div className='
                        pt-6'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={gitHabCodeHandle}>Project Link </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={() => setAmborSystemModal(true)}>Description </button>
                        </div>
                    </div>
                    <div className='pt-8'>
                    <div>
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-2 pl-2'> HiWork job portal</p>
                        <Image
                            src="/Images/logoHiwork.png"
                            width={700}
                            height={1000}
                            alt="Picture of the author"
                            className='h-[28rem] rounded-[8px] pt-6'
                        />

                        <div className='
                        pt-6'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={hiworkProject}>Project Link </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={() => setHiworkSystemModal(true)}>Description </button>
                        </div>
                    </div>
                    </div>
                    <div className='pt-8'>
                    <div>
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-2 pl-2'> Parlour BD Page.</p>
                        <Image
                            src="/Images/spaLogo.jpg"
                            width={700}
                            height={1000}
                            alt="Picture of the author"
                            className='h-[28rem] rounded-[8px] pt-6'
                        />

                        <div className='
                        pt-6'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={parlourProject}>Project Link </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={() => setHiworkSystemModal(true)}>Description </button>
                        </div>
                    </div>
                    </div>
                    {/* <div className='pt-8'>
                    <div>
                        <p className='text-[#ffffff] text-[14px] uppercase tracking-[.2rem] py-2 pl-2'> Parlour BD Page.</p>
                        <Image
                            src="/Images/spaLogo.jpg"
                            width={700}
                            height={1000}
                            alt="Picture of the author"
                            className='h-[28rem] rounded-[8px] pt-6'
                        />

                        <div className='
                        pt-6'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-8 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={parlourProject}>Project Link </button>
                        </div>
                        <div className='pt-10'>
                            <button className="uppercase tracking-[.3rem] text-[.8rem] font-semibold  p-4 px-6 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer hover:bg-gray-700" onClick={() => setHiworkSystemModal(true)}>Description </button>
                        </div>
                    </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;