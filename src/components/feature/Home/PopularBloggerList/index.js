import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
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

const PopularBloggerList = ({ popularBlogger }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePopularBloggerList = useCallback(() => {
    dispatch(setPopularBlogs([]));
    dispatch(setPopularBlogger([]));
    dispatch(setAllBlogsContainer(popularBlogger?.data));
    dispatch(setCategory("Popular Blogger"));
    router.push(`/bloglisting`);
  }, [dispatch, popularBlogger, router]);

  const handleBlogContentListPage = useCallback(
    (item) => {
      dispatch(setParticularBlogContent(item));
      const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
      router.push(`/${urlSlug}`);
    },
    [dispatch, router]
  );

  const PopularBloggerData = useMemo(() => popularBlogger?.slice(0, 3), [popularBlogger]);

  console.log("PopularBloggerData", PopularBloggerData);

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
            <Typography variant="h2">Popular Blogger</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonlyand
              graphic design,
            </Typography>
          </Box>
          <Button onClick={handlePopularBloggerList}>
            View all <ArrowForwardIcon />
          </Button>
        </Box>
        <Grid container spacing={2}>
          {PopularBloggerData?.length > 0 &&
            PopularBloggerData?.slice(0, 3)?.map((item, index) => {
              return (
                <Grid item xs={12} sm={4} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <Image
                      alt={item?.result?.[0]?.name}
                      src={item?.result?.[0]?.image || "/images/home/rocket.jpg"}
                      width={500}
                      height={370}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "fill",
                      }}
                    />
                    <Box
                      sx={style.popularArticlesHeading}
                      onClick={() => handleBlogContentListPage(item)}
                    >
                      <Typography variant="h4">{item?.result?.[0]?.blogTitle}</Typography>
                      <Box sx={style.detailsComment}>
                        <ReactMarkdown
                          remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                          rehypePlugins={[rehypeKatex, remark2rehype]}
                          components={{
                            img: ({ node, ...props }) => null,
                          }}
                        >
                          {item?.result?.[0]?.description?.split(" ").slice(0, 15).join(" ")}
                        </ReactMarkdown>
                      </Box>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.profilePic}
                                alt={item?.name}
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="h5" sx={{ color: "#fff" }}>
                              {item?.name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography variant="h5" sx={{ color: "#798b9b" }}>
                                Verified writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(item?.result?.[0]?.createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </section>
  );
};

export default PopularBloggerList;
