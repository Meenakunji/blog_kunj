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
import DoneIcon from "@mui/icons-material/Done";
import style from "../style";
import Image from "next/image";

const RecommendationBlog = ({ recommendationBlogList }) => {
  return (
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
            <Grid item xs={6} md={6}>
              <img
                src="/images/home/rocket.jpg"
                alt="recommended image"
                style={{ width: "100%", height: "370px", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={style.topSectionDetails}>
                <Button>FEATURED</Button>
                <Typography variant="h1">
                  Cheap Airline Tickets Great Ways To Save
                </Typography>
                <Typography variant="body1">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonlyand graphic design, Lorem ipsum is a placeholder
                  text commonly{" "}
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
      </Container>
    </section>
  );
};

export default RecommendationBlog;
