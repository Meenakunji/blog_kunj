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

export const RecentPostBlogList = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Box sx={style.popularArticles}>
          <Box sx={style.popularArticlesDetails}>
            <Typography variant="h2">Popular</Typography>
            <Typography variant="body1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonlyand graphic design,
            </Typography>
          </Box>
          <Button>
            View all <ArrowForwardIcon />
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Box sx={style.popularArticlesList}>
              <img
                src="https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style={{ width: "100%", height: "500px" }}
              />
              <Box sx={style.popularArticlesHeading}>
                <Typography variant="h4">Protect</Typography>
                <Typography variant="body1">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text
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
          <Grid item xs={4} md={4}>
            <Box sx={style.popularArticlesList}>
              <img
                src="https://images.pexels.com/photos/17097419/pexels-photo-17097419/free-photo-of-man-in-coat-posing-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style={{ width: "100%", height: "500px" }}
              />
              <Box sx={style.popularArticlesHeading}>
                <Typography variant="h4">Prevent</Typography>
                <Typography variant="body1">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text
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
          <Grid item xs={4} md={4}>
            <Box sx={style.popularArticlesList}>
              <img
                src="https://images.pexels.com/photos/6110294/pexels-photo-6110294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                style={{ width: "100%", height: "500px" }}
              />
              <Box sx={style.popularArticlesHeading}>
                <Typography variant="h4">Monoxide</Typography>
                <Typography variant="body1">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text
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
