import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { createSlug } from "../../../../../utils/common";
import {
  setAllBlogsContainer,
  setCategory,
  setParticularBlogContent,
  setPopularBlogger,
  setPopularBlogs,
} from "../../../../redux/slices/user";
import style from "../style";
import { FirstTwoBlogComponent } from "./FirstTwoBlogComponent";
import { NextThreeBlogComponent } from "./NextThreeBlogComponent";

const AllBlogComponent = ({ allBlogList }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAllBlogContainerListingPage = () => {
    dispatch(setAllBlogsContainer(allBlogList));
    dispatch(setPopularBlogger([]));
    dispatch(setPopularBlogs([]));
    dispatch(setCategory("All Blogs"));
    router.push(`/bloglisting`);
  };

  const shuffledBlogList = allBlogList.slice().sort(() => Math.random() - 0.5);

  // Function to shuffle the array in place
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Shuffle the copied array
  shuffleArray(shuffledBlogList);

  // Select first two items randomly
  const firstTwoItems = shuffledBlogList.slice(0, 2);

  // Select next three items randomly
  const nextThreeToFiveItems = shuffledBlogList.slice(2, 5);

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  return (
    <section
      style={{
        position: "relative",
        top: "80px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">All Blogs</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonlyand graphic design,
            </Typography>
          </Box>
          <Button onClick={() => handleAllBlogContainerListingPage()}>
            View all <ArrowForwardIcon />
          </Button>
        </Box>
        <Grid container spacing={2}>
          <FirstTwoBlogComponent
            firstTwoItems={firstTwoItems}
            handleBlogContentListPage={handleBlogContentListPage}
            DoneIcon={DoneIcon}
            ReactMarkdown={ReactMarkdown}
            remarkGfm={remarkGfm}
            remark2rehype={remark2rehype}
            rehypeKatex={rehypeKatex}
            RemarkMathPlugin={RemarkMathPlugin}
          />

          <NextThreeBlogComponent
            DoneIcon={DoneIcon}
            nextThreeToFiveItems={nextThreeToFiveItems}
            handleBlogContentListPage={handleBlogContentListPage}
            ReactMarkdown={ReactMarkdown}
            remarkGfm={remarkGfm}
            remark2rehype={remark2rehype}
            rehypeKatex={rehypeKatex}
            RemarkMathPlugin={RemarkMathPlugin}
          />
        </Grid>
      </Container>
    </section>
  );
};

export default AllBlogComponent;
