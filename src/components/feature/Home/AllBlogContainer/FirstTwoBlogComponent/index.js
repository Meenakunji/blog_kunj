import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "../../style";
import Image from "next/image";

export const FirstTwoBlogComponent = ({
  handleBlogContentListPage,
  firstTwoItems,
  DoneIcon,
  ReactMarkdown,
  remarkGfm,
  remark2rehype,
  rehypeKatex,
  RemarkMathPlugin,
}) => {
  return (
    <>
      {firstTwoItems?.length > 0 &&
        firstTwoItems?.map((item, index) => {
          const { blogTitle, description, createdAt, userData, image } = item;
          const profilePic = userData?.[0]?.profilePic;
          const userName = userData?.[0]?.name;

          return (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={style.popularArticlesList} onClick={() => handleBlogContentListPage(item)}>
                {/* <img
                  src={image || "/images/home/rocket.jpg"}
                  alt="blog image"
                  style={{
                    width: "100%",
                    height: "360px",
                    objectFit: "cover",
                  }}
                /> */}
                <Image
                  alt="blog image"
                  src={image || "/images/home/rocket.jpg"}
                  width={500}
                  height={370}
                  style={{
                    width: "100%",
                    height: "360px",
                    objectFit: "fill",
                  }}
                  priority
                />

                <Box
                  sx={style.popularArticlesHeading}
                  onClick={() => handleBlogContentListPage(item)}
                >
                  <Typography variant="h3">{blogTitle}</Typography>
                  <Box sx={style.detailsComment}>
                    <ReactMarkdown
                      remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                      rehypePlugins={[rehypeKatex, remark2rehype]}
                      components={{
                        img: ({ node, ...props }) => null,
                      }}
                    >
                      {description?.split(" ").slice(0, 15).join(" ")}
                    </ReactMarkdown>
                  </Box>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src={profilePic}
                            alt="blogger Profileimage"
                            style={{ width: "40px" }}
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="h5" sx={{ color: "#fff" }}>
                          {userName}
                        </Typography>
                        <Box sx={style.dFlex}>
                          <span>
                            <DoneIcon />
                          </span>
                          <Typography variant="body1" sx={{ color: "#798b9b" }}>
                            {" "}
                            Verified writer
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={style.date} style={{ color: "#798b9b" }}>
                      {new Date(createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                      })}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
    </>
  );
};
