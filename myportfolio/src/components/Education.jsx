import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Education.css";
import a from "./newfolder/Coursera-UKGA4YMJRG58-1/Coursera UKGA4YMJRG58 (1)_page-0001.jpg";
import b from "./newfolder/cyber-security-tips/cyber security tips_page-0001.jpg";
import c from "./newfolder/great-learning/great learning_page-0001.jpg";
import d from "./newfolder/ibm-2028172/ibm 2028172_page-0001.jpg";
import e from "./newfolder/javascript-for-bign/javascript for bign_page-0001.jpg";
import f from "./newfolder/o7 services_page-0001.jpg";
import g from "./newfolder/50designs-canva/50designs canva_page-0001.jpg";
import h from "./newfolder/Canva 100_page-0001 (1).jpg";
import i from "./newfolder/63243872-2/63243872 (2)_page-0001.jpg";
import j from "./newfolder/1st-sem-dmc/1st sem dmc_page-0001.jpg";
import k from "./newfolder/2nd-sem-dmc/2nd sem dmc_page-0001.jpg";
import l from "./newfolder/3rd-sem-dmc/3rd sem dmc_page-0001.jpg";
import m from "./newfolder/4th-sem-dmc/4th sem dmc_page-0001.jpg";
import n from "./newfolder/5th-sem-dmc/5th sem dmc_page-0001.jpg";
import o from "./newfolder/6th-sem-dmc/6th sem dmc_page-0001.jpg";
import p from "./newfolder/7th-sem-dmc/7th sem dmc_page-0001.jpg";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-edu1">
      <div className="text-edu" data-aos="fade-down">My Education</div>
      <div className="main-edu">
        <div className="left-edu" data-aos="fade-right">
          <div className="elementry-edu"></div>
          <div className="secondry-edu">6th - 10th from Govt. senior. sec. school Zahura.</div>
          <div className="non-medi"></div>
          <div className="cld-edu">Complete my B.tech(CSE) from lyallpur Khalsa College technical campus Jalandhar. with 7.70 Cgp.</div>
        </div>
        <div className="center-edu" data-aos="fade-up">
          <div className="abc1">
            <div className="dot"></div>
            <div className="line"></div>
            <div className="dot2"></div>
          </div>
          <div className="abc2">
            <div className="line2"></div>
            <div className="dot3"></div>
          </div>
          <div className="abc3">
            <div className="dot4"></div>
          </div>
          <div className="abc4">
            <div className="dot5"></div>
          </div>
        </div>
        <div className="right-edu" data-aos="fade-left">
          <div className="elementry-edu">1st - 5th from Govt. elementary. School Zahura. Passout my 5th with A grade and first position.</div>
          <div className="secondry-edu"></div>
          <div className="non-medi">11th - 12th from Govt. sen. sec. school. Khudda. Passout my 12th(science) with 76%.</div>
          <div className="cld-edu"></div>
        </div>
      </div>
      <div className="certification" data-aos="fade-up">
        <div className="heading-certifications">Certificates</div>
        <div className="main-certificates">
          <div className="certi">
            <img src={a} alt="" className="certificate-img" />
          </div>
          <div className="certi">
            <img src={b} alt="" className="certificate-img" />
          </div>
          <div className="certi">
            <img src={c} alt="" className="certificate-img" />
          </div>
        </div>
        <div className="main-certificates2">
          <div className="certi">
            <img src={d} alt="" className="certificate-img" />
          </div>
          <div className="certi">
            <img src={e} alt="" className="certificate-img" />
          </div>
          <div className="certi">
            <img src={f} alt="" className="certificate-img" />
          </div>
        </div>
        <div className="main-certificates2">
          <div className="certi">
            <img src={g} alt="" className="certificate-img" />
          </div>
          <div className="certi">
            <img src={h} alt="" className="certificate-img" />
          </div>
          <div className="certi">
            <img src={i} alt="" className="certificate-img" />
          </div>
        </div>
      </div>
      <div className="clg-dmc" data-aos="fade-up">
        <div className="clg-dmc-heading">College DMC</div>
        <div className="imgs-of-dmc1">
          <div className="clg-dmc-img">
            <img src={j} alt="" className="clg-dmc-img-1" />
            <div className="text-dmc">First Sem : 6.63</div>
          </div>
          <div className="clg-dmc-img">
            <img src={k} alt="" className="clg-dmc-img-1" />
            <div className="text-dmc">Second Sem : 7.73</div>
          </div>
          <div className="clg-dmc-img">
            <img src={l} alt="" className="clg-dmc-img-1" />
            <div className="text-dmc">Third Sem : 6.76</div>
          </div>
        </div>
        <div className="imgs-of-dmc2">
          <div className="clg-dmc-img">
            <img src={m} alt="" className="clg-dmc-img-1" />
            <div className="text-dmc">Fourt Sem : 6.19</div>
          </div>
          <div className="clg-dmc-img">
            <img src={n} alt="" className="clg-dmc-img-1" />
            <div className="text-dmc">Fifth Sem : 6.00</div>
          </div>
          <div className="clg-dmc-img">
            <img src={o} alt="" className="clg-dmc-img-1" />
            <div className="text-dmc">Sixth Sem : 6.76</div>
          </div>
          <div className="clg-dmc-img">
            <img src={p} alt="" className="clg-dmc-img-1" />
            <div className="text-dmc">Seventh Sem : 7.70</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
