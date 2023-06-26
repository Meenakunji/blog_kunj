import { useRouter } from "next/router";
import { BlogDetailComponent } from "../../src/components/feature/Blog/BlogDetailComponent";

export default function UserNamePage() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>What is my name?</h1>
      <BlogDetailComponent />
    </div>
  );
}
