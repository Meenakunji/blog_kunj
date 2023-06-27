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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box sx={styles.sliderSection}>
        <Slider {...settings}>
          <Box sx={styles.slider}>
            <video ref={videoRef} width="100%" autoplay>
              <source
                src="images/home/blogvideo.mp4"
                type="video/mp4"
                style={{ width: "100%" }}
              />
            </video>
          </Box>
          <Box sx={styles.slider}>
            <video width="100%" autoplay>
              <source src="images/home/blogvideo.mp4" type="video/mp4" />
            </video>
          </Box>
          <Box sx={styles.slider}>
            <video width="100%" autoplay>
              <source src="images/home/blogvideo.mp4" type="video/mp4" />
            </video>
          </Box>
        </Slider>
      </Box>
    </>
  );
};

export default SliderHomne;
