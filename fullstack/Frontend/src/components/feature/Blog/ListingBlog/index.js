import {
  BookmarkAddOutlined as BookmarkAddOutlinedIcon,
  MoreHorizOutlined as MoreHorizOutlinedIcon,
  RemoveCircleOutlineOutlined as RemoveCircleOutlineOutlinedIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSlug } from "../../../../../utils/common";
import { setParticularBlogContent } from "../../../../redux/slices/user";
import style from "../style"; // Make sure you have the correct import for your styles

const ListingBlog = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { category, allBlogsContainer, popularBlogs } = useSelector(
    (state) => state.user
  );
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

  return (
    <Box sx={style.listingBlog}>
      <NextSeo
        title="Blog List"
        description={
          "Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
            0,
            150
          ) + "..."
        }
        canonical={`https://jupiterblogger.com/`}
        openGraph={{
          url: `https://jupiterblogger.com/`,
          title:
            "Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures",
          description:
            "Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
              0,
              150
            ) + "...",
          images: [
            {
              url: `https://jupiterblogger.com/`,
              alt: "Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures",
            },
          ],
          type: "website",
          siteName: "jupiterblogger.com/",
        }}
        additionalMetaTags={[
          {
            property: "twitter.title",
            content:
              "Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures",
          },
          {
            property: "twitter.description",
            content:
              "Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
                0,
                150
              ) + "...",
          },
          { property: "twitter.image", content: "https://jupiterblogger.com/" },
        ]}
      />
      <Box sx={style.listingBlogHeading}>
        <Typography variant="h2">{category}</Typography>
      </Box>
      <Container maxWidth="md">
        {allBlogsContainer
          ?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item, index) => (
            <Box sx={style.listingSection} key={index}>
              <Grid container spacing={3}>
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
                      {item?.description?.split(" ").slice(0, 30).join(" ")}
                      <a
                        onClick={(event) => {
                          event.stopPropagation(); // Prevent propagation to the outer click handler
                          handleBlogContentListPage(item);
                        }}
                        style={{ cursor: "pointer", color: "green" }}
                      >
                        ...Read More
                      </a>
                    </Typography>
                    <Box sx={style.tagListing}>
                      <Button>{item?.blogTag}</Button>
                      <Button>User Experience</Button>
                      <Button>User Interfaces</Button>
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
                    <img src={item?.image} style={{ width: "100%" }} alt="" />
                  </Box>
                </Grid>
              </Grid>
              <Box sx={style.listDetails}>
                <Box sx={style.list}>
                  <List>
                    <ListItem style={{ color: "#fff" }}>2 days ago</ListItem>
                    <ListItem style={{ color: "#fff" }}>
                      13 mins to read
                    </ListItem>
                    <ListItem style={{ color: "#fff" }}>
                      Based on your interest
                    </ListItem>
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
    </Box>
  );
};

export default ListingBlog;
