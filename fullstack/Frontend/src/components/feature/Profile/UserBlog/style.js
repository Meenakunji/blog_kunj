const style = {
  userBlogPost: {
    marginTop: "30px",
  },
  adminSection: {
    "& ul": {
      width: "50%",
      display: "flex",
      gap: "15px",
      padding: "0",
      margin: "0",
      "& li": {
        display: "flex",
        gap: "10px",
        backgroundColor: "#444343",
        width: "100%",
        border: "1px solid #626262",
        color: "#bababa",
        padding: "7px",
        "& svg": {
          fontSize: "16px",
        },
        "& p": {
          fontSize: "14px",
        },
      },
    },
  },
  postUser: {
    marginTop: "30px",
    " h1": {
      fontSize: "30px",
      fontWeight: "600",
      color: "white",
      marginBottom: "20px",
    },
    "& p": {
      fontSize: "13px",
      marginTop: "20px",
      fontWeight: "400",
      color: "#878787",
    },
    "& img": {
      width: "100%",
    },
    "& button": {
      marginTop: "10px",
      fontSize: "13px",
      borderRadius: "0",
      backgroundColor: "#444343",
      border: "1px solid #626262",
      color: "#bababa",
    },
  },
};

export default style;
