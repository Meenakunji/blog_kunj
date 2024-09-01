import DoneIcon from "@mui/icons-material/Done";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import style from "../style";

export const BlogDetailsPageBanner = ({ particularBlogContent }) => {
  const router = useRouter();
  return (
    <Box sx={style.commentBg}>
      <Box sx={style.imageContainer}>
        <Image
          src="https://i.postimg.cc/h41XhrFF/comment-Bg.webp"
          alt="Baxkground image"
          width={1200}
          height={450}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      </Box>
      <Container maxWidth="md">
        <Box sx={style.bannerBg} onClick={() => router.push(`/profile?tab=home`)}>
          <Box sx={style.profileImg}>
            <Image
              src={
                particularBlogContent?.userData?.[0]?.profilePic ||
                particularBlogContent?.userData?.profilePic
              }
              alt="user Profile"
              width={40}
              height={40}
              style={{
                borderRadius: "100px",
                width: "40px",
                height: "40px",
                border: "1px solid #c3c3c3",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={style.profileName}>
            <Typography variant="h5">
              {particularBlogContent?.userData?.[0]?.name || particularBlogContent?.userData?.name}
            </Typography>
            <Box sx={style.dFlex}>
              <span>
                <DoneIcon />
              </span>
              <Typography variant="body1"> Verified Blogger</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
