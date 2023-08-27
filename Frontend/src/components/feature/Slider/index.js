import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderHome = ({ sliderVideos }) => {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const speechSynthRef = useRef(null);
  const [cachedVideos, setCachedVideos] = useState([]);

  useEffect(() => {
    // Hide the video control bar on component mount
    if (videoRef.current) {
      videoRef.current.controls = false;
    }
  }, []);

  useEffect(() => {
    speechSynthRef.current = window.speechSynthesis;
  }, []);

  useEffect(() => {
    // Check for cached videos on component mount
    checkCachedVideos();
  }, []);

  const checkCachedVideos = async () => {
    try {
      const cache = await caches.open("video-cache");
      const cachedRequests = await cache.keys();
      const cachedVideoUrls = cachedRequests.map((request) => request.url);

      setCachedVideos(cachedVideoUrls);
    } catch (error) {
      console.log("Error occurred while checking cached videos:", error);
    }
  };

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
    height: "70vh",
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
    sliderRef.current?.slickNext(); // Auto slide to the next video
  };

  const handleVideoPlay = () => {
    // Pause speech synthesis when video is played
    if (speechSynthRef.current && speechSynthRef.current.speaking) {
      speechSynthRef.current.cancel();
    }
  };

  const handleSlideChange = (index) => {
    const currentVideo = sliderVideos?.[index];

    // Speak the message for the current video
    if (speechSynthRef.current && !speechSynthRef.current.speaking) {
      const utterance = new SpeechSynthesisUtterance(currentVideo?.message);
      speechSynthRef.current.speak(utterance);
    }
  };

  const isVideoCached = (videoUrl) => {
    return cachedVideos.includes(videoUrl);
  };

  return (
    <Box sx={styles.sliderSection}>
      <Slider {...settings} ref={sliderRef} beforeChange={handleSlideChange}>
        {sliderVideos?.map((item, index) => {
          const isCached = isVideoCached(item?.url);

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
                  {isCached ? (
                    <source src={item?.url} type="video/mp4" />
                  ) : (
                    <source
                      src={`http://localhost:3000/${item?.url}`}
                      type="video/mp4"
                    />
                  )}
                </video>
                <Box sx={styles.sliderTextContainer}>
                  <Typography variant="h4">{item?.message}</Typography>
                  <Typography variant="body1">{item?.description}</Typography>
                </Box>
              </div>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default SliderHome;
