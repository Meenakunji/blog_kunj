import { Box } from "@mui/material";
import React from "react";
import BlogDetailComponent from "../../src/components/feature/Blog/BlogDetailComponent";
import CommentBlog from "../../src/components/feature/BlogDetails";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { reverseSlug } from "../../utils/common";
import { useEffect } from "react";
import fetcher from "../../src/dataProvider";
import { useMutation } from "react-query";
import { API_BASE_URL } from "../../src/constant/appConstants";
import { setParticularBlogContent } from "../../src/redux/slices/user";

export default function UserNamePage(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, title } = router.query;
  const { particularBlogContent } = useSelector((state) => state.user);

  const pageTitle = user && title ? `${user} - ${title}` : "Loading...";

  const ogTitle = typeof pageTitle === "string" ? pageTitle : "";

  useEffect(() => {
    if (props?.blogData?.data?.length > 0 && !particularBlogContent) {
      dispatch(setParticularBlogContent(props?.blogData?.data?.[0]));
    }
  }, [props?.blogData?.data?.[0]]);

  return (
    <>
      <NextSeo
        title={title}
        description={particularBlogContent?.description?.substring(0, 150) + "..."}
        canonical={`https://timely-profiterole-25e8c9.netlify.app/${encodeURIComponent(
          user
        )}/${encodeURIComponent(title)}`}
        openGraph={{
          url: `https://timely-profiterole-25e8c9.netlify.app/${encodeURIComponent(
            user
          )}/${encodeURIComponent(title)}`,
          title: particularBlogContent?.blogTitle,
          description: particularBlogContent?.description?.substring(0, 150) + "...",
          images: [
            {
              url: `${particularBlogContent?.image}`,
              alt: particularBlogContent?.blogTitle,
            },
          ],
          type: "website",
          siteName: "sahitya.com/",
        }}
        additionalMetaTags={[
          {
            property: "twitter.title",
            content: particularBlogContent?.blogTitle,
          },
          {
            property: "twitter.description",
            content: particularBlogContent?.description?.substring(0, 150) + "...",
          },
          {
            property: "twitter.image",
            content: particularBlogContent?.image,
          },
          {
            name: "keywords",
            content: particularBlogContent?.description?.substring(0, 150) + "...",
          },
        ]}
      />
      <Box style={{ background: "#000" }}>
        {/* <BlogDetailComponent /> */}
        <CommentBlog />
      </Box>
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const {
      params: { user, title },
    } = ctx;

    const blogTitle = reverseSlug(title);
    const blogData = await fetcher.get(`${API_BASE_URL}/v1/blog/blog-contents/${blogTitle}`);
    return {
      props: {
        blogData,
        user,
        title,
      },
    };
  } catch (err) {
    console.error("Error occurred while getting data:", err);
    return {
      props: {
        error: err.message,
      },
    };
  }
}
