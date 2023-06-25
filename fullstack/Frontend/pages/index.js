import { Button, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { BlogContentTypeList } from "../src/components/feature/Blog/BlogList";
import Head from "next/head";
import FAQs from "../components/Home/FAQs";
import { useRouter } from "next/router";

export default function Home() {
  const { theme } = useSelector((state) => state.layout);
  // const { locale, push, locales } = useRouter();

  // const { t } = useTranslation("common");

  // const handleClick = (index) => () => {
  //   // Handle language selection here
  //   // You can update the state, redirect to a localized page, etc.
  // };

  return (
    <div className="container-fluid">
      <Head>
        <meta
          name="description"
          content="Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space."
        />
        <meta
          name="name"
          content="Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures"
        />
        <meta
          name="image"
          content="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png"
        />
        <meta property="og:url" content="https://jupiterblogger.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures"
        />
        <meta
          property="og:description"
          content="Welcome to Jupiter Blogger, your gateway to the cosmos. Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jupiter Blogger: Your Gateway to Inspiring Blogging Adventures"
        />
        <meta
          name="twitter:description"
          content="Welcome to Jupiter Blogger, your gateway to the cosmos.Ignite your curiosity as we delve into the realms of astronomy, planetary science, and space exploration. From captivating articles to mesmerizing visuals, let us take you on an awe-inspiring journey across the vast expanse of space."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png"
        />
      </Head>
      <div className="row">
        {/* <h1>
          Pankaj {"   "}
          {locale}
        </h1>
        <div>
          <h3>Welcome to Jupiter Blogger Website</h3>
          <h2>Choose your language</h2>
          {locales.map((index) => (
            <Button key={index} onClick={handleClick(index)}>
              {index}
            </Button>
          ))}
        </div> */}
        <BlogContentTypeList />
      </div>
    </div>
  );
}
