import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./About.css";
// import aryanimg1 from "./newfolder/1718079816001.jpg";
import aryanimg1 from "./newfolder/1718079815985.jpg";
import { FaReact } from "react-icons/fa";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { SiCodesignal } from "react-icons/si";
import { IoBusinessSharp } from "react-icons/io5";
import a1 from "./newfolder/20221108_175648.jpg"
import b from "./newfolder/20221203_122915.jpg"
import c from "./newfolder/20221220_220440.jpg"
import d from "./newfolder/20221226_200318.jpg"
import e from "./newfolder/20221227_101630.jpg"
import f from "./newfolder/20230125_143151.jpg"
import g from "./newfolder/20230125_143358.jpg"
import h from "./newfolder/20230306_201832.jpg"
import i from "./newfolder/20230622_160017.jpg"
import j from "./newfolder/20230714_194838.jpg"
import k from "./newfolder/20230723_173603.jpg"
import l from "./newfolder/20230723_183345.jpg"
import m from "./newfolder/20230801_140717.jpg"
import n from "./newfolder/20230801_191134.jpg"
import o from "./newfolder/20230811_194908.jpg"
import p from "./newfolder/20230811_202117.jpg"
import q from "./newfolder/20230828_183515.jpg"
import r from "./newfolder/20230828_183804.jpg"
import s from "./newfolder/Designer (29).png"
import t from "./newfolder/Designer (65).png"
import u from "./newfolder/IMG_20230507_172950_972.jpg"
import v from "./newfolder/IMG_20230629_174632_749.jpg"
import { useNavigate } from 'react-router-dom';



