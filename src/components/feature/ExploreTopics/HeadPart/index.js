import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SearchBar from "material-ui-search-bar";
import style from "./style";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const ExploreTopicsHeadComponent = ({ allTagList }) => {
  const [value, setValue] = useState();

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 700,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    speed: 700,
    slidesToShow: 4.2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  };

  const doSomethingWith = (data) => {
    console.log("data print ==>>", data);
  };

  const handleCancelSearch = () => {
    // Logic to execute when search is canceled
    console.log("Search canceled");
  };

  return (
    <Box sx={style.container}>
      <Box sx={style.tagContainer}>
        {/* <Slider {...settings}> */}
        {allTagList?.flat(1).map((item, index) => {
          return (
            <Box sx={style.tagSliderCss} key={index}>
              {/* <Image /> */}
              <AlternateEmailIcon />
              <Typography component="body1">{item?.blogTag}</Typography>
            </Box>
          );
        })}
        {/* </Slider> */}
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
