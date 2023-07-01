const style = {
  formSection: {
    marginTop: "30px",
    background: "#fff",
    boxShadow: "0 2px 8px 1px rgba(64,60,67,.24)",
    padding: "20px",
    marginTop: "30px",
    "& h1": {
      fontSize: "25px",
      fontWeight: "500",
      marginBottom: "25px",
      color: "#4f4f4f",
    },
  },
  formRowSection: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    marginBottom: "15px",
  },
  formgroup: {
    width: "100%",

    "& label": {
      display: "block",
      fontSize: "14px",
      marginBottom: "10px",
      color: "#898989",
    },
    "& input": {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #c0c0c0",
      width: "100%",
      fontSize: "14px",
      color: "#898989",
      background: "#fff",
      "&:focus": {
        outlineStyle: "none",
        boxShadow: "none",
      },
    },
    "& textarea": {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #c0c0c0",
      width: "100%",
      fontSize: "14px",
      color: "#898989",
      background: "#fff",
      "&:focus": {
        outlineStyle: "none",
        boxShadow: "none",
      },
    },
  },
  buttongroup: {
    marginTop: "25px",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    "& button": {
      textAlign: "center",
      fontWeight: "600",
      width: "225px",
      maxWidth: "100%",
      background: "#a881af",
      borderRadius: "10px",
      height: "45px",
      lineHeight: "45px",
      color: "#000",
      textDecoration: "none",
      textTransform: "none",
      fontSize: "15px",
      "&:hover": {
        background: "#33b249",
      },
    },
  },
};

export default style;
