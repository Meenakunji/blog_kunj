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
      {/* <AppBar position="relative">
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
      </AppBar> */}

      <nav className="navbar navbar-expand-lg  bg-light">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <Box sx={styles.navbarbrand}>
          <img src="/images/home/bloggerlogo.png" />
        </Box>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
