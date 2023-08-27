import React, { useState, useEffect } from "react";

const ImageSlider = ({ images, thumbnails, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto play the slider
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, intervalTime]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image?.parentUrl}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
