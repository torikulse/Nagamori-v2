import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import sliderone from "../../assets/slider1.png";
import slidertwo from "../../assets/slider2.png";
import sliderthree from "../../assets/slider3.png";
import sliderfour from "../../assets/slider4.png";

const ImageSlider = () => {
  const [animate, setAnimate] = useState(false);

  // Preload images
  useEffect(() => {
    const images = [sliderone, slidertwo, sliderthree, sliderfour];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    // Delay animation to ensure images are loaded
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // 100ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="main">
      <div className="moving md:mt-0">
        <div className="left"></div>
        <div className={`move ${animate ? "animate" : ""}`}>
          <img src={sliderone} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={slidertwo} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderthree} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderfour} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderone} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={slidertwo} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderthree} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderfour} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderone} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={slidertwo} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderthree} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderfour} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderone} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={slidertwo} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderthree} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
          <img src={sliderfour} alt="slider_image" className="h-25 md:h-[9vw]" loading="lazy" />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default ImageSlider;