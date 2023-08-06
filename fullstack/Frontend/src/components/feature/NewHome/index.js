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
import style from "./style";
import DoneIcon from "@mui/icons-material/Done";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SearchIcon from "@mui/icons-material/Search";
function NewHome() {
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
    <>
      <Box sx={style.headSection}>
        <img
          src="https://images.pexels.com/photos/8459515/pexels-photo-8459515.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2000"
          alt=""
          style={{ width: "100%" }}
        />

        <Box sx={style.ourNewRoom}>
          <Typography variant="h6">Our Newsroom</Typography>
          <Box sx={style.inputSection}>
            <input type="text" placeholder="Search article" />
            <Button>Search</Button>
            <Box sx={style.SearchIcon}>
              <SearchIcon />
            </Box>
          </Box>
          <Box sx={style.popularTag}>
            <Typography variant="body1">Popular Tag:</Typography>
            <Button>Design</Button>
            <Button>User Experience </Button>
            <Button>User Interfaces</Button>
          </Box>
        </Box>
      </Box>

      <section
        style={{
          position: "relative",
          top: "-80px",
          zIndex: "5",
          padding: "0",
        }}
      >
        <Container maxWidth="lg">
          <Card sx={{ borderRadius: "15px" }}>
            <Grid container alignItems={"center"}>
              <Grid xs={6} md={6}>
                <img
                  src="https://images.pexels.com/photos/12314825/pexels-photo-12314825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "370px", objectFit: "cover" }}
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
                    placeholder text commonlyand graphic design, Lorem ipsum is
                    a placeholder text commonly{" "}
                  </Typography>

                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1">Farhan</Typography>
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
        </Container>
      </section>

      <section style={{ paddingTop: "0" }}>
        <Container maxWidth="lg">
          <Box sx={style.popularArticles}>
            <Box sx={style.popularArticlesDetails}>
              <Typography variant="h2">Popular Articles</Typography>
              <Typography variant="body1">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonlyand graphic design, Lorem ipsum is a placeholder
                text commonly
              </Typography>
            </Box>
            <Button>
              View all <ArrowForwardIcon />
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/12314825/pexels-photo-12314825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "370px", objectFit: "cover" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h3">
                    How to prevent and protect your family from Carbon monoxide
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/13767060/pexels-photo-13767060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "370px", objectFit: "cover" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h3">
                    How to prevent and protect your family from Carbon monoxide
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg">
          <Box sx={style.popularArticles}>
            <Box sx={style.popularArticlesDetails}>
              <Typography variant="h2">Popular</Typography>
              <Typography variant="body1">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonlyand graphic design,
              </Typography>
            </Box>
            <Button>
              View all <ArrowForwardIcon />
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "500px" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h4">Protect</Typography>
                  <Typography variant="body1">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={4}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/17097419/pexels-photo-17097419/free-photo-of-man-in-coat-posing-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "500px" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h4">Prevent</Typography>
                  <Typography variant="body1">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={4}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/6110294/pexels-photo-6110294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "500px" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h4">Monoxide</Typography>
                  <Typography variant="body1">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
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
          <Slider {...settings}>
            <Card sx={{ borderRadius: "15px" }}>
              <Grid container>
                <Grid xs={6} md={6}>
                  <img
                    src="https://images.pexels.com/photos/7602068/pexels-photo-7602068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                            <img
                              src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                              alt=""
                            />
                          </Avatar>
                        </Box>
                        <Box sx={style.profileName}>
                          <Typography variant="body1">Farhan</Typography>
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
                    src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt=""
                    style={{ width: "100%" }}
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
                            <img
                              src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                              alt=""
                            />
                          </Avatar>
                        </Box>
                        <Box sx={style.profileName}>
                          <Typography variant="body1">Farhan</Typography>
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
        </Container>
      </section>

      <section>
        <Container>
          <Box sx={style.popularArticles}>
            <Box sx={style.popularArticlesDetails}>
              <Typography variant="h2">All Articles</Typography>
              <Typography variant="body1">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonlyand graphic design,
              </Typography>
            </Box>
            <Button>
              View all <ArrowForwardIcon />
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/12314825/pexels-photo-12314825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "370px", objectFit: "cover" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h3">
                    How to prevent and protect your family from Carbon monoxide
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/13767060/pexels-photo-13767060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "370px", objectFit: "cover" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h3">
                    How to prevent and protect your family from Carbon monoxide
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={4}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "500px" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h4">Protect</Typography>
                  <Typography variant="body1">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={4}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/17097419/pexels-photo-17097419/free-photo-of-man-in-coat-posing-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "500px" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h4">Prevent</Typography>
                  <Typography variant="body1">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={4}>
              <Box sx={style.popularArticlesList}>
                <img
                  src="https://images.pexels.com/photos/6110294/pexels-photo-6110294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  style={{ width: "100%", height: "500px" }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h4">Monoxide</Typography>
                  <Typography variant="body1">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                            alt=""
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          Farhan
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      2 May
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default NewHome;
