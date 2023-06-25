import React, { useEffect, useState } from "react";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import { Box, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import AuthenticationComponent from "../auth";
import ToggleThemeBtn from "../../common/TheameBtn";
import { setTheme } from "../../../redux/slices/layout";
import { EnhancedSearch } from "../../common/SearchInput";
import cookie from "js-cookie";
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

  const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";
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

  const handleClose = () => {
    setOpen(false);
  };

  const navbarCMSItems = [
    {
      id: 1,
      label: "Home",
      path: "/home",
    },
    {
      id: 2,
      label: "Politics",
      path: "/politics",
    },
    {
      id: 3,
      label: "Tech",
      path: "/tech",
    },
  ];

  const handleNavbarTitleRedirect = (item) => {
    router.push(item?.path);
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

  // const connectMetaMask = async () => {
  //   const isConnected = await initWeb3();
  //   if (isConnected) {
  //     const signer = getSigner();
  //     // Use the signer to interact with Ethereum network
  //     console.log(signer);
  //     const address = await signer.getAddress();
  //     setWalletAddress(address);
  //   } else {
  //     // MetaMask not available or not connected
  //     console.log("MetaMask not available");
  //   }
  // };

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
      <nav className="navbar navbar-expand-lg ">
        <Box sx={styles.navbarbrand} onClick={() => router.push("/")}>
          <img src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png" />
        </Box>
        <Box sx={styles.searchBox}>
          <EnhancedSearch
            // rows={rows}
            // setRows={setRows}
            // originalRows={originalRows}
            // setRowsPerPage={setRowsPerPage}
            // setPage={setPage}
            sx={{ backgroundColor: "white" }}
          />
        </Box>
        <AuthenticationComponent
          callBackName={"uniqueCommunity"}
          open={open}
          handleModalClose={() => handleClose()}
        />
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <Box
            sx={{ ...styles.lightDark, ...styles.lightDarkMobile }}
            onClick={handleThemeSwitch}
          >
            {theme} Button <ToggleThemeBtn theme={theme} />
          </Box>
          <Box
            onClick={() => {
              router.push(`/new-blog/1`);
            }}
            style={{ cursor: "pointer" }}
          >
            <DriveFileRenameOutlineTwoToneIcon /> Create Blog
          </Box>
          {/* add metamask wallet */}
          <Box
            onClick={() => {
              connectMetaMask();
            }}
            style={{ cursor: "pointer" }}
          >
            <img src="/images/home/metamask.jpeg" style={{ width: "45px" }} />{" "}
            Connect Wallet
          </Box>
          <ul className="navbar-nav">
            {navbarCMSItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavbarTitleRedirect(item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            {isLoggin ? (
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-link px-3 me-2"
                  onClick={() => setOpen(true)}
                >
                  Login
                </button>
                {/* <button type="button" className="btn btn-primary me-3">
                  Sign up for free
                </button> */}
              </>
            )}
          </div>
        </div>
        {walletAddress && <div>{`Connected Wallet: ${walletAddress}`}</div>}
      </nav>
    </Box>
  );
};

export default HeaderComponent;
