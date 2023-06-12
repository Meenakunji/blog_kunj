import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style";
export const HomeComponet = () => {
  const HomePageObj = [
    {
      id: "1",
      name: "Blog1",
      image: "/images/home/Taj.jpg",
    },
    {
      id: "2",
      name: "Blog2",
      image: "/images/home/kedarnath.jpg",
    },
    {
      id: "3",
      name: "Blog3",
      image: "/images/home/munnar.jpg",
    },
    {
      id: "4",
      name: "Blog4",
      image: "/images/home/paris.jpg",
    },
    {
      id: "5",
      name: "Blog5",
      image: "/images/home/kolkata.jpg",
    },
    {
      id: "6",
      name: "Blog6",
      image: "/images/home/Thar.jpg",
    },
    {
      id: "7",
      name: "Blog7",
      image: "/images/home/kerala.jpg",
    },
    {
      id: "8",
      name: "Blog8",
      image: "/images/home/Raj.jpg",
    },
    {
      id: "9",
      name: "Blog9",
      image: "/images/home/kerala.jpg",
    },
    {
      id: "10",
      name: "Blog10",
      image: "/images/home/kerala.jpg",
    },
    {
      id: "11",
      name: "Blog11",
      image: "/images/home/kerala.jpg",
    },
    {
      id: "12",
      name: "Blog12",
      image: "/images/home/kerala.jpg",
    },
    {
      id: "13",
      name: "Blog13",
      image: "/images/home/kerala.jpg",
    },
  ];
  return (
    <Box sx={style.mainContainer}>
      {HomePageObj &&
        HomePageObj?.map((item, index) => {
          return (
            <Box sx={style.mediaCard} key={index}>
              <Typography variant="h1">{item?.name}</Typography>
              <Box
                component="img"
                src={item?.image}
                style={{
                  borderRadius: "8px",
                }}
              />
            </Box>
          );
        })}
    </Box>
  );
};
