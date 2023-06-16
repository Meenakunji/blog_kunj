import { Box } from "@mui/material";
import { HomeComponet } from "../../src/components/feature/Home";
import style from "../../src/components/feature/Home/style";

export default function Index() {
  return (
    <Box sx={style.container}>
      <HomeComponet />
    </Box>
  );
}
