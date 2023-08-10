import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import style from "../style";

export const AllBlogComponent = ({ allBlogList }) => {
  const firstTwoItems = allBlogList.slice(0, 2);
  // Store next 3 to 5 items in a separate array
  const nextThreeToFiveItems = allBlogList.slice(2, 5);
  return (
    <section>
      <Container>
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">All Blogs</Typography>
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
          {firstTwoItems?.length > 0 &&
            firstTwoItems?.map((item, index) => {
              return (
                <Grid item xs={6} md={6} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <img
                      src={item?.image}
                      alt="blog image"
                      style={{
                        width: "100%",
                        height: "370px",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={style.popularArticlesHeading}>
                      <Typography variant="h3">{item?.blogTitle}</Typography>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.userData?.[0].profilePic}
                                alt="blogger Profileimage"
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="body1" sx={{ color: "#fff" }}>
                              {item?.userData?.[0].name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography
                                variant="body1"
                                sx={{ color: "#798b9b" }}
                              >
                                {" "}
                                Blogger writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(item?.creatAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          {nextThreeToFiveItems?.length > 0 &&
            nextThreeToFiveItems?.map((item, index) => {
              return (
                <Grid item xs={4} md={4} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <img
                      src={item?.image}
                      alt="blog image"
                      style={{ width: "100%", height: "500px" }}
                    />
                    <Box sx={style.popularArticlesHeading}>
                      <Typography variant="h4">Protect</Typography>
                      <Typography variant="body1">{item?.blogTitle}</Typography>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.userData?.[0].profilePic}
                                alt="blogger Profileimage"
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="body1" sx={{ color: "#fff" }}>
                              {item?.userData?.[0].name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography
                                variant="body1"
                                sx={{ color: "#798b9b" }}
                              >
                                {" "}
                                Blogger writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(item?.creatAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </section>
  );
};
