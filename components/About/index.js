import { Box, Container, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";
import ReactPlayer from "react-player";
import { AboutData } from "../../utils/common";

export const AboutComponent = ({ aboutAPIResult }) => {
  return (
    <Box style={{ height: "100%" }}>
      <Box sx={style.mainSection}>
        <Typography variant="h2" component="h2">
          About Us
        </Typography>
        <Typography variant="h4" component="h1">
          Explore a World of Diverse Categories
        </Typography>
        <Typography variant="body1" component="p">
          Welcome to our blog! We're dedicated to providing a rich and diverse
          range of content for all enthusiasts of travel, lifestyle, and
          exploration. Our mission is to curate engaging stories, helpful tips,
          and valuable insights to inspire your adventures and cater to the
          diverse interests of our audience.
        </Typography>
      </Box>
      <Box sx={style.aboutDetails}>
        <Typography variant="body1" component="p">
          Welcome to our blog, where you'll find an array of engaging categories
          waiting to be discovered. Whether you're into tech marvels, historical
          adventures, natural wonders, or spiritual insights, we have something
          for everyone.
        </Typography>
        <Typography variant="body1" component="p">
          Dive into the essence of our diverse content—each category curated to
          provide you with captivating stories, informative insights, and
          valuable knowledge. Explore and embark on your journey through the
          various niches and discover a world of fascinating narratives.
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
            Dive into Captivating Blog Categories
          </Typography>
          <Typography component="p">
            {" "}
            Explore our diverse blog categories – from tech marvels to
            historical tales, nature's wonders to spiritual insights. Find
            something for every interest in our curated selection."
          </Typography>
        </Box>

        <Box sx={style.blogCategory}>
          {aboutAPIResult?.[0]?.BlogCategory?.flat(1).map((item, id) => {
            return (
              <Box sx={style.categoryPart1} key={item?._id}>
                <Image
                  width={70}
                  height={70}
                  src={item?.BlogCatImage}
                  alt="Tech blog"
                />
                <Box>
                  <Typography component="h1">{item?.name}</Typography>
                  <Typography component="body1">{item?.subTitle}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box sx={style.teamDetails}>
        <Typography component="h1">The Sahitya Team</Typography>

        {aboutAPIResult?.[0]?.companyDesc?.map((item, index) => {
          return (
            <Box sx={style.detils} key={index}>
              <Image src={item?.image} width={300} height={300} alt="user" />

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
