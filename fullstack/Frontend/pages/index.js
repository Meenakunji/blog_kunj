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

  const { mutate: getBlogCategoryData } = useMutation(
    () => fetcher.get(`http://localhost:3003/v1/blog/list`),
    {
      onSuccess: ({ data }) => {
        setBlogList(data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    getBlogCategoryData();
  }, []);

  const videos = [
    {
      id: 1,
      url: "images/home/blogvideo1.mp4",
      message: "Explore the world of blogging with our expert tips!",
      description:
        "Learn valuable insights and strategies to excel in the blogging world. Discover how to engage your audience, optimize your content, and much more.",
    },
    {
      id: 2,
      url: "images/home/blogvideo2.mp4",
      message: "Unleash your culinary skills with our delicious recipes!",
      description:
        "Indulge in a gastronomic journey as we share mouthwatering recipes from around the globe. From appetizers to desserts, there's something for everyone.",
    },
    {
      id: 3,
      url: "images/home/food.mp4",
      message: "Immerse yourself in the wonders of the universe!",
      description:
        "Embark on an awe-inspiring exploration of space, galaxies, and celestial phenomena. Learn about the latest discoveries and unravel the mysteries of the cosmos.",
    },
    {
      id: 4,
      url: "images/home/spaceblog.mp4",
      message: "Stay fit and active with our sports and fitness tips!",
      description:
        "Discover effective workout routines, training strategies, and sports-related articles to enhance your athletic performance and lead a healthy lifestyle.",
    },
    {
      id: 5,
      url: "images/home/sports.mp4",
      message: "Delve into the realm of food and culinary delights!",
      description:
        "Get ready to tantalize your taste buds with delectable dishes, chef interviews, and insider insights from the culinary world. Prepare to embark on a gastronomic adventure.",
    },
    {
      id: 6,
      url: "images/home/blog3.mp4",
      message: "Experience the thrill of outdoor adventures and travel!",
      description:
        "Join us as we explore breathtaking destinations, share travel tips, and inspire you to embark on unforgettable journeys around the globe.",
    },
  ];
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
      <SliderHome videos={videos} />
      <div className="container-fluid">
        <div className="row">
          <BlogCategoryList blogListData={blogList} />
        </div>
      </div>
    </>
  );
}
