import { NextSeo } from "next-seo";
import React from "react";

export const SEOComponent = () => {
  return (
    <NextSeo
      title="All Blog List"
      description={
        "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!"
      }
      canonical={`https://timely-profiterole-25e8c9.netlify.app/bloglisting`}
      openGraph={{
        url: `https://timely-profiterole-25e8c9.netlify.app/bloglisting`,
        title: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
        description:
          "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
        images: [
          {
            url: `https://timely-profiterole-25e8c9.netlify.app/bloglisting`,
            alt: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
          },
        ],
        type: "website",
        siteName: "https://timely-profiterole-25e8c9.netlify.app/",
      }}
      additionalMetaTags={[
        {
          property: "twitter.title",
          content: "Sahitya: Your Gateway to Inspiring Blogging Adventures",
        },
        {
          property: "twitter.description",
          content:
            "Discover engaging and insightful user-generated content on Sahitya - Your Go-to Blog Platform!",
        },
        {
          property: "twitter.image",
          content: "https://timely-profiterole-25e8c9.netlify.app/bloglisting",
        },
      ]}
    />
  );
};
