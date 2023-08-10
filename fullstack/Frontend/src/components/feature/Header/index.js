import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import WalletConnectProvider from "@walletconnect/web3-provider";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3Modal from "web3modal";
import eventBus from "../../../../utils/eventBus";
import { setTheme } from "../../../redux/slices/layout";
import ToggleThemeBtn from "../../common/Button/toggleButton";
import AuthenticationComponent from "../auth";
import styles from "../auth/style";
import DrawerComp from "./Drawer";

const Header = () => {
  const [value, setValue] = useState(0); // Default value for the first tab
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState("");
  const { theme } = useSelector((state) => state.layout);
  const isMatch = useMediaQuery("(max-width:768px)");
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
    cookie.set("appTheme", newTheme);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const connectWallet = async () => {
    if (!isLoggedIn) {
      eventBus.dispatch("openLoginModal", { function_name: "unique" });
    } else {
      try {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        const selectedAddress = accounts[0];
        setWalletAddress(selectedAddress);
        web3Modal.clearCachedProvider();
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    }
  };

  const handleCreateBlog = () => {
    if (!isLoggedIn) {
      eventBus.dispatch("openLoginModal", { function_name: "unique" });
    } else {
      router.push(`/new-blog/1`);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true,
        providerOptions: providerOptions,
      });

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

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "aec8651d16b0461a844ba5a6cc70e08c",
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

  return (
    <Box>
      <AuthenticationComponent
        callBackName={"uniqueCommunity"}
        open={open}
        handleModalClose={() => setOpen(false)}
      />
      <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <Typography sx={{ fontSize: "2rem" }}>Shoppee</Typography>
          {isMatch ? (
            <DrawerComp />
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
              <Tab label="Home" onClick={() => router.push(`/`)} />
              <Tab label="Create Blog" onClick={handleCreateBlog} />
              <Tab label="Pages" />
              <Tab label="Connect Wallet" onClick={connectWallet} />
              <Tab label="Help" />
            </Tabs>
          )}
          <Box
            sx={{ ...styles.lightDarkDesktop, ...styles.lightDarkMobile }}
            onClick={handleThemeSwitch}
          >
            <ToggleThemeBtn theme={theme} />
          </Box>
          <Button
            variant="contained"
            sx={{ marginLeft: "10px" }}
            onClick={() => setOpen(true)}
          >
            Login
          </Button>
          {/* <Button variant="contained" sx={{ marginLeft: "10px" }}>
            SignUp
          </Button> */}
        </Toolbar>
      </AppBar>
      {walletAddress && <div>{`Connected Wallet: ${walletAddress}`}</div>}
    </Box>
  );
};

export default Header;
