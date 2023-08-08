const style = {
  mainContainer: {
    background: "green",
  },

  // farhan
  navbarbrand: {
    cursor: "pointer",
    "& img": {
      width: "90px",
    },
  },
  lightDark: {
    display: "flex",
    cursor: "pointer",
    animation: "fadeIn 5s",
    alignItems: "center",
    "& img": {
      width: "25px",
      height: "25px",
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
    "@media(max-width:480px)": {
      display: "none",
    },
  },
  lightDarkMobile: {
    "@media(max-width:480px)": {
      display: "flex",
      "& img": {
        width: "20px",
        height: "20px",
      },
    },
  },
  navbar: {
    color: "custom.white",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "2",
    "& .navbar-nav": {
      "& li": {
        fontSize: "15px",
        padding: "10px",
        "& a": {
          color: "custom.white",
          textDecoration: "none",
          fontWeight: "600",
        },
      },
      "& svg": {
        fontSize: "19px",
      },
    },
    "& .scrolled": {
      backgroundColor: "custom.PrimaryBgColor",
      transition: "all 0.3s se4c",
      boxShadow: "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
    },
  },
  searchBox: {
    // marginBottom: "30px",
    // marginTop: "30px",
    marginLeft: "94px",
    width: "30%",
    "& input": {
      position: "absolute",
      bottom: "-6px",
    },
  },
  createblog: {
    fontSize: "14px",
    "& svg": {
      fontSize: "15px",
    },
  },

  lightDarkDesktop: {
    "& button": {
      backgroundColor: "custom.white",
      fontSize: "13px",
      gap: "6px",
      borderRadius: "100px",
      color: "custom.ebony",
      padding: "5px 23px",
      height: "30px",
      width: "109px",
      "& svg": {
        color: "custom.ebony",
        fontSize: "18px",
      },
      "&:hover": {
        backgroundColor: "custom.white",
      },
    },
  },

  lightDarkMobile: {
    "@media(max-width:480px)": {
      display: "flex",
      "& img": {
        width: "20px",
        height: "20px",
      },
    },
  },
};

export default style;
