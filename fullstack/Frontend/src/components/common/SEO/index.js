import Head from "next/head";
import { DefaultSeo } from "next-seo";

const SEOComponents = ({ title, description, canonical, data }) => {
  const defaultSeoConfig = {
    title: title,
    description: description,
    canonical: canonical,
    openGraph: {
      type: "website",
      url: canonical,
      title: title,
      description: description,
      images: [
        {
          url: "https://www.yourwebsite.com/images/og-image.jpg",
          width: 800,
          height: 600,
          alt: "Your Default OG Image",
        },
      ],
    },
    twitter: {
      handle: "@yourTwitterHandle",
      site: "@yourTwitterHandle",
      cardType: "summary_large_image",
    },
  };

  return (
    <>
      <DefaultSeo {...defaultSeoConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </>
  );
};

export default SEOComponents;
