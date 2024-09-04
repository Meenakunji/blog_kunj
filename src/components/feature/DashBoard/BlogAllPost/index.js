import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { createSlug } from "../../../../../utils/common";
import { API_BASE_URL } from "../../../../constant/appConstants";
import fetcher from "../../../../dataProvider";
import { setParticularBlogContent } from "../../../../redux/slices/user";
import BlogPagination from "./BlogPagination";
import styles from "./style";

export const BlogAllPost = () => {
  const [markedblogList, setMarkedblogList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  // Fetch the blog list
  const { mutate: getAllBlogList } = useMutation(
    () => fetcher.get(`${API_BASE_URL}/v1/blog/user-blog-list?userId=${userData?._id}`),
    {
      onSuccess: ({ data }) => {
        setMarkedblogList(data);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    getAllBlogList();
  }, []);

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = markedblogList.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
        }}
      >
        {currentItems.map((item, index) => (
          <Box
            key={index}
            sx={styles.blogContainer}
            onClick={() => handleBlogContentListPage(item)}
          >
            <Box
              component="img"
              src={item?.image}
              sx={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {item?.blogTitle}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  cursor: "pointer",
                }}
                onClick={() => router.push(`/profile?tab=home`)}
              >
                <Box
                  component="img"
                  src={item?.userData?.[0]?.profilePic}
                  sx={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    border: "1px solid #c3c3c3",
                    mr: 1,
                  }}
                />
                <Typography variant="body2">
                  By {item?.userData?.[0]?.name} -{" "}
                  {new Date(item?.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <ReactMarkdown
                  remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                  rehypePlugins={[rehypeKatex, remark2rehype]}
                  components={{
                    img: ({ node, ...props }) => null,
                    h2: ({ node, ...props }) => null,
                  }}
                >
                  {item?.description?.split(" ").slice(0, 35).join(" ")}
                </ReactMarkdown>
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    display: "inline-block",
                    color: "#d80af1",
                    textDecoration: "none",
                    mt: 1,
                  }}
                >
                  ...Read More
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <BlogPagination
          page={currentPage}
          count={Math.ceil(markedblogList.length / itemsPerPage)}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};
