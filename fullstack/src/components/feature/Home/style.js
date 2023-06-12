const style = {
  mainContainer: {
    display: "flex",
    background: "#000",
    flexFlow: "wrap",
    gap: "15px",
  },
  mediaCard: {
    width: "49%",
    marginTop: "30px",
    "& h1": {
      fontSize: "30px",
      fontWeight: 400,
    },
    "& img": {
      width: "100%",
      height: "400px",
      objectFit: "cover",
    },
  },
  blogTagcss: {
    borderRadius: "5px",
    width: "10%",
    height: "5%",
    margin: "2px 5px 2px",
    "& h1": {
      fontSize: "14px !important",
      fontWeight: "400",
      textAlign: "center",
      padding: "5px",
    },
  },
};

export default style;
