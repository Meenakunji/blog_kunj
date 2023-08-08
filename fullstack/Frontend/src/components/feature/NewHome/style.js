const style = {

// headSection

headSection:{
  position: "relative",
  overflow: "hidden",
  "& img":{
    borderRadius:"0 0 50% 50%/0 0 30% 30%",
    transform:"scaleX(1.1)",
    height: "500px",
    objectFit: "fill",
  },
"&:after":{
  position: "absolute",
  zIndex: "1",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  content: "''",
  opacity: ".5",
  background: "#000",
  borderRadius:"0 0 50% 50%/0 0 30% 30%",
  transform:"scaleX(1.1)",
}
},
ourNewRoom:{
  position: "absolute",
  top: "50%",
  width: "600px",
  zIndex: "3",
  transform: "translate(-50%, -50%)",
  left: "50%",
"& h6":{
  color: "#fff",
  fontSize: "30px",
  fontWeight: "600",
  textAlign: "center",
  marginBottom: "25px",
}
},
inputSection:{
  position: "relative",
  "& input":{
    width: "100%",
    borderRadius: "5px",
    height: "40px",
    padding: "10px 30px",
    color: "#c3c3c3",
    border: "0",
    fontSize: "14px",
    position: "relative",
 
  },
  "& button":{
    position: "absolute",
    top: "50%",
    right: "5px",
    background: "#1565d8",
    padding: "4px",
    width: "75px",
    fontSize: "12px",
    color: "#fff",
    transform: "translateY(-50%)",
    "&:hover":{
      background: "#034db7",
    }
  }
},
SearchIcon:{
  position: "absolute",
  top: "50%",
  left: "5px",

  color: "#c5c1c1",
  transform: "translateY(-50%)",
  "& svg":{
    fontSize: "22px",
  }
},
popularTag:{
  display: "flex", alignItems: "center",
  gap: "10px",
  marginTop: "20px",
  "& p":{
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
  },
  "& button":{
    backgroundColor: "transparent",
    border: "1px solid #fff",
    padding: "5px 15px",
    color: "#fff",
    fontSize: "12px",
  }
},

  dFlex: {
    display: "flex",
  },
  topSectionDetails: {
    padding: "30px",
    "& h1": {
      fontSize: "35px",
      color: "#183b56",
      margin: "15px 0",
      fontWeight: "600",
    },
    "& p": {
      color: "#798b9b",
      fontSize: "14px",
      letterSpacing: "0.2px",
    },
    "& button": {
      color: "#63c49b",
      padding: "6px 15px",
      borderRadius: "100px",
      fontSize: "12px",
      backgroundColor: "#ebf7f2",
    },
  },
  cardBottomSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "23px",
  },
  profileDetails: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
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
  },
  date: {
    fontSize: "14px",
  },

  popularArticles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
    "& h2": {
      fontSize: "40px",
      color: "#183b56",
      fontWeight: "600",
    },
    "& p": {
      color: "#798b9b",
      fontSize: "14px",
      letterSpacing: "0.2px",
      marginTop: "10px",
    },
    "& button": {
      color: "#1565d8",
      padding: "6px 15px",
      borderRadius: "5px",
      fontSize: "12px",
      fontWeight:"600",
      backgroundColor: "transparent",
      border: "2px solid #1565d8",
      "& svg": {
        fontSize: "14px",
        marginLeft: "5px",
      },
    },
  },
  popularArticlesDetails: {
    width: "50%",
  },
  popularArticlesList: {
    position:"relative",
    borderRadius: "15px",
    overflow: "hidden",
    "&:after":{
      content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    zIndex: "0",
    "webkitTransition": "all 0.35s ease-in-out",
    transition: "all 0.35s ease-in-out",
    opacity: "1",
    background: "#364652",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.0018382353) 0%, #163247 100%)",
    }
  },
  popularArticlesHeading:{
    position: "absolute", bottom: "20px",
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)",
    width: "70%",
    margin: "auto",
    zIndex: "2",
    "& h3":{
      fontSize: "30px",
      color: "#fff",
      
    },
    "& h4":{
      fontSize: "25px",
      color: "#fff",
      marginBottom: "10px",
    },
    "& p": {
      color: "#fff",
      fontSize: "14px",
      letterSpacing: "0.2px",
    },
  }
};

export default style;
