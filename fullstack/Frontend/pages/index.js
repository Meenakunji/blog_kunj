import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { BlogContentTypeList } from "../src/components/feature/Blog/BlogList";
import Head from "next/head";
import FAQs from "../components/Home/FAQs";
// import { HomeComponet } from "../src/components/feature/Home";
// import style from "../src/components/feature/Home/style";

export default function Home({ toggleTheme, selectedTheme }) {
  const { theme } = useSelector((state) => state.layout);
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
        {/* <HomeComponet /> */}
        <BlogContentTypeList />
        {/* <FAQs /> */}
      </div>
    </div>
  );
}
