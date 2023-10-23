const styles = {
  Container: {
    minWidth: "187px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    border: " 1px solid rgb(242, 242, 242)",
    padding: "24px",
    borderRadius: "4px",
    maxWidth: "220px",
    "& button": {
      borderColor: "#000",
      background: "green",
      color: "#fff",
      textAlign: "center",
      textDecoration: "none",
      borderStyle: "solid",
    },
  },
  mainConatiner: {
    "& a": {
      color: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      cursor: "inherit",
    },
  },
  userDetails: {
    display: "flex",
    alignItem: "center",
    marginTop: "12px",
    marginBottom: "4px",
    "& h2": {
      lineHeight: "14px",
      fontWeight: "500",
      color: "#000",
      fontSize: "16px",
      overflow: "hidden",
      maxHeight: "20px",
    },
    "& p": {
      lineHeight: "20px",
      fontWeight: "400",
      color: "#000",
      fontSize: "13px",
    },
  },
  descriptionConatiner: {
    marginBottom: "20px",
    marginTop: "12px",
    display: "block",
    "& p": {
      lineHeight: "20px",
      fontWeight: "400",
      color: "#000",
      fontSize: "13px",
    },
  },
};

export default styles;
