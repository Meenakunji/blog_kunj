import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoaderComponent from "../../src/components/common/Loader";
import { ExploreTopicsDetailsComponent } from "../../src/components/feature/ExploreTopics/DetailsPart";
import ExploreTopicsHeadComponent from "../../src/components/feature/ExploreTopics/HeadPart";
import { API_BASE_URL } from "../../src/constant/appConstants";

export default function ExploreTopics() {
  const [allTagList, setAllTagList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const aboutData = async () => {
      try {
        const resp = await fetch(`${API_BASE_URL}/v1/blog/all-tag`);
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const result = await resp.json();
        setAllTagList(result?.data);
      } catch (err) {
        alert(err?.response?.data?.message);
      }
    };

    aboutData();
  }, []);

  useEffect(() => {
    setIsLoading(allTagList?.length === 0);
  }, [allTagList]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Box style={{ paddingTop: "50px", background: "#fff" }}>
          <ExploreTopicsHeadComponent allTagList={allTagList} />
          <ExploreTopicsDetailsComponent allTagList={allTagList} />
        </Box>
      )}
    </>
  );
}
