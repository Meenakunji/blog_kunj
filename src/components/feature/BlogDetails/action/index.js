import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import MoreDetailsIcon from "../../../../../public/images/home/dot.svg";
import LikeImage from "../../../../../public/images/home/like1.svg";
import UserBlogReadIcon from "../../../../../public/images/home/playcircle.svg";
import UserBlogShareImage from "../../../../../public/images/home/share.svg";
import { formatCount } from "../../../../../utils/common";
import SwipeableTemporaryDrawer from "../blogDetails";
import style from "../style";

export const BlogActionBtn = ({
  particularBlogContent,
  handleBlogLikeCount,
  handleMarkedBlog,
  blogMarked,
  blogLikeCount,
  handleRead,
  isReading,
}) => {
  return (
    <Box sx={style.commentDetails}>
      <Box sx={style.commentList}>
        <Box sx={style.commentChat}>
          <Box sx={style.commentChatList} onClick={() => handleBlogLikeCount()}>
            <Image
              src={LikeImage}
              alt="like icon"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                cursor: "pointer",
              }}
              priority
            />
            <Typography variant="body1">{formatCount(blogLikeCount)}</Typography>
          </Box>
          <Box sx={style.commentChatList}>
            <SwipeableTemporaryDrawer />
            {/* <Typography variant="body1">{particularBlogContent?.result?.length}</Typography> */}
          </Box>
        </Box>
        <Box sx={style.commentChat} style={{ gap: "15px" }}>
          <Box sx={style.commentChatList} onClick={() => handleMarkedBlog()}>
            {blogMarked ? <BookmarkIcon /> : <BookmarkAddOutlinedIcon />}
          </Box>
          <Box sx={style.commentChatList} onClick={handleRead}>
            {isReading ? (
              <PauseCircleFilledIcon />
            ) : (
              <Image
                src={UserBlogReadIcon}
                alt="read blog player"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                priority
              />
            )}
          </Box>
          <Box sx={style.commentChatList}>
            <Image
              src={UserBlogShareImage}
              alt="share icon"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                cursor: "pointer",
              }}
              priority
            />
          </Box>
          <Box sx={style.commentChatList}>
            <Image
              src={MoreDetailsIcon}
              alt="more detail icon"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                cursor: "pointer",
              }}
              priority
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
