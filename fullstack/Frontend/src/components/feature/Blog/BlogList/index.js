import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "../../Home/style";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { calculateReadingTime, createSlug } from "../../../../../utils/common";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import fetcher from "../../../../dataProvider";
import { useMutation } from "react-query";

export default function BlogContentListComponent({ data }) {
  const router = useRouter();
  const [markedBlogContent, setMarkedBlogContent] = useState(
    data?.isMarkedBlog
  );

  const handleBlogContentListPage = (item) => {
    const urlSlug = createSlug(item?.user, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  // marked blog
  const { mutate: getMarkedBlogContent } = useMutation(
    (blogId) => fetcher.post(`http://localhost:3003/v1/blog/mark/${blogId}`),
    {
      onSuccess: (resData) => {
        setMarkedBlogContent(resData?.data?.isMarkedBlog);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleMarkedBlog = (item) => {
    getMarkedBlogContent(item?._id);
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
          // { name: "keywords", content: "jupiter"?.join(",") },
        ]}
      />
      {data &&
        data?.map((item, index) => {
          const readingTime = calculateReadingTime(item?.description, 2);
          return (
            <div className="col-md-4 mt-3" key={index}>
              <div className="card p-3">
                <Box sx={style.mediaCard} key={index}>
                  <Box
                    component="img"
                    src={item?.image}
                    style={{
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleBlogContentListPage(item);
                    }}
                  />
                  <Typography variant="h2">{item?.blogTitle}</Typography>
                  <Box sx={style.userdetails}>
                    <Box
                      component="img"
                      src={item?.profilepic}
                      style={{
                        borderRadius: "100px",
                        width: "30px",
                        height: "30px",
                        border: "1px solid #c3c3c3",
                      }}
                    />
                    <Typography variant="p">
                      By {item?.user} -{" "}
                      {new Date(item?.creatAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>
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
                  <Box
                    style={{
                      fontSize: "13px",
                      fontFamily:
                        "sohne, Helvetica Neue, Helvetica, Arial, sans-serif",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="p">
                      <a
                        href={`/blog/${item?.blogTag}`}
                        onClick={() => router.push(`/blog/${item?.blogTag}`)}
                        style={{ cursor: "pointer", textDecoration: "none" }}
                      >
                        {readingTime} min read
                      </a>
                    </Typography>
                    <Box
                      onClick={() => handleMarkedBlog(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {markedBlogContent ? (
                        <BookmarkOutlinedIcon />
                      ) : (
                        <BookmarkAddOutlinedIcon />
                      )}
                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
          );
        })}
    </>
  );
}
