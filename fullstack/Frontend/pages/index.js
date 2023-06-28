import SliderHomne from "../src/components/feature/Slider";
import { BlogCategoryList } from "../src/components/feature/Blog/BlogCategoryList";
import fetch from "node-fetch";

export default function Home({ blogListData }) {
  return (
    <>
      <SliderHomne />
      <div className="container-fluid">
        <div className="row">
          <BlogCategoryList blogListData={blogListData?.data} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const response = await fetch("http://localhost:3003/v1/blog/list");
    const blogListData = await response.json();

    return {
      props: {
        blogListData,
      },
    };
  } catch (err) {
    console.log("Error occurred while fetching data:", err);
    return {
      props: {},
    };
  }
}
