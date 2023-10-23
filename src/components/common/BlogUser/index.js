import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./style";

export const UserComponent = () => {
  return (
    <Box sx={styles.Container}>
      <Box sx={styles.mainConatiner}>
        <a
          rel="noopener follow"
          href="/@shaiq_khan?source=topic_portal_who_to_follow-------------------------------------"
        >
          <Box style={{ position: "relative" }}>
            <img
              alt="Shaiq khan"
              class="s cm ch asd ase cn"
              src="https://miro.medium.com/v2/resize:fill:128:128/0*OMW3e7V1Ye0yPan0"
              width="64"
              height="64"
              loading="lazy"
            />
            <Box class="cg ch s asd ase ck u bf cl"></Box>
          </Box>
        </a>
        <Box sx={styles.userDetails}>
          <Typography component="h2">
            <a
              rel="noopener follow"
              href="/@shaiq_khan?source=topic_portal_who_to_follow-------------------------------------"
            >
              Shaiq khan
            </a>
          </Typography>
        </Box>
        <Typography component="p">13.4K Followers</Typography>
        <Box sx={styles.descriptionConatiner}>
          <Typography component="p">Flutter Developer</Typography>
        </Box>
      </Box>
      <Button>Follow</Button>
    </Box>
  );
};
