import { Box, Container, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSlug } from "../../../../../utils/common";
import { SEOComponent } from "../../../../lib/SEO";
import { setParticularBlogContent } from "../../../../redux/slices/user";
import LoaderComponent from "../../../common/Loader";
import style from "../style";
import { BlogListItems } from "./BlogListItems";

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
      <SEOComponent />
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
              <BlogListItems
                key={index}
                BlogKey={index}
                item={item}
                handleBlogContentListPage={handleBlogContentListPage}
              />
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
