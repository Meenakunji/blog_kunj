import React from "react";
import style from "../style";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const TeamDetailsComponent = ({ aboutAPIResult }) => {
  return (
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
                        onClick={() => window.open(item?.SocialMediaLink)}
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
  );
};
