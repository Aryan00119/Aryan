import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <div className={styles.allNav}>
      <div className={`${styles.navContainer} fluid-container`}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`${styles.mainNav} ${isMenuOpen ? styles.mainNavOpen : ''}`}>
          <div className={styles.navItem} onClick={() => { navigate("/") }}>About Me</div>
          <div className={styles.navItem} onClick={() => { navigate("/Projects") }}>My Projects</div>
          <div className={styles.navItem} onClick={() => { navigate("/Education") }}>My Education</div>
          <div className={styles.navItem} onClick={() => { navigate("/Contact") }}>Contact Me</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
