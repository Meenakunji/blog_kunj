const style = {
  container: {
    display: "flex",
    marginTop: "80px",
    zIndex: "5",
    padding: "0 30px 0 30px",
    backgroundColor: "#fff",
  },
  mainSection: {
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
    textAlign: "center",
    marginBottom: "20px",
    backgroundImage:
      'url("https://demo2.joomshaper.com/2021/luxyort/images/demo/about-header-bg.jpg")',
    "& h2": {
      fontSize: "100px",
      background: "-webkit-linear-gradient(#fcfcfc, #5a20af)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    "& p": {
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: ".5px",
      background: "-webkit-linear-gradient(#ab7d7d, #78e204)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  section: {
    padding: "50px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    marginBottom: "20px",
  },
  icon: {
    width: "50px",
    marginBottom: "10px",
  },
  commentsection: {
    color: "#000",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
    flexDirection: "column",
    "& p": {
      fontSize: "20px",
      fontWeight: "500",
    },
    "& img": {
      width: "100%",
    },
    "& h3": {
      fontSize: "26px",
      fontWeight: "600",
    },
  },
  aboutPlay: {
    display: "flex",
    width: "800px",
    height: "560px",
    marginLeft: "15%",
    borderRadius: "10px",
    marginTop: "30px",
    flexDirection: "column",
  },
  aboutDetails: {
    color: "#000",
    display: "flex",
    alignItem: "center",
    textAlign: "left",
    flexDirection: "row",
    margin: "50px",
    gap: "20%",
    background: "-webkit-linear-gradient(#397113, #8f4cda)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    "& h1": {
      fontSize: "30px",
      lineHeight: "initial",
      width: "100%",
    },
    "& p": {
      fontSize: "20px",
      lineHeight: "initial",
      width: "100%",
    },
  },
  blogCategory: {
    display: "flex",
    justifyContent: "space-between",
    margin: "40px 12% 100px 12%",
  },
  categoryPart: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    color: "#000",
    "& h3": {
      fontSize: "30px",
      lineHeight: "2",
    },
    "& p": {
      fontSize: "18px",
      lineHeight: "2",
      background: "-webkit-linear-gradient(#6feb1b, #917aaa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  categoryPart1: {
    marginTop: "40px",
    display: "flex",
    gap: "20px",
    alignItem: "center",
    color: "#000",
    cursor: "pointer",
    "& h1": {
      fontSize: "16px",
      lineHeight: "initial",
    },
    "& body1": {
      fontSize: "14px",
      lineHeight: "initial",
    },
  },
  teamDetails: {
    color: "#000",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& h1": {
      fontSize: "40px",
      fontWeight: "500",
    },
    "& h2": {
      fontSize: "25px",
      fontWeight: "500",
    },
    "& body1": {
      fontSize: "16px",
      fontWeight: "500",
    },
  },
  detils: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "30%",
    margin: "72px 100px 50px 150px",
    alignItem: "center",
    "& img": {
      borderRadius: "7%",
    },
  },
  aboutDetailsRight: {
    display: "flex",
    flexDirection: "column",

    "& body1": {
      fontSize: "18px",
    },
    "& h1": {
      color: "#67e6ba",
      fontSize: "30px",
    },
    "& h2": {
      color: "#67e6ba",
      fontSize: "26px",
    },
  },
  socialMediaIcon: {
    display: "flex",
    gap: "58px",
    marginTop: "46px",
    cursor: "pointer",
  },
};

export default style;
