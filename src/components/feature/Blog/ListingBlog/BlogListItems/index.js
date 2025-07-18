import {
  BookmarkAddOutlined as BookmarkAddOutlinedIcon,
  MoreHorizOutlined as MoreHorizOutlinedIcon,
  RemoveCircleOutlineOutlined as RemoveCircleOutlineOutlinedIcon,
} from "@mui/icons-material";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { setTagListName } from "../../../../../redux/slices/user";
import style from "../../style";

export const BlogListItems = ({ BlogKey, item, handleBlogContentListPage }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Box sx={style.listingSection} key={BlogKey}>
      <Grid container spacing={3} sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
        <Grid item xs={12} md={7}>
          <Box sx={style.listingBlogDetails}>
            <Typography
              variant="h3"
              onClick={() => handleBlogContentListPage(item)}
              style={{ cursor: "pointer" }}
            >
              {item?.blogTitle}
            </Typography>
            <Typography variant="body1">
              <ReactMarkdown
                remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                rehypePlugins={[rehypeKatex, remark2rehype]}
                components={{
                  p: ({ node, ...props }) => <>{props.children}</>,
                  img: ({ node, ...props }) => null,
                }}
              >
                {item?.description?.split(" ").slice(0, 30).join(" ")}
              </ReactMarkdown>

              <a
                onClick={(event) => {
                  event.stopPropagation();
                  handleBlogContentListPage(item);
                }}
                style={{ cursor: "pointer", color: "green", display: "block" }}
              >
                ...Read More
              </a>
            </Typography>
            <Box sx={style.tagListing}>
              <Button
                onClick={() => {
                  router.push(`/tag/${item?.blogTag}`);
                  dispatch(setTagListName(item?.blogTag));
                }}
              >
                {item?.blogTag}
              </Button>

              {item?.blogSubTag?.map((item, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      router.push(`/tag/${item}`);
                      dispatch(setTagListName(item));
                    }}
                  >
                    {item}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={style.postCard}
            onClick={() => {
              handleBlogContentListPage(item);
            }}
          >
            <Image src={item?.image} width={330} height={330} alt="blog image" />
          </Box>
        </Grid>
      </Grid>
      <Box sx={style.listDetails}>
        <Box sx={style.list}>
          <List>
            <ListItem>
              {Math.floor((new Date() - new Date(item?.createdAt)) / (1000 * 60 * 60 * 24))} days
              ago
            </ListItem>
            <ListItem>
              {Math.ceil(item?.description?.split(/\s+/).length / 200)} mins to read
            </ListItem>
            <ListItem>Based on your interest</ListItem>
          </List>
        </Box>
        <Box sx={style.blogIcon}>
          <List>
            <ListItem>
              <BookmarkAddOutlinedIcon />
            </ListItem>
            <ListItem>
              <RemoveCircleOutlineOutlinedIcon />
            </ListItem>
            <ListItem>
              <MoreHorizOutlinedIcon />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
