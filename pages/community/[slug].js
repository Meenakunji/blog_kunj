import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import style from "../../src/components/feature/Community/UI/style";

export default function CommunityCompoent() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleTabs = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push("/community/2");
    } else if (newValue === 1) {
      router.push("/community/2");
    } else if (newValue === 2) {
      router.push("/community/2");
    }
  };

  useEffect(() => {
    if (router?.query?.tab === "contact_us") {
      setValue(0);
    } else if (router?.query?.tab === "refund") {
      setValue(1);
    } else if (router?.query?.tab === "shipping") {
      setValue(2);
    }
  }, [router?.query?.tab]);

  return (
    <Box sx={style.featuredSongsSection}>
      <Box sx={style.featuredRow}>
        <Box sx={style.navTabContainer}>
          <Tabs
            orientation="vertical"
            initialSelectedIndex={value}
            TabIndicatorProps={{ style: { background: "transparent" } }}
            value={value}
            onChange={handleTabs}
          >
            <Tab label="IT " sx={style.tab} />
            <Tab label="Travel" sx={style.tab} />
            <Tab label="News" sx={style.tab} />
          </Tabs>
        </Box>
        <Box sx={style.tabContentContainer}>
          {router?.query?.tab === "contact_us" && (
            <TabPanel value={value} index={0}>
              first
            </TabPanel>
          )}
          {router?.query?.tab === "refund" && (
            <TabPanel value={value} index={1}>
              second
            </TabPanel>
          )}
          {router?.query?.tab === "shipping" && (
            <TabPanel value={value} index={2}>
              third
            </TabPanel>
          )}
        </Box>
      </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
