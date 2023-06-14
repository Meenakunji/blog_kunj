import { HomeComponet } from "../src/components/feature/Home";
import { Box } from "@mui/material";
import style from "../src/components/feature/Home/style";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <HomeComponet />
      </div>
    </div>
  );
}
