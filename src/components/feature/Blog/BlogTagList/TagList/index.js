import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { createSlug } from "../../../../../../utils/common";
import { setParticularBlogContent } from "../../../../../redux/slices/user";
import style from "../../../Home/style";

export const TagListComponent = ({ markedblogList }) => {
  const router = useRouter();
  const dispatch = useDispatch();

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
            <Box key={index} sx={style.tagListBlogBox}>
              <Box className="card p-3">
                <Box sx={style.mediaCard} key={index}>
                  <Image
                    src={item?.image}
                    alt="Blog Pic icon"
                    width={300}
                    height={200}
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    onClick={() => handleBlogContentListPage(item)}
                  />
                  <Typography variant="h2">{item?.blogTitle}</Typography>
                  <Box sx={style.userdetails}>
                    <Image
                      src={item?.userData?.[0]?.profilePic}
                      alt="Profile Pic icon"
                      width={30}
                      height={30}
                      style={{
                        borderRadius: "100px",
                        width: "30px",
                        height: "30px",
                        border: "1px solid #c3c3c3",
                        objectFit: "cover",
                      }}
                    />
                    <Typography variant="p">
                      By {item?.userData?.[0]?.name} -{" "}
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
                      }}
                    >
                      {item?.description?.split(" ").slice(0, 15).join(" ")}
                    </ReactMarkdown>
                    <a style={{ cursor: "pointer", color: "#d80af1" }}>...Read More</a>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
    </>
  );
};
