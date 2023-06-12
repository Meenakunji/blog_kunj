import { HomeComponet } from "../src/components/feature/Home";
import { Box } from "@mui/material";
import style from "../src/components/feature/Home/style";

export default function Home() {
  return (
    <Box sx={style.container}>
      <HomeComponet />
    </Box>
  );
}
