// ImageSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/slider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const images = [
    {
      src: "1.jpg",
      caption: "أجمل الوجهات السياحية في العالم"

    },
    {
      src: "2.jpg",
      caption: "اختر رحلتك وخلي صيفك وكيفك علينا"

    },
    {
      src: "3.jpg",
      caption: "رحلة إيمانية مميزة"

    },
    {
      src: "4.jpg",
      caption: "فرصة زيارة أجمل المدن السياحية"


    },
    {
      src: "5.jpg",
      caption: "استمتع برحلة الأحلام"

    }
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Slide ${index + 1}`} className="slide-image"/>
            <div className="caption">{image.caption}</div> {/* Caption text */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

