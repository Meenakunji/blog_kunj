import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SEOComponents from "../src/components/common/SEO";
import fetcher from "../src/dataProvider";
import { API_BASE_URL } from "../src/constant/appConstants";
import dynamic from "next/dynamic";
import Head from "next/head";

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
  const [caseStudyList, setCaseStudyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          popularData,
          popularBloggerListData,
          allBlogListData,
          popularBlogTags,
          caseStudyListData,
        ] = await Promise.all([
          fetcher.get(`${API_BASE_URL}/v1/blog/recommendations`),
          fetcher.get(`${API_BASE_URL}/v1/blog/popular-blogger`),
          fetcher.get(`${API_BASE_URL}/v1/blog/blog-contents`),
          fetcher.get(`${API_BASE_URL}/v1/blog/popular-tags`),
          fetcher.get(`${API_BASE_URL}/v1/case-study/content-list`),
        ]);

        setRecommendationBlogList(popularData.data);
        setPopularBloggerList(popularBloggerListData?.data);
        setAllBlogList(allBlogListData?.data);
        setPopularBlogTag(popularBlogTags);
        setCaseStudyList(caseStudyListData);
      } catch (error) {
        alert(error?.response?.data?.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!"
        />
        <meta name="name" content="Sahitya - User Blog Platform" />
        <meta
          name="image"
          content="https://d2q23p4t0ij9e0.cloudfront.net/small_referal_1ee3ed7a49.png"
        />
        <meta
          property="og:url"
          content="https://timely-profiterole-25e8c9.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sahitya - User Blog Platform" />
        <meta
          property="og:description"
          content="Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!"
        />
        <meta
          property="og:image"
          content="https://d2q23p4t0ij9e0.cloudfront.net/small_referal_1ee3ed7a49.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sahitya - User Blog Platform" />
        <meta
          name="twitter:description"
          content="Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!"
        />
        <meta
          name="twitter:image"
          content="https://d2q23p4t0ij9e0.cloudfront.net/small_referal_1ee3ed7a49.png"
        />
      </Head>

      <Box style={{ paddingBottom: "40px" }}>
        <SEOComponents
          title={"Blog WebSite Home Page"}
          description={"this is Sahitya website home page"}
          canonical="https://timely-profiterole-25e8c9.netlify.app/"
          // data={data?.data?.attributes?.seo}
        />
        <BlogSearch popularBlogTag={popularBlogTag?.data} />
        <RecommendationBlog recommendationBlogList={allBlogList} />
        <PopularBlog popularBlogList={recommendationBlogList} />
        <PopularBloggerList popularBlogger={popularBloggerList} />
        <CaseStudyList caseStudyList={caseStudyList} />
        <AllBlogComponent allBlogList={allBlogList} />
      </Box>
    </>
  );
};

export default Home;
