import { Box, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
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
              {item?.subTags?.map((subTagArray, subIndex) => {
                return (
                  <ul key={subIndex} style={{ listStyleType: "none" }}>
                    <li>
                      <Link
                        href={`/tag/${subTagArray}`}
                        onClick={() => handleRedirectionTag(subTagArray)}
                      >
                        {subTagArray}
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
