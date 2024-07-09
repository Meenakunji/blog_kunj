import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, Box, Button, Container, Grid, Skeleton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import {
  setAllBlogsContainer,
  setCategory,
  setParticularBlogContent,
  setPopularBlogger,
  setPopularBlogs,
} from "../../../../redux/slices/user";
import style from "../style";
import { createSlug } from "../../../../../utils/common";
import Image from "next/image";

const PopularBlog = ({ popularBlogList }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePopularBlogListing = useCallback(() => {
    dispatch(setPopularBlogs(popularBlogList));
    dispatch(setPopularBlogger([]));
    dispatch(setAllBlogsContainer([]));
    dispatch(setCategory("Popular Blog"));
    router.push(`/bloglisting`);
  }, [dispatch, popularBlogList, router]);

  const handleBlogContentListPage = useCallback(
    (item) => {
      dispatch(setParticularBlogContent(item));
      const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
      router.push(`/${urlSlug}`);
    },
    [dispatch, router]
  );

  const randomBlog = useMemo(() => popularBlogList?.[0] || {}, [popularBlogList]);

  const isLoading = popularBlogList.length === 0;

  return (
    <section
      style={{
        position: "relative",
        top: "100px",
        zIndex: "5",
        padding: "0",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">Popular Blog</Typography>
            <Typography variant="body1">
              Welcome to our Popular Blog section! Here, we explore the use of innovative techniques
              in publishing and graphic design. Discover their significance and applications in
              these industries.
            </Typography>
          </Box>
          <Button onClick={handlePopularBlogListing}>
            View all <ArrowForwardIcon />
          </Button>
        </Box>
        <Grid container spacing={2}>
          {isLoading
            ? Array.from(new Array(4)).map((_, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <Skeleton variant="rectangular" width="100%" height={370} />
                    <Box sx={style.popularArticlesHeading}>
                      <Skeleton width="60%" />
                      <Box sx={style.detailsComment}>
                        <Skeleton width="100%" />
                        <Skeleton width="80%" />
                      </Box>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Skeleton variant="circular" width={40} height={40} />
                          </Box>
                          <Box sx={style.profileName}>
                            <Skeleton width="50%" />
                            <Box sx={style.dFlex}>
                              <Skeleton width="40%" />
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date}>
                          <Skeleton width="30%" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))
            : popularBlogList?.slice(0, 4)?.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                  onClick={() => handleBlogContentListPage(item)}
                >
                  <Box sx={style.popularArticlesList}>
                    <Image
                      alt="recommended image"
                      src={item?.image || "/images/home/rocket.jpg"}
                      width={500}
                      height={370}
                      style={{
                        width: "100%",
                        height: "370px",
                        objectFit: "fill",
                      }}
                    />
                    <Box sx={style.popularArticlesHeading}>
                      <Typography variant="h3">{item?.blogTitle}</Typography>
                      <Box sx={style.detailsComment}>
                        <ReactMarkdown
                          remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                          rehypePlugins={[rehypeKatex, remark2rehype]}
                          components={{
                            img: ({ node, ...props }) => null,
                          }}
                        >
                          {item?.description?.split(" ").slice(0, 15).join(" ")}
                        </ReactMarkdown>
                      </Box>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.userData?.[0]?.profilePic}
                                alt="user profile pic"
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="h5" sx={{ color: "#fff" }}>
                              {item?.userData?.[0]?.name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography variant="h5" sx={{ color: "#798b9b" }}>
                                {" "}
                                Verified writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(item?.createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
        </Grid>
      </Container>
    </section>
  );
};

export default PopularBlog;
