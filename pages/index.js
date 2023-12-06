import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SEOComponents from "../src/components/common/SEO";
import { AllBlogComponent } from "../src/components/feature/Home/AllBlogContainer";
import { BlogSearch } from "../src/components/feature/Home/BlogSearch";
import { CaseStudyList } from "../src/components/feature/Home/CaseStudy";
import { PopularBlog } from "../src/components/feature/Home/PopularBlog";
import { PopularBloggerList } from "../src/components/feature/Home/PopularBloggerList";
import { RecommendationBlog } from "../src/components/feature/Home/RecommendationBlog";
import fetcher from "../src/dataProvider";
import { API_BASE_URL } from "../src/constant/appConstants";

export default function Home() {
  const [recommendationBlogList, setRecommendationBlogList] = useState([]);
  const [recentBlogList, setRecentBlogList] = useState([]);
  const [popularBloggerList, setPopularBloggerList] = useState([]);
  const [allBlogList, setAllBlogList] = useState([]);
  const [popularBlogTag, setPopularBlogTag] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          popularData,
          recentBlogData,
          popularBloggerListData,
          allBlogListData,
          popularBlogTags,
        ] = await Promise.all([
          fetcher.get(`${API_BASE_URL}/v1/blog/recommendations`),
          fetcher.get(`${API_BASE_URL}/v1/blog/recent-blogs`),
          fetcher.get(`${API_BASE_URL}/v1/blog/popular-blogger`),
          fetcher.get(`${API_BASE_URL}/v1/blog/blog-contents`),
          fetcher.get(`${API_BASE_URL}/v1/blog/popular-tags`),
        ]);

        setRecommendationBlogList(popularData.data);
        setRecentBlogList(recentBlogData.data);
        setPopularBloggerList(popularBloggerListData?.data);
        setAllBlogList(allBlogListData?.data);
        setPopularBlogTag(popularBlogTags);
      } catch (error) {
        alert(error?.response?.data?.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Box>
      <SEOComponents
        title={"Blog WebSite Home Page"}
        description={"this is Sahitya website home page"}
        canonical="https://www.yourwebsite.com/about"
        // data={data?.data?.attributes?.seo}
      />
      <BlogSearch popularBlogTag={popularBlogTag?.data} />
      <RecommendationBlog recommendationBlogList={recommendationBlogList} />
      <PopularBlog popularBlogList={recommendationBlogList} />
      <PopularBloggerList popularBlogger={popularBloggerList} />
      <CaseStudyList />
      <AllBlogComponent allBlogList={allBlogList} />
    </Box>
  );
}
