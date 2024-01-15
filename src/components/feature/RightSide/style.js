const styles = {
  profileRight: {
    textAlign: "center",
    "& img": {
      width: "120px",
      borderRadius: "100px",
      height: "120px",
    },
    "& p": {
      color: "#fff",
      fontSize: "20px",
      marginTop: "10px",
    },
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  followBtn: {
    background: "#A5CC51",
    borderRadius: "4px",
    color: "#FFF",
    fontSize: "12px",
    width: "100px",
    "&:hover": {
      background: "#A5CC51",
    },
  },
  subscribe: {
    borderRadius: "4px",
    border: "1px solid #c7c7c7",
    fontSize: "12px",
    width: "100px",
    color: "#c7c7c7",
  },
};
export default styles;
