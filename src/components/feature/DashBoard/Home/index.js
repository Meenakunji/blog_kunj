import { Box } from "@mui/material";
import React from "react";
import { DashBoardHomeListSection } from "./ListSection";
import { SiteVistorsComponent } from "./SiteVistors";
import { ArtistBlogDetailsGraph } from "./ArtistBlogDetails";
import { UserDeviceBased } from "./UserDeviceBased";

export const DashBoardHome = () => {
  return (
    <Box>
      <DashBoardHomeListSection />
      <SiteVistorsComponent />
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
        <Box sx={{ flex: 7 }}>
          <ArtistBlogDetailsGraph />
        </Box>
        <Box sx={{ flex: 3 }}>
          <UserDeviceBased />
        </Box>
      </Box>
    </Box>
  );
};
