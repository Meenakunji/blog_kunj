import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import style from "../../style";

export const NextThreeBlogComponent = ({
  nextThreeToFiveItems,
  handleBlogContentListPage,
  DoneIcon,
  ReactMarkdown,
  remarkGfm,
  remark2rehype,
  rehypeKatex,
  RemarkMathPlugin,
}) => {
  return (
    <>
      {nextThreeToFiveItems?.length > 0 &&
        nextThreeToFiveItems?.map((item, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={style.popularArticlesList}
                onClick={() => handleBlogContentListPage(item)}
              >
                <img
                  src={item?.image || "/images/home/rocket.jpg"}
                  alt="blog image"
                  style={{
                    width: "100%",
                    height: "500px",
                  }}
                />
                <Box sx={style.popularArticlesHeading}>
                  <Typography variant="h4">{item?.blogTitle}</Typography>
                  <Box sx={style.detailsComment}>
                    <ReactMarkdown
                      remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                      rehypePlugins={[rehypeKatex, remark2rehype]}
                      components={{
                        img: ({ node, ...props }) => null,
                      }}
                    >
                      {item?.description?.split(" ").slice(0, 15).join(" ")}
                    </ReactMarkdown>
                  </Box>
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
                          <Typography variant="h5" sx={{ color: "#798b9b" }}>
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
