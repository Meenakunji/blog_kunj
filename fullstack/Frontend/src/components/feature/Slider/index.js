import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import styles from "./styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderHomne = () => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    // Hide the video control bar on component mount
    videoRef.current.controls = false;
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

  const videos = [
    {
      id: 1,
      url: "images/home/blogvideo1.mp4",
    },
    {
      id: 2,
      url: "images/home/blogvideo2.mp4",
    },
    {
      id: 3,
      url: "images/home/food.mp4",
    },
    {
      id: 4,
      url: "images/home/spaceblog.mp4",
    },
    {
      id: 5,
      url: "images/home/sports.mp4",
    },
    {
      id: 6,
      url: "images/home/blog3.mp4",
    },
  ];

  return (
    <Box sx={styles.sliderSection}>
      <Slider {...settings}>
        {videos?.map((item, index) => {
          return (
            <Box sx={styles.slider} key={index}>
              <div style={videoContainerStyle}>
                <video ref={videoRef} autoPlay muted style={videoStyle}>
                  <source src={item?.url} type="video/mp4" />
                </video>
              </div>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default SliderHomne;
