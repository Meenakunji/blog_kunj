import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSlug } from "../../../../../utils/common";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import { setParticularBlogContent } from "../../../../redux/slices/user";
import style from "../style";
import { BlogPopularTagComponent } from "./BlogPopularTag";
import { SearchComponent } from "./SearchComponent";
import Image from "next/image";

const BlogSearch = ({ popularBlogTag }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [searchDropdown, setSearchDropDown] = useState(false);

  const handleSearchBlogTitle = useCallback((data) => {
    setBlogTitle(data.trim());
    setSearchDropDown(data.trim() !== "");
  }, []);

  const getBlogTitleData = useCallback(async (title) => {
    try {
      const response = await fetcher.get(`${API_BASE_URL}/v1/blog/searchbytitle?title=${title}`);
      const { data } = response;
      setBlogList(data);
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  }, []);

  const handleBlogContentListPage = useCallback(
    (item) => {
      dispatch(setParticularBlogContent(item));
      const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
      router.push(`/${urlSlug}`);
    },
    [dispatch, router]
  );

  useEffect(() => {
    if (blogTitle === "") {
      setBlogList([]);
      return;
    }

    let timerOut = setTimeout(() => {
      getBlogTitleData(blogTitle);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [blogTitle, getBlogTitleData]);

  return (
    <Box sx={style.headSection}>
      <Image
        src="https://i.postimg.cc/h41XhrFF/comment-Bg.webp"
        alt="Baxkground image"
        width={1200}
        height={370}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "fill",
        }}
      />
      <Box sx={style.ourNewRoom}>
        <Typography variant="h6">Our BlogRoom</Typography>

        <SearchComponent
          searchDropdown={searchDropdown}
          blogList={blogList}
          handleSearchBlogTitle={handleSearchBlogTitle}
          handleBlogContentListPage={handleBlogContentListPage}
        />

        <BlogPopularTagComponent popularBlogTag={popularBlogTag} />
      </Box>
    </Box>
  );
};

export default BlogSearch;
