import React, { useCallback } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setTagListName } from "../../../../../redux/slices/user";
import style from "../../style";
import Link from "next/link";

export const BlogPopularTagComponent = ({ popularBlogTag }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:768px)");

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
      {isMobile
        ? popularBlogTag?.slice(0, 2).map((item, index) => (
            <Button key={index} onClick={() => handleTagClick(item?._id)}>
              {item?._id}
            </Button>
          ))
        : popularBlogTag?.slice(0, 4).map((item, index) => (
            <Button key={index} onClick={() => handleTagClick(item?._id)}>
              {item?._id}
            </Button>
          ))}

      <Link
        href="/explore-topics/tag"
        style={{
          fontSize: "14px",
          color: "#26f7c7",
          cursor: "pointer",
          textDecoration: "underline",
        }}
        passHref
      >
        Show More
      </Link>
    </Box>
  );
};
