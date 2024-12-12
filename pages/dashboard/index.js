import ArchiveIcon from "@mui/icons-material/Archive";
import PostIcon from "@mui/icons-material/Article";
import CategoriesIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { Container, Divider, Grid, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/router";
import * as React from "react";
import { AllCategoryList } from "../../src/components/feature/DashBoard/AllCategoryList";
import { BlogAllPost } from "../../src/components/feature/DashBoard/BlogAllPost";
import { DashBoardHome } from "../../src/components/feature/DashBoard/Home";
import ArchiveSection from "../../src/components/feature/DashBoard/Home/ArchiveSection";
import BlogDashboardSettings from "../../src/components/feature/DashBoard/Home/BlogDashboardSettings";

export default function DashBoard() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push("/dashboard?tab=home");
    } else if (newValue === 1) {
      router.push("/dashboard?tab=post");
    } else if (newValue === 2) {
      router.push("/dashboard?tab=categories");
    } else if (newValue === 3) {
      router.push("/dashboard?tab=archive");
    } else if (newValue === 4) {
      router.push("/dashboard?tab=settings");
    } else {
      // Redirect to the default tab
      router.push("/dashboard?tab=home");
    }
  };

  React.useEffect(() => {
    const { tab } = router.query;
    if (tab === "home") {
      setValue(0);
    } else if (tab === "post") {
      setValue(1);
    } else if (tab === "categories") {
      setValue(2);
    } else if (tab === "archive") {
      setValue(3);
    } else if (tab === "settings") {
      setValue(4);
    } else {
      // Redirect to the default tab
      router.push("/dashboard?tab=home");
    }
  }, [router.query]);

  return (
    <Container
      sx={{
        marginTop: "90px",
        padding: 0,
        maxWidth: "none",
        "@media (min-width: 1200px)": {
          maxWidth: "none",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={2} xs={12} sx={{ padding: "20px" }}>
          <Typography variant="h6" style={{ color: "#fff", marginBottom: "20px" }}>
            Menu
          </Typography>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              alignItems: "center",
              ".MuiTab-root": {
                alignItems: "flex-start",
                justifyContent: "flex-start",
                textAlign: "left",
                paddingLeft: "10px",
                alignItems: "center",
                color: "#fff",
              },
              ".Mui-selected": {
                backgroundColor: "#fff !important",
                color: "#000 !important",
                alignItems: "center",
              },
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#fff",
                width: "4px",
              },
            }}
          >
            <Tab icon={<HomeIcon />} iconPosition="start" label="Home" />
            <Tab icon={<PostIcon />} iconPosition="start" label="Post" />
            <Tab icon={<CategoriesIcon />} iconPosition="start" label="Categories" />
            <Tab icon={<ArchiveIcon />} iconPosition="start" label="Archive" />
            <Tab icon={<SettingsIcon />} iconPosition="start" label="Settings" />
          </Tabs>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#fff" }} />

        <Grid item sm={9.5} xs={12}>
          {router?.query?.tab === "home" && (
            <TabPanel value={value} index={0}>
              <DashBoardHome />
            </TabPanel>
          )}
          {router?.query?.tab === "post" && (
            <TabPanel value={value} index={1}>
              <BlogAllPost />
            </TabPanel>
          )}
          {router?.query?.tab === "categories" && (
            <TabPanel value={value} index={2}>
              <AllCategoryList />
            </TabPanel>
          )}
          {router?.query?.tab === "archive" && (
            <TabPanel value={value} index={3}>
              <ArchiveSection />
            </TabPanel>
          )}
          {router?.query?.tab === "settings" && (
            <TabPanel value={value} index={4}>
              <BlogDashboardSettings />
            </TabPanel>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
}
