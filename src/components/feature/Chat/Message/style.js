const style = {
  userHeadSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  userDetail: {
    "& h1": {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "1.5",
    },
    "& span": {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "1.5",
    },
  },
  UserSettings: {
    display: "flex",
    justifyContent: "space-between",
    gap: "35px",
    alignItems: "center",
  },
  callIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: "2px solid #000",
    backgroundColor: "#f0f0f0",
    "& img": {
      borderRadius: "50%", // Ensure the image itself is circular
    },
  },
  chatSection: {
    display: "flex",
    flexDirection: "column",
    height: "520px",
    overflowY: "auto",
  },
  chatInputSection: {
    position: "absolute",
    bottom: "1px",
    width: "100%",
    "& span": {
      color: "gray",
      fontSize: "14px",
      fontWeight: "500",
    },
  },
  useInputSection: {
    backgroundColor: "#fff",
    border: "1px solid gray",
    borderRadius: "12px",
    boxShadow: "0 8px 24px hsla(210,8%,62%,.2)",
    boxSizing: "border-box",
    padding: "24px",
    transition: "all .2s ease-in-out",
    "& textarea": {
      backgroundColor: "transparent",
      marginBottom: "16px",
      marginTop: "3px",
      maxHeight: "200px",
      overflow: "auto",
      paddingRight: "8px",
      resize: "none",
      border: "none !important",
      width: "100%",
      color: "gray",
      minHeight: "20px",
      lineHeight: "20px",
      fontFamily: "inherit",
      fontSize: "inherit",
      "&:focus": {
        border: "none",
        outline: "none",
      },
    },
  },
  buttonSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    "& button": {
      backgroundColor: "#ececf1",
      color: "#353740",
      border: "none",
      borderRadius: "8px",
      textTransform: "none",
      cursor: "pointer",
      display: "inline-flex",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      justifyContent: "center",
      lineHeight: "1.4",
      position: "relative",
      transition: "box-shadow .3s,background-color .3s,color .3s",
      ":hover": {
        backgroundColor: "#f7f7f8",
      },
      "& img": {
        marginRight: "8px",
      },
    },
  },
};

export default style;
