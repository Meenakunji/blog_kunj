import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { TagBanner } from "./Banner";
import style from "../style";
import { TagListComponent } from "./TagList";
import { UserComponent } from "../../../common/BlogUser";

export const BlogTagList = () => {
  return (
    <Box sx={style.ContainerBlogListComp}>
      <TagBanner />
      <Divider style={{ border: " 2px #F2F2F2 solid", borderColor: "green" }} />
      <Typography
        component="h1"
        style={{
          marginBottom: "60px",
          marginTop: "40px",
          fontSize: "30px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Recommended Blog
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <TagListComponent />
      </Box>
      <Typography
        component="h1"
        style={{
          marginBottom: "60px",
          marginTop: "40px",
          fontSize: "30px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Who to follow
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "60px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
      </Box>
    </Box>
  );
};
