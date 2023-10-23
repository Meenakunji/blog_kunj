import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "../style";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setTagListName } from "../../../../redux/slices/user";

export const BlogSearch = ({ popularBlogTag }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Box sx={style.headSection}>
      <img
        src="https://images.pexels.com/photos/8459515/pexels-photo-8459515.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2000"
        alt=""
        style={{ width: "100%" }}
      />

      <Box sx={style.ourNewRoom}>
        <Typography variant="h6">Our Newsroom</Typography>
        <Box sx={style.inputSection}>
          <input type="text" placeholder="Search blog" />
          <Button>Search</Button>
          <Box sx={style.SearchIcon}>
            <SearchIcon />
          </Box>
        </Box>
        <Box sx={style.popularTag}>
          <Typography variant="body1">Popular Tag:</Typography>
          {popularBlogTag?.map((item, index) => {
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
        </Box>
      </Box>
    </Box>
  );
};
