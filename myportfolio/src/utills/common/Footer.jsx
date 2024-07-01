import React from 'react';
import { FaHeart, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { COLOR } from '../constants';
import './Footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer text-center py-4 mt-5">
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12 col-md-6 text-md-start text-center mb-3 mb-md-0">
            <p className="footer-thank-you">Thank You for visiting my portfolio, have a Great day!</p>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="footer-heading">Contact Information</h4>
            <hr className="my-4 footer-hr" />
            <p className="footer-item">
              <FaMapMarkerAlt className="footer-icon" /> Address: V.P.O Zahura , Hoshiarpur , Punjab.
            </p>
            <p className="footer-item">
              <FaPhoneAlt className="footer-icon" /> Contact Number: +91 70097-37283
            </p>
            <p className="footer-item">
              <FaEnvelope className="footer-icon" /> Email: nairaryan119@gmail.com
            </p>
            <p className="footer-item">
              <FaLinkedin className="footer-icon" /> <a href="https://www.linkedin.com/in/aryan-nair-73b97624b/" className="footer-link">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{ color: COLOR }}>
            <hr className="my-4 footer-hr" />
            <p className="mb-1">
              Made with <FaHeart className="text-danger" /> by Aryan Nair
            </p>
            <p className="mb-1">&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
