import { Box, Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { setBlogDetails } from "../../../../redux/slices/user";
import ImageSlider from "../../../common/ImageSlider";
import style from "../../Home/style";

export const BlogCategoryList = ({ blogListData }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleBlogContentListPage = (item) => {
    dispatch(setBlogDetails(item));
    router.push(`/blog/${item?.blogTag}`);
  };

  return (
    <>
      <NextSeo
        title="Blog List"
        description={
          "Welcome to Sahitya, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
            0,
            150
          ) + "..."
        }
        canonical={`https://jupiterblogger.com/`}
        openGraph={{
          url: `https://jupiterblogger.com/`,
          title: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
          description:
            "Welcome to Sahitya, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
              0,
              150
            ) + "...",
          images: [
            {
              url: `https://jupiterblogger.com/`,
              alt: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
            },
          ],
          type: "website",
          siteName: "jupiterblogger.com/",
        }}
        additionalMetaTags={[
          {
            property: "twitter.title",
            content: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
          },
          {
            property: "twitter.description",
            content:
              "Welcome to Sahitya, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
                0,
                150
              ) + "...",
          },
          { property: "twitter.image", content: "https://jupiterblogger.com/" },
        ]}
      />
      {blogListData &&
        blogListData?.map((item, index) => {
          return (
            <div
              className="col-md-3 mt-4"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <Box
                sx={style.cardBox}
                onClick={() => {
                  handleBlogContentListPage(item);
                }}
              >
                <Box sx={style.mediaCard} key={index}>
                  <Box sx={style.chip} style={{ backgroundColor: item?.color }}>
                    {item?.blogTag}
                  </Box>

                  <ImageSlider images={item?.image} thumbnails={item?.image} />
                  <Typography variant="h2">{item?.blogTitle}</Typography>

                  <Typography variant="body1">
                    {item?.description?.split(" ").slice(0, 30).join(" ")}
                    <a
                      href={`/blog/${item?.blogTag}`}
                      onClick={() => router.push(`/blog/${item?.blogTag}`)}
                      style={{ cursor: "pointer" }}
                    >
                      ...Read More
                    </a>
                  </Typography>
                </Box>
              </Box>
            </div>
          );
        })}
    </>
  );
};
