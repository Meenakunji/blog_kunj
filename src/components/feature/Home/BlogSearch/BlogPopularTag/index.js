import React, { useCallback } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setTagListName } from "../../../../../redux/slices/user";
import style from "../../style";

export const BlogPopularTagComponent = ({ popularBlogTag }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleTagClick = useCallback(
    (tagId) => {
      router.push(`/tag/${tagId}`);
      dispatch(setTagListName(tagId));
    },
    [router, dispatch]
  );

  return (
    <Box sx={style.popularTag}>
      <Typography variant="body1">Popular Tag:</Typography>
      {popularBlogTag?.slice(0, 4).map((item, index) => (
        <Button key={index} onClick={() => handleTagClick(item?._id)}>
          {item?._id}
        </Button>
      ))}
      <a
        style={{
          fontSize: "14px",
          color: "#26f7c7",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => router.push(`explore-topics/tag`)}
      >
        Show More
      </a>
    </Box>
  );
};
