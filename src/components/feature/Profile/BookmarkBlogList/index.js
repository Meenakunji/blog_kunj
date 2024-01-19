import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { createSlug } from "../../../../../utils/common";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import { setParticularBlogContent } from "../../../../redux/slices/user";
import style from "../../Home/style";

export const BookMarkBlogList = () => {
  const [markedblogList, setMarkedblogList] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  // create New ArtistEntery
  const { mutate: getMarkedBlogList } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/bookmark-blog-list`),
    {
      onSuccess: ({ data }) => {
        setMarkedblogList(data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );
  useEffect(() => {
    getMarkedBlogList();
  }, []);

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  return (
    <>
      {markedblogList &&
        markedblogList.map((item, index) => {
          return (
            <Box className="col-md-4 mt-3" key={index} sx={style.bookMarkedBlogList}>
              <div className="card p-3">
                <Box
                  sx={style.mediaCard}
                  key={index}
                  onClick={() => handleBlogContentListPage(item)}
                >
                  <Box
                    component="img"
                    src={item?.image}
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="h2">{item?.blogTitle}</Typography>
                  <Box sx={style.userdetails} onClick={() => router.push(`/profile?tab=home`)}>
                    <Box
                      component="img"
                      src={item?.userData?.profilePic}
                      style={{
                        borderRadius: "100px",
                        width: "30px",
                        height: "30px",
                        border: "1px solid #c3c3c3",
                      }}
                    />
                    <Typography variant="p">
                      By {item?.userData?.name} -{" "}
                      {new Date(item?.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>

                  <Box sx={style.detailsComment} onClick={() => handleBlogContentListPage(item)}>
                    <ReactMarkdown
                      remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                      rehypePlugins={[rehypeKatex, remark2rehype]}
                      components={{
                        img: ({ node, ...props }) => null,
                        h2: ({ node, ...props }) => null,
                      }}
                    >
                      {item?.description?.split(" ").slice(0, 35).join(" ")}
                    </ReactMarkdown>
                    <a style={{ cursor: "pointer", color: "#d80af1" }}>...Read More</a>
                  </Box>
                </Box>
              </div>
            </Box>
          );
        })}
    </>
  );
};
