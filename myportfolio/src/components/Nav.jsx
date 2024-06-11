import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate=useNavigate()

  return (
    <div className="all-nav">
    <div className="nav-container">
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-item" onClick={()=>{navigate("/")}}>About Me</div>
        <div className="nav-item" onClick={()=>{navigate("/Projects")}}>My Projects</div>
        <div className="nav-item" onClick={()=>{navigate("/Education")}}>My Education</div>
        <div className="nav-item" onClick={()=>{navigate("/Contact")}}>Contact Me</div>
      </div>
    </div>
    </div>
  );
};

export default Nav;
