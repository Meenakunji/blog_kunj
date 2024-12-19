import { Box, Typography } from "@mui/material";
import React from "react";
import BlogDetailComponent from "../../src/components/feature/Blog/BlogDetailComponent";
import CommentBlog from "../../src/components/feature/BlogDetails";
import rehypeKatex from "rehype-katex";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createSlug, reverseSlug } from "../../utils/common";
import { useEffect } from "react";
import fetcher from "../../src/dataProvider";
import { API_BASE_URL } from "../../src/constant/appConstants";
import { setParticularBlogContent } from "../../src/redux/slices/user";
import style from "../../src/components/feature/Home/style";

export default function UserNamePage(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, title } = router.query;
  const { particularBlogContent } = useSelector((state) => state.user);

  const pageTitle = user && title ? `${user} - ${title}` : "Loading...";

  const ogTitle = typeof pageTitle === "string" ? pageTitle : "";

  const finalRecommendedBlog = props?.allBlogList?.data?.filter(
    (blog) =>
      blog?.blogTitle !== particularBlogContent?.blogTitle &&
      blog?.blogTag === particularBlogContent?.blogTag
  );

  useEffect(() => {
    if (props?.blogData?.data?.length > 0 && !particularBlogContent) {
      dispatch(setParticularBlogContent(props?.blogData?.data?.[0]));
    }
  }, [props?.blogData?.data?.[0]]);

  const handleBlogContentListPage = (item) => {
    dispatch(setParticularBlogContent(item));
    const urlSlug = createSlug(item?.userData?.[0]?.name, item?.blogTitle);
    router.push(`/${urlSlug}`);
  };

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
      <Box style={{ background: "#04202e" }}>
        {/* <BlogDetailComponent /> */}
        <CommentBlog />
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            textAlign: "left",
            fontSize: "32px",
            marginTop: "28px",
            paddingLeft: "40px",
          }}
        >
          Recommended from Blog :
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
            padding: "40px",
          }}
        >
          {finalRecommendedBlog &&
            finalRecommendedBlog?.map((item, index) => {
              return (
                <Box className="col-md-4 mt-3" key={index} sx={style.bookMarkedBlogList}>
                  <div className="card p-3">
                    <Box
                      sx={style.mediaCard}
                      key={index}
                      onClick={() => handleBlogContentListPage(item)}
                    >
                      <Box
                        component="img"
                        src={item?.image}
                        style={{
                          borderRadius: "8px",
                        }}
                      />
                      <Typography variant="h2">{item?.blogTitle}</Typography>
                      <Box sx={style.userdetails} onClick={() => router.push(`/profile?tab=home`)}>
                        <Box
                          component="img"
                          src={item?.userData?.profilePic}
                          style={{
                            borderRadius: "100px",
                            width: "30px",
                            height: "30px",
                            border: "1px solid #c3c3c3",
                          }}
                        />
                        <Typography variant="p">
                          By {item?.userData?.name} -{" "}
                          {new Date(item?.createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </Typography>
                      </Box>

                      <Box
                        sx={style.detailsComment}
                        onClick={() => handleBlogContentListPage(item)}
                      >
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
                        <a style={{ cursor: "pointer", color: "#d80af1" }}>...Read More</a>
                      </Box>
                    </Box>
                  </div>
                </Box>
              );
            })}
        </Box>
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
    const allBlogList = await fetcher.get(`${API_BASE_URL}/v1/blog/blog-contents`);
    return {
      props: {
        blogData,
        user,
        title,
        allBlogList,
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
