import React from "react";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import { Box, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import AuthenticationComponent from "../auth";
import ToggleThemeBtn from "../../common/TheameBtn";
import { setTheme } from "../../../redux/slices/layout";
import { EnhancedSearch } from "../../common/SearchInput";
import cookie from "js-cookie";

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
      </nav>
    </Box>
  );
};

export default HeaderComponent;
