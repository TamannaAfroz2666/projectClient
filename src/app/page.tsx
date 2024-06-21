"use client"
import { CgHeart } from "react-icons/cg";
import AboutMe from "./components/aboutMe/aboutMe";
import { useState } from "react";
import { Button, Modal } from 'antd';
import './Styles/page.css'
import Skills from "./components/skills/skills";
import Certifications from "./components/certifications/certifications";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [open, setOpen] = useState(false);
  const [openCertifications, setOpenCertifications] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const downloadCvHandler = () =>{

    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1xFbVumaaXpguSC9nlqzWQ10HHF8tx1b-/view'; 
    link.download = 'My_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
   
  return (
    <main className=" min-h-screen w-full m-auto">
      <div className="flex items-center justify-center pt-[0rem] ml-[25rem]">
        <p className="text-center p-10 w-[100px]">
          <CgHeart size={100}
            className="p-8 border-2 border-white-600 rounded-full" color="white" /></p>
        <div className="mt-[10.6rem] relative right-2 ">
          <div className="border-r-2 border-white-600 h-[70px]"></div>
        </div>
        <div className="mt-[15rem] right-[16rem] relative" >
          <div className="border-b-2 border-white-600 w-[500px]"></div>
        </div>
      </div>
      <div>
        <h1 className="uppercase text-[#fff] text-center text-[2rem] tracking-[.5rem] pt-12">Mohammed Ahsan</h1>
        <h1 className="uppercase text-[#fff] text-center text-[14px] tracking-[.2rem]  pt-4 pb-10">ASPIRING DATA ANALYST/SCIENTIST </h1>
      </div>
      <div className="flex items-center justify-center pb-10">
        <button className="uppercase tracking-[.2rem] text-[.8rem] font-semibold  p-4 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer" onClick={downloadCvHandler}>download resume</button>
      </div>
      <div className="flex items-center justify-center pt-4">
        <div>
          <hr className="w-[500px]" />
        </div>
      </div>
      <div className="flex items-center justify-center " >
        <div className=" h-[50px] bg-white w-[.006rem]"></div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="ml-4">
          <button className="uppercase tracking-[.2rem] text-[.8rem] font-semibold  p-4 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer" onClick={() => setOpen(true)} >
            Aboutme
          </button>
          <Modal
            // title="About Me"
            centered
            open={open}
            // onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={800}
            footer={null}
            className="custom-modal"
          >
            <AboutMe />
          </Modal>

          <button className="uppercase tracking-[.2rem] text-[.8rem] font-semibold  p-4 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer" onClick={() => setOpen(true)} > skills</button>
          <Modal
            centered
            open={open}
            onCancel={() => setOpen(false)}
            width={800}
            footer={null}
            className="custom-modal"
          >
            <Skills />
          </Modal>
          <button className="uppercase tracking-[.2rem] text-[.8rem] font-semibold  p-4 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer"  onClick={() => setOpenCertifications(true)}> certifications</button>

          <Modal
            centered
            open={openCertifications}
            onCancel={() => setOpenCertifications(false)}
            width={800}
            footer={null}
            className="custom-modal"
          >
            <Certifications/>
            {/* <Skills /> */}
          </Modal>
          <button className="uppercase tracking-[.2rem] text-[.8rem] font-semibold  p-4 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer" onClick={() => setOpenProjects(true)} >projects </button>
          <Modal
            centered
            open={openProjects}
            onCancel={() => setOpenProjects(false)}
            width={800}
            footer={null}
            className="custom-modal"
          >
         
            <Projects/>
           
          </Modal>


          <button className="uppercase tracking-[.2rem] text-[.8rem] font-semibold  p-4 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer">competitions </button>


          <button className="uppercase tracking-[.2rem] text-[.8rem] font-semibold  p-4 border-solid border-2 border-white-600 text-[#fff] bg-[#00000000] rounded-t cursor-pointer" onClick={() => setOpenContact(true)}>contact </button>
          <Modal
            centered
            open={openContact}
            onCancel={() => setOpenContact(false)}
            width={800}
            footer={null}
            className="custom-modal"
          >
            <Contact/>
          </Modal>

        </div>
      </div>
      <footer className="mt-[2rem]">
        <p className="text-center uppercase tracking-[.2rem] text-[.6rem] opacity-[.6rem]  text-[#fff]">© 2024 ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
