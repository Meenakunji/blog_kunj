import { Box } from "@mui/material";
import React from "react";
import { TagBanner } from "./Banner";
import style from "../style";
import { TagListComponent } from "./TagList";
import { UserComponent } from "../../../common/BlogUser";

export const BlogTagList = () => {
  return (
    <Box sx={style.ContainerBlogListComp}>
      <TagBanner />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <TagListComponent />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
      </Box>
    </Box>
  );
};
