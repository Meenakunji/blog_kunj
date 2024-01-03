const style = {
  mainContainer: {
    // color: "red",
    "& h5": {
      fontSize: "18px",
    },
  },
  blogContainer: {
    width: "80%",
    margin: "auto",
  },
  blogHeading: {
    marginTop: "30px",
    "& h1": {
      fontSize: "40px",
      color: "#fff",
      lineHeight: "40px",
    },
  },
  profileBlogDetails: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  profileImg: {
    marginTop: "30px",
    "& img": {
      width: "50px",
      height: "50px",
      borderRadius: "100px",
    },
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
  blogDetails: {
    marginTop: "40px",
  },
  blogImg: {
    "& img": {
      width: "100%",
    },
  },
  blogContent: {
    "& h2": {
      fontSize: "24px",
      color: "#fff",
      margin: "30px 0",
    },
    "& p": {
      fontSize: "15px",
      margin: "30px 0",
      color: "#bebebe",
    },
  },

  userDetails: {
    borderBottom: "1px solid #2b2b2b",
    borderTop: "1px solid #2b2b2b",
    marginTop: "30px",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    justifyContent: "space-between",
  },
  userBlog: {
    display: "flex",
    gap: "15px",
    "& p": {
      fontSize: "13px",
      color: "#959595",

      "& svg": {
        fontSize: "18px",
        marginRight: "5px",
      },
    },
  },
  codeSection: {
    background: "#333333",
    border: "1px solid #555555",
    padding: "25px",
    maxWidth: "70%",
    margin: "30px auto",
  },
  listingBlog: {
    paddingTop: "120px",
  },
  listingBlogHeading: {
    marginBottom: "60px",
    textAlign: "center",

    "& h2": {
      fontSize: "48px",
      color: "#183B56",
      "@media(max-width:480px)": {
        fontSize: "25px",
      },
    },
    "@media(max-width:480px)": {
      marginBottom: "30px",
    },
  },
  listingBlogDetails: {
    "& h3": {
      fontSize: "31px",
      color: "#183B56",
      cursor: "pointer",
      "@media(max-width:480px)": {
        fontSize: "20px",
      },
    },
    "& p": {
      fontSize: "18px",
      color: "#5A7184",
      marginTop: "20px",
      "@media(max-width:480px)": {
        fontSize: "14px",
      },
    },
  },
  tagListing: {
    display: "flex",
    gap: "14px",
    marginTop: "20px",
    flexWrap: "wrap",
    "& button": {
      borderRadius: "4px",
      background: "#E1E1E1",
      padding: "6px 20px",
      color: "#000000",
      fontSize: "12px",
    },
  },
  listDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    "@media(max-width:480px)": {
      marginTop: "10px",
    },
  },
  list: {
    "& ul": {
      display: "flex",
      gap: "25px",
      "& li": {
        color: "#000",
        padding: "0",
        fontSize: "14px",
        width: "auto",
      },
      "@media(max-width:480px)": {
        gap: "10px",
        "& li": {
          fontSize: "10px",
        },
      },
    },
  },
  blogIcon: {
    "& ul": {
      display: "flex",
      gap: "20px",
      "& li": {
        width: "auto",
        padding: "0",
        fontSize: "17px",
        color: "#7A7A7A",
      },
      "@media(max-width:480px)": {
        gap: "10px",
        "& li": {
          "& svg": {
            fontSize: "18px",
          },
        },
      },
    },
  },
  postCard: {
    transition: "transform .25s ease,box-shadow .25s ease",
    "& img": {
      borderRadius: "15px",
      cursor: "pointer",
      "@media(max-width:480px)": {
        width: "100% !important",
      },
    },
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
  listingSection: {
    marginBottom: "50px",
    "@media(max-width:480px)": {
      marginBottom: "25px",
    },
  },

  // blogTagList
  ContainerBlogListComp: {
    marginTop: "30px",
    background: "#fff",
    padding: "20px",
    color: "#000",
  },
  bannerConatiner: {
    display: "flex",
    justifyContent: "center",
  },
  subConatiner: {
    width: "100%",
    minWidth: "0",
    maxWidth: "1192px",
    margin: "0px 24px 56px",
  },
  bannerContent: {
    textAlign: "center",
    display: "block",
    "& h2": {
      letterSpacing: "-0.011em",
      lineHeight: "52px",
      fontSize: "42px",
      fontWeight: "500",
      color: "#000",
    },
  },
  topicCSS: {
    fontSize: "16px",
    fontWeight: "400",
    marginTop: "16px",
    lineHeight: "24px",
    marginBottom: "24px",
    display: "flex",
    justifyContent: "center",
  },
  followBtn: {
    display: "block",
    "& button": {
      borderColor: "#000",
      // background: "green",
      color: "#fff",
      textAlign: "center",
      textDecoration: "none",
      borderStyle: "solid",
      background: "linear-gradient(120deg, darkmagenta, crimson, orange)",
      backgroundSize: "200% 100%",
      backgroundPosition: "100% 0",
      transition: "background-position .5s",
    },
  },
  divderCss: {
    border: "2px #F2F2F2 solid",
    borderColor: "green",
  },
  tagListContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2%",
    "@media(max-width:480px)": {
      marginLeft: "0",
      marginRight: "0",
    },
  },
};

export default style;
