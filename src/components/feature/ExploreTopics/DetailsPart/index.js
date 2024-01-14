import { Box, Link, Typography, Container, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTagListName } from "../../../../redux/slices/user";
import style from "../HeadPart/style";

export const ExploreTopicsDetailsComponent = ({ allTagList }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRedirectionTag = (subItem) => {
    dispatch(setTagListName(subItem));
    router.push(`/tag/${subItem}`);
  };

  // Maintain separate showAll state for each item
  const [showAllMap, setShowAllMap] = useState({});

  const toggleShowAll = (index) => {
    setShowAllMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Container maxWidth="false" sx={{ maxWidth: "1366px" }}>
      <Box sx={style.blogGrid}>
        {allTagList?.map((item, index) => {
          const showAll = showAllMap[index] || false;
          const subTagsToShow = showAll ? item?.subTags : item?.subTags?.slice(0, 5);
          return (
            <Box sx={style.blogTittleAndSubTittle} key={index}>
              <Typography component="h1" onClick={() => handleRedirectionTag(item?.blogTag)}>
                {item?.blogTag}
              </Typography>
              <ul style={{ listStyleType: "none" }}>
                {subTagsToShow?.map((subTagArray, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={`/tag/${subTagArray}`}
                      onClick={() => handleRedirectionTag(subTagArray)}
                    >
                      {subTagArray}
                    </Link>
                  </li>
                ))}
              </ul>
              {item?.subTags?.length > 5 && (
                <ul style={{ listStyleType: "none" }}>
                  <li onClick={() => toggleShowAll(index)} style={style.showMoreBtn}>
                    {showAll ? "Show Less" : "Show More"}
                  </li>
                </ul>
              )}
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};
