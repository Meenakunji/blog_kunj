import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TwitterImage from "../../../../../public/images/about/NewTwitterx.svg";
import HeartImage from "../../../../../public/images/home/Heart.svg";
import style from "../style";

export const FooterPartComponent = () => {
  return (
    <Box sx={style.newLatter}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={style.footerDetails}>
              <Box
                style={{
                  display: "flex",
                }}
              >
                <MenuBookIcon style={{ width: "50px", color: "#fff" }} />
                <Typography component="h1" style={{ fontSize: "18px", color: "#fff" }}>
                  Sahitya
                </Typography>
              </Box>
              <Typography variant="body1">
                Sahitya: Your go-to blogging website for sharing ideas,
                <br />
                stories, and experiences with a vibrant community of writers and readers. Unleash
                your creativity and connect with like-minded individuals at Sahitya.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={style.footerList}>
              <Typography variant="h4">Important Links</Typography>
              <ul>
                <li>About</li>
                <li>Terms</li>
                <li>Privacy Policy</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={style.footerList2}>
              <Typography variant="h4">Follow us at</Typography>
              <ul>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                    target="_blank"
                    className="me-4 text-reset"
                    style={{ color: "#fff !important" }}
                  >
                    <LinkedInIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                    target="_blank"
                    className="me-4 text-reset"
                    style={{ color: "#fff !important" }}
                  >
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/pankajk66711680"
                    target="_blank"
                    className="me-4 text-reset"
                    style={{ color: "#fff !important" }}
                  >
                    {" "}
                    <Image
                      src={TwitterImage}
                      alt="like icon"
                      style={{
                        width: "24px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/pankaj-kumar-meena-1b3922176/"
                    target="_blank"
                    className="me-4 text-reset"
                    style={{ color: "#fff !important" }}
                  >
                    <InstagramIcon />
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Box sx={style.copyRight}>
          <span>
            <Image
              src={HeartImage}
              alt="like icon"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              priority
            />
          </span>
          <Typography>Copyright © 2023. Crafted with love.</Typography>
        </Box>
      </Container>
    </Box>
  );
};
