const style = {
  footerSocail: {
    backgroundColor: "custom.footerTop",
    width: "100%",
    padding: "20px 0",
  },
  footerSocailBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      color: "custom.white",
      fontSize: "20px",
      fontWeight: "500",
    },
  },
  footer: {
    backgroundColor: "custom.footer",
    padding: "20px 0",
  },
  footerList: {
    color: "custom.white",
    "& h5": {
      fontSize: "20px",
      marginBottom: "10px",
    },
    "& p": {
      fontSize: "14px",
    },
    "& ul": {
      padding: "0",
      margin: "0",
      "& li": {
        fontSize: "15px",
        color: "custom.white",
        padding: "6px 0",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        "& svg": {
          fontSize: "18px",
        },
        "&:last-child": {
          padding: "0px",
        },
      },
    },
  },
};

export default style;
