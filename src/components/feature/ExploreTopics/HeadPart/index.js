import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SearchBar from "material-ui-search-bar";
import style from "./style";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const customButtonStyle = {
  backgroundColor: "lightgray",
  color: "black",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  left: "40px !importanat",
};

const customButtonRightStyle = {
  backgroundColor: "lightgray",
  color: "black",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
};

const ExploreTopicsHeadComponent = ({ allTagList }) => {
  const [value, setValue] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 700,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    speed: 700,
    slidesToShow: 4.2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <Box>
        <Button className="slick-prev" style={customButtonStyle}>
          <ArrowBackIosIcon />
        </Button>
      </Box>
    ),
    nextArrow: (
      <Box style={{ right: "170px !importanat" }}>
        <Button className="slick-next" style={customButtonRightStyle}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    ),
  };

  const doSomethingWith = (data) => {
    console.log("data print ==>>", data);
  };

  const handleCancelSearch = () => {
    console.log("Search canceled");
  };

  return (
    <Box sx={style.container}>
      <Box sx={style.sliderCSS}>
        <Slider {...settings}>
          {allTagList?.flat(1).map((item, index) => (
            <Box key={index} sx={style.blogSliderTagcss}>
              <AlternateEmailIcon />
              <Typography component="body1">{item?.blogTag}</Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      <Typography variant="h5">Explore topics</Typography>

      <SearchBar
        style={{
          alignItems: "center",
          width: "566px",
          left: "200px",
          marginLeft: "32%",
          backgroundColor: "#e0eadd",
          borderRadius: 8,
          marginTop: "50px",
        }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onRequestSearch={() => doSomethingWith(value)}
        onCancelSearch={() => handleCancelSearch()}
      />
    </Box>
  );
};

export default ExploreTopicsHeadComponent;
