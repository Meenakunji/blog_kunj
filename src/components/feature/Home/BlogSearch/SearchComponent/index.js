import SearchIcon from "@mui/icons-material/Search";
import TitleIcon from "@mui/icons-material/Title";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useMemo } from "react";
import style from "../../style";

const MemoizedListItem = React.memo(({ item, handleBlogContentListPage }) => (
  <li onClick={() => handleBlogContentListPage(item)}>
    <TitleIcon /> {item?.blogTitle}
  </li>
));

const SearchComponent = ({
  searchDropdown,
  blogList,
  handleSearchBlogTitle,
  handleBlogContentListPage,
}) => {
  const renderBlogList = useMemo(() => {
    return (
      <Box sx={style.showListInput}>
        <ul>
          <Typography component="p">Topics</Typography>
          <Divider style={style.divider} />
          {blogList?.map((item, index) => (
            <MemoizedListItem
              key={index}
              item={item}
              handleBlogContentListPage={handleBlogContentListPage}
            />
          ))}
        </ul>
      </Box>
    );
  }, [blogList, handleBlogContentListPage]);

  return (
    <Box sx={style.inputSection}>
      <input
        type="text"
        placeholder="Search blog"
        onChange={(e) => handleSearchBlogTitle(e?.target?.value)}
      />
      {/* search popular blog dropdown */}
      {searchDropdown && blogList?.length > 0 && renderBlogList}
      <Button>Search</Button>
      <Box sx={style.SearchIcon}>
        <SearchIcon />
      </Box>
    </Box>
  );
};

SearchComponent.displayName = "SearchComponent";

export { SearchComponent };
