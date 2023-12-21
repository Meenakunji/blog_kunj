import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  setAllBlogsContainer,
  setCategory,
  setPopularBlogger,
  setPopularBlogs,
} from "../../../../redux/slices/user";
import style from "../style";
import remarkGfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import RemarkMathPlugin from "remark-math";

const PopularBloggerList = ({ popularBlogger }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePopularBloggerList = () => {
    dispatch(setPopularBlogs([]));
    dispatch(setPopularBlogger([]));
    dispatch(setAllBlogsContainer(popularBlogger?.data));
    dispatch(setCategory("Popular Blogger"));
    router.push(`/bloglisting`);
  };
  const PopularBloggerData = popularBlogger?.slice(0, 3);
  return (
    <section>
      <Container maxWidth="lg">
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">Popular Blogger</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonlyand graphic design,
            </Typography>
          </Box>
          <Button onClick={() => handlePopularBloggerList()}>
            View all <ArrowForwardIcon />
          </Button>
        </Box>
        <Grid container spacing={2}>
          {PopularBloggerData?.length > 0 &&
            PopularBloggerData?.map((item, index) => {
              return (
                <Grid item xs={4} md={4} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <img
                      src={
                        item?.result?.[0]?.image || "/images/home/rocket.jpg"
                      }
                      alt={item?.result?.[0]?.name}
                      style={{ width: "100%", height: "500px" }}
                    />
                    <Box sx={style.popularArticlesHeading}>
                      <Typography variant="h4">
                        {item?.result?.[0]?.blogTitle}
                      </Typography>
                      <Typography variant="body1">
                        <ReactMarkdown
                          remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                          rehypePlugins={[rehypeKatex, remark2rehype]}
                          components={{
                            img: ({ node, ...props }) => null, // This will remove image rendering
                          }}
                        >
                          {item?.result?.[0]?.description
                            ?.split(" ")
                            .slice(0, 15)
                            .join(" ")}
                        </ReactMarkdown>
                      </Typography>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.profilePic}
                                alt={item?.name}
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="h5" sx={{ color: "#fff" }}>
                              {item?.name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography
                                variant="h5"
                                sx={{ color: "#798b9b" }}
                              >
                                Verified writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(
                            item?.result?.[0]?.createdAt
                          ).toLocaleDateString("en-US", {
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
        </Grid>
      </Container>
    </section>
  );
};

export default PopularBloggerList;
