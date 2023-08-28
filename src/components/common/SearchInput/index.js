import SearchBar from "material-ui-search-bar";
import React, { useEffect, useState } from "react";

export const EnhancedSearch = ({
  setPage = null,
  // setRowsPerPage = null,
  // setRows = [],
  originalRows = null,
}) => {
  const [searched, setSearched] = useState("");
  const requestSearch = (searchedVal) => {
    // setSearched(searchedVal);

    console.log(searchedVal);
    // const filteredRows = originalRows?.filter((row) => {
    //   return row?.attributes?.description_asset_tier_mnemonics
    //     ?.toLowerCase()
    //     .includes(searchedVal.toLowerCase());
    // });
    // setRows(filteredRows);
    // setRowsPerPage(filteredRows?.length);
    // setPage(0);
  };

  const cancelSearch = () => {
    setSearched("");
    // setRows([]);
    requestSearch(searched);
  };

  useEffect(() => {
    if (searched == "") {
      // setRows([]);
    }
  }, [searched]);

  return (
    <SearchBar
      value={searched}
      placeholder={"Blog Search"}
      onChange={(searchVal) => requestSearch(searchVal)}
      onCancelSearch={() => cancelSearch()}
    />
  );
};
