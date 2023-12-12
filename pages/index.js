import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SEOComponents from "../src/components/common/SEO";
import fetcher from "../src/dataProvider";
import { API_BASE_URL } from "../src/constant/appConstants";
import dynamic from "next/dynamic";

// dynamic routing
const BlogSearch = dynamic(
  () => import("../src/components/feature/Home/BlogSearch"),
  {
    ssr: false,
  }
);
const RecommendationBlog = dynamic(
  () => import("../src/components/feature/Home/RecommendationBlog"),
  {
    ssr: false,
  }
);

const PopularBlog = dynamic(
  () => import("../src/components/feature/Home/PopularBlog"),
  {
    ssr: false,
  }
);

const PopularBloggerList = dynamic(
  () => import("../src/components/feature/Home/PopularBloggerList"),
  {
    ssr: false,
  }
);

const CaseStudyList = dynamic(
  () => import("../src/components/feature/Home/CaseStudy"),
  {
    ssr: false,
  }
);

const AllBlogComponent = dynamic(
  () => import("../src/components/feature/Home/AllBlogContainer"),
  {
    ssr: false,
  }
);
const Home = () => {
  const [recommendationBlogList, setRecommendationBlogList] = useState([]);
  const [popularBloggerList, setPopularBloggerList] = useState([]);
  const [allBlogList, setAllBlogList] = useState([]);
  const [popularBlogTag, setPopularBlogTag] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          popularData,
          popularBloggerListData,
          allBlogListData,
          popularBlogTags,
        ] = await Promise.all([
          fetcher.get(`${API_BASE_URL}/v1/blog/recommendations`),
          fetcher.get(`${API_BASE_URL}/v1/blog/popular-blogger`),
          fetcher.get(`${API_BASE_URL}/v1/blog/blog-contents`),
          fetcher.get(`${API_BASE_URL}/v1/blog/popular-tags`),
        ]);

        setRecommendationBlogList(popularData.data);
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
};

export default Home;
