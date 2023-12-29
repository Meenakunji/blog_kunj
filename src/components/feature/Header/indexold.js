import EditIcon from "@mui/icons-material/Edit";
import LoginIcon from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { googleLogout } from "@react-oauth/google";
import WalletConnectProvider from "@walletconnect/web3-provider";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3Modal from "web3modal";
import eventBus from "../../../../utils/eventBus";
import { setTheme } from "../../../redux/slices/layout";
import { setToken } from "../../../redux/slices/user";
import ToggleThemeBtn from "../../common/Button/toggleButton";
import { EnhancedSearch } from "../../common/SearchInput";
import AuthenticationComponent from "../auth";
import styles from "./style";

const HeaderComponent = ({ toggleTheme, selectedTheme }) => {
  const router = useRouter();
  const { theme } = useSelector((state) => state.layout);
  const { isLoggedIn, userData } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isLoggin, setIsLoggin] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // for user details
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 100;
      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const navbarCMSItems = [
    {
      id: 1,
      label: "Home",
      path: "/home",
    },
  ];

  const INFURA_ID = "aec8651d16b0461a844ba5a6cc70e08c";
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: INFURA_ID,
      },
    },
  };

  let web3Modal;

  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true,
      providerOptions: providerOptions,
    });
  }

  const handleNavbarTitleRedirect = (item) => {
    if (item?.label == "Home") {
      router.push(item?.path);
    } else if (item?.label == "Politics") {
      router.push(item?.path);
    } else if (item?.label == "Tech") {
      router.push(item?.path);
    } else if (item?.label == "Entertainment") {
      router.push(item?.path);
    } else if (item?.label == "Travel") {
      router.push(item?.path);
    }
  };

  const handleThemeSwitch = () => {
    let currentTheme = theme;
    if (currentTheme === "dark") {
      dispatch(setTheme("light"));
      cookie.set("appTheme", "light");
    } else {
      dispatch(setTheme("dark"));
      cookie.set("appTheme", "dark");
    }
  };

  const connectMetaMask = async () => {
    if (!isLoggedIn) {
      eventBus.dispatch("openLoginModal", { function_name: "unique" });
    } else {
      try {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        // Access different wallet options
        const accounts = await web3.eth.getAccounts();
        console.log("Connected wallet accounts:", accounts);

        // Continue with the desired actions using the selected wallet provider
        // For example, you can retrieve the selected address:
        const selectedAddress = accounts[0];
        console.log("Selected address:", selectedAddress);

        // Update the wallet address in the state
        setWalletAddress(selectedAddress);

        // Close the Web3Modal provider connection
        web3Modal.clearCachedProvider();
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && isLoggin) {
      // Check if the user is logged in and update the wallet address
      connectMetaMask();
    }
  }, [isLoggin]);

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

  useEffect(() => {
    eventBus.on("openLoginModal", (cb) => {
      if (!open) {
        setOpen(true);
      }
    });
    return () => {
      eventBus.remove("openLoginModal");
    };
  }, []);

  const handleCreateBlog = () => {
    if (!isLoggedIn) {
      eventBus.dispatch("openLoginModal", { function_name: "unique" });
    } else {
      router.push(`/new-blog/1`);
    }
  };

  return (
    <Box sx={styles.navbar}>
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid">
          <Box sx={styles.navbarbrand} onClick={() => router.push("/")}>
            <img
              src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png"
              alt="mobile view icon"
            />
          </Box>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="mx-auto my-2">
              <EnhancedSearch
                // rows={rows}
                // setRows={setRows}
                // originalRows={originalRows}
                // setRowsPerPage={setRowsPerPage}
                // setPage={setPage}
                sx={{ backgroundColor: "white" }}
              />
            </div>
            <AuthenticationComponent
              callBackName={"uniqueCommunity"}
              open={open}
              handleModalClose={() => handleClose()}
            />
            <ul className="navbar-nav">
              <li
                className="nav-item"
                onClick={() => {
                  handleCreateBlog();
                }}
                style={{ cursor: "pointer" }}
              >
                <EditIcon /> Create Blog
              </li>
              <li lassName="navbar-nav" style={{ color: "#fff" }}>
                <Box
                  sx={{ ...styles.lightDarkDesktop, ...styles.lightDarkMobile }}
                  onClick={handleThemeSwitch}
                >
                  <ToggleThemeBtn theme={theme} />
                </Box>
              </li>
              <li
                onClick={() => {
                  connectMetaMask();
                }}
                style={{ cursor: "pointer" }}
              >
                {/* <img
                  src="/images/home/metamask.jpeg"
                  style={{ width: "45px" }}
                />{" "} */}
                Connect Wallet
              </li>
              {/* {navbarCMSItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a href="#" onClick={() => handleNavbarTitleRedirect(item)}>
                    {item.label}
                  </a>
                </li>
              ))} */}
            </ul>
            {/* user Profile section */}
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
                      <Avatar sx={{ width: 32, height: 32 }}>
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
                          "P" // Display a fallback initial if no picture is available
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
              <button
                className="btn btn-light allBtn"
                type="button"
                onClick={() => setOpen(true)}
              >
                <LoginIcon /> Login
              </button>
            )}
          </div>
        </div>
      </nav>
      {walletAddress && <div>{`Connected Wallet: ${walletAddress}`}</div>}
    </Box>
  );
};

export default HeaderComponent;
