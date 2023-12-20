import { Box, Divider, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TagBanner } from "./Banner";
import style from "../style";
import { TagListComponent } from "./TagList";
import { UserComponent } from "../../../common/BlogUser";
import LoaderComponent from "../../../common/Loader";
import fetcher from "../../../../dataProvider";
import { useMutation } from "react-query";
import { API_BASE_URL } from "../../../../constant/appConstants";
import { useSelector } from "react-redux";

export const BlogTagList = () => {
  const [isLoading, setIsLoading] = useState(true); // Initially set to true for loading
  const [markedblogList, setMarkedblogList] = useState([]);
  const { tagListName } = useSelector((state) => state.user);

  const { mutate: getMarkedBlogList } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/blog-contents`),
    {
      onSuccess: ({ data }) => {
        const result = data?.filter((item) => item?.blogTag === tagListName);
        setMarkedblogList(result);
        setIsLoading(false);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
        setIsLoading(true);
      },
    }
  );

  useEffect(() => {
    getMarkedBlogList();
  }, []);

  return (
    <Box sx={style.ContainerBlogListComp}>
      <TagBanner />
      <Divider style={{ border: "2px #F2F2F2 solid", borderColor: "green" }} />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <TagListComponent markedblogList={markedblogList} />
        )}
      </Box>
      <Typography
        component="h1"
        style={{
          marginBottom: "60px",
          marginTop: "40px",
          fontSize: "30px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Who to follow
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "60px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <UserComponent />
      </Box>
    </Box>
  );
};
