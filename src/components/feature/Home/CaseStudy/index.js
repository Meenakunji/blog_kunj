import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { createSlug } from "../../../../../utils/common";
import {
  setAllBlogsContainer,
  setCategory,
  setParticularBlogContent,
  setPopularBlogger,
  setPopularBlogs,
  setTagListName,
} from "../../../../redux/slices/user";
import style from "../style";

const CaseStudyList = ({ caseStudyList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div
        style={{
          height: "10px",
          width: "10px",
          background: "white",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePopularBlogListing = () => {
    dispatch(setPopularBlogs([]));
    dispatch(setPopularBlogger([]));
    dispatch(setAllBlogsContainer(caseStudyList?.data));
    dispatch(setCategory("Case Study"));
    router.push(`/bloglisting`);
  };

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  return (
    <section
      style={{
        position: "relative",
        top: "100px",
        zIndex: "5",
        padding: "0",
        marginBottom: "50px",
      }}
    >
      <Container>
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">Case Study</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonlyand
              graphic design,
            </Typography>
          </Box>
          <Button onClick={handlePopularBlogListing}>
            View all <ArrowForwardIcon />
          </Button>
        </Box>

        <Box sx={style.caseStudySlider}>
          <Slider {...settings}>
            {caseStudyList?.data?.slice(0, 3).map((item, index) => (
              <Card sx={{ borderRadius: "15px" }} key={index}>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Image
                      alt="slider image"
                      src={item?.image || "/images/home/rocket.jpg"}
                      width={500}
                      height={370}
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() => handleBlogContentListPage(item)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={style.topSectionDetails}>
                      <Button
                        onClick={() => {
                          router.push(`/tag/${item?.blogTag}`);
                          dispatch(setTagListName(item?.blogTag));
                        }}
                      >
                        {item?.blogTag}
                      </Button>
                      <Box
                        onClick={() => handleBlogContentListPage(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <Typography variant="h1">{item?.blogTitle}</Typography>
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
                      </Box>

                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <Image
                                src={item?.userData?.[0]?.profilePic}
                                fill={true}
                                alt="user pic"
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="h5">{item?.userData?.[0]?.name}</Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography variant="body1">Verified writer</Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ ...style.date, color: "#798b9b" }}>
                          {new Date(item?.createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                          })}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Slider>
        </Box>
      </Container>
    </section>
  );
};

export default CaseStudyList;
