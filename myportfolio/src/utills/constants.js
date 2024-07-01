import IMG1 from "../utills/assets/1.jpg";
import IMG2 from "../utills/assets/2.jpg";
import IMG3 from "../utills/assets/3.jpg";
import IMG4 from "../utills/assets/4.jpg";
import IMG5 from "../utills/assets/5.jpg";
import IMG6 from "../utills/assets/6.jpg";
import IMG7 from "../utills/assets/7.jpg";
import IMG8 from "../utills/assets/8.jpg";
import IMG9 from "../utills/assets/9.jpg";
import IMG10 from "../utills/assets/10.jpg";
import IMG11 from "../utills/assets/11.jpg";
import IMG12 from "../utills/assets/12.jpg";
import IMG13 from "../utills/assets/13.jpg";
import IMG14 from "../utills/assets/14.jpg";
import IMG15 from "../utills/assets/15.jpg";
import IMG16 from "../utills/assets/16.jpg";
import IMG17 from "../utills/assets/17.jpg";
import IMG18 from "../utills/assets/18.jpg";
import IMG19 from "../utills/assets/19.png";
import IMG20 from "../utills/assets/20.png";
import IMG21 from "../utills/assets/21.jpg";
import IMG22 from "../utills/assets/22.jpg";

import P1IMG1 from "../utills/assets/project1/1.png"
import P1IMG2 from "../utills/assets/project1/2.png"
import P1IMG3 from "../utills/assets/project1/3.png"
import P1IMG4 from "../utills/assets/project1/4.png"
import P1IMG5 from "../utills/assets/project1/5.png"

import P2IMG1 from "../utills/assets/project2/1.png"
import P2IMG2 from "../utills/assets/project2/2.png"
import P2IMG3 from "../utills/assets/project2/3.png"
import P2IMG4 from "../utills/assets/project2/4.png"
import P2IMG5 from "../utills/assets/project2/5.png"
import P2IMG6 from "../utills/assets/project2/6.png"
import P2IMG7 from "../utills/assets/project2/7.png"
import P2IMG8 from "../utills/assets/project2/8.png"

import P3IMG1 from "../utills/assets/project3/1.png"
import P3IMG2 from "../utills/assets/project3/2.png"
import P3IMG3 from "../utills/assets/project3/3.png"
import P3IMG4 from "../utills/assets/project3/4.png"
import P3IMG5 from "../utills/assets/project3/5.png"
import P3IMG6 from "../utills/assets/project3/6.png"
import P3IMG7 from "../utills/assets/project3/7.png"
import P3IMG8 from "../utills/assets/project3/8.png"
import P3IMG9 from "../utills/assets/project3/9.png"

import P4IMG1 from "../utills/assets/project4/1.png"
import P4IMG2 from "../utills/assets/project4/2.png"
import P4IMG3 from "../utills/assets/project4/3.png"
import P4IMG4 from "../utills/assets/project4/4.png"
import P4IMG5 from "../utills/assets/project4/5.png"

import CERTI1 from "../utills/assets/certificates/1.jpg"
import CERTI2 from "../utills/assets/certificates/2.jpg"
// import CERTI3 from "../utills/assets/certificates/3.jpg"
// import CERTI4 from "../utills/assets/certificates/4.jpg"
import CERTI5 from "../utills/assets/certificates/5.jpg"
import CERTI6 from "../utills/assets/certificates/6.jpg"
import CERTI7 from "../utills/assets/certificates/7.jpg"
import CERTI8 from "../utills/assets/certificates/8.jpg"
import CERTI9 from "../utills/assets/certificates/9.jpg"
import CERTI10 from "../utills/assets/certificates/10.jpg"
import CERTI11 from "../utills/assets/certificates/11.jpg"
import CERTI12 from "../utills/assets/certificates/12.jpg"

export const images = [
    IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8,
    IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15,
    IMG16, IMG17, IMG18, IMG19, IMG20, IMG21, IMG22
  ];

export const project1Images = [P1IMG1,P1IMG2,P1IMG3,P1IMG4,P1IMG5]
export const project2Images = [P2IMG1,P2IMG2,P2IMG3,P2IMG4,P2IMG5,P2IMG6,P2IMG7,P2IMG8]
export const project3Images = [P3IMG1,P3IMG2,P3IMG3,P3IMG4,P3IMG5,P3IMG6,P3IMG7,P3IMG8,P3IMG9]
export const project4Images = [P4IMG1,P4IMG2,P4IMG3,P4IMG4,P4IMG5]

export const certificateImages = [
    [CERTI1, CERTI2, CERTI5,CERTI6],
    [CERTI7, CERTI8,CERTI9, CERTI10,],
    [ CERTI11,CERTI12],

  ];

export const COLOR="rgb(232, 187, 6)";

