import { Box, Button, Container, Typography } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { setTagListName } from "../../../../redux/slices/user";
import style from "./style";

const ExploreTopicsHeadComponent = ({ allTagList,isSearchShow }) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerPadding: "20px",
    centerMode: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 700,
    slidesToShow: 5,
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
  };

  const doSomethingWith = (data) => {
    console.log("data print ==>>", data);
  };

  const handleCancelSearch = () => {
    console.log("Search canceled");
  };

  const handleRedirectionTag = (tag) => {
    dispatch(setTagListName(tag));
    router.push(`/tag/${tag}`);
  };

  return (
    <>
      <Container maxWidth="false" sx={{ maxWidth: "1200px" }}>
        <Box sx={style.slideList}>
          <Slider {...settings}>
            {allTagList?.flat(1).map((item, index) => (
              <Box key={index} sx={style.blogSliderTagcss}>
                <Button onClick={() => handleRedirectionTag(item?.blogTag)}>{item?.blogTag}</Button>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
      {
        isSearchShow && (
          <Container maxWidth="false" sx={{ maxWidth: "600px" }}>
          <Box sx={style.SearchBarSection}>
            <Typography variant="h5">Explore topics</Typography>
            <SearchBar
              style={{
                alignItems: "center",
                width: "566px",
                border: "1px solid #dfe1e5",
                borderRadius: "100px",
                boxShadow: "none",
              }}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              onRequestSearch={() => doSomethingWith(value)}
              onCancelSearch={() => handleCancelSearch()}
            />
          </Box>
        </Container>
        )
      }
    
    </>
  );
};

export default ExploreTopicsHeadComponent;
