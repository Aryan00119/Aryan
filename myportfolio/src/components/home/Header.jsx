import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PROFILEPIC from "../../utills/assets/photo.jpg"
import RESUME from "../../utills/assets/certificates/Aryan_resume (3).png"
import { COLOR } from "../../utills/constants"
import styles from "./Header.module.css"
import { FaDownload } from "react-icons/fa6";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,

    });
  }, []);

  function downloadImage() {
    const link = document.createElement('a');
    link.href = RESUME;
    link.download = 'Aryan_resume.png';
    link.click();
  }

  return (
    <>
      <div className="row first" data-aos="fade-up">
        <div className="col-md-4 image-about d-flex justify-content-center align-items-center">
          <img src={PROFILEPIC} style={{ margin: "auto" }} width={"80%"} className='rounded-4' />
        </div>
        <div className="col-md-8 text-about d-flex flex-column justify-content-center  p-5" >
          <h1 className="typing text-white">Hi, I'm Aryan.</h1>
          <p className="typing fs-4" style={{ color: COLOR }}>
            A passionate web developer with a knack for creating dynamic and user-friendly web experiences. Explore my portfolio to see how I blend creativity and technical expertise to build seamless digital solutions.
          </p>

        <button className={`${styles.btn1} btn w-25 `} onClick={downloadImage}>
            RESUME  <FaDownload style={{color:"rgb(232, 187, 6)"}} className='ms-1'/>
          </button>
        </div>
      </div>
      <div class="row profile-intro" data-aos="fade-right">
        <div class="col">
          <p class="p-head text-white text-center fs-3">INTRO</p>
          <div class="intro-p text fs-5" style={{ color: COLOR, textAlign: "justify" }}>
            <p>
              I'm Aryan, a recent graduate with a strong passion for web development, graphic design, and video editing. My journey into technology and design began during my studies, where I developed a solid foundation in creating websites, designing graphics, and editing videos.
              What sets me apart is my commitment to punctuality and attention to detail. I believe in delivering quality work on time, every time. My experience as a business development executive has given me a unique perspective on how technology and design can drive business success.
              I'm excited to bring my fresh perspective and creativity to your team or project. Let's work together to create something amazing.
            </p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Header
