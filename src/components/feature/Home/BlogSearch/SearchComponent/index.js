import SearchIcon from "@mui/icons-material/Search";
import TitleIcon from "@mui/icons-material/Title";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import style from "../../style";

export const SearchComponent = ({
  searchDropdown,
  blogList,
  handleSearchBlogTitle,
  handleBlogContentListPage,
}) => {
  return (
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
                <li key={index} onClick={() => handleBlogContentListPage(item)}>
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
  );
};
