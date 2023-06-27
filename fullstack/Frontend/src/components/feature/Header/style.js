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
    backgroundColor: "custom.PrimaryBgColor",
    color: "custom.white",

    "& .navbar-nav": {
      "& li": {
        fontSize: "15px",
        padding: "10px",
        "& a": {
          color: "#fff",
          textDecoration: "none",
          fontWeight: "600",
        },
      },
      "& svg": {
        fontSize: "19px",
      },
    },
    "& .scrolled": {
      background: "#2f2f2f",
      transition: "all 0.3s ease",
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
};

export default style;
