import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import LoaderComponent from "../../../common/Loader";
import style from "../style";
import { TagBanner } from "./Banner";
import { TagListComponent } from "./TagList";

const BlogTagList = () => {
  const [isLoading, setIsLoading] = useState(true);
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
      <TagBanner markedblogList={markedblogList} />
      <Divider sx={style.divderCss} />
      <Box sx={style.tagListContainer}>
        {isLoading ? <LoaderComponent /> : <TagListComponent markedblogList={markedblogList} />}
      </Box>
      {/* <Typography
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
      </Typography> */}
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default BlogTagList;
