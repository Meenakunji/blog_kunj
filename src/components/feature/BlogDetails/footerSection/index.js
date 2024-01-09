import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setTagListName } from "../../../../redux/slices/user";
import style from "../style";
import { useRouter } from "next/router";

export const BlogDetailsFooterSection = ({ particularBlogContent }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Box sx={style.tagList}>
      <Typography variant="h4"> {particularBlogContent?.userData?.[0]?.name}</Typography>
      <Typography variant="body1">
        {new Date(particularBlogContent?.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </Typography>

      {/* Sub BlogTag */}
      <Box sx={style.buttonTag}>
        {particularBlogContent?.blogSubTag?.map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                dispatch(setTagListName(item));
                router.push(`/tag/${item}`);
              }}
            >
              {item}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
