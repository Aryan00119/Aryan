// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Container, Row, Col } from "react-bootstrap";
// import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
// import { FaPhone, FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import "./Contact.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "../../utills/common/Footer";
// const ContactMe = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 1200,
//         });
//     }, []);

//     return (
//         <Container className="main-contact">
//             <Row>
//                 <Col className="heading-contact" data-aos="fade-down" xs={12}>Contact Me</Col>
//             </Row>
//             <Row className="cont">
//                 <Col md={4} className="email-cont" data-aos="fade-right">
//                     <MdOutlineMailOutline className="email-ic" />
//                     <div className="name-email">nairaryan119@gmail.com</div>
//                 </Col>
//                 <Col md={4} className="phone-cont" data-aos="fade-left">
//                     <FaPhone className="phone-ic" />
//                     <div className="name-email">70097-37283</div>
//                 </Col>
//                 <Col md={4} className="address" data-aos="fade-right">
//                     <MdLocationPin className="address-ic" />
//                     <div className="name-address">V.P.O village Zahura, Hoshiarpur, Punjab.</div>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col className="heading-follow-contact" data-aos="fade-up" xs={12}>Follow Me</Col>
//             </Row>
//             <Row className="cont1">
//                 <Col md={6} className="insta-follow-contact" data-aos="fade-left">
//                     <FaInstagram className="phone-ic" />
//                     <div className="name-email">aryan_designs01</div>
//                 </Col>
//                 <Col md={6} className="linkd-follow-contact" data-aos="fade-right">
//                     <CiLinkedin className="phone-ic" />
//                     <div className="name-email">Aryan Nair</div>
//                 </Col>
//             </Row>
//             <Footer/>
//         </Container>
//     );
// };

// export default ContactMe;

// import React, { useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import AOS from 'aos';
// import Footer from "../../utills/common/Footer";
// import 'aos/dist/aos.css';
// import './Contact.css';

// const ContactMe = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1500, easing: 'ease-out-cubic', once: true });
//   }, []);

//   return (
//     <Container className="contact-container">
//       <Row className="justify-content-center">
//         <Col md={4} className="contact-box" data-aos="fade-up">
//           <FaEnvelope className="contact-icon" />
//           <p className="contact-text">aryan@example.com</p>
//         </Col>
//         <Col md={4} className="contact-box" data-aos="fade-up">
//           <FaPhone className="contact-icon" />
//           <p className="contact-text">+123 456 7890</p>
//         </Col>
//         <Col md={4} className="contact-box" data-aos="fade-up">
//           <FaMapMarkerAlt className="contact-icon" />
//           <p className="contact-text">Mumbai, India</p>
//         </Col>
//       </Row>
//       <h2 className="follow-me-heading" data-aos="zoom-in">Follow Me</h2>
//       <Row className="justify-content-center">
//         <Col md={4} className="contact-box" data-aos="fade-up">
//           <FaInstagram className="contact-icon" />
//           <p className="contact-text">@aryan_insta</p>
//         </Col>
//         <Col md={4} className="contact-box" data-aos="fade-up">
//           <FaLinkedin className="contact-icon" />
//           <p className="contact-text">linkedin.com/in/aryannair</p>
//         </Col>
//       </Row>
//       <Footer/>
//     </Container>
//   );
// };

// export default ContactMe;

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import Footer from "../../utills/common/Footer";
import 'aos/dist/aos.css';
import './Contact.css';

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-out-cubic', once: true });
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:nairaryan119@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+91 7009737283';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/itz_aryan_nair', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/aryan-nair-73b97624b/', '_blank');
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={4} className="contact-box" data-aos="fade-up" onClick={handleEmailClick}>
          <FaEnvelope className="contact-icon" />
          <p className="contact-text">nairaryan119@gmail.com</p>
        </Col>
        <Col md={4} className="contact-box" data-aos="fade-up" onClick={handlePhoneClick}>
          <FaPhone className="contact-icon" />
          <p className="contact-text">+91 70097-37283</p>
        </Col>
        <Col md={4} className="contact-box" data-aos="fade-up">
          <FaMapMarkerAlt className="contact-icon" />
          <p className="contact-text">Village Zahura, Hoshiarpur, Punjab, India</p>
        </Col>
      </Row>
      <h2 className="follow-me-heading" data-aos="zoom-in">Follow Me</h2>
      <Row className="justify-content-center">
        <Col md={4} className="contact-box" data-aos="fade-up" onClick={handleInstagramClick}>
          <FaInstagram className="contact-icon" />
          <p className="contact-text">@itz_aryan_nair</p>
        </Col>
        <Col md={4} className="contact-box" data-aos="fade-up" onClick={handleLinkedInClick}>
          <FaLinkedin className="contact-icon" />
          <p className="contact-text">Aryan Nair</p>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default ContactMe;
