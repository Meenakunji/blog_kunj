import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import { BlogList } from "../../src/components/feature/Profile/BlogList";
import { BookMarkBlogList } from "../../src/components/feature/Profile/BookmarkBlogList";
import UserProfile from "../../src/components/feature/Profile/UserProfile";
import UserBlog from "../../src/components/feature/Profile/UserBlog";
import { Divider, Typography } from "@mui/material";

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

  // Sample user details
  const userDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    <div className="container">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          marginBottom: "20px",
          bgcolor: "background.paper",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Tab label="Home" sx={{ marginLeft: "20px" }} />
        <Tab label="Blog List" sx={{ marginLeft: "20px" }} />
        <Tab label="Bookmark Blog List" sx={{ marginLeft: "20px" }} />
      </Tabs>

      {router?.query?.tab === "home" && (
        <TabPanel value={value} index={0}>
          <div className="row">
            <div className="col-md-9 mx-auto">
              <Box
                style={{
                  borderColor: "#1e1e1e",
                  backgroundColor: "#282828",
                  padding: "30px",
                  overflow: "hidden",
                }}
              >
                <UserProfile />
                <UserBlog />
              </Box>
            </div>
          </div>
        </TabPanel>
      )}
      {router?.query?.tab === "blog_list" && (
        <TabPanel value={value} index={1}>
          <Typography
            variant="h4"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Blog List Tab Content
          </Typography>
          <Divider style={{ backgroundColor: "#fff", height: "2px" }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <BlogList />
          </Box>
        </TabPanel>
      )}
      {router?.query?.tab === "bookmark_blog_list" && (
        <TabPanel value={value} index={2}>
          <Typography
            variant="h4"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Bookmark Blog List Tab Content
          </Typography>
          <Divider style={{ backgroundColor: "#fff", height: "2px" }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <BookMarkBlogList />
          </Box>
        </TabPanel>
      )}
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
}
