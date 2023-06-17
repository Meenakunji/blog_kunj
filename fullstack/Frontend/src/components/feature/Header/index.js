//   return (
//     <>
//       {/* <AppBar position="relative">
//         <Box>
//           <Box sx={click ? styles.mainContainer : ""} onClick={() => Close()} />
//           <Box sx={styles.navbar} onClick={(e) => e.stopPropagation()}>
//             <Box className="nav-container">
//               <Box className="nav-logo" onClick={() => router?.push("/")}>
//                 <Box className="fan__tigerDekstopLogo">
//                   <img
//                     src={"/images/home/bloggerlogo.png"}
//                     alt="FanTiger Logo"
//                     width={200}
//                     height={100}
//                     loading="lazy"
//                     decoding="async"
//                     style={{ contentVisibility: "auto" }}
//                   />
//                 </Box>
//                 <Box className="fan__TigerMobileLogo">
//                   <img
//                     src={"/images/newHome/Fan-tiger-mobilelogo.png"}
//                     alt="mobile FanTiger logo"
//                   />
//                 </Box>
//               </Box>

//               <Box className={click ? "nav-menu active" : "nav-menu"}>
//                 {!isMobile && (
//                   <>
//                     {navbarCMSItems?.map((item) => {
//                       return (
//                         <Link
//                           prefetch={false}
//                           href={""}
//                           passHref
//                           key={item?.id}
//                         >
//                           <Box
//                             display="flex"
//                             justifyContent="space-between"
//                             alignItems="center"
//                             onClick={() => handleNavbarTitleRedirect(item)}
//                           >
//                             <Typography
//                               variant="h6"
//                               className="nav-item"
//                               sx={{
//                                 color: "#fff",
//                                 display: "flex",
//                                 fontSize: "16px",
//                               }}
//                             >
//                               {item?.label}
//                             </Typography>
//                           </Box>
//                         </Link>
//                       );
//                     })}
//                   </>
//                 )}
//               </Box>

//               <Box display="flex" sx={{ gap: 2 }}>
//                 <Typography
//                   variant="h6"
//                   onClick={() => console.log("hoiooo")}
//                   sx={styles.loginWithGif}
//                 >
//                   Login
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </AppBar> */}

//       <nav className="navbar navbar-expand-lg  bg-light">
//         {/* <a class="navbar-brand" href="#">
//           Navbar
//         </a> */}
//         <Box sx={styles.navbarbrand}>
//           <img src="/images/home/bloggerlogo.png" />
//         </Box>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//               <a class="nav-link" href="#">
//                 Home <span class="sr-only">(current)</span>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Link
//               </a>
//             </li>
//             <li class="nav-item dropdown">
//               <a
//                 class="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <a class="dropdown-item" href="#">
//                   Action
//                 </a>
//                 <a class="dropdown-item" href="#">
//                   Another action
//                 </a>
//                 <div class="dropdown-divider"></div>
//                 <a class="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </div>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled" href="#">
//                 Disabled
//               </a>
//             </li>
//           </ul>
//           <div class="d-flex align-self-end">
//             <button type="button" class="btn btn-link px-3 me-2">
//               Login
//             </button>
//             <button type="button" class="btn btn-primary me-3">
//               Sign up for free
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default HeaderComponent;

import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./style";
import AuthenticationComponent from "../auth";

const HeaderComponent = () => {
  const router = useRouter();
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
      <nav className="navbar navbar-expand-lg bg-light">
        <Box sx={styles.navbarbrand} onClick={() => router.push("/")}>
          <img src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png" />
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
                <button type="button" className="btn btn-primary me-3">
                  Sign up for free
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
