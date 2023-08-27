import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LeftSidePost from "../LeftSidePost";
const UserBlog = () => {
  return (
    <>
      <Box sx={style.userBlogPost}>
        <Box sx={style.adminSection}>
          <List>
            <ListItem>
              <CalendarMonthIcon />
              <Typography variant="body1">Date</Typography>
            </ListItem>
            <ListItem>
              <AccountCircleIcon />{" "}
              <Typography variant="body1">Admin</Typography>
            </ListItem>
            <ListItem>
              <ChatBubbleIcon /> <Typography variant="body1">0</Typography>
            </ListItem>
            <ListItem>
              <FormatAlignLeftIcon />{" "}
              <Typography variant="body1">Post</Typography>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={style.postUser}>
            <Typography variant="h1">Heading Post</Typography>
            <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" />
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Button>Read More</Button>
          </Box>
          <LeftSidePost />
        </Box>
      </Box>
    </>
  );
};

export default UserBlog;
