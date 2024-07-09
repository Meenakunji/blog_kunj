import { Box, Divider } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import LoaderComponent from "../../../common/Loader";
import style from "../style";
import { TagBanner } from "./Banner";
import { TagListComponent } from "./TagList";
import ExploreTopicsHeadComponent from "../../ExploreTopics/HeadPart";
import { useRouter } from "next/router";

const BlogTagList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [markedblogList, setMarkedblogList] = useState([]);
  const { tagListName } = useSelector((state) => state.user);
  const router = useRouter();

  const [allTagList, setAllTagList] = useState([]);

  const fetchAllTags = async () => {
    try {
      const resp = await fetch(`${API_BASE_URL}/v1/blog/all-tag`);
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      const result = await resp.json();
      setAllTagList(result?.data);
      setIsLoading(false);
    } catch (err) {
      alert(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchAllTags();
  }, [router?.query?.slug]);
  const memoizedAllTags = useMemo(() => allTagList, [allTagList]);

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
  }, [router?.query?.slug]);

  return (
    <Box sx={style.ContainerBlogListComp}>
      {/* header slider part recommended topic */}
      <Box style={{ paddingTop: "20px", marginBottom: "40px", background: "#fff" }}>
        <ExploreTopicsHeadComponent allTagList={memoizedAllTags} isSearchShow={false} />
      </Box>
      <TagBanner markedblogList={markedblogList} />
      <Divider sx={style.divderCss} />
      <Box sx={style.tagListContainer}>
        {isLoading ? <LoaderComponent /> : <TagListComponent markedblogList={markedblogList} />}
      </Box>
    </Box>
  );
};

export default BlogTagList;
