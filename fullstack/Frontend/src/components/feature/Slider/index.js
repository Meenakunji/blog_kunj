import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import styles from "./styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderHome = ({ videos }) => {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const speechSynthRef = useRef(null);

  useEffect(() => {
    // Hide the video control bar on component mount
    videoRef.current.controls = false;
  }, []);

  useEffect(() => {
    speechSynthRef.current = window.speechSynthesis;
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div
        style={{
          height: "10px",
          width: "10px",
          background: "white",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  const videoContainerStyle = {
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const videoStyle = {
    height: "90vh",
    width: "100%",
    objectFit: "cover",
  };

  const handleVideoEnd = () => {
    sliderRef.current.slickNext(); // Auto slide to the next video
  };

  const handleVideoPlay = () => {
    // Pause speech synthesis when video is played
    if (speechSynthRef.current && speechSynthRef.current.speaking) {
      speechSynthRef.current.cancel();
    }
  };

  const handleSlideChange = (index) => {
    const currentVideo = videos[index];

    // Speak the message for the current video
    if (speechSynthRef.current && !speechSynthRef.current.speaking) {
      const utterance = new SpeechSynthesisUtterance(currentVideo.message);
      speechSynthRef.current.speak(utterance);
    }
  };

  return (
    <Box sx={styles.sliderSection}>
      <Slider {...settings} ref={sliderRef} beforeChange={handleSlideChange}>
        {videos?.map((item, index) => {
          return (
            <Box sx={styles.slider} key={index}>
              <div style={videoContainerStyle}>
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  style={videoStyle}
                  onEnded={handleVideoEnd}
                  onPlay={handleVideoPlay}
                >
                  <source src={item?.url} type="video/mp4" />
                </video>
              </div>
              <Typography variant="h2">{item?.message}</Typography>
              <Typography variant="body1">{item?.description}</Typography>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default SliderHome;