export const projects = [
  {
    projectName: 'Fitness Forever',
    projectDescription: 'I successfully completed a web development project designed to enhance the user experience in accessing fitness services online. This gym platform allows users to easily purchase memberships, book online personal training sessions, and access a variety of fitness resources.',
    technologiesUsed: [
        { name: 'HTML5', description: 'I used HTML5 to create a robust and semantically rich structure for the website, ensuring better accessibility and SEO.' },
        { name: 'CSS', description: 'Custom CSS was employed to style the website, making it visually appealing and enhancing the overall user experience.' },
        { name: 'PHP', description: 'PHP was used for server-side logic, managing user authentication, payment processing, and data management, ensuring smooth and secure interactions.' },
        { name: 'Bootstrap', description: 'Bootstrap was integrated to ensure the website is responsive and mobile-friendly, providing a consistent experience across all devices.' },
    ],
    features: [
        'Membership Purchase: Users can browse and buy various gym memberships.',
        'Online Personal Training: Book personal training sessions online.',
        'Fitness Resources: Access workout plans, nutrition guides, and fitness blogs.',
    ],
    images: project1Images,
},
{
  projectName: 'Chatterly',
  images: project2Images, // Replace with actual image URLs
  projectDescription: 'Chatterly is a dynamic blogging platform designed to facilitate the creation, sharing, and reading of blogs. Users can easily create and publish their own blogs, read posts from others, and engage with content through a commenting system. Chatterly offers a seamless and engaging experience, fostering a collaborative and interactive community.',
  technologiesUsed: [
      { name: 'React.js', description: 'The front-end framework used for building a responsive and interactive user interface.' },
      { name: 'CSS', description: 'For styling the application, ensuring it is visually appealing and user-friendly.' },
      { name: 'AOS (Animate On Scroll)', description: 'To add smooth scrolling animations, enhancing the user experience.' },
      { name: 'Node.js', description: 'The runtime environment used for building the back-end of the application.' },
      { name: 'Express', description: 'A Node.js framework used for building the API and handling server-side logic.' },
      { name: 'MongoDB', description: 'The database used for storing user data, blogs, and comments.' },
  ],
  features: [
      'Blog Creation and Posting: Users can create and post their blogs, sharing their thoughts, experiences, and expertise with the community.',
      'Blog Reading: Users can explore and read blogs posted by others, gaining insights and inspiration from a diverse range of topics.',
      'Commenting System: Users can add comments to blogs, facilitating discussions and feedback, enhancing the community interaction.',
  ]
},
{
  projectName: '3D Game',
  projectDescription: 'I have successfully completed a 3D game project developed using Python. In this game, the main character is equipped with a shotgun, which they use strategically to eliminate enemy monsters. The primary objective of the game is for the protagonist to survive by defeating these adversaries and ultimately emerge victorious.',
  technologiesUsed: [
      { name: 'Python', description: 'I utilized Python to develop this game, as its built-in libraries facilitate and simplify the design process.' },
      { name: 'Pixal-lab', description: 'I utilized Pixallab to design the protagonist and other elements such as wall textures and enemy characters.' }
  ],
  features: [
      'The user can enjoy a free battle royale game and play without the need for any additional file downloads.',
      'The game has a small file size, making it easy to play.',
      'The game features a larger map for survival and exploration.',
  ],
  images: project4Images,
},
{
projectName: 'Sports Sync',
images: project3Images,
projectDescription: 'Sports Sync is a comprehensive web platform designed to connect sports enthusiasts with local sports academies. The platform serves multiple user roles including athletes looking for academies to join, academy owners who want to list their establishments, and partners who can contribute and read sports-related blogs. Additionally, users can book venues for their sporting events and activities. The project aims to create a seamless and interactive experience for all users, fostering a vibrant community around sports and fitness.',
technologiesUsed: [
    { name: 'React.js', description: 'The front-end framework used for building a responsive and interactive user interface, simplifies state management and side effects handling in functional components.' },
    { name: 'CSS', description: 'Provides powerful layout capabilities for creating responsive designs. It enhances CSS with features like variables, nesting, and mixins, making stylesheets more maintainable.' },
    { name: 'AOS (Animate On Scroll)', description: 'To enhances user experience by adding smooth animations triggered by scroll events. It allows for easy customization of animation effects and durations.' },
    { name: 'Node.js', description: 'The runtime environment used for building the back-end of the application. It also provides access to a vast library of modules and packages, speeding up development.' },
    { name: 'Express', description: 'A Node.js framework used for building the API and handling server-side logic. It supports building scalable and maintainable server-side applications.' },
    { name: 'MongoDB', description: 'The database used for storing user data, blogs, and comments. It supports horizontal scaling, handling large volumes of data efficiently.' },
],
features: [
    'Find and Join Academies: Users can easily search for sports academies based on location, sport type, facilities, and user ratings.',
    'Academy Listings: Academy owners can create detailed listings showcasing their facilities, training programs, coaches, and membership options.',
    'Blogs: Users and partners can write and share blogs on sports-related topics such as training tips, event highlights, and athlete profiles.',
    'Venue Booking: Users can browse available venues for sporting events, training sessions, or tournaments.',
]
},
];
