const style = {
  footerContainer: {
    position: "relative",
    width: "100vw",
    background: "#0C091B",
    color: "#FFF",
  },
  whatsApp: {
    position: "fixed",
    right: "25px",
    bottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "10px 15px",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "10px",
    background: "#1e1b3d",
    cursor: "pointer",
    zIndex: "100",
    textDecoration: "none",
    "& img": {
      marginRight: "12px",
      width: "35px",
      height: "35px",
    },
    "@media(max-width:767px)": {
      padding: "0",
      border: "none",
      bottom: "104px",
      "& span": {
        display: "none",
      },
      "& img": {
        width: "35px",
        height: "35px",
      },
    },
  },
  cookiesContainer: {
    display: "block",
    borderRadius: "8px",
    marginLeft: "20px",
    "& h4": {
      fontSize: "24px",
      fontWeight: "700",
      color: "#fff",
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
      // textAlign: "center",
    },
    "& span": {
      position: "relative",
      display: "block",
      fontWeight: "400",
      color: "#fff",
      fontSize: "14px",
      lineHeight: "22px",
      textAlign: "left",
      marginBottom: "24px",
    },
    "& img": {
      textAlign: "center !important",
      position: "absolute !important",
      width: "93px",
      height: "93px",
    },
    "@media(max-width:480px)": {
      width: "90%",
      marginLeft: "0px",
    },
  },
  cookiesRoot: {
    display: "flex",
    "@media(max-width:480px)": {
      flexDirection: "column",
      "& img": {
        width: "70px",
        height: "70px",
        marginBottom: "20px",
        justifyContent: "center",
      },
    },
  },

  fantiger__Footer: {
    backgroundColor: "#0C091B",
    padding: "30px 0",
  },
  fanLogo__footer: {
    "@media (max-width:767px)": {
      textAlign: "center",
    },
  },
  linebreak: {
    width: "100%",
    height: "5px",
    backgroundImage:
      "linear-gradient(to right, #E14084 0%, #3454FA 53.16%, #54B5BB 100%)",
  },
  linebreak__footer: {
    width: "100%",
    height: "1px",
    backgroundImage:
      "linear-gradient(to right, #E14084 0%, #3454FA 53.16%, #54B5BB 100%)",
    marginTop: "25px",
    "@media (max-width:767px)": {
      width: "78%",
      margin: "20px auto 0",
    },
  },
  footerList: {
    textAlign: "right",
    "& ul": {
      padding: "0",
      margin: "0",
      display: {
        xs: "flex",
        mobile: "flex",
        tablet: "unset",
        lg: "unset",
        xl: "unset",
      },
      justifyContent: {
        xs: "space-between",
        mobile: "space-between",
        tablet: "unset",
        lg: "unset",
        xl: "unset",
      },
      "& li": {
        display: "inline-block",
        color: "#fff",
        paddingLeft: "40px",
        fontWeight: "500",
        fontSize: "16px",
        "&:hover": {
          color: "#E14084",
        },
        "&:first-child": {
          paddingLeft: "0",
        },
        "@media (max-width:767px)": {
          paddingLeft: "0",
        },
      },
    },
    "@media (max-width:767px)": {
      textAlign: "left",
    },
  },

  footerList__ContactDetails: {
    "& ul": {
      margin: "0",
      padding: "0",
      listStyle: "none",

      "& li": {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "400",
        "&:last-child span": {
          paddingBottom: "0",
        },
        "& img": {
          float: "left",
          marginRight: "10px",
        },
        "& span": {
          display: "flex",
          paddingBottom: "30px",
        },
      },
    },
  },

  footerList__socialIcon: {
    textAlign: "right",
    marginTop: "20px",
    "& ul": {
      padding: "0",
      margin: "0",
      display: {
        xs: "flex",
        mobile: "flex",
        tablet: "unset",
        lg: "unset",
        xl: "unset",
      },
      justifyContent: {
        xs: "space-between",
        mobile: "space-between",
        tablet: "unset",
        lg: "unset",
        xl: "unset",
      },
      "& li": {
        display: "inline-block",
        color: "#fff",
        fontWeight: "500",
        fontSize: "16px",
        width: "39px",
        marginLeft: "12px",
        cursor: "pointer",
        "&:first-child": {
          marginLeft: "0px",
        },
        "@media (max-width:767px)": {
          marginLeft: "17.4px",
        },
        "@media (max-width:480px)": {
          width: "38px",
          marginLeft: "12px",
        },
        "@media (max-width:360px)": {
          width: "36px",
        },
      },
    },
    "@media (max-width:480px)": {
      textAlign: "left",
    },
  },

  fantiger__FooterBottm: {
    marginBottom: "20px",
  },

  follow__socialIcon: {
    position: "relative",
    "& h5": {
      color: "#fff",
      fontSize: "14px",
      fontWeight: "400",
      textAlign: "right",
      "@media (max-width:767px)": {
        textAlign: "left",
      },
    },
    "&:after": {
      left: "auto",
      top: "10px",
      content: "''",
      position: "absolute",
      borderBottom: "1px solid #D9D9D9",
      width: "200px",
      right: "102px",
      margin: "auto",
      "@media (max-width:767px)": {
        width: "60%",
        left: "102px",
        right: "auto",
      },
    },
  },
  fanTiger__footerCopyright: {
    display: "flex",
    color: "#fff",
    justifyContent: "space-between",
    marginTop: "25px",
    "@media (max-width:767px)": {
      flexDirection: "column",
      fontSize: "11px",
      textAlign: "center",
    },
  },
  orderchange: {
    "@media (max-width:767px)": {
      order: "2",
      marginTop: "20px",
    },
  },
  listContainer: {
    backgroundColor: "#000",
    width: "180px",
    "@media(max-width:480px)": {
      width: "165px",
    },
    "& li": {
      "& p": {
        color: "#fff",
        cursor: "pointer",
        marginLeft: "10px",
      },
    },

    "& img": {
      cursor: "pointer",
      backgroundColor: "#000",
    },
  },

  sidebar: {
    background: "#0C0A1D",
    display: "none",
    width: "140px",
    flexDirection: "column",
    flex: "0 0 140px",
    height: "auto",
    "@media(max-width:668px)": {
      display: "block",
      position: "fixed",
      bottom: "0",
      width: "100%",
      zIndex: "999",
      left: "0",
      right: "0",
    },
  },
  sidebarNav: {
    "& ul": {
      margin: "0",
      padding: "0",
      "@media(max-width:668px)": {
        display: "flex",
      },
      "& li": {
        display: "block",
        fontWeight: "600",
        fontSize: "15px",
        color: "#fff",
        textAlign: "center",
        padding: "13px",
        cursor: "pointer",

        "& span": {
          // border: "1px solid #888BA8",
          // borderRadius: "100px",
          // width: "55px",
          // height: "55px",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          // marginBottom: "10px",
          "& img": {
            width: "28px",
            height: "28px",
          },
        },
        "@media(max-width:668px)": {
          width: "100%",
          padding: "8px 0",
          fontSize: "12px",
          fontWeight: "600",
          "&:nth-child(5)": {
            display: "none",
          },
          "&:nth-child(6)": {
            display: "none",
          },

          "& span": {
            width: "40px",
            height: "40px",
          },
          "& img": {
            width: "20px",
            marginRight: "0",
          },
        },
      },
    },
    "& .activeNav": {
      background: "#16132D",
      color: "#E14084",
    },
  },
};

export default style;
