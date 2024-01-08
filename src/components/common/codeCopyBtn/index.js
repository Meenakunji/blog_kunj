import { Box, IconButton } from "@mui/material";
import React from "react";
import style from "./style";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

export default function CodeCopyBtn({ children }) {
  const [copyOk, setCopyOk] = React.useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(children[0].props.children[0]);
    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <Box sx={style.codeCopybtn}>
      <IconButton onClick={handleClick}>{copyOk ? <CheckIcon /> : <ContentCopyIcon />}</IconButton>
    </Box>
  );
}
