const style = {
  mediaCard: {
    "& h1": {
      fontSize: "30px",
      fontWeight: 400,
    },
    "& h2": {
      fontSize: "15px",
      fontWeight: "700",
      marginTop: "20px",
      color: "#5f5f5f",
    },
    "& img": {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    "& p": {
      fontSize: "14px",
      marginTop: "10px",
      color: "#5f5f5f",
      letterSpacing: "0.2px",
      "& a": {
        textDecoration: "none",
        color: "#a6a6a6",
      },
    },
  },
  cardBox: {
    boxShadow: "0 1px 3px rgba(32,33,36,.28)",
    padding: "15px",
    height: "100%",
    background: "#fff",
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
  chip: {
    borderRadius: "5px",
    width: "fit-content",
    padding: "2px 16px",
    color: "#fff",
    marginBottom: "10px",
    height: "26px",
    fontSize: "14px",
  },
  userdetails: {
    margin: "10px 0",
    display: "flex",
    gap: "10px",
  },
  howit__workSection: {
    position: "relative",
    marginTop: "60px",
    "& h2": {
      fontFamily: "Inter",
      fontSize: "50px",
      fontWeight: "700",
      color: "#0C091B",
      width: "100%",
      textAlign: "center",
      textTransform: "uppercase",
    },
  },
};

export default style;
