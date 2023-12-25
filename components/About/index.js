import { Box } from "@mui/material";
import React from "react";
import { BlogCategoryComponent } from "./Category";
import { AboutDetailsSection } from "./DetailsSection";
import { AboutMainSection } from "./HeadSection";
import { TeamDetailsComponent } from "./TeamDetails";

export const AboutComponent = ({ aboutAPIResult }) => {
  return (
    <Box style={{ height: "100%" }}>
      <AboutMainSection aboutAPIResult={aboutAPIResult?.[0]} />

      <AboutDetailsSection aboutAPIResult={aboutAPIResult?.[0]} />

      {/* about page blogCategory Section */}
      <BlogCategoryComponent aboutAPIResult={aboutAPIResult?.[0]} />

      <TeamDetailsComponent aboutAPIResult={aboutAPIResult} />
      {/* <Box>
        {AboutData?.flat(1).map((item, index) => {
          return (
            <Box sx={style.commentsection} key={index}>
              <Typography component="h3">{item?.title}</Typography>
              <Typography component="p">{item?.subTitle}</Typography>

              <Image
                src={item?.image}
                alt="Breakfast"
                sx={style.icon}
                width={100}
                height={100}
              />
            </Box>
          );
        })}
      </Box> */}
    </Box>
  );
};
