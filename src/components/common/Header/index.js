import Logout from "@mui/icons-material/Logout";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Settings from "@mui/icons-material/Settings";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { googleLogout } from "@react-oauth/google";
import cookie from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import eventBus from "../../../../utils/eventBus";
import { setTheme } from "../../../redux/slices/layout";
import { setToken } from "../../../redux/slices/user";
import AuthenticationComponent from "../../feature/auth";
import styles from "../../feature/auth/style";
import ToggleThemeBtn from "../Button/toggleButton";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleLogut = () => {
    googleLogout();
    dispatch(
      setToken({
        accessToken: null,
        isLoggedIn: false,
      })
    );
    router.push("/");
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    ...styles.header,
    position: isScrolled ? "fixed" : "fixed",
    background: isScrolled ? "#fff" : "transparent",
    color: isScrolled ? "#000" : "#fff",
    transition: isScrolled ? "background-color 0.10s ease" : "",
    boxShadow: isScrolled ? "0 1px 6px 0 rgba(32, 33, 36, 0.28)" : "none",
  };

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState("");
  const { theme } = useSelector((state) => state.layout);
  const isMobile = useMediaQuery("(max-width:768px)");
  const { isLoggedIn, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
    cookie.set("appTheme", newTheme);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCreateBlog = () => {
    // if (!isLoggedIn) {
    //   eventBus.dispatch("openLoginModal", { function_name: "unique" });
    // } else {
    router.push(`/new-blog/create-blog`);
    // }
  };

  useEffect(() => {
    if (isLoggedIn) {
      eventBus.on("openLoginModal", (cb) => {
        if (!open) {
          setOpen(true);
        }
      });

      return () => {
        eventBus.remove("openLoginModal");
      };
    }
  }, [isLoggedIn]);

  useEffect(() => {
    eventBus.on("openLoginModal", (cb) => {
      if (!open) {
        setOpen(true);
      }
    });

    return () => {
      eventBus.remove("openLoginModal");
    };
  }, [open]);

  return (
    <Box>
      <AuthenticationComponent
        callBackName={"uniqueCommunity"}
        open={open}
        handleModalClose={() => setOpen(false)}
      />
      <AppBar sx={styles.navbar} onClick={(e) => e.stopPropagation()} style={headerStyle}>
        <Toolbar>
          <Typography sx={{ fontSize: "2rem", cursor: "pointer" }} onClick={() => router.push("/")}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <MenuBookIcon style={{ width: "50px" }} />
              <Typography component="h1" style={{ fontSize: "18px" }}>
                Sahitya
              </Typography>
            </Box>
          </Typography>
          {isMobile ? (
            <Box style={{ margin: "0px 0px 0px auto" }}>
              <Image
                src={"https://i.postimg.cc/wxZbMG3F/blog-Create.png"}
                alt="Create Blog icon"
                width={40}
                height={40}
                style={{
                  marginLeft: "auto",
                  cursor: "pointer",
                }}
                onClick={() => handleCreateBlog()}
              />
            </Box>
          ) : (
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="primary"
              textColor="#fff"
              value={value}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: { background: "white" },
              }}
            >
              <Tab label="Create Blog" onClick={handleCreateBlog} />
              {/* <Tab label="Community" onClick={() => router.push("/chat")} /> */}
              <Tab label="About" onClick={() => router.push("/about")} />
            </Tabs>
          )}
          <Box
            // sx={{ ...styles.lightDarkDesktop, ...styles.lightDarkMobile }}
            onClick={handleThemeSwitch}
          >
            <ToggleThemeBtn theme={theme} />
          </Box>

          {isLoggedIn ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick1}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open1 ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 45, height: 45 }}>
                      {userData?.profilePic ? (
                        <img
                          src={userData.profilePic}
                          alt="Profile Picture"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        "P"
                      )}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open1}
                onClose={handleClose1}
                onClick={handleClose1}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={() => router.push("/profile?tab=home")}>
                  <Avatar /> Profile
                </MenuItem>

                <MenuItem onClick={handleClose1}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button variant="contained" sx={{ marginLeft: "10px" }} onClick={() => setOpen(true)}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {walletAddress && <div>{`Connected Wallet: ${walletAddress}`}</div>}
    </Box>
  );
};

export default Header;
