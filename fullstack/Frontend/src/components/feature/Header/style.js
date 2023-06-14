const style = {
  mainContainer: {
    background: "green",
  },
  navbar: {
    backgroundColor: "#111329",
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    position: "sticky",
    top: "0",
    zIndex: "99",
    padding: "0 15px",

    "@media (max-width:767px)": {
      height: "70px",
      position: "fixed",
      top: "0",
      zIndex: "999",
      width: "100%",
    },
    "& .nav-container": {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      fontWeight: "400",
      // alignItems: "center",
      width: "100%",
      height: "75px",
      maxWidth: "1500px",
      "@media (max-width:1024px)": {
        maxWidth: "100%",
      },
      "@media (max-width:767px)": {
        maxWidth: "100%",
      },
      "& .nav-logo": {
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        display: "flex",
        marginRight: "80px",

        "@media (max-width:767px)": {
          position: "relative",
          marginRight: "30px",
        },

        "& .fan__tigerDekstopLogo": {
          " & img": {
            width: "165px",
            display: "block",
          },

          "@media (max-width:767px)": {
            display: "none",
          },
        },
        "& .fan__TigerMobileLogo": {
          display: "none",
          "@media (max-width:767px)": {
            display: "block",
            height: "46px",
            width: "41px",
          },
        },
      },
      "& .nav-menu": {
        display: "flex",
        cursor: "pointer",
        // paddingLeft: "20px",
        paddingRight: "40px",
        alignItems: "center",
        marginLeft: "3%",
        "@media (max-width:767px)": {
          height: "100vh",
          alignItems: "unset",
        },
        "@media (max-width:1900px)": {
          fontSize: "16px",
        },
        "& .nav-item": {
          marginRight: "28px",
          fontWeight: "500",
          listStyle: "none",
          display: "flex",
          "&:hover": {
            color: "#E14084",
          },

          "@media (max-width:1368px)": {
            fontSize: "16px",
            marginRight: "40px",
          },
          "@media (max-width:1200px)": {
            fontSize: "14px",
            marginRight: "40px",
          },
          "@media (max-width:1199px)": {
            fontSize: "14px",
            marginRight: "40px",
            fontWeight: "400",
          },
          "@media (max-width:767px)": {
            fontSize: "16px",
            marginRight: "0",
          },
        },
      },
    },
  },
  account__Wallet: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    display: "flex",
    "& .dollartorupees_Fan": {
      width: "22px",
      height: "22px",
      borderRadius: "100px",
      border: "2px solid #fff",
      fontSize: "14px",
      lineHeight: "18px",
      textAlign: "center",
    },
    "& .user__CoinFull": {
      position: "relative",
      display: "flex",
      backgroundColor: "#fff",
      borderRadius: "100px",
      fontSize: "14px !important",
      fontWeight: "400",
      padding: "0px 6px 0 0px",
      color: "#000",
      alignItems: "center",
      cursor: "pointer",
      "@media (max-width:1200px)": {
        fontSize: "14px !important",
      },
      "& span": {
        marginLeft: "8px",
        "@media (max-width:480px)": {
          fontSize: "12px",
          marginLeft: "5px",
        },
      },
    },
    "& .Wallet__Details": {
      padding: "1px 7px",
      cursor: "pointer",
      "& span": {
        marginLeft: "8px",
        "@media (max-width:480px)": {
          fontSize: "12px",
          marginLeft: "5px",
        },
      },

      "@media (max-width:480px)": {
        padding: "2px 7px",
      },
    },
    "& .user": {
      height: "24px",
      cursor: "pointer",
      "@media (max-width:767px)": {
        display: "none",
      },
    },
  },
  Communityimg: {
    cursor: "pointer",
    "& span": {
      verticalAlign: "middle",
    },
  },
  loginWithGif: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px !important",
    fontWeight: "600",

    "@media(max-width:480px)": {
      padding: "5px 10px 5px 10px",
      width: "auto",
      marginRight: "0px",
      fontSize: "14px !important",
    },
  },
  invitePopupBox: {
    position: "relative",
    display: "block",
    width: "100%",
    maxWidth: "600px",
    background: "#fff",
    margin: "auto",
    borderRadius: "20px",
    top: "50%",
    padding: "15px 30px 0",
    transform: "translateY(-50%)",
    "& > a": {
      position: "absolute",
      top: "15px",
      right: "15px",
      zIndex: "3",
      "@media(max-width:480px)": {
        position: "relative",
        display: "block",
        left: "93%",
      },
    },
    "@media(max-width:767px)": {
      width: "90%",
    },
  },
  inviteHeader: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "0 25px 10px",
    "& h4": {
      fontSize: "24px",
      fontWeight: "700",
    },
    "& p": {
      paddingTop: "8px",
      fontSize: "14px",
      fontWeight: "400",
      color: "#E14084",
    },
    "@media(max-width:480px)": {
      padding: "0 0px 10px",
    },
  },
  inviteBody: {
    position: "relative",
    padding: "0 30px",
    "& > div": {
      position: "relative",
      background: "#e9edfe",
      borderRadius: "10px",
      padding: "18px 20px",
      fontWeight: "500",
      marginBottom: "20px",
      "& span": {
        fontWeight: "600",
        fontSize: "16px",
      },
      "& ul": {
        listStyle: "none",
        fontWeight: "500",
        fontSize: "14px",
        "& li": {
          padding: "2.5px 0 2.5px 23px",
          "&:before": {
            content: "''",
            position: "absolute",
            width: "11px",
            height: "11px",
            top: "10px",
            borderRadius: "50%",
            background: "rgba(52, 84, 250, 0.5)",
            border: "1px solid #3454FA",
            left: "0",
          },
        },

        "& li:last-child::after": {
          display: "none",
        },
        "& li:last-child::before": {
          background: "none",
        },
      },
      "@media(max-width:480px)": {
        padding: "10px",
        marginBottom: "10px",
        "& li": {
          "&:after": {
            height: "38px !important",
          },
        },
      },
    },
    "@media(max-width:480px)": {
      padding: "0",
    },
  },
  inviteFooter: {
    position: "relative",
    padding: "0 30px",
    "& span": {
      color: "rgba(0, 0, 0, 0.54)",
      marginBottom: "8px",
      position: "relative",
      display: "block",
    },
    "@media(max-width:480px)": {
      padding: "0",
    },
  },
  linkContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px dashed rgba(0, 0, 0, 0.9)",
    borderRadius: "10px",
    marginBottom: "20px",
    cursor: "pointer",
    "& a": {
      color: "#E14084",
      textDecoration: "underline",
    },
  },
  linkText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: " 500",
    fontSize: "16px !important",
    lineHeight: "19px !important",
    color: "#FFFFFF",
    cursor: "pointer",
    padding: "0px 20px !important",
  },
  socialContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    "& > button": {
      marginRight: "5%",
      textAlign: "center",
      marginBottom: "25px",
    },
    "& p": {
      fontSize: "12px",
      color: "rgba(0, 0, 0, 0.75)",
    },
  },

  copied: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    linHeight: "17px",
    color: "#E14084",
    textAlign: "center",
  },
  tradingActivitymarket: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "100px",
    height: "35px",
    background:
      "linear-gradient(90.48deg, #E14084 3.73%, #3454FA 53.09%, #54B5BB 96.58%)",
    borderRadius: "6px",
    color: "white",
    borderRadius: "8px",
    padding: "5px 5px 5px 10px",
    marginLeft: "0",
    marginRight: "20px",
    marginBottom: "0",
    "& h6": {
      fontSize: "14px",
      fontWeight: "600",
    },
    "& img": {
      display: "block !important",
      marginLeft: "0",
      width: "45px !important",
    },
    "@media(max-width:480px)": {
      padding: "0",
      width: "29px",
      height: "29px",
      marginRight: "0px !important",
      "& img": {
        display: "none",
        marginRight: "0",
      },
    },
  },
  INRdropdownContainerMobileView: {
    maxWidth: "100%",
    marginLeft: "20px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    marginTop: "15px",
    "& span": {
      marginRight: "10px",
    },
    "@media(max-width:480px)": {
      marginLeft: "0px",
      marginBottom: "15px",
    },
  },
  mobileINR: {
    marginRight: "-75px",
    "& button": {
      backgroundColor: "#19132b",
      border: "none",
      padding: "7px 15px",
      borderRadius: "100px",
      fontSize: "16px",
      fontWeight: "600 !important",
      color: "#0C091B",
      border: "2px solid #fff",
      color: "#fff",
      marginLeft: "-1px",
      "@media(max-width:480px)": {
        padding: "3px 7px",
        fontSize: "12px",
      },
    },
    "& .activeBtn": {
      color: "#000",
      backgroundColor: "#fff",
    },
    "@media(max-width:480px)": {
      marginRight: "0",
    },
  },
  INRdropdown: {
    "@media(max-width:480px)": {
      "& #select-country-select-one": {
        paddingRight: "20px",
      },
    },
  },
  INRdropdownContainer: {
    maxWidth: "120px",
    "& .MuiMenu-list": {
      padding: "0 !important",
    },

    "@media(max-width:480px)": {
      maxWidth: "120px",
      marginLeft: "20px",
    },
    "@media(max-width:1900px)": {
      textAlign: "center",
      display: "flex",
    },
  },
  mainContainer: {
    backgroundColor: "#111329",
  },

  NavIcon: {
    display: "flex",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#fff",
    alignItems: "center",
  },
  closeNav: {
    display: "flex",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#fff",
    marginTop: "10px",
    position: "fixed",
    right: "15px",
    top: "10px",
    zIndex: "9",
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  name: {
    fontSize: "16px",
    fontWeight: "500",
  },
  email: {
    fontSize: "12px",
    fontWeight: "400",
    marginBottom: "10px",
  },
  buttonSection: {
    display: "flex",
    alignItems: "end",
    height: "100px",
    "& button": {
      background: "#fff",
      borderRadius: "100px",
      padding: "9px 27px",
      color: "#16132D",
      fontWeight: "700 !important",
    },
  },

  // farhan

  navbarbrand: {
    "& img": {
      width: "90px",
    },
  },
};

export default style;
