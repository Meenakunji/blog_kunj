import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import style from "./style";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 340 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={style.messageSection}>
        <Typography variant="h1">Responses</Typography>
        <CloseIcon onClick={toggleDrawer(anchor, false)} />
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>
            <img src="/images/home/saveremove.svg" alt="" />
          </span>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            variant={"persistent"}
            PaperProps={{
              sx: {
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px",
                borderLeft: "0",
                padding: "25px",
                background: "rgb(237 249 255)",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