const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="main-about">
      <div className="first" data-aos="fade-up">
        <div className="text-about">
          <h1 className="typing">Hi, I'm Aryan.</h1>
          <p className="typing">A passionate web developer with a knack for creating dynamic and user-friendly web experiences. Explore my portfolio to see how I blend creativity and technical expertise to build seamless digital solutions.</p>
          <button className="know-more" onClick={() => { navigate("/Resume") }}>RESUME</button>
        </div>
        <div className="image-about">
          <img src={aryanimg1} alt="Image of Aryan" />
        </div>
      </div>

      <div className="profile-intro" data-aos="fade-right">
        <p className="p-head">INTRO</p>
        <div className="intro-p">
          <p>
            I'm Aryan, a recent graduate with a strong passion for web development, graphic design, and video editing. My journey into technology and design began during my studies, where I developed a solid foundation in creating websites, designing graphics, and editing videos.
          </p>
          <p>
            What sets me apart is my commitment to punctuality and attention to detail. I believe in delivering quality work on time, every time. My experience as a business development executive has given me a unique perspective on how technology and design can drive business success.
          </p>
          <p>
            I'm excited to bring my fresh perspective and creativity to your team or project. Let's work together to create something amazing.
          </p>
        </div>
      </div>

      <div className="main-skills" >
        <h1 className="my-skills" data-aos="fade-up">MY PROFILE</h1>
        <div className="skills">
          <div className="web-dev" data-aos="flip-left">
            <FaReact className="react-icon" />
            <h2 className="web-text">Web Developer</h2>
          </div>
          <div className="video-edit" data-aos="flip-left">
            <SiGoogledisplayandvideo360 className="react-icon" />
            <h2 className="web-text">Video Editor</h2>
          </div>
          <div className="logo" data-aos="flip-left">
            <SiCodesignal className="react-icon" />
            <h2 className="web-text">Graphic Designer</h2>
          </div>
          <div className="business-dev" data-aos="flip-left">
            <IoBusinessSharp className="react-icon" />
            <h2 className="web-text2">Business Development Executive</h2>
          </div>
        </div>
      </div>

      <div className="skills-details" data-aos="fade-up">
        <h1 className='sk-heading'>MY SKILLS</h1>
        <div className="all-sk">
          <div className="left-sk">
            <div className="rect-sk">
              <div className="rect-sk-txt">React</div>
              <div className="sk1">
                <div className='skk'>
                  <div className="selct"></div>
                </div>
                <div className='skk'>
                  <div className="selct"></div>
                </div>
                <div className='skk'>
                  <div className="selct"></div>
                </div>
                <div className='skk'>
                  <div className="selct"></div>
                </div>
                <div className='skk'>
                  <div className="selct"></div>
                </div>
                <div className='skk'></div>
                <div className='skk'></div>
              </div>
            </div>
            <div className="css-sk">
              <div className="css-sk-txt">Css</div>
              <div className="sk2">
                <div className='skkc'>
                  <div className="selct"></div>
                </div>
                <div className='skkc'>
                  <div className="selct"></div>
                </div>
                <div className='skkc'>
                  <div className="selct"></div>
                </div>
                <div className='skkc'>
                  <div className="selct"></div>
                </div>
                <div className='skkc'>
                  <div className="selct"></div>
                </div>
                <div className='skkc'>
                  <div className="selct"></div>
                </div>
                <div className='skkc'></div>
              </div>
            </div>
            <div className="js-sk">
              <div className="js-sk-txt">JavaScript</div>
              <div className="sk3">
                <div className='skkj'>
                  <div className="selct"></div>
                </div>
                <div className='skkj'>
                  <div className="selct"></div>
                </div>
                <div className='skkj'>
                  <div className="selct"></div>
                </div>
                <div className='skkj'>
                  <div className="selct"></div>
                </div>
                <div className='skkj'></div>
                <div className='skkj'></div>
                <div className='skkj'></div>
              </div>
            </div>
          </div>
          <div className="right-sk">
            <div className="video-sk">
              <div className="video-sk-txt">Video Editing</div>
              <div className="sk4">
                <div className='skkv'>
                  <div className="selct"></div>
                </div>
                <div className='skkv'>
                  <div className="selct"></div>
                </div>
                <div className='skkv'>
                  <div className="selct"></div>
                </div>
                <div className='skkv'>
                  <div className="selct"></div>
                </div>
                <div className='skkv'>
                  <div className="selct"></div>
                </div>
                <div className='skkv'>
                  <div className="selct"></div>
                </div>
                <div className='skkv'></div>
              </div>
            </div>
            <div className="graphic-sk">
              <div className="graf-sk-txt">Graphic Design</div>
              <div className="sk5">
                <div className='skkg'>
                  <div className="selct"></div>
                </div>
                <div className='skkg'>
                  <div className="selct"></div>
                </div>
                <div className='skkg'>
                  <div className="selct"></div>
                </div>
                <div className='skkg'>
                  <div className="selct"></div>
                </div>
                <div className='skkg'>
                  <div className="selct"></div>
                </div>
                <div className='skkg'>
                  <div className="selct"></div>
                </div>
                <div className='skkg'></div>
              </div>
            </div>
            <div className="business-dev-sk">
              <div className="business-sk-txt">Business-Dev</div>
              <div className="sk6">
                <div className='skkb'>
                  <div className="selct"></div>
                </div>
                <div className='skkb'>
                  <div className="selct"></div>
                </div>
                <div className='skkb'>
                  <div className="selct"></div>
                </div>
                <div className='skkb'>
                  <div className="selct"></div>
                </div>
                <div className='skkb'>
                  <div className="selct"></div>
                </div>
                <div className='skkb'></div>
                <div className='skkb'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-designs" data-aos="fade-down">
        <div className="heading-of-my-designs">MY DESIGNS</div>
        <div className="designs">
          <div className="designs2"><img className="photoccc2" src={a1} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={b} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={c} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={d} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={e} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={f} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={g} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={h} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={i} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={j} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={k} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={l} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={m} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={n} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={o} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={p} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={q} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={r} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={s} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={t} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={u} alt="pic"></img>
          </div>
          <div className="designs2"><img className="photoccc2" src={v} alt="pic"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
