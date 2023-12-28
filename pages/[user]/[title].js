import { Box } from "@mui/material";
import BlogDetailComponent from "../../src/components/feature/Blog/BlogDetailComponent";
import CommentBlog from "../../src/components/feature/BlogDetails";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function UserNamePage() {
  const router = useRouter();
  const { user, title } = router.query;

  const pageTitle = user && title ? `${user} - ${title}` : "Loading...";

  const ogTitle = typeof pageTitle === "string" ? pageTitle : "";

  return (
    <>
      <NextSeo
        title={title}
        description={
          "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!"
        }
        canonical={`https://timely-profiterole-25e8c9.netlify.app/${encodeURIComponent(
          user
        )}/${encodeURIComponent(title)}`}
        openGraph={{
          url: `https://timely-profiterole-25e8c9.netlify.app/${encodeURIComponent(
            user
          )}/${encodeURIComponent(title)}`,
          // title: { pageTitle },
          title: title,
          description:
            "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
          images: [
            {
              url: `https://timely-profiterole-25e8c9.netlify.app/${encodeURIComponent(
                user
              )}/${encodeURIComponent(title)}`,
              alt: { title },
            },
          ],
          type: "website",
          siteName: "sahitya.com/",
        }}
        additionalMetaTags={[
          {
            property: "twitter.title",
            content: "Sahitya - User Blog Platform",
          },
          {
            property: "twitter.description",
            content:
              "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
          },
          {
            property: "twitter.image",
            content:
              "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
          },
          {
            name: "keywords",
            content:
              "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
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
