import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "../style";
import Image from "next/image";

const CaseStudyList = () => {
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
  return (
    <section>
      <Container>
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">Case Study</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonlyand graphic design,
            </Typography>
          </Box>
          <Button>
            View all <ArrowForwardIcon />
          </Button>
        </Box>

        <Box sx={style.caseStudySlider}>
          <Slider {...settings}>
            <Card sx={{ borderRadius: "15px" }}>
              <Grid container>
                <Grid xs={6} md={6}>
                  <img
                    src="/images/home/Taj.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "360px",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid xs={6} md={6}>
                  <Box sx={style.topSectionDetails}>
                    <Button>FEATURED</Button>
                    <Typography variant="h1">
                      Cheap Airline Tickets Great Ways To Save
                    </Typography>
                    <Typography variant="body1">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonlyand graphic design, Lorem ipsum
                      is a placeholder text commonly{" "}
                    </Typography>

                    <Box sx={style.cardBottomSection}>
                      <Box sx={style.profileDetails}>
                        <Box sx={style.profileSection}>
                          <Avatar>
                            <Image
                              src="/images/home/User.jpg"
                              fill={true}
                              alt="user pic"
                            />
                          </Avatar>
                        </Box>
                        <Box sx={style.profileName}>
                          <Typography variant="h5">Farhan</Typography>
                          <Box sx={style.dFlex}>
                            <span>
                              <DoneIcon />
                            </span>
                            <Typography variant="body1">
                              {" "}
                              Verified writer
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={style.date}>2 May</Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
            <Card sx={{ borderRadius: "15px" }}>
              <Grid container>
                <Grid xs={6} md={6}>
                  <img
                    alt="slider image"
                    src="/images/home/rocket.jpg"
                    style={{
                      width: "100%",
                      height: "360px",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid xs={6} md={6}>
                  <Box sx={style.topSectionDetails}>
                    <Button>FEATURED</Button>
                    <Typography variant="h1">
                      Cheap Airline Tickets Great Ways To Save
                    </Typography>
                    <Typography variant="body1">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonlyand graphic design, Lorem ipsum
                      is a placeholder text commonly{" "}
                    </Typography>

                    <Box sx={style.cardBottomSection}>
                      <Box sx={style.profileDetails}>
                        <Box sx={style.profileSection}>
                          <Avatar>
                            <Image
                              src="/images/home/User.jpg"
                              fill={true}
                              alt="user pic"
                            />
                          </Avatar>
                        </Box>
                        <Box sx={style.profileName}>
                          <Typography variant="h5">Farhan</Typography>
                          <Box sx={style.dFlex}>
                            <span>
                              <DoneIcon />
                            </span>
                            <Typography variant="body1">
                              {" "}
                              Verified writer
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={style.date}>2 May</Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Slider>
        </Box>
      </Container>
    </section>
  );
};

export default CaseStudyList;
