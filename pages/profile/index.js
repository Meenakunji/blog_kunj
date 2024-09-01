import { Container, Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/router";
import * as React from "react";
import { BlogList } from "../../src/components/feature/Profile/BlogList";
import { BookMarkBlogList } from "../../src/components/feature/Profile/BookmarkBlogList";
import UserProfile from "../../src/components/feature/Profile/UserProfile";
import RightSideProfile from "../../src/components/feature/RightSide";

export default function Profile() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push("/profile?tab=home");
    } else if (newValue === 1) {
      router.push("/profile?tab=blog_list");
    } else if (newValue === 2) {
      router.push("/profile?tab=bookmark_blog_list");
    }
  };

  React.useEffect(() => {
    const { tab } = router.query;
    if (tab === "home") {
      setValue(0);
    } else if (tab === "blog_list") {
      setValue(1);
    } else if (tab === "bookmark_blog_list") {
      setValue(2);
    } else {
      // Redirect to the default tab
      router.push("/profile?tab=home");
    }
  }, [router.query]);

  return (
    <Container maxWidth="lg" style={{ marginTop: "90px" }}>
      <Grid container spacing={2} sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
        <Grid item sm={9.5} xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              marginBottom: "20px",
              borderBottom: "1px solid #C3c3c3",
              color: "red",
              ".Mui-selected": {
                color: "#16e70d !important",
              },
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#737373",
              },
            }}
          >
            <Tab label="Home" style={{ color: "#fff" }} />
            <Tab label="List" style={{ color: "#fff" }} />
            <Tab label="About" style={{ color: "#fff" }} />
          </Tabs>

          {router?.query?.tab === "home" && (
            <TabPanel value={value} index={0}>
              <Typography
                variant="h4"
                style={{ textAlign: "left", marginBottom: "20px", color: "#fff", fontSize: "14px" }}
              >
                Blog List Tab Content
              </Typography>
              <Divider style={{ backgroundColor: "#fff", height: "2px" }} />
              <Box>
                <BlogList />
              </Box>
            </TabPanel>
          )}
          {router?.query?.tab === "blog_list" && (
            <TabPanel value={value} index={1}>
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                Bookmark Blog List Tab Content
              </Typography>
              <Divider style={{ backgroundColor: "#fff", height: "2px" }} />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <BookMarkBlogList />
              </Box>
            </TabPanel>
          )}
          {router?.query?.tab === "bookmark_blog_list" && (
            <TabPanel value={value} index={2}>
              <UserProfile />
            </TabPanel>
          )}
        </Grid>
        <Grid item sm={2.5} xs={12}>
          <RightSideProfile />
        </Grid>
      </Grid>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
}
