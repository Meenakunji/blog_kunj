import { Box } from "@mui/material";
import React from "react";
import { BlogTagList } from "../../src/components/feature/Blog/BlogTagList";

export default function BlogTagsPage() {
  return (
    <Box style={{ paddingTop: "30px" }}>
      <BlogTagList />
    </Box>
  );
}
