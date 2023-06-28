import React, { useEffect } from "react";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import AuthenticationComponent from "../auth";
import ToggleThemeBtn from "../../common/TheameBtn";
import { setTheme } from "../../../redux/slices/layout";
import { EnhancedSearch } from "../../common/SearchInput";
import cookie from "js-cookie";
import LoginIcon from "@mui/icons-material/Login";
import EditIcon from "@mui/icons-material/Edit";
import { initWeb3, getSigner } from "../../../../utils/web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const HeaderComponent = ({ toggleTheme, selectedTheme }) => {
  const router = useRouter();
  const { theme } = useSelector((state) => state.layout);
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isLoggin, setIsLoggin] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

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
  };

  useEffect(() => {
    if (typeof window !== "undefined" && isLoggin) {
      // Check if the user is logged in and update the wallet address
      connectMetaMask();
    }
  }, [isLoggin]);

  return (
    <Box sx={styles.navbar}>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <Box sx={styles.navbarbrand} onClick={() => router.push("/")}>
            <img src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png" />
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
            <ul
              className="navbar-nav"
              style={{ color: !isScrolled ? "#000" : "#fff" }}
            >
              <li
                className="nav-item"
                onClick={() => {
                  router.push(`/new-blog/1`);
                }}
                style={{ cursor: "pointer" }}
              >
                <EditIcon /> Create Blog
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
              <li className="nav-item">
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: !isScrolled ? "#000" : "#fff" }}
                >
                  My profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: !isScrolled ? "#000" : "#fff" }}
                >
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: !isScrolled ? "#000" : "#fff" }}
                >
                  Logout
                </a>
              </li>
            </ul>
            <button
              className="btn btn-light allBtn"
              type="button"
              onClick={() => setOpen(true)}
            >
              <LoginIcon /> Login
            </button>
          </div>
        </div>
      </nav>
      {walletAddress && <div>{`Connected Wallet: ${walletAddress}`}</div>}
    </Box>
  );
};

export default HeaderComponent;
