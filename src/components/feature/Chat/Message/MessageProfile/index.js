import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import style from "./style";

import { HeadSectionMessageDetails } from "../Head";
import { MessageInputsection } from "../Input";
import { MessageDetailsSection } from "../MessageDetails";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),

    position: "relative",
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight({
  open,
  handleDrawerClose,
  handleDrawerOpen,
}) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Main open={open}>
          {/* <DrawerHeader /> */}
          <HeadSectionMessageDetails handleDrawerOpen={handleDrawerOpen} />
          <MessageDetailsSection />
          <Box sx={style.chatSection}>
            <Box sx={style.chatInputSection}>
              <MessageInputsection />
            </Box>
          </Box>
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              position: "relative",
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </Drawer>
      </Box>
    </>
  );
}
