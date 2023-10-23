import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import style from "../../Home/style";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { calculateReadingTime, createSlug } from "../../../../../utils/common";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import fetcher from "../../../../dataProvider";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setParticularBlogContent } from "../../../../redux/slices/user";

export default function BlogContentListComponent({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [markedBlogContent, setMarkedBlogContent] = useState([]);

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  // marked blog
  const { mutate: getMarkedBlogContent } = useMutation(
    (blogId) => fetcher.post(`http://localhost:3003/v1/blog/mark/${blogId}`),
    {
      onSuccess: (resData) => {
        const marked = resData?.data?.isMarkedBlog;
        setMarkedBlogContent((prevMarkedBlogContent) => {
          if (marked) {
            return [...prevMarkedBlogContent, resData.data];
          } else {
            return prevMarkedBlogContent.filter(
              (blog) => blog._id !== resData.data._id
            );
          }
        });
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleMarkedBlog = (item) => {
    getMarkedBlogContent(item?._id);
  };

  useEffect(() => {
    // Extract the isMarkedBlog values from the initial data and update the markedBlogContent state
    const initialMarkedBlogContent = data.filter((item) => item?.isMarkedBlog);
    setMarkedBlogContent(initialMarkedBlogContent);
  }, [data]);

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
      {data &&
        data.map((item, index) => {
          const readingTime = calculateReadingTime(item?.description, 2);
          const isMarked = markedBlogContent.some(
            (blog) => blog._id === item._id
          );

          return (
            <div className="col-md-3 mt-4" key={index}>
              <div className="cardBox">
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
                  <Box
                    sx={style.userdetails}
                    onClick={() => router.push(`/profile?tab=home`)}
                  >
                    <Box
                      component="img"
                      src={item?.userData?.[0]?.profilePic}
                      style={{
                        borderRadius: "100px",
                        width: "30px",
                        height: "30px",
                        border: "1px solid #c3c3c3",
                        cursor: "pointer",
                      }}
                    />
                    <Typography variant="p" style={{ cursor: "pointer" }}>
                      By {item?.userData?.[0]?.name} -{" "}
                      {new Date(item?.createdAt).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
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
                      {isMarked ? (
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
