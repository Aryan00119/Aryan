import React from "react";
import Slider from "react-slick";

const Carousel = ({ images, settings, imagesPerRow = 4, heading = "MY DESIGNS", headingClass = "p-head text-white text-center fs-3 fw-semibold my-5" }) => {
  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false
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
    <div className='mt-4 container '>
      <p className={headingClass}>{heading}</p>
      <Slider {...finalSettings}>
        {renderImages()}
      </Slider>
    </div>
  );
};

export default Carousel;
