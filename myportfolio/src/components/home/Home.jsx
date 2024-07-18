import React from 'react';
import Header from './Header';
import MyProfile from './MyProfile';
import Crousel from "../../utills/common/Crousel";
import { images } from "../../utills/constants";
import Footer from '../../utills/common/Footer';
import Progress from './Progress';
import { useNavigate } from 'react-router-dom';
import { RiRobot3Fill } from "react-icons/ri";
import Draggable from 'react-draggable';
import { certificateImages } from "../../utills/constants";
import './Home.css';
import MyCertificates from '../education/MyCertificates';

const Home = () => {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate('/chatbot');
  };

  return (
    <div className='container' style={{ marginTop: "90px" }}>
      <Header />
      <MyProfile />
      <Progress />
      <MyCertificates certificateImages={certificateImages}/>
      <Crousel images={images} imagesPerRow={2} />
      <Footer />
      <Draggable>
        <div className="chatbot-icon-home" onClick={handleChatbotClick}>
        <RiRobot3Fill />
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
