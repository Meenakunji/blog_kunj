import { Box, Link, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/material";
import style from "../HeadPart/style";
import { useRouter } from "next/router";
import { setTagListName } from "../../../../redux/slices/user";
import { useDispatch } from "react-redux";

export const ExploreTopicsDetailsComponent = ({ allTagList }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRedirectionTag = (subItem) => {
    dispatch(setTagListName(subItem));
    router.push(`/tag/${subItem}`);
  };

  return (
    <Box sx={style.exploreTopicsDetailsConatiner}>
      <Box sx={style.tagRecommandConatiner}>
        {allTagList?.map((item, index) => {
          return (
            <Box key={index}>
              <Typography
                component="h1"
                onClick={() => handleRedirectionTag(item?.blogTag)}
              >
                {item?.blogTag}
              </Typography>
              {item?.subTags?.map((subTagArray, subIndex) => (
                <ul key={subIndex} style={{ listStyleType: "none" }}>
                  {subTagArray.map((subItem, nestedIndex) => (
                    <li key={nestedIndex}>
                      <Link
                        href={`/tag/${subItem}`}
                        onClick={() => handleRedirectionTag(subItem)}
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
