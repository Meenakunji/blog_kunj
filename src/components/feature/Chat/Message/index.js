import { Box } from "@mui/material";
import React, { useState } from "react";
import style from "./style";

import PersistentDrawerRight from "./MessageProfile";

export const MessageDetails = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={style.messagedetailsContainer}>
      <PersistentDrawerRight
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
    </Box>
  );
};
