import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import style from "./style";

export default function LoaderComponent() {
  return (
    <Stack sx={style.conatiner} spacing={2} direction="row">
      <CircularProgress color="success" className="circle" />
    </Stack>
  );
}
