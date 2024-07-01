import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Spinner from "react-bootstrap/Spinner"; // Make sure to install react-bootstrap

const Carousel = ({ 
  images, 
  settings, 
  imagesPerRow = 4, 
  heading = "MY DESIGNS", 
  headingClass = "p-head text-white text-center fs-3 fw-semibold my-5" 
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePromises = images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [images]);

  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  const finalSettings = { ...defaultSettings, ...settings };

  const renderImages = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
      const rowImages = images.slice(i, i + imagesPerRow).map((img, index) => (
        <div key={index} style={{ width: "800px", height: "400px", overflow: "hidden" }}>
          <img
            key={index}
            src={img}
            alt="pic"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      ));

      rows.push(
        <div key={i} className="d-flex justify-content-evenly">
          {rowImages}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className='mt-4 container'>
      <p className={headingClass}>{heading}</p>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Slider {...finalSettings}>
          {renderImages()}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
