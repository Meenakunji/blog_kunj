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
    // gap: "20px",
    border: "1px solid #d5c8c8",
    borderRadius: "20px",
    alignItems: "center",

    "& h1": {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "1.5",
    },
    "& span": {
      fontSize: "12px",
      fontWeight: "300",
      lineHeight: "1.5",
    },
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
      maxWidth: "400px",
      height: "36px",
      fontSize: "12px",
    },
  },
};

export default style;
