import { Box, Typography } from "@mui/material";
import React from "react";
import style from "../style";
import Image from "next/image";
import { useRouter } from "next/router";
import { setTagListName } from "../../../src/redux/slices/user";
import { useDispatch } from "react-redux";

export const BlogCategoryComponent = ({ aboutAPIResult }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Box sx={style.categoryPart}>
      <Box>
        <Typography component="h3">
          Dive into Captivating Blog Categories
        </Typography>
        <Typography component="p">
          {" "}
          Explore our diverse blog categories – from tech marvels to historical
          tales, nature`&apos;`s wonders to spiritual insights. Find something
          for every interest in our curated selection.
        </Typography>
      </Box>

      <Box sx={style.blogCategory}>
        {aboutAPIResult?.BlogCategory?.flat(1).map((item, id) => {
          return (
            <Box
              sx={style.categoryPart1}
              key={item?._id}
              onClick={() => {
                router.push(`${item?.path}`);
                dispatch(setTagListName(item?.name));
              }}
            >
              <Image
                width={70}
                height={70}
                src={item?.BlogCatImage}
                alt="Tech blog"
              />
              <Box>
                <Typography component="h1">{item?.title}</Typography>
                <Typography component="body1">{item?.subTitle}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
