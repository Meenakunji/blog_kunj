const style = {
  chatInputSection: {
    // position: "absolute",
    bottom: "1px",
    width: "100%",
    "& span": {
      color: "gray",
      fontSize: "14px",
      fontWeight: "500",
    },
  },
  chatSection: {
    display: "flex",
    flexDirection: "column",
    // height: "520px",
    overflowY: "auto",
  },
  closeSideBar: {
    marginLeft: "auto",
    textAlign: "center",
    background: "#c3c3c3c3",
    width: "30px",
    height: "30px",
    borderRadius: "100%",
    color: "#686868",
    cursor: "pointer",
    "& svg": {
      fontSize: "20px",
    },
  },
  profileImg: {
    textAlign: "center",
    "& img": {
      width: "70px",
      height: "70px",
      borderRadius: "100%",
      border: "3px solid #329993",
      objectFit: "cover",
      marginBottom: "20px",
    },
    "& h3": {
      fontSize: "20px",
    },
  },
  notifications: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #c9c9c9",
    borderBottom: "1px solid #c9c9c9",
    padding: "15px 0",
    marginTop: "20px",
  },
  profileHeading: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    "& h5": {
      fontSize: "16px",
    },
    "& span": {
      fontSize: "12px",
    },
  },

  profileList: {
    "& ul": {
      padding: "0",
      marginTop: "20px",
      listStyle: "none",
      "& li": {
        color: "#898989",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
        "& svg": {
          fontSize: "18px",
          marginRight: "5px",
        },
      },
    },
  },
  gallerySection: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  galleryList: {
    width: "calc(50% - 5px)",

    // width "calc(50%  -20px)",
    "& img": {
      width: "100%",
      borderRadius: "10px",
    },
  },
};

export default style;
