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

const PopularBlog = ({ popularBlogList }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePopularBlogListing = () => {
    dispatch(setPopularBlogs(popularBlogList));
    dispatch(setPopularBlogger([]));
    dispatch(setAllBlogsContainer([]));
    dispatch(setCategory("Popular Blog"));
    router.push(`/bloglisting`);
  };

  return (
    <section style={{ paddingTop: "0" }}>
      <Container maxWidth="lg">
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">Popular Blog</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonlyand graphic design, Lorem ipsum is a placeholder text
              commonly
            </Typography>
          </Box>
          <Button onClick={() => handlePopularBlogListing()}>
            View all <ArrowForwardIcon />
          </Button>
        </Box>
        <Grid container spacing={2}>
          {popularBlogList?.length > 0 &&
            popularBlogList?.map((item, index) => {
              return (
                <Grid item xs={6} md={6} key={index}>
                  <Box sx={style.popularArticlesList}>
                    <img
                      src={item?.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "370px",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={style.popularArticlesHeading}>
                      <Typography variant="h3">{item?.blogTitle}</Typography>
                      <Box sx={style.cardBottomSection}>
                        <Box sx={style.profileDetails}>
                          <Box sx={style.profileSection}>
                            <Avatar>
                              <img
                                src={item?.userData?.[0]?.profilePic}
                                alt=""
                                style={{ width: "40px" }}
                              />
                            </Avatar>
                          </Box>
                          <Box sx={style.profileName}>
                            <Typography variant="h5" sx={{ color: "#fff" }}>
                              {item?.userData?.[0]?.name}
                            </Typography>
                            <Box sx={style.dFlex}>
                              <span>
                                <DoneIcon />
                              </span>
                              <Typography
                                variant="h5"
                                sx={{ color: "#798b9b" }}
                              >
                                {" "}
                                Blog writer
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={style.date} style={{ color: "#798b9b" }}>
                          {new Date(item?.creatAt).toLocaleDateString("en-US", {
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

export default PopularBlog;
