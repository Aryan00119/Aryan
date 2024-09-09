import React from 'react'
import { SiGoogledisplayandvideo360, SiCodesignal } from "react-icons/si";
import { IoBusinessSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import styles from "./Profile.module.css"
import { COLOR } from "../../utills/constants"

const MyProfile = () => {
  return (
    <div class="row main-skills container">
    <h1 className='text-white text-center fs-3' style={{ margin: "30px 0px" }}>MY PROFILE</h1>
    <div class="col skills" style={{ color: COLOR }}>
      <div class="row justify-content-evenly">
      <div className={`${styles.profile} col-md-3 mt-2`} data-aos="flip-left" >
          <FaReact className="react-icon" />
          <h2 class="web-text fs-5 mt-1">Web Developer</h2>
        </div>
        <div className={`${styles.profile} col-md-3 mt-2 `} data-aos="flip-left" >
          <SiGoogledisplayandvideo360 className="react-icon"/>
          <h2 class="web-text fs-5">Video Editor</h2>
        </div>
        <div className={`${styles.profile} col-md-3 mt-2`} data-aos="flip-left" >
          <SiCodesignal className="react-icon" />
          <h2 class="web-text fs-5">Graphic Designer</h2>
        </div>
        <div className={`${styles.profile} col-md-3 mt-2`} data-aos="flip-left" >
          <IoBusinessSharp className="react-icon" />
          <h2 class="web-text2 fs-5">Business Development Executive</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MyProfile
