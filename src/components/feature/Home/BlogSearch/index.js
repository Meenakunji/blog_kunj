import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "../style";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  setParticularBlogContent,
  setTagListName,
} from "../../../../redux/slices/user";
import fetcher from "../../../../dataProvider";
import TitleIcon from "@mui/icons-material/Title";
import { createSlug } from "../../../../../utils/common";

export const BlogSearch = ({ popularBlogTag }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [blogTitle, setBlogTitle] = useState(" ");
  const [blogList, setBlogList] = useState([]);
  const [searchDropdown, setSearchDropDown] = useState(false);

  const handleSearchBlogTitle = (data) => {
    setBlogTitle(data);

    if (data) {
      setSearchDropDown(true);
    } else {
      setSearchDropDown(false);
    }
  };

  // search API
  const getBlogTtileData = async (blogTitle) => {
    try {
      const response = await fetcher.get(
        `http://localhost:3003/v1/blog/searchbytitle?title=${blogTitle}`
      );
      const { data } = response;
      setBlogList(data);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  const handleBlogContentListPage = (item) => {
    console.log("Print result=====>>>>>", item);
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getBlogTtileData(blogTitle);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [blogTitle, getBlogTtileData]);

  return (
    <Box sx={style.headSection}>
      <img
        src="https://images.pexels.com/photos/8459515/pexels-photo-8459515.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2000"
        alt=""
        style={{ width: "100%" }}
      />
      {/* search popular blog based on title */}
      <Box sx={style.ourNewRoom}>
        <Typography variant="h6">Our Newsroom</Typography>
        <Box sx={style.inputSection}>
          <input
            type="text"
            placeholder="Search blog"
            onChange={(e) => handleSearchBlogTitle(e?.target?.value)}
          />
          {/* search popular blog dropdown */}
          {searchDropdown && blogList?.length > 0 && (
            <Box sx={style.showListInput}>
              <ul>
                <Typography component="p">Topics</Typography>
                <Divider style={{ border: "1px solid #000" }} />
                {blogList?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleBlogContentListPage(item)}
                    >
                      <TitleIcon /> {item?.blogTitle}
                    </li>
                  );
                })}
              </ul>
            </Box>
          )}
          <Button>Search</Button>
          <Box sx={style.SearchIcon}>
            <SearchIcon />
          </Box>
        </Box>
        {/* show popular blog tag */}
        <Box sx={style.popularTag}>
          <Typography variant="body1">Popular Tag:</Typography>
          {popularBlogTag?.map((item, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  router.push(`/tag/${item?._id}`);
                  dispatch(setTagListName(item?._id));
                }}
              >
                {item?._id}
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
