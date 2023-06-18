import { BlogContentTypeList } from "../src/components/feature/Blog/BlogList";
import { HomeComponet } from "../src/components/feature/Home";
import style from "../src/components/feature/Home/style";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <HomeComponet /> */}
        <BlogContentTypeList />
      </div>
    </div>
  );
}
