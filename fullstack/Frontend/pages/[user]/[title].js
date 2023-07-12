import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { BlogDetailComponent } from "../../src/components/feature/Blog/BlogDetailComponent";

export default function UserNamePage() {
  const router = useRouter();
  const { username } = router.query;
  const { particularBlogContent } = useSelector((state) => state.user);
  // console.log("particularBlogContent", particularBlogContent);
  return (
    <div style={{ background: "#000" }}>
      <h1>What is my name?</h1>
      <BlogDetailComponent />
      <pre>
        <code>{particularBlogContent?.codeSnippet}</code>
      </pre>
    </div>
  );
}
