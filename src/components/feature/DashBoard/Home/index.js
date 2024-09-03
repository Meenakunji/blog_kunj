import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import { ArtistBlogDetailsGraph } from "./ArtistBlogDetails";
import { DashBoardHomeListSection } from "./ListSection";
import { SiteVistorsComponent } from "./SiteVistors";
import { UserDeviceBased } from "./UserDeviceBased";

export const DashBoardHome = () => {
  const [dashBoardInfo, setDashBoardInfo] = useState();
  // get all dashboard information
  const { mutate: getBlogDashBoard } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/dashboard-info`),
    {
      onSuccess: ({ data }) => {
        setDashBoardInfo(data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  // call API
  useEffect(() => {
    getBlogDashBoard();
  }, []);

  return (
    <Box>
      <DashBoardHomeListSection dashBoardInfo={dashBoardInfo?.headSection} />
      <SiteVistorsComponent />
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
        <Box sx={{ flex: 7 }}>
          <ArtistBlogDetailsGraph topArtistData={dashBoardInfo?.topPostsSection} />
        </Box>
        <Box sx={{ flex: 3 }}>
          <UserDeviceBased />
        </Box>
      </Box>
    </Box>
  );
};
