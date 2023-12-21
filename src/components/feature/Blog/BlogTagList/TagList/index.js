import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import style from "../../../Home/style";
import { useDispatch } from "react-redux";
import { createSlug } from "../../../../../../utils/common";
import { setParticularBlogContent } from "../../../../../redux/slices/user";
import remarkGfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import RemarkMathPlugin from "remark-math";

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
            <div
              className="col-md-4 mt-3"
              key={index}
              style={{ width: "32.333333%" }}
            >
              <div className="card p-3">
                <Box sx={style.mediaCard} key={index}>
                  <Box sx={style.chip} style={{ backgroundColor: item?.color }}>
                    {item?.blogTag}
                  </Box>

                  <Box
                    component="img"
                    src={item?.image}
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="h2">{item?.blogTitle}</Typography>
                  <Box sx={style.userdetails}>
                    <Box
                      component="img"
                      src={item?.userData?.[0]?.profilePic}
                      style={{
                        borderRadius: "100px",
                        width: "30px",
                        height: "30px",
                        border: "1px solid #c3c3c3",
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
                  <Typography variant="p">
                    <ReactMarkdown
                      remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                      rehypePlugins={[rehypeKatex, remark2rehype]}
                      components={{
                        img: ({ node, ...props }) => null,
                      }}
                    >
                      {item?.description?.split(" ").slice(0, 15).join(" ")}
                    </ReactMarkdown>
                    <a
                      onClick={() => handleBlogContentListPage(item)}
                      style={{ cursor: "pointer", color: "#d80af1" }}
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
