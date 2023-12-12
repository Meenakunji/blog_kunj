const style = {
  mainContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "0px 20px 0 20px",
  },
  messageContainer: {
    display: "flex",
    width: "69%",
    flexFlow: "column",
    minWidth: "300px",
    overflow: "hidden",
    position: "relative",
  },
  UserDetailsConatiner: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    borderBottom: "1px solid #bcbcbcc3",
    padding: "10px 0",
    alignItems: "center",

    "& h1": {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "1.5",
      marginBottom: "5px",
    },
    "& span": {
      fontSize: "12px",
      fontWeight: "300",
      lineHeight: "1.5",
    },
  },
  userList: {
    borderBottom: "1px solid #c3c3c3",
  },
  chatgroupConatiner: {
    "& button.btnPopup": {
      position: "relative",
      display: "inline-block",
      borderRadius: "20px",
      margin: "0 8px",
      background: "#10a37f",
      color: "#fff",
      width: "100%",
      maxWidth: "100%",
      height: "40px",
      fontSize: "12px",
    },
    "& h2": {
      fontSize: "25px",
      marginBottom: "20px",
    },
  },
};

export default style;
