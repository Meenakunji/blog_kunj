import React, { useEffect, useState } from "react";
import { BlogSearch } from "../src/components/feature/Home/BlogSearch";
import { CaseStudyList } from "../src/components/feature/Home/CaseStudy";
import { PopularBlog } from "../src/components/feature/Home/PopularBlog";
import { PopularBloggerList } from "../src/components/feature/Home/PopularBloggerList";
import { RecommendationBlog } from "../src/components/feature/Home/RecommendationBlog";
import { AllBlogComponent } from "../src/components/feature/Home/AllBlogContainer";
import { Box } from "@mui/material";
import fetcher from "../src/dataProvider";

export default function Home() {
  const [recommendationBlogList, setRecommendationBlogList] = useState([]);
  const [recentBlogList, setRecentBlogList] = useState([]);
  const [popularBloggerList, setPopularBloggerList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popularData, recentBlogData, popularBloggerListData] =
          await Promise.all([
            fetcher.get(`http://localhost:3003/v1/blog/recommendations`),
            fetcher.get(`http://localhost:3003/v1/blog/recent-blogs`),
            fetcher.get(`http://localhost:3003/v1/blog/popular-blogger`),
          ]);

        setRecommendationBlogList(popularData.data);
        setRecentBlogList(recentBlogData.data);
        setPopularBloggerList(popularBloggerListData?.data);
      } catch (error) {
        alert(error?.response?.data?.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Box>
      <BlogSearch />
      <RecommendationBlog recommendationBlogList={recommendationBlogList} />
      <PopularBlog popularBlogList={recommendationBlogList} />
      <PopularBloggerList popularBlogger={popularBloggerList} />
      <CaseStudyList />
      <AllBlogComponent />
    </Box>
  );
}
