import { Box } from "@mui/material";
import BlogDetailComponent from "../../src/components/feature/Blog/BlogDetailComponent";
import CommentBlog from "../../src/components/feature/BlogDetails";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function UserNamePage() {
  const router = useRouter();
  const { user, title } = router.query;
  const { particularBlogContent } = useSelector((state) => state.user);

  const pageTitle = user && title ? `${user} - ${title}` : "Loading...";

  const ogTitle = typeof pageTitle === "string" ? pageTitle : "";
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
