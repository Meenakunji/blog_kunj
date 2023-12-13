const style = {
  commentSection: {
    marginTop: "30px",
    height: "500px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "10px",
    },
  },
  replaySectionBg: {
    backgroundColor: "#e8e8e8",
    padding: "20px",
    width: "300px",
    borderRadius: "20px 20px 20px 0px",
  },
  replaySection: {
    display: "flex",
    alignItems: "end",
    gap: "10px",
    marginBottom: "15px",
  },
  userProfile: {
    bottom: "22px",
    position: "relative",
    "& img": {
      width: "30px",
      borderRadius: "100px",
    },
  },
  replaySectionRight: {
    justifyContent: "right",
    padding: "0px 10px 0 0px",
  },
  replaySectionBgRight: {
    backgroundColor: "#63c49b",
    borderRadius: "20px 20px 0px 20px",
  },
  userDetails: {
    "& p": {
      color: "#c3c3c3",
      fontSize: "12px",
      marginTop: "5px",
    },
  },
};

export default style;
