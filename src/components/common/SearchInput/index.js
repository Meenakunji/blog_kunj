import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";

export const EnhancedSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (searchVal) => {
    // Handle the search value
    console.log("Search value:", searchVal);
    setSearchValue(searchVal);
  };

  const handleCancelSearch = () => {
    console.log("Search canceled");
    setSearchValue("");
  };

  return (
    <SearchBar
      value={searchValue}
      placeholder={"Search for chats ......"}
      style={{ borderRadius: "15px" }}
      onChange={(searchVal) => handleSearch(searchVal)}
      onCancelSearch={() => handleCancelSearch()}
    />
  );
};
