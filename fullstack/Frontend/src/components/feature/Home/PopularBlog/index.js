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
import style from "../style";

export const PopularBlog = () => {
  return (
    <section style={{ paddingTop: "0" }}>
      <Container maxWidth="lg">
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">Popular Articles</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonlyand graphic design, Lorem ipsum is a placeholder text
              commonly
            </Typography>
          </Box>
          <Button>
            View all <ArrowForwardIcon />
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Box sx={style.popularArticlesList}>
              <img
                src="https://images.pexels.com/photos/12314825/pexels-photo-12314825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style={{ width: "100%", height: "370px", objectFit: "cover" }}
              />
              <Box sx={style.popularArticlesHeading}>
                <Typography variant="h3">
                  How to prevent and protect your family from Carbon monoxide
                </Typography>
                <Box sx={style.cardBottomSection}>
                  <Box sx={style.profileDetails}>
                    <Box sx={style.profileSection}>
                      <Avatar>
                        <img
                          src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                          alt=""
                        />
                      </Avatar>
                    </Box>
                    <Box sx={style.profileName}>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        Farhan
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
                    2 May
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box sx={style.popularArticlesList}>
              <img
                src="https://images.pexels.com/photos/13767060/pexels-photo-13767060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style={{ width: "100%", height: "370px", objectFit: "cover" }}
              />
              <Box sx={style.popularArticlesHeading}>
                <Typography variant="h3">
                  How to prevent and protect your family from Carbon monoxide
                </Typography>
                <Box sx={style.cardBottomSection}>
                  <Box sx={style.profileDetails}>
                    <Box sx={style.profileSection}>
                      <Avatar>
                        <img
                          src="https://images.pexels.com/users/avatars/48514757/eyup-beyhan-457.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1"
                          alt=""
                        />
                      </Avatar>
                    </Box>
                    <Box sx={style.profileName}>
                      <Typography variant="body1" sx={{ color: "#fff" }}>
                        Farhan
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
                    2 May
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
