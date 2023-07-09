import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import fetcher from "../../src/dataProvider";
import BlogContentListComponent from "../../src/components/feature/Blog/BlogList";
import { useSelector } from "react-redux";

export default function Index() {
  const [blogContentList, setBlogContentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { blogDetails } = useSelector((state) => state.user);

  const fetchBlogContent = async (page) => {
    try {
      const response = await fetcher.get(
        `http://localhost:3003/v1/blog/content?blogTag=${blogDetails?.blogTag}&page=${page}`
      );
      const { data, totalPages } = response;
      setBlogContentList(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  const { mutate: getAllCategoryDetails } = useMutation(fetchBlogContent, {
    onSuccess: () => {
      setCurrentPage((prevPage) => prevPage + 1);
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      currentPage < totalPages
    ) {
      getAllCategoryDetails(currentPage);
    }
  };

  useEffect(() => {
    getAllCategoryDetails(currentPage);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  return (
    <div className="container-fluid">
      <div className="row">
        <BlogContentListComponent data={blogContentList} />
      </div>
    </div>
  );
}
