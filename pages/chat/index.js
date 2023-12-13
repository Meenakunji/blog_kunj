import { Box, Typography } from "@mui/material";
import React from "react";
import { ChatMainComponet } from "../../src/components/feature/Chat";

export default function Chat() {
  return (
    <Box>
      <ChatMainComponet />
    </Box>
  );
}

export async function getStaticProps() {
  return {
    props: {
      asLayout: "EmptyLayout",
    },
  };
}
