import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { FaPhone, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <Container className="main-contact">
            <Row>
                <Col className="heading-contact" data-aos="fade-down" xs={12}>Contact Me</Col>
            </Row>
            <Row className="cont">
                <Col md={4} className="email-cont" data-aos="fade-right">
                    <MdOutlineMailOutline className="email-ic" />
                    <div className="name-email">nairaryan119@gmail.com</div>
                </Col>
                <Col md={4} className="phone-cont" data-aos="fade-left">
                    <FaPhone className="phone-ic" />
                    <div className="name-email">70097-37283</div>
                </Col>
                <Col md={4} className="address" data-aos="fade-right">
                    <MdLocationPin className="address-ic" />
                    <div className="name-address">V.P.O village Zahura, Hoshiarpur, Punjab.</div>
                </Col>
            </Row>
            <Row>
                <Col className="heading-follow-contact" data-aos="fade-up" xs={12}>Follow Me</Col>
            </Row>
            <Row className="cont1">
                <Col md={6} className="insta-follow-contact" data-aos="fade-left">
                    <FaInstagram className="phone-ic" />
                    <div className="name-email">aryan_designs01</div>
                </Col>
                <Col md={6} className="linkd-follow-contact" data-aos="fade-right">
                    <CiLinkedin className="phone-ic" />
                    <div className="name-email">Aryan Nair</div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
