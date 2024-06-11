import "./foot.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {

        useEffect(() => {
          AOS.init({
            duration: 1200,
          });
        }, []);

    const navigate = useNavigate()
    return (
        <div className="main-foot">
            <div className="footer">
                <div className="left-foot">
                    <div className="top-l-f">Contact me</div>
                    <div className="down-l-f">
                        <div className="process1"></div>
                        <div className="process2"></div>
                        <div className="process3"></div>
                        <div className="process4"></div>
                        <div className="process5"></div>
                        <div className="process6"></div>
                        <div className="process7"></div>
                        <div className="process8"></div>
                        <div className="process9"></div>
                        <div className="process10"></div>
                    </div>
                </div>
                <div className="right-foot">
                    <div className="up-right-foot">
                        <div className="phone">
                            <div className="mp">
                                <FaPhone className="phone-icon" />

                            </div>
                            <ul>
                                <li className="phn-num">+91 70097 37283</li>
                            </ul>


                        </div>
                        <div className="email">
                            <div className="em">
                                <MdEmail className="email-icon" />
                            </div>
                            <ul>
                                <li className="e-add">nairaryan119@gmail.com</li>
                            </ul>

                        </div>
                        <div className="facebook">
                            <div className="f">
                                <FaFacebookF className="facebook-icon" />
                            </div>
                            <ul>
                                <li className="fbok">Aryan Nair</li>
                            </ul>
                        </div>

                    </div>
                    <div className="down-right-foot">
                        <div className="linkd-in">
                            <div className="lin">
                                <FaLinkedinIn className="linkd-in-icon" />
                            </div>
                            <ul>
                                <li className="linkin">Aryan Nair</li>
                            </ul>

                        </div>
                        <div className="insta">
                            <div className="ing">
                                <FaInstagram className="insta-icon" />
                            </div>
                            <ul>
                                <li className="ingram">@aryan_designs01</li>
                            </ul>

                        </div>
                        <div className="telegram">
                            <div className="t">
                                <BiLogoTelegram className="telegram-icon" />
                            </div>
                            <ul>
                                <li className="tgram">70097 37283</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
            <div className="end-foot">
                <div className="name-at-last">Aryan Nair</div>
                <div className="links-at-last">
                    <div className="projects-link" onClick={() => { navigate("/Projects") }}>My Projects</div>
                    <div className="edu-link" onClick={() => { navigate("/Education") }}>My Education</div>
                    <div className="contact-link" onClick={() => { navigate("/Contact") }}>Contact me</div>
                </div>
            </div>

        </div>


    )
}

export default Footer;