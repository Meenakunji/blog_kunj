import {
  BookmarkAddOutlined as BookmarkAddOutlinedIcon,
  MoreHorizOutlined as MoreHorizOutlinedIcon,
  RemoveCircleOutlineOutlined as RemoveCircleOutlineOutlinedIcon,
} from "@mui/icons-material";
import { Box, Button, Container, Grid, List, ListItem, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { createSlug } from "../../../../../utils/common";
import { setParticularBlogContent, setTagListName } from "../../../../redux/slices/user";
import LoaderComponent from "../../../common/Loader";
import style from "../style";
import Image from "next/image";

const ListingBlog = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();
  const { category, allBlogsContainer, popularBlogs } = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  useEffect(() => {
    setIsLoading(allBlogsContainer?.length === 0);
  }, [allBlogsContainer]);

  return (
    <Box sx={style.listingBlog}>
      <NextSeo
        title="All Blog List"
        description={
          "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!"
        }
        canonical={`https://timely-profiterole-25e8c9.netlify.app/bloglisting`}
        openGraph={{
          url: `https://timely-profiterole-25e8c9.netlify.app/bloglisting`,
          title: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
          description:
            "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
          images: [
            {
              url: `https://timely-profiterole-25e8c9.netlify.app/bloglisting`,
              alt: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
            },
          ],
          type: "website",
          siteName: "https://timely-profiterole-25e8c9.netlify.app/",
        }}
        additionalMetaTags={[
          {
            property: "twitter.title",
            content: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
          },
          {
            property: "twitter.description",
            content:
              "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
          },
          {
            property: "twitter.image",
            content: "https://timely-profiterole-25e8c9.netlify.app/bloglisting",
          },
        ]}
      />
      <Box sx={style.listingBlogHeading}>
        <Typography variant="h2">{category}</Typography>
      </Box>

      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Container maxWidth="md">
          {allBlogsContainer
            ?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item, index) => (
              <Box sx={style.listingSection} key={index}>
                <Grid
                  container
                  spacing={3}
                  sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
                >
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
                        {Math.floor(
                          (new Date() - new Date(item?.createdAt)) / (1000 * 60 * 60 * 24)
                        )}{" "}
                        days ago
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
            ))}
          <Pagination
            count={Math.ceil((allBlogsContainer || []).length / itemsPerPage)}
            page={currentPage}
            color="secondary"
            onChange={handlePageChange}
          />
        </Container>
      )}
    </Box>
  );
};

export default ListingBlog;
