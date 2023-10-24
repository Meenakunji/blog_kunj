import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { BlogTagList } from "../src/components/feature/Blog/BlogTagList";

function SearchPage() {
  const router = useRouter();
  const { query } = router.query;
  const searchTerm = query || "";
  console.log("Print route value ==>>", router.query.title);
  // Check if the route is exactly /search?title=
  if (!router.query.title) {
    // Redirect to the home page
    router.push("/");
    return null; // Return null to prevent rendering the SearchPage
  }
  return (
    <Box style={{ paddingTop: "30px" }}>
      <BlogTagList />
    </Box>
  );
}

export default SearchPage;
