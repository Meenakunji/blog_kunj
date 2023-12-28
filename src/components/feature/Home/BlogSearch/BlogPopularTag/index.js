import React from "react";
import style from "../../style";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setTagListName } from "../../../../../redux/slices/user";

export const BlogPopularTagComponent = ({ popularBlogTag }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Box sx={style.popularTag}>
      <Typography variant="body1">Popular Tag:</Typography>
      {Array.isArray(popularBlogTag) &&
        popularBlogTag.length > 0 &&
        popularBlogTag.slice(0, 4).map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                router.push(`/tag/${item?._id}`);
                dispatch(setTagListName(item?._id));
              }}
            >
              {item?._id}
            </Button>
          );
        })}
      <a
        style={{
          fontSize: "14px",
          color: "#26f7c7",
          cursor: "pointer",
          textDecoration: "underline !important",
        }}
        onClick={() => {
          router.push(`explore-topics/tag`);
        }}
      >
        Show More
      </a>
    </Box>
  );
};
