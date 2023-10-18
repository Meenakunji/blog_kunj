const style = {
  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  profileLeftSide: {
    "& img": {
      width: "80px",
      height: "80px",
      borderRadius: "100px",
      border: "2px solid #fff",
    },
  },
  profileRightSide: {
    "& h4": {
      fontSize: "20px",
      color: "#fff",
    },
    "& p": {
      fontSize: "12px",
      color: "#fff",
    },
  },
  profileDetails: {
    display: "flex",
    alignItems: "self-start",
    justifyContent: "space-between",
  },

  aboutSection: {
    display: "flex",
    flexDirection: "column",
    width: "65%",
    alignItems: "center",
    margin: "auto",
    "& h4": {
      fontSize: "20px",
      color: "#fff",
    },
    "& p": {
      fontSize: "12px",
      color: "#fff",
    },
  },
};

export default style;
