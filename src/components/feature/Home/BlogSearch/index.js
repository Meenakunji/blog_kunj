import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createSlug } from "../../../../../utils/common";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import { setParticularBlogContent } from "../../../../redux/slices/user";
import style from "../style";
import { BlogPopularTagComponent } from "./BlogPopularTag";
import { SearchComponent } from "./SearchComponent";

const BlogSearch = ({ popularBlogTag }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogList, setBlogList] = useState([]);
  const [searchDropdown, setSearchDropDown] = useState(false);

  const handleSearchBlogTitle = (data) => {
    setBlogTitle(data.trim());

    if (data.trim()) {
      setSearchDropDown(true);
    } else {
      setSearchDropDown(false);
    }
  };

  // search API
  const getBlogTitleData = async (title) => {
    try {
      const response = await fetcher.get(
        `${API_BASE_URL}/v1/blog/searchbytitle?title=${title}`
      );
      const { data } = response;
      setBlogList(data);
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  // handle search debouncing part
  useEffect(() => {
    if (blogTitle === "") {
      // If the search term is empty, don't make the API call
      setBlogList([]);
      return;
    }

    let timerOut = setTimeout(() => {
      getBlogTitleData(blogTitle);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [blogTitle]);

  return (
    <Box sx={style.headSection}>
      <img src="/images/home/commentBg.jpg" alt="" style={{ width: "100%" }} />
      {/* search popular blog based on title */}
      <Box sx={style.ourNewRoom}>
        <Typography variant="h6">Our BlogRoom</Typography>

        <SearchComponent
          searchDropdown={searchDropdown}
          blogList={blogList}
          handleSearchBlogTitle={handleSearchBlogTitle}
          handleBlogContentListPage={handleBlogContentListPage}
        />
        {/* show popular blog tag */}

        <BlogPopularTagComponent popularBlogTag={popularBlogTag} />
      </Box>
    </Box>
  );
};

export default BlogSearch;
