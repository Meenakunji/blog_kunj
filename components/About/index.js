import { Box, Container, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";
import ReactPlayer from "react-player";
import {
  blogCategoryDetails,
  AboutData,
  CompanyOwners,
} from "../../utils/common";
import { useRouter } from "next/router";

export const AboutComponent = () => {
  const router = useRouter();
  return (
    <Box style={{ height: "100%" }}>
      <Box sx={style.mainSection}>
        <Typography component="h2">About Us</Typography>
        <Typography component="h3">Accommodation for Everyone</Typography>
      </Box>
      <Box sx={style.aboutDetails}>
        <Typography component="h1">
          Small, Unspoilt and Welcoming a Unique Sanctuary.administrate
          cross-platform materials rather than optimal supply chains.
        </Typography>
        <Typography component="p">
          {" "}
          Monotonectally mesh web-enabled total linkage rather than distinctive
          niches. Professionally administrate cross-platform materials rather
          than optimal supply chains. Authoritatively pursue holistic
          opportunities via enabled synergy.
        </Typography>
      </Box>
      <Box sx={style.aboutPlay}>
        <ReactPlayer
          // url="/images/home/blogvideo1.mp4"
          url="https://www.youtube.com/watch?v=4xJUzAq5kqI"
          width="100%"
          height="100%"
          controls={true}
        />
      </Box>

      <Box sx={style.categoryPart}>
        <Box>
          <Typography component="h3">
            Enjoy the heavenly stay at the luxurious cosy retreat that offers
            whisper-soft linens.
          </Typography>
          <Typography component="p">
            {" "}
            The romantic atmosphere is further enhanced with the ultimate
            privacy, relaxing comfort.
          </Typography>
        </Box>

        <Box sx={style.blogCategory}>
          {blogCategoryDetails?.flat(1).map((item, id) => {
            return (
              <Box sx={style.categoryPart1} key={id}>
                <Image
                  width={70}
                  height={70}
                  src={item?.icon}
                  alt="Tech blog"
                />
                <Box>
                  <Typography component="h1">{item?.title}</Typography>
                  <Typography component="body1">{item?.subTitle}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box sx={style.teamDetails}>
        <Typography component="h1">The Sahitya Team</Typography>

        {CompanyOwners?.map((item, index) => {
          return (
            <Box sx={style.detils} key={index}>
              <Image src={item?.image} width={400} height={200} alt="user" />

              <Box sx={style.aboutDetailsRight}>
                <Typography component="h1">{item?.Role} </Typography>
                <Typography component="h2">{item?.name}</Typography>
                <Typography component="body1"> {item?.about}</Typography>
                <Box sx={style.socialMediaIcon}>
                  {item?.socialMedia.length > 0 &&
                    item?.socialMedia?.map((item, index) => {
                      return (
                        <Box
                          onClick={() => windeow.open(item?.SocialMediaLink)}
                          key={index}
                        >
                          <Image
                            width={30}
                            height={30}
                            src={item?.image}
                            alt={item}
                          />
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box>
        {/* <Typography component="h1"> Join Us</Typography> */}

        {AboutData?.flat(1).map((item, index) => {
          return (
            <Box sx={style.commentsection} key={index}>
              <Typography component="h3">{item?.title}</Typography>
              <Typography component="p">{item?.subTitle}</Typography>

              <Image
                src={item?.image}
                alt="Breakfast"
                sx={style.icon}
                width={100}
                height={100}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
