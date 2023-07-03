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
      message: "Explore the World: Unforgettable Travel Adventures!",
      description:
        "Join us on a thrilling expedition across the globe as we uncover hidden gems, immerse ourselves in diverse cultures, and embark on unforgettable travel adventures. From ancient landmarks to vibrant cities, picturesque landscapes to mouthwatering cuisines, our travel blog is your passport to wanderlust. Get ready to ignite your wanderlust and create lifelong memories through immersive travel experiences.",
    },
    {
      id: 2,
      url: "images/home/blogvideo2.mp4",
      message: "Inside the Media: Unveiling the World of Entertainment!",
      description:
        "Step into the captivating world of media with our blog that delves into the realms of movies, television, music, and more. From behind-the-scenes insights to exclusive interviews with industry experts, we bring you the latest buzz and fascinating stories from the world of entertainment. Explore the magic of cinema, discover new music trends, and stay up-to-date with the ever-evolving media landscape. Join us as we unravel the secrets and celebrate the power of media in shaping our culture and inspiring creativity.",
    },
    {
      id: 3,
      url: "images/home/food.mp4",
      message: "Foodie Faves: Bite-Sized Culinary Bliss",
      description:
        "Indulge in delectable flavors and culinary delights as we take you on a tantalizing food journey. From savory dishes to sweet treats, join us for a taste sensation like no other.",
    },
    {
      id: 4,
      url: "images/home/spaceblog.mp4",
      message: "Beyond Earth: Exploring the Wonders of Space!",
      description:
        "Embark on an extraordinary journey through the vastness of space. Discover captivating celestial bodies, witness awe-inspiring astronomical phenomena, and delve into the mysteries of the universe. Join us as we explore the wonders that lie beyond Earth's boundaries.",
    },
    {
      id: 5,
      url: "images/home/sports.mp4",
      message: "Unleashing the Passion: Sports Stories That Inspire!",
      description:
        "Experience the thrill, dedication, and triumph of athletes as they push their limits and defy expectations. From adrenaline-pumping moments to heartwarming tales of perseverance, our sports blog brings you closer to the world of sports. Join us on this captivating journey where passion meets greatness.",
    },
    {
      id: 6,
      url: "images/home/blog3.mp4",
      message: "Immerse Yourself in the Wonders of Nature!",
      description:
        "Embark on a captivating journey through awe-inspiring landscapes, vibrant ecosystems, and the marvels of the natural world. Our nature blog invites you to discover the beauty and tranquility of our planet, from breathtaking mountains to pristine beaches. Get ready to be inspired, educated, and amazed by the wonders that nature has to offer.",
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
