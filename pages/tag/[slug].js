import { Box } from "@mui/material";
import React from "react";
import { BlogTagList } from "../../src/components/feature/Blog/BlogTagList";
import { NextSeo } from "next-seo";

export default function BlogTagsPage({ slug }) {
  return (
    <>
      <NextSeo
        title={"Sahitya - User Blog Platform Tag Page"}
        description={
          "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!"
        }
        canonical={`https://timely-profiterole-25e8c9.netlify.app/tag/${slug}`}
        openGraph={{
          url: `https://timely-profiterole-25e8c9.netlify.app/tag/${slug}`,
          title: "Sahitya - User Blog Platform",
          description:
            "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
          images: [
            {
              url: `https://timely-profiterole-25e8c9.netlify.app/tag/${slug}`,
              alt: "Sahitya - User Blog Platform",
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
      <Box style={{ paddingTop: "30px" }}>
        <BlogTagList />
      </Box>
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const {
      params: { slug },
    } = ctx;

    return {
      props: {
        slug,
      },
    };
  } catch (err) {
    console.log("error occures in while getting data==>", err);
    return {
      props: {},
    };
  }
}
