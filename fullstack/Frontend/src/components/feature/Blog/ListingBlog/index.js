import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  RemoveCircleOutlineOutlined as RemoveCircleOutlineOutlinedIcon,
  BookmarkAddOutlined as BookmarkAddOutlinedIcon,
  MoreHorizOutlined as MoreHorizOutlinedIcon,
} from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import style from "../style"; // Make sure you have the correct import for your styles
import { useSelector } from "react-redux";

const ListingBlog = () => {
  const { category, allBlogsContainer, popularBlogs } = useSelector(
    (state) => state.user
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={style.listingBlog}>
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
                    <Typography variant="h3">{item?.blogTitle}</Typography>
                    <Typography variant="body1">{item?.description}</Typography>
                    <Box sx={style.tagListing}>
                      <Button>{item?.blogTag}</Button>
                      <Button>User Experience</Button>
                      <Button>User Interfaces</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box sx={style.postCard}>
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
