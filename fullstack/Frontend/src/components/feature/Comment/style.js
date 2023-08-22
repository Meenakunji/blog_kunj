const style = {
  
  commentBg: {
    height: "100%",
    position: "relative",
        "& img": {
            width: "100%",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      background: "rgb(6 5 5 / 54%)",
      width: "100%",
      height: "100%",
      left: "0",
      right: "0",
      top: "0",
    },
    },
  bannerBg: {
    background: "#fff",
    position: "absolute",
    bottom: "29px",
    width: "230px",
    zIndex: "9",
    padding: "10px",
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  profileName: {
    display: "flex",
    gap: "15px",
    "& p": {
      fontSize: "14px",
      color: "#fff",
      marginLeft: "10px",
    },
  },
  profileName: {
    "& span": {
      backgroundColor: "#ebf7f2",
      width: "16px",
      height: "16px",
      borderRadius: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "10px",
      "& svg": {
        fontSize: "12px",
        color: "#36b37e",
      },
    },
    "& h5": {
      fontSize: "15px",
      fontWeight: "700 !important",
    }
  },
  profileImg: {
    "& img": {
      width: "40px",
      height: "40px",
      borderRadius: "100px",
    },
  },
  dFlex: {
    display: "flex",
    alignItems:"center",
  },
  commentSectionBg: {
    borderRadius: "0px 20px 20px 20px",
    border: "1px solid #E5EAF4",
    background: "#FFF",
    boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.03)",
    padding: "40px",
  
  },
  commentSection: {
    position: "relative",
    top: "-30px",
  },
  bannerDetails: {
    "& h1": {
      color: "#183B56",
      fontSize: "70px",
      textAlign:"center",
    },
  },
  commentDetails: {
    borderTop: "1px solid #d8d8d8",
    borderBottom: "1px solid #d8d8d8",
    padding: "10px",
    marginTop: "30px",
  },
  commentList: {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
   
  },
  commentChatList: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: "10px",
      color: "#7A7A7A",
      fontSize: "13px",
    }
  },
  commentChat: {
    display: "flex",
    gap:"40px",
  },
  detailsComment: {
    "& p": {
      marginTop: "30px",
    },
    "& img": {
      marginTop: "30px",
    }
  },
  contentImg: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    "& img": {
      width: "47%",
    }
  },
  tagList: {
    marginTop: "30px",
    "& h4": {
      fontSize: "18px",
      color: "#585858",
    },
    "& p": {
      color: "#8F8F8F",
      fontSize: "14px",
    }
  },
  buttonTag: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    "& button": {
      border: "1px solid #585858",
      padding: "6px 20px",
      fontSize: "12px",
      backgroundColor: "transparent",
      color: "#585858",

    }
  }
  };
  
  export default style;
  