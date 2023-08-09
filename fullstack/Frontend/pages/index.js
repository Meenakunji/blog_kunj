import React from "react";
import { BlogSearch } from "../src/components/feature/Home/BlogSearch";
import { CaseStudyList } from "../src/components/feature/Home/CaseStudy";
import { PopularBlog } from "../src/components/feature/Home/PopularBlog";
import { RecentPostBlogList } from "../src/components/feature/Home/RecentPostBlog";
import { RecommendationBlog } from "../src/components/feature/Home/RecommendationBlog";
import { AllBlogComponent } from "../src/components/feature/Home/AllBlogContainer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <BlogSearch />
      <RecommendationBlog />
      <PopularBlog />
      <RecentPostBlogList />
      <CaseStudyList />
      <AllBlogComponent />
    </Box>
  );
}
