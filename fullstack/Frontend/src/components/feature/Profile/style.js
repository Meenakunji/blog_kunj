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
      fontWeight: "600",
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
};

export default style;
