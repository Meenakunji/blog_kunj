import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const LeftSidePost = () => {
  return (
    <>
      <Box sx={style.leftSide}>
        <Box sx={style.categories}>
          <Typography variant="h4">CATEGORIES</Typography>
          <ul>
            <li>
              <Typography variant="body1">Crypto</Typography>
            </li>
            <li>
              <Typography variant="body1">Admin</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="body1">Game</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="body1">News</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="body1">News</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="body1">News</Typography>
            </li>
          </ul>
        </Box>
        <Box sx={style.categories}>
          <Typography variant="h4">TAGS</Typography>
          <ul>
            <li>
              <Typography variant="body1">Design</Typography>
            </li>
            <li>
              <Typography variant="body1">image</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="body1">Slider</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="body1">Video</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="body1">Audio</Typography>
            </li>
          </ul>
        </Box>
        <Box sx={style.categories}>
          <Typography variant="h4">RECENT COMMENTS</Typography>
          <Box sx={style.recentPost}>
            <Typography variant="body1">
              admin: comment, just log in and view the post's...
            </Typography>
            <Typography variant="body1">
              <span>
                <AccessTimeIcon />
              </span>
              108 days ago
            </Typography>
          </Box>
          <Box sx={style.recentPost}>
            <Typography variant="body1">
              admin: comment, just log in and view the post's...
            </Typography>
            <Typography variant="body1">
              <span>
                <AccessTimeIcon />
              </span>
              108 days ago
            </Typography>
          </Box>
          <Box sx={style.recentPost}>
            <Typography variant="body1">
              admin: comment, just log in and view the post's...
            </Typography>
            <Typography variant="body1">
              <span>
                <AccessTimeIcon />
              </span>
              108 days ago
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftSidePost;
