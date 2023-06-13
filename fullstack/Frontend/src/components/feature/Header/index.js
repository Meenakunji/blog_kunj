import { Box, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./style";

const HeaderComponent = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  // set wallet socket ID for coin and wallet balance set connection

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
    {
      id: 4,
      label: "Entertainment",
      path: "/entertainment",
    },
    {
      id: 5,
      label: "Travel",
      path: "/travel",
    },
    {
      id: 6,
      label: "Sports",
      path: "/sports",
    },
  ];

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

  return (
    <>
      <AppBar position="relative">
        <Box>
          <Box sx={click ? styles.mainContainer : ""} onClick={() => Close()} />
          <Box sx={styles.navbar} onClick={(e) => e.stopPropagation()}>
            <Box className="nav-container">
              <Box className="nav-logo" onClick={() => router?.push("/")}>
                <Box className="fan__tigerDekstopLogo">
                  <img
                    src={"/images/home/bloggerlogo.png"}
                    alt="FanTiger Logo"
                    width={200}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    style={{ contentVisibility: "auto" }}
                  />
                </Box>
                <Box className="fan__TigerMobileLogo">
                  <img
                    src={"/images/newHome/Fan-tiger-mobilelogo.png"}
                    alt="mobile FanTiger logo"
                  />
                </Box>
              </Box>

              <Box className={click ? "nav-menu active" : "nav-menu"}>
                {!isMobile && (
                  <>
                    {navbarCMSItems?.map((item) => {
                      return (
                        <Link
                          prefetch={false}
                          href={""}
                          passHref
                          key={item?.id}
                        >
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            onClick={() => handleNavbarTitleRedirect(item)}
                          >
                            <Typography
                              variant="h6"
                              className="nav-item"
                              sx={{
                                color: "#fff",
                                display: "flex",
                                fontSize: "16px",
                              }}
                            >
                              {item?.label}
                            </Typography>
                          </Box>
                        </Link>
                      );
                    })}
                  </>
                )}
              </Box>

              <Box display="flex" sx={{ gap: 2 }}>
                <Typography
                  variant="h6"
                  onClick={() => console.log("hoiooo")}
                  sx={styles.loginWithGif}
                >
                  Login
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default HeaderComponent;
