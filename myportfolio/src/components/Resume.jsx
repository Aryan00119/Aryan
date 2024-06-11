import React, { useState } from 'react';
import './resume.css';
import myresume from './newfolder/blue professional modern CV resume.png';
import { IoMdDownload } from "react-icons/io";
import { FaHeart } from "react-icons/fa";


const Resume = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [zoomFactor, setZoomFactor] = useState(1);

  const handleImageClick = () => {
    setFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setFullscreen(false);
  };

  const handleZoomIn = () => {
    setZoomFactor(prevZoom => prevZoom + 0.5);
  };

  const handleZoomOut = () => {
    setZoomFactor(prevZoom => Math.max(0.1, prevZoom - 0.1));
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = myresume;
    link.download = 'Aryan_resume.png';
    link.click();
  };

  return (
    <div className={`main-resume ${fullscreen ? 'fullscreen' : ''}`}>
      <div className="res">
        <img
          src={myresume}
          alt="My Resume"
          className="mineresume"
          onClick={handleImageClick}
        />
      </div>
      {fullscreen && (
        <div className="fullscreen-image" onClick={handleCloseFullscreen}>
          <img
            src={myresume}
            alt="My Resume"
            className="fullscreen-img"
            style={{ transform: `scale(${zoomFactor})` }}
          />
          <div className="download-button">
            <button onClick={handleDownloadResume}><IoMdDownload className='iodownload' />
            </button>
          </div>
        </div>
      )}
      <div className="download-text">
        Click here to <span onClick={handleDownloadResume}>download resume</span>, hope you like my profile.<FaHeart className='faheart' />

      </div>
    </div>
  );
};

export default Resume;
