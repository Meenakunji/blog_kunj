import React, { useEffect, useState } from "react";
import SliderHome from "../src/components/feature/Slider";
import { BlogCategoryList } from "../src/components/feature/Blog/BlogCategoryList";
import fetch from "node-fetch";
import { useMutation } from "react-query";
import fetcher from "../src/dataProvider";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [sliderVideos, setSliderVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogData, sliderVideoData] = await Promise.all([
          fetcher.get(`http://localhost:3003/v1/blog/list`),
          fetcher.get(`http://localhost:3003/v1/home/slider-video`),
        ]);

        setBlogList(blogData.data);
        setSliderVideos(sliderVideoData.data);
      } catch (error) {
        alert(error?.response?.data?.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 50 &&
        !isLoading &&
        hasMorePages
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, hasMorePages]);

  const fetchNextPage = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3003/v1/blog/list?page=${currentPage + 1}`
      );
      const nextPageData = await response.json();

      if (nextPageData?.data?.length > 0) {
        setCurrentPage((prevPage) => prevPage + 1);
        setBlogList((prevList) => [...prevList, ...nextPageData.data]);
      } else {
        setHasMorePages(false);
      }
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <SliderHome sliderVideos={sliderVideos} />
      <div className="container-fluid">
        <div className="row">
          <BlogCategoryList blogListData={blogList} />
        </div>
      </div>
    </>
  );
}
