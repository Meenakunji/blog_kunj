import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import fetcher from "../../src/dataProvider";
import BlogContentListComponent from "../../src/components/feature/Blog/BlogList";
import { useSelector } from "react-redux";

export default function Index() {
  const [blogContentList, setBlogContentList] = useState([]);
  const { blogDetails } = useSelector((state) => state.user);

  // get all cms details based on category
  const { mutate: getAllcategoryDetails } = useMutation(
    () =>
      fetcher.get(
        `http://localhost:3003/v1/blog/content?blogTag=${blogDetails?.blogTag}`
      ),
    {
      onSuccess: (resData) => {
        setBlogContentList(resData?.data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    getAllcategoryDetails();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <BlogContentListComponent data={blogContentList} />
      </div>
    </div>
  );
}
