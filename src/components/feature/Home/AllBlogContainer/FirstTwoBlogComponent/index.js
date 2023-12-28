import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "../../style";

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
          return (
            <Grid item xs={6} md={6} key={index}>
              <Box sx={style.popularArticlesList}>
                <img
                  src={item?.image || "/images/home/rocket.jpg"}
                  alt="blog image"
                  style={{
                    width: "100%",
                    height: "360px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => handleBlogContentListPage(item)}
                />
                <Box
                  sx={style.popularArticlesHeading}
                  onClick={() => handleBlogContentListPage(item)}
                >
                  <Typography variant="h3">{item?.blogTitle}</Typography>
                  <Typography variant="body1">
                    <ReactMarkdown
                      remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                      rehypePlugins={[rehypeKatex, remark2rehype]}
                      components={{
                        img: ({ node, ...props }) => null,
                      }}
                    >
                      {item?.description?.split(" ").slice(0, 15).join(" ")}
                    </ReactMarkdown>
                  </Typography>
                  <Box sx={style.cardBottomSection}>
                    <Box sx={style.profileDetails}>
                      <Box sx={style.profileSection}>
                        <Avatar>
                          <img
                            src={item?.userData?.[0].profilePic}
                            alt="blogger Profileimage"
                            style={{ width: "40px" }}
                          />
                        </Avatar>
                      </Box>
                      <Box sx={style.profileName}>
                        <Typography variant="h5" sx={{ color: "#fff" }}>
                          {item?.userData?.[0].name}
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
                      {new Date(item?.createdAt).toLocaleDateString("en-US", {
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
