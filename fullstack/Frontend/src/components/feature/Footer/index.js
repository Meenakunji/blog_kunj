import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./style";

export default function FooterComponent() {
  var router = useRouter();

  const isMobile = useMediaQuery("(max-width:768px)");

  const data = [
    {
      name: "Discord",
      src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon1.webp",
      openNewTab: true,
      url: "https://discord.com/channels/@me",
    },
    {
      name: "Telegram",
      src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon3.webp",
      openNewTab: true,
      url: "https://t.me/+6ldTYbzU1epmMmU9",
    },
    {
      name: "Twitter",
      src: "https://assets.artistfirst.in/meta-image/images/home/social/twitter.webp",
      openNewTab: true,
      url: "https://twitter.com/pankajk66711680",
    },
    {
      name: "Medium",
      src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon2.webp",
      openNewTab: true,
      url: "https://medium.com/@pankajkmeena12",
    },
    {
      name: "YouTube",
      src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon6.webp",
      openNewTab: true,
      url: " https://www.youtube.com/channel/UCIdKpJFO7wQls-MvJhLxtVw",
    },
    {
      name: "Instagram",
      src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon5.webp",
      openNewTab: true,
      url: " https://www.instagram.com/fantiger_com/",
    },
    {
      name: "Facebook",
      src: "https://assets.artistfirst.in/meta-image/images/newHome/social-fanicon4.webp",
      openNewTab: true,
      url: "https://www.facebook.com/FanTiger.india/",
    },
  ];

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.linebreak} />

      <Box sx={styles.fantiger__Footer}>
        <Container maxWidth="lg">
          <Grid
            sx={styles.fantiger__FooterBottm}
            direction="row"
            alignItems="center"
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid sx={styles.fanLogo__footer} item md={6} xs={12}>
              <img
                src={"/images/home/bloggerlogo.png"}
                style={{ width: "210px", contentVisibility: "auto" }}
                alt="footer logo"
                loading="lazy"
                decoding="async"
              />
            </Grid>
          </Grid>
          <Grid
            direction="row"
            alignItems="center"
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid sx={styles.orderchange} item md={6} xs={12}>
              <Box sx={styles.footerList__ContactDetails}>
                <ul>
                  <li
                    onClick={() => console.log("call now")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        "https://assets.artistfirst.in/meta-image/images/newHome/phone.webp"
                      }
                      alt="phone icon"
                      loading="lazy"
                      decoding="async"
                      style={{ contentVisibility: "auto" }}
                    />
                    <span>+91 8003 356 924</span>
                  </li>
                  <li>
                    <img
                      src={
                        "https://assets.artistfirst.in/meta-image/images/newHome/location.webp"
                      }
                      alt="location icon"
                    />
                    <span>
                      B-20, 20th Floor, Tower B, Bhutani Alphathum,
                      <br />
                      Sector 90, Noida, 201305
                    </span>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={styles.footerList__socialIcon}>
                <ul>
                  {data &&
                    data?.length > 0 &&
                    data.map((item, i) => {
                      return (
                        <li key={i} onClick={() => window.open(item?.url)}>
                          <img
                            src={item?.src}
                            alt="social media follows icon"
                          />
                        </li>
                      );
                    })}
                </ul>
              </Box>
            </Grid>
          </Grid>
          <Box sx={styles.linebreak__footer}>&nbsp;</Box>

          <Box sx={styles.fanTiger__footerCopyright}>
            <a href="#">2023-24 ©️ Copyright © 2023 All rights reserved </a>
          </Box>
        </Container>
      </Box>

      <Box sx={styles.sidebar}>
        <Box sx={styles.sidebarNav}>
          <ul>
            <li
              className={router?.asPath === "/" && "activeNav"}
              onClick={() => {
                router?.push(`/`);
              }}
            >
              <span>
                {router?.asPath === "/" ? (
                  <img
                    src="/images/fantv/menu/color-home.svg"
                    alt="userimage"
                  />
                ) : (
                  <img src="/images/fantv/menu/home.svg" alt="userimage" />
                )}
              </span>
              Home
            </li>
            <li
              className={router?.asPath === "/invest" && "activeNav"}
              onClick={() => {
                router?.push(`/invest`);
              }}
            >
              <span>
                {router?.asPath === "/invest" ? (
                  <img
                    src="/images/fantv/menu/color-card.svg"
                    alt="userimage"
                  />
                ) : (
                  <img src="/images/fantv/menu/card.svg" alt="userimage" />
                )}
              </span>
              Music Cards
            </li>
            <li
              className={router?.asPath === "/reedemcoin" && "activeNav"}
              onClick={() => {
                router?.push(`/reedemcoin`);
              }}
            >
              <span>
                {router?.asPath === "/reedemcoin" ? (
                  <img
                    src="/images/fantv/menu/color-reward.svg"
                    alt="userimage"
                  />
                ) : (
                  <img src="/images/fantv/menu/reward.svg" alt="userimage" />
                )}
              </span>
              Rewards
            </li>
            <li
              className={
                router?.asPath === "/profile?type=overview" && "activeNav"
              }
              onClick={() => {
                router?.push(`/profile?type=overview`);
              }}
            >
              <span>
                {router?.asPath === "/profile?type=overview" ? (
                  <img
                    src="/images/fantv/menu/color-profile.svg"
                    alt="userimage"
                  />
                ) : (
                  <img src="/images/fantv/menu/community.svg" alt="userimage" />
                )}
              </span>
              Profile
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
