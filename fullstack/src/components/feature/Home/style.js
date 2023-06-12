const style = {
  mainContainer: {
    display: "flex",
    flexFlow: "wrap",
    gap: "15px",
  },
  mediaCard: {
    width: "49%",
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
};

export default style;
