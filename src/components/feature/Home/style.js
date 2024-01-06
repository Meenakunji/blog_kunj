const style = {
  mediaCard: {
    cursor: "pointer",
    "& h1": {
      fontSize: "30px",
    },
    "& h2": {
      fontSize: "15px",
      marginTop: "20px",
      color: "#000",
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
  tagListBlogBox: {
    width: "32.333333%",
    cursor: "pointer",
    "@media(max-width:480px)": {
      width: "100%",
      "& h6": {
        fontSize: "25px",
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
  detailsComment: {
    cursor: "pointer",
    "& h2": {
      color: "#5f5f5f",
      fontSize: "24px",
      fontWeight: "600",
    },
    "& p": {
      color: "#5f5f5f",
    },
    "& ul": {
      color: "#5f5f5f",
    },
    "& ol": {},
    "& pre": {
      marginTop: "30px",
    },
    "@media(max-width:767px)": {
      display: "none",
      "& p": {
        fontSize: "14px",
        marginTop: "15px",
      },
      "& h2": {
        fontSize: "16px",
      },
    },
  },
  howit__workSection: {
    position: "relative",
    marginTop: "60px",
    "& h2": {
      fontFamily: "Inter",
      fontSize: "50px",
      color: "#0C091B",
      width: "100%",
      textAlign: "center",
      textTransform: "uppercase",
    },
  },
  headSection: {
    position: "relative",
    overflow: "hidden",
    "& img": {
      height: "500px",
      objectFit: "cover",
      "@media(max-width:767px)": {
        height: "380px",
        overflow: "unset",
        display: "none",
      },
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      content: "''",
      opacity: ".5",
      background: "#000",
      "@media(max-width:767px)": {
        display: "none",
      },
    },
    "@media(max-width:767px)": {
      overflow: "unset",
    },
  },
  ourNewRoom: {
    position: "absolute",
    top: "50%",
    width: "600px",
    zIndex: "3",
    transform: "translate(-50%, -50%)",
    left: "50%",
    "& h6": {
      color: "#fff",
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "25px",
      "@media(max-width:767px)": {
        marginBottom: "15px",
        fontSize: "20px",
        fontWeight: "500",
      },
    },
    "@media(max-width:767px)": {
      width: "100%",
      padding: "20px",
      position: "relative",
      transform: "unset",
      top: "50px",
      left: "0",
    },
  },
  inputSection: {
    position: "relative",
    "& input": {
      width: "100%",
      borderRadius: "100px",
      height: "50px",
      padding: "7px 35px",
      color: "#c3c3c3",
      border: "0",
      fontSize: "16px",
      position: "relative",
      "@media(max-width:767px)": {
        height: "39px",
        fontSize: "15px",
      },
    },
    "& button": {
      position: "absolute !important",
      top: "50%",
      right: "5px",
      background: "linear-gradient(52deg, #3498c3, #5fa4c9)",
      padding: "8px !important",
      width: "116px !important",
      fontSize: "16px",
      color: "#fff",
      transform: "translateY(-50%)",
      height: "37px",
      borderRadius: "100px",
      "&:hover": {
        /* Updated here */ background: "#1565d8",
      },
    },
  },
  SearchIcon: {
    position: "absolute",
    top: "50%",
    left: "10px",

    color: "#c5c1c1",
    transform: "translateY(-50%)",
    "& svg": {
      fontSize: "22px",
    },
  },
  popularTag: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
    "& p": {
      color: "#fff",
      fontSize: "14px",
    },
    "& button": {
      backgroundColor: "transparent",
      border: "1px solid #fff",
      borderRadius: "100px",
      padding: "5px 15px",
      color: "#fff",
      fontSize: "12px",
      "@media(max-width:480px)": {
        padding: "3px 10px",
      },
    },

    "@media(max-width:480px)": {
      flexWrap: "no-wrap",
    },
  },

  dFlex: {
    display: "flex",
  },
  topSectionDetails: {
    padding: "30px",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    "& h1": {
      fontSize: "35px",
      color: "#183b56",
      margin: "15px 0",
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
      width: "113px",
      cursor: "pointer",
    },
    "@media(max-width:767px)": {
      "& h1": {
        fontSize: "20px",
      },
      "& p": {
        display: "none",
      },
      padding: "15px",
    },
  },
  cardBottomSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "23px",
    "@media(max-width:767px)": {
      marginTop: "5px",
    },
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
    "& h5": {
      fontSize: "14px",
    },
  },
  date: {
    fontSize: "14px",
  },
  buttonGroup: {
    position: "relative",

    "&:after": {
      content: "''",
      filter: "blur(5px)",
      position: "absolute",
      top: "5px",
      left: "5px",
      right: "5px",
      bottom: "5px",
      background: "inherit" /* Inherit the gradient from the parent */,
      borderRadius: "10px",
      zIndex: "-1",
      background: "linear-gradient(to right, #47bbfd, #fd6860)",
    },
  },
  popularArticles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
    marginTop: "30px",
    "& h2": {
      fontSize: "40px",
      color: "#fff",
      "@media(max-width:767px)": {
        fontSize: "23px",
      },
    },
    "& p": {
      color: "#fff",
      fontSize: "14px",
      letterSpacing: "0.2px",
      marginTop: "10px",
      "@media(max-width:767px)": {
        fontSize: "12px",
        display: "-webkit-box",
        "-webkit-line-clamp": "2",
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  },
  popularArticlesDetails: {
    width: "50%",
    "@media(max-width:480px)": {
      width: "70%",
    },
    "@media(max-width:767px)": {
      width: "70%",
    },
  },
  popularArticlesList: {
    position: "relative",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    "&:after": {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0",
      bottom: "0",
      zIndex: "0",
      webkitTransition: "all 0.35s ease-in-out",
      transition: "all 0.35s ease-in-out",
      opacity: "1",
      background: "#364652",
      background: "linear-gradient(rgb(255 255 255 / 0%) 0%, #152532 71.87%)",
    },
  },
  popularArticlesHeading: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)",
    width: "100%",
    margin: "auto",
    zIndex: "2",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    cursor: "pointer",
    "& h3": {
      fontSize: "30px",
      color: "#fff",
      "@media(max-width:767px)": {
        fontSize: "20px",
        marginBottom: "15px",
      },
    },
    "& h4": {
      fontSize: "25px",
      color: "#fff",
      marginBottom: "10px",
      "@media(max-width:480px)": {
        fontSize: "20px",
      },
    },
    "& p": {
      color: "#fff",
      fontSize: "14px",
      letterSpacing: "0.2px",
      display: "-webkit-box",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

  caseStudySlider: {
    "& .slick-prev": {
      zIndex: "999",
      "&::before": {
        fontSize: "35px",
        zIndex: "99",
        opacity: "1",
        content: "''",
        width: "50px",
        height: "45px",
        background: "url(/images/home/left.svg) center center / contain no-repeat",
        position: "absolute",
        left: "0",
        top: "0",
        "@media(max-width:767px)": {
          display: "none",
        },
      },
    },
    "& .slick-next": {
      zIndex: "999",
      "&::before": {
        fontSize: "35px",
        zIndex: "99",
        opacity: "1",
        content: "''",
        width: "50px",
        height: "45px",
        background: "url(/images/home/right.svg) center center / contain no-repeat",
        position: "absolute",
        right: "0",
        top: "0",
        "@media(max-width:767px)": {
          display: "none",
        },
      },
    },
  },
  showListInput: {
    overflowY: "auto",
    height: "300px",
    position: "absolute",
    width: "100%",
    top: "100%",
    zIndex: "9",
    color: "#000",
    "& p": {
      textAlign: "center",
    },
    "& ul": {
      padding: "0",
      margin: "0",
      background: "#fff",

      "& li": {
        color: "#000",
        fontSize: "14px",
        fontWeight: "300",
        padding: "9px 15px",
        borderBottom: "1px solid #c3c3c3",
      },
    },
  },
  RecommendationBlogCSS: {
    position: "relative",
    top: "80px",
    zIndex: "5",
    padding: "0",
    marginBottom: "50px",
  },
  RecommendationBlogImgCSS: {
    width: "100%",
    height: "370px",
    objectFit: "fill",
  },

  recommendedImageCss: {
    width: "100%",
    height: "370px",
    objectFit: "fill",
    "@media(max-width:480px)": {
      height: "200px",
      objectFit: "cover",
    },
  },
  bookMarkedBlogList: {
    width: "32.333333%",
    "@media(max-width:760px)": {
      width: "100%",
    },
  },
};

export default style;
