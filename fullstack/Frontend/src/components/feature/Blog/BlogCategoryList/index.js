import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "../../Home/style";
import { NextSeo } from "next-seo";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import fetcher from "../../../../dataProvider";
import { useDispatch } from "react-redux";
import ImageSlider from "../../../common/ImageSlider";
import { setBlogDetails } from "../../../../redux/slices/user";

export const BlogCategoryList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [homePageBlogContents, setHomePageBlogContents] = useState([]);

  // get all cms details based on category
  const { mutate: getAllcategoryDetails } = useMutation(
    () => fetcher.get(`http://localhost:3003/v1/blog/list`),
    {
      onSuccess: (resData) => {
        setHomePageBlogContents(resData?.data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    getAllcategoryDetails();
  }, []);

  const handleBlogContentListPage = (item) => {
    dispatch(setBlogDetails(item));
    router.push(`/blog/${item?.blogTag}`);
  };

  return (
    <>
      <NextSeo
        title="Blog List"
        description={
          "Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
            0,
            150
          ) + "..."
        }
        canonical={`https://jupiterblogger.com/`}
        openGraph={{
          url: `https://jupiterblogger.com/`,
          title:
            "Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures",
          description:
            "Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
              0,
              150
            ) + "...",
          images: [
            {
              url: `https://jupiterblogger.com/`,
              alt: "Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures",
            },
          ],
          type: "website",
          siteName: "jupiterblogger.com/",
        }}
        additionalMetaTags={[
          {
            property: "twitter.title",
            content:
              "Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures",
          },
          {
            property: "twitter.description",
            content:
              "Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space.".substring(
                0,
                150
              ) + "...",
          },
          { property: "twitter.image", content: "https://jupiterblogger.com/" },
        ]}
      />
      {homePageBlogContents &&
        homePageBlogContents?.map((item, index) => {
          return (
            <div
              className="col-md-4 mt-3"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card p-3"
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

                  <Typography variant="p">
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
              </div>
            </div>
          );
        })}
    </>
  );
};
