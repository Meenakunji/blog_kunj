const style = {
  footerSocail: {
    background: "#2f2f2f",
    width: "100%",
    padding: "20px 0",
  },
  footerSocailBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      color: "#fff",
      fontSize: "20px",
      fontWeight: "500",
    },
  },
  footer: {
    background: "#3c3c3c",
    padding: "20px 0",
  },
  footerList: {
    color: "#fff",
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
        color: "#fff",
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
