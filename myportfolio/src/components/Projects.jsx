import "./Projects.css";
import React, { useEffect } from 'react';
import a from "./newfolder/Screenshot 2024-05-13 193758.png"; //img-of-p
import b from "./newfolder/Screenshot 2024-05-13 193844.png";
import c from "./newfolder/Screenshot 2024-05-13 193903.png";
import d from "./newfolder/Screenshot 2024-05-13 193930.png";
import e from "./newfolder/Screenshot 2024-05-13 194003.png";

import f from "./newfolder/Screenshot (105).png";
import g from "./newfolder/Screenshot (107).png";
import h from "./newfolder/Screenshot (109).png";
import i from "./newfolder/Screenshot (110).png";
import j from "./newfolder/Screenshot (111).png";
import k from "./newfolder/Screenshot (112).png";
import l from "./newfolder/Screenshot (113).png";
import m from "./newfolder/Screenshot (114).png";

import n from "./newfolder/Screenshot (93).png";
import o from "./newfolder/Screenshot (94).png";
import p from "./newfolder/Screenshot (95).png";
import q from "./newfolder/Screenshot (96).png";
import r from "./newfolder/Screenshot (97).png";
import s from "./newfolder/Screenshot (98).png";
import t from "./newfolder/Screenshot (99).png";
import u from "./newfolder/Screenshot (100).png";
import v from "./newfolder/Screenshot (101).png";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="project-main">
      <div className="heading-projects" data-aos="fade-up">My Projects</div>
      <div className="projecth" data-aos="zoom-in">Project 1</div>
      <div className="projct">
        <div className="images-of-project" data-aos="zoom-in">
          <Slider className='img-of-p' {...settings}>
            <div>
              <img className='img-of-p' src={a} alt="Sports image 1" />
            </div>
            <div>
              <img className='img-of-p' src={b} alt="Sports image 2" />
            </div>
            <div>
              <img className='img-of-p' src={c} alt="Sports image 3" />
            </div>
            <div>
              <img className='img-of-p' src={d} alt="Sports image 4" />
            </div>
            <div>
              <img className='img-of-p' src={e} alt="Sports image 5" />
            </div>
          </Slider>
        </div>
        <div className="about-project">
          <div className="left-ab" data-aos="zoom-in">
            <h2>Fitness Forever</h2>
            <p>I successfully completed a web development project designed to enhance the user experience in accessing fitness services online. This gym platform allows users to easily purchase memberships, book online personal training sessions, and access a variety of fitness resources.</p>
            <span> Features :</span>
            <p className="afterspan" > 1. Membership Purchase: Users can browse and buy various gym memberships.</p>
            <p>2. Online Personal Training: Book personal training sessions online.</p>
            <p>3. Fitness Resources: Access workout plans, nutrition guides, and fitness blogs.</p>
          </div>
          <div className="right-ab" data-aos="zoom-in">
            <h2>Technologies Used</h2>
            <p> <span> HTML5:</span> I used HTML5 to create a robust and semantically rich structure for the website, ensuring better accessibility and SEO.</p>
            <p><span> CSS:</span> Custom CSS was employed to style the website, making it visually appealing and enhancing the overall user experience.</p>
            <p><span> PHP:</span> PHP was used for server-side logic, managing user authentication, payment processing, and data management, ensuring smooth and secure interactions.</p>
            <p><span> Bootstrap:</span> Bootstrap was integrated to ensure the website is responsive and mobile-friendly, providing a consistent experience across all devices.</p>
          </div>
        </div>
      </div>


      <div className="project1" data-aos="zoom-in">Project 2</div>
      <div className="projct">

        <div className="images-of-project2" data-aos="zoom-in">
          <Slider className='img-of-p' {...settings}>
            <div>
              <img className='img-of-p' src={a} alt="Sports image 1" />
            </div>
            <div>
              <img className='img-of-p' src={b} alt="Sports image 2" />
            </div>
            <div>
              <img className='img-of-p' src={c} alt="Sports image 3" />
            </div>
            <div>
              <img className='img-of-p' src={d} alt="Sports image 4" />
            </div>
            <div>
              <img className='img-of-p' src={e} alt="Sports image 5" />
            </div>
          </Slider>
        </div>
        <div className="about-project2">
          <div className="left-ab3" data-aos="zoom-in">
            <h2>Fitness Forever</h2>
            <p>I successfully completed a web development project designed to enhance the user experience in accessing fitness services online. This gym platform allows users to easily purchase memberships, book online personal training sessions, and access a variety of fitness resources.</p>
            <span> Features :</span>
            <p className="afterspan3" > 1. Membership Purchase: Users can browse and buy various gym memberships.</p>
            <p>2. Online Personal Training: Book personal training sessions online.</p>
            <p>3. Fitness Resources: Access workout plans, nutrition guides, and fitness blogs.</p>
          </div>
          <div className="right-ab3" data-aos="zoom-in">
            <h2>Technologies Used</h2>
            <p> <span> HTML5:</span> I used HTML5 to create a robust and semantically rich structure for the website, ensuring better accessibility and SEO.</p>
            <p><span> CSS:</span> Custom CSS was employed to style the website, making it visually appealing and enhancing the overall user experience.</p>
            <p><span> PHP:</span> PHP was used for server-side logic, managing user authentication, payment processing, and data management, ensuring smooth and secure interactions.</p>
            <p><span> Bootstrap:</span> Bootstrap was integrated to ensure the website is responsive and mobile-friendly, providing a consistent experience across all devices.</p>
          </div>
        </div>

      </div>

      <div className="project1"data-aos="zoom-in">Project 3</div>
      <div className="projct">
        <div className="images-of-project3" data-aos="zoom-in">
          <Slider className='img-of-p' {...settings}>
            <div>
              <img className='img-of-p' src={f} alt="Sports image 1" />
            </div>
            <div>
              <img className='img-of-p' src={g} alt="Sports image 2" />
            </div>
            <div>
              <img className='img-of-p' src={h} alt="Sports image 3" />
            </div>
            <div>
              <img className='img-of-p' src={i} alt="Sports image 4" />
            </div>
            <div>
              <img className='img-of-p' src={j} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={k} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={l} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={m} alt="Sports image 5" />
            </div>
          </Slider>
        </div>
        <div className="about-project3">
          <div className="left-ab3" data-aos="zoom-in">
            <h2>Fitness Forever</h2>
            <p>Chatterly is a dynamic blogging platform designed to facilitate the creation, sharing, and reading of blogs. Users can easily create and publish their own blogs, read posts from others, and engage with content through a commenting system. Chatterly offers a seamless and engaging experience, fostering a collaborative and interactive community.</p>
            <span> Features :</span>
            <p className="afterspan3" > 1. Blog Creation and Posting: Users can create and post their blogs, sharing their thoughts, experiences, and expertise with the community.</p>
            <p>2. Blog Reading: Users can explore and read blogs posted by others, gaining insights and inspiration from a diverse range of topics.</p>
            <p>3. Commenting System: Users can add comments to blogs, facilitating discussions and feedback, enhancing the community interaction.
            </p>
          </div>
          <div className="right-ab3" data-aos="zoom-in">
            <h2>Technologies Used</h2>
            <p> <span> React.js:</span> The front-end framework used for building a responsive and interactive user interface.
            </p>
            <p><span> CSS:</span> For styling the application, ensuring it is visually appealing and user-friendly.
            </p>
            <p><span> AOS (Animate On Scroll):</span> To add smooth scrolling animations, enhancing the user experience.
            </p>
            <p><span> Node.js:</span> The runtime environment used for building the back-end of the application.
            </p>
            <p><span> Express:</span> A Node.js framework used for building the API and handling server-side logic.</p>
            <p><span> MongoDB:</span> The database used for storing user data, blogs, and comments.</p>
          </div>
        </div>
      </div>


      <div className="project1" data-aos="zoom-in">Project 4</div>
      <div className="projct">
        
        <div className="images-of-project4" data-aos="zoom-in">
          <Slider className='img-of-p' {...settings}>
            <div>
              <img className='img-of-p' src={n} alt="Sports image 2" />
            </div>
            <div>
              <img className='img-of-p' src={o} alt="Sports image 3" />
            </div>
            <div>
              <img className='img-of-p' src={p} alt="Sports image 4" />
            </div>
            <div>
              <img className='img-of-p' src={q} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={r} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={s} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={t} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={u} alt="Sports image 5" />
            </div>
            <div>
              <img className='img-of-p' src={v} alt="Sports image 5" />
            </div>
          </Slider>
        </div>
        <div className="about-project4" >
        <div className="left-ab4" data-aos="zoom-in">
            <h2>Sports Sync</h2>
            <p>Sports Sync is a comprehensive web platform designed to connect sports enthusiasts with local sports academies. The platform serves multiple user roles including athletes looking for academies to join, academy owners who want to list their establishments, and partners who can contribute and read sports-related blogs. Additionally, users can book venues for their sporting events and activities. The project aims to create a seamless and interactive experience for all users, fostering a vibrant community around sports and fitness.</p>
            <span> Features :</span>
            <p className="afterspan4" > 1. Find and Join Academies: Users can easily search for sports academies based on location, sport type, facilities, and user ratings.
            </p>
            <p>2. Academy Listings: Academy owners can create detailed listings showcasing their facilities, training programs, coaches, and membership options.</p>
            <p>3. Blogs: Users and partners can write and share blogs on sports-related topics such as training tips, event highlights, and athlete profiles. </p>
            <p>4. Venue Booking: Users can browse available venues for sporting events, training sessions, or tournaments.</p>
          </div>
          <div className="right-ab4" data-aos="zoom-in">
            <h2>Technologies Used</h2>
            <p> <span> React.js:</span> The front-end framework used for building a responsive and interactive user interface , simplifies state management and side effects handling in functional components.
            </p>
            <p><span> CSS:</span> Provides powerful layout capabilities for creating responsive designs. It enhances CSS with features like variables, nesting, and mixins, making stylesheets more maintainable.
            </p>
            <p><span> AOS (Animate On Scroll):</span> To enhances user experience by adding smooth animations triggered by scroll events. It allows for easy customization of animation effects and durations.
            </p>
            <p><span> Node.js:</span> The runtime environment used for building the back-end of the application. it also provides access to a vast library of modules and packages, speeding up development.
            </p>
            <p><span> Express:</span> A Node.js framework used for building the API and handling server-side logic. It supports building scalable and maintainable server-side applications.
            </p>
            <p><span> MongoDB:</span> The database used for storing user data, blogs, and comments.it supports horizontal scaling, handling large volumes of data efficiently.
            </p>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Projects;
