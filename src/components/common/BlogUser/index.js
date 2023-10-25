import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./style";
import Link from "next/link";

export const UserComponent = () => {
  return (
    <Box sx={styles.Container}>
      <Box sx={styles.mainConatiner}>
        <Link
          rel="noopener follow"
          href="/@shaiq_khan?source=topic_portal_who_to_follow-------------------------------------"
        >
          <Box style={{ position: "relative" }}>
            <img
              alt="Anuj Kumar Pandey"
              class="s cm ch asd ase cn"
              src="https://miro.medium.com/v2/resize:fill:128:128/0*OMW3e7V1Ye0yPan0"
              width="64"
              height="64"
              loading="lazy"
            />
            <Box class="cg ch s asd ase ck u bf cl"></Box>
          </Box>
        </Link>
        <Box sx={styles.userDetails}>
          <Typography component="h2">
            <Link
              rel="noopener follow"
              href="/@shaiq_khan?source=topic_portal_who_to_follow-------------------------------------"
            >
              Anuj Kumar Pandey
            </Link>
          </Typography>
        </Box>
        <Typography component="p" style={{ fontSize: "13px" }}>
          13.4K Followers
        </Typography>
        <Box sx={styles.descriptionConatiner}>
          <Typography component="p">Software Engineer</Typography>
        </Box>
      </Box>
      <Button>Follow</Button>
    </Box>
  );
};
