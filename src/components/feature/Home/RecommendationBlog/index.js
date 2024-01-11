import { Avatar, Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import style from "../style";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import RemarkMathPlugin from "remark-math";
import { createSlug } from "../../../../../utils/common";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setParticularBlogContent, setTagListName } from "../../../../redux/slices/user";
import UpdateImage from "../../../common/Image";

const RecommendationBlog = ({ recommendationBlogList }) => {
  const [randomBlogIndex, setRandomBlogIndex] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();

  const randomBlog = useMemo(
    () => recommendationBlogList[randomBlogIndex] || {},
    [randomBlogIndex, recommendationBlogList]
  );

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * recommendationBlogList.length);
    setRandomBlogIndex(randomIndex);
  }, [recommendationBlogList]);

  const handleBlogContentListPage = useCallback(
    (item) => {
      dispatch(setParticularBlogContent(item));
      const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
      router.push(`/${urlSlug}`);
    },
    [dispatch, router]
  );

  const handleTagClick = useCallback(
    (tag) => {
      router.push(`/tag/${tag}`);
      dispatch(setTagListName(tag));
    },
    [dispatch, router]
  );

  return (
    <section style={style.RecommendationBlogCSS}>
      <Container maxWidth="lg">
        <Card
          sx={{ borderRadius: "15px" }}
          onClick={() => handleBlogContentListPage(randomBlog)}
          style={{ cursor: "pointer" }}
        >
          <Grid container alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <UpdateImage
                alt="recommended image"
                src={randomBlog?.image || "/images/home/rocket.jpg"}
                customStyles={style.recommendedImageCss}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={style.topSectionDetails}>
                <Button onClick={() => handleTagClick(randomBlog?.blogTag)}>
                  {randomBlog?.blogTag}
                </Button>
                <Typography variant="h1">{randomBlog?.blogTitle}</Typography>
                <Box sx={style.detailsComment} style={{ color: "#000" }}>
                  <ReactMarkdown
                    remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                    rehypePlugins={[rehypeKatex, remark2rehype]}
                    components={{
                      img: ({ node, ...props }) => null,
                    }}
                  >
                    {randomBlog?.description?.split(" ").slice(0, 15).join(" ")}
                  </ReactMarkdown>
                </Box>

                <Box sx={style.cardBottomSection}>
                  <Box sx={style.profileDetails}>
                    <Box sx={style.profileSection}>
                      <Avatar>
                        <Image
                          src={randomBlog?.userData?.[0]?.profilePic || "/images/home/User.jpg"}
                          fill={true}
                          alt="user pic"
                        />
                      </Avatar>
                    </Box>
                    <Box sx={style.profileName}>
                      <Typography variant="h5">{randomBlog?.userData?.[0]?.name}</Typography>
                      <Box sx={style.dFlex}>
                        <span>
                          <DoneIcon />
                        </span>
                        <Typography variant="body1"> Verified writer</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={style.date}>
                    {" "}
                    {new Date(randomBlog?.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </section>
  );
};

export default RecommendationBlog;
