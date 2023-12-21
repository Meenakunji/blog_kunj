import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { createSlug } from "../../../../../utils/common";
import {
  setAllBlogsContainer,
  setCategory,
  setParticularBlogContent,
  setPopularBlogger,
  setPopularBlogs,
} from "../../../../redux/slices/user";
import style from "../style";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import RemarkMathPlugin from "remark-math";

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

  const firstTwoItems = allBlogList?.slice(0, 2);
  // Store next 3 to 5 items in a separate array
  const nextThreeToFiveItems = allBlogList?.slice(2, 5);

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
          {firstTwoItems?.length > 0 &&
            firstTwoItems?.map((item, index) => {
              return (
                <Grid item xs={6} md={6} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <img
                      src={item?.image || "/images/home/rocket.jpg"}
                      alt="blog image"
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                      }}
                      onClick={() => handleBlogContentListPage(item)}
                    />
                    <Box
                      sx={style.popularArticlesHeading}
                      onClick={() => handleBlogContentListPage(item)}
                    >
                      <Typography variant="h3">{item?.blogTitle}</Typography>
                      <Typography variant="body1">
                        <ReactMarkdown
                          remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                          rehypePlugins={[rehypeKatex, remark2rehype]}
                          components={{
                            img: ({ node, ...props }) => null,
                          }}
                        >
                          {item?.description?.split(" ").slice(0, 15).join(" ")}
                        </ReactMarkdown>
                      </Typography>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.userData?.[0].profilePic}
                                alt="blogger Profileimage"
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="h5" sx={{ color: "#fff" }}>
                              {item?.userData?.[0].name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography
                                variant="body1"
                                sx={{ color: "#798b9b" }}
                              >
                                {" "}
                                Verified writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(item?.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                            }
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          {nextThreeToFiveItems?.length > 0 &&
            nextThreeToFiveItems?.map((item, index) => {
              return (
                <Grid item xs={4} md={4} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <img
                      src={item?.image || "/images/home/rocket.jpg"}
                      alt="blog image"
                      style={{
                        width: "100%",
                        height: "500px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleBlogContentListPage(item)}
                    />
                    <Box
                      sx={style.popularArticlesHeading}
                      onClick={() => handleBlogContentListPage(item)}
                    >
                      <Typography variant="h4">{item?.blogTitle}</Typography>
                      <Typography variant="body1">
                        <ReactMarkdown
                          remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                          rehypePlugins={[rehypeKatex, remark2rehype]}
                          components={{
                            img: ({ node, ...props }) => null, // This will remove image rendering
                          }}
                        >
                          {item?.description?.split(" ").slice(0, 15).join(" ")}
                        </ReactMarkdown>
                      </Typography>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.userData?.[0].profilePic}
                                alt="blogger Profileimage"
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="h5" sx={{ color: "#fff" }}>
                              {item?.userData?.[0].name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography
                                variant="h5"
                                sx={{ color: "#798b9b" }}
                              >
                                {" "}
                                Verified writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(item?.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                            }
                          )}
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

export default AllBlogComponent;
