const style = {
  leftSide: {
    width: "45%",
    marginTop: "30px",
    marginLeft: "20px",
  },

  categories: {
    borderBottom: "1px solid #413e3e",
    marginBottom: "20px",
    "& h4": {
      color: "#fff",
      fontSize: "15px",
      marginBottom: "20px",
      fontWeight: "500",
    },
    "& ul": {
      padding: "0",
      margin: "0",
      marginBottom: "20px",
      "& li": {
        backgroundColor: "#444343",
        border: "1px solid #626262",
        color: "#bababa",
        padding: "4px",
        display: "inline-block",
        margin: "10px 9px 0px 0px",

        "& p": {
          fontSize: "12px",
        },
      },
    },
    "&:last-child": { border: "none" },
  },
  recentPost: {
    marginTop: "10px",
    "& p": {
      fontSize: "13px",
      color: "#bababa",
      display: "flex",
      "& svg": {
        fontSize: "13px",
      },
      "& span": {
        display: "flex",
        alignItems: "center",
      },
    },
  },
};

export default style;
