import SliderHomne from "../src/components/feature/Slider";
import { BlogCategoryList } from "../src/components/feature/Blog/BlogCategoryList";

export default function Home({ toggleTheme, selectedTheme }) {
  return (
    <>
      <SliderHomne />
      <div className="container-fluid">
        <div className="row">
          <BlogCategoryList />
        </div>
      </div>
    </>
  );
}
